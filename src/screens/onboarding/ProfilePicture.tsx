import { Button } from "@/components/Button";
import { Screen } from "@/components/Screen";
import { ScreenHeader } from "@/components/ScreenHeader";
import ScrollingView from "@/components/ScrollingView";
import { ThemedText } from "@/components/themed-text";
import { colors } from "@/constants/colors";
import { Icons } from "@/constants/icons";
import { triggerSelectionHaptics } from "@/functions/haptics";
import { selectImage } from "@/functions/imagePicker";
import type { OnboardingParamList } from "@/navigation/types";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";

type Props = {
  navigation: NativeStackNavigationProp<OnboardingParamList, "ProfilePicture">;
};

export default function ProfilePicture({ navigation }: Props) {
  const [imageUri, setImageUri] = useState<string | null>(null);

  const handlePickImage = async () => {
    triggerSelectionHaptics();
    const result = await selectImage();

    if (!result) return;

    setImageUri(result.uri);
  };

  return (
    <Screen>
      <ScreenHeader navigation={navigation} />

      <ScrollingView bounces={false}>
        <View style={{ flex: 1, padding: 20 }}>
          <View style={styles.content}>
            <ThemedText type="title" style={{ textAlign: "center" }}>
              Add a Profile Phote
            </ThemedText>

            <Pressable style={styles.imagePicker} onPress={handlePickImage}>
              {imageUri ? (
                <Image source={{ uri: imageUri }} style={styles.previewImage} />
              ) : (
                <View style={styles.placeholder}>
                  <Icons.GalleryAdd />
                  <ThemedText type="bodyMedium" color="gray_deep">
                    Add Image
                  </ThemedText>
                </View>
              )}
            </Pressable>
          </View>

          <Button
            label="Continue"
            onPress={() => navigation.getParent()?.navigate("Tabs")}
          />
        </View>
      </ScrollingView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    marginTop: 79,
    gap: 27,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.black,
    textAlign: "center",
    marginBottom: 32,
  },
  imagePicker: {
    width: 242,
    height: 211,
    backgroundColor: colors.gray_secondary,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  placeholder: {
    alignItems: "center",
    gap: 8,
    borderRadius: 10,
  },

  previewImage: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
  },
});
