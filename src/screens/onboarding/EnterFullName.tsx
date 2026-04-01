import AvoidingView from "@/components/AvoidingView";
import { Button } from "@/components/Button";
import InputField from "@/components/InputField";
import { Screen } from "@/components/Screen";
import { ScreenHeader } from "@/components/ScreenHeader";
import ScrollingView from "@/components/ScrollingView";
import { ThemedText } from "@/components/themed-text";
import type { OnboardingParamList } from "@/navigation/types";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

type Props = {
  navigation: NativeStackNavigationProp<OnboardingParamList, "EnterFullName">;
};

export default function EnterFullName({ navigation }: Props) {
  const [fullName, setFullName] = useState<string>("");

  return (
    <Screen>
      <AvoidingView>
        <ScreenHeader navigation={navigation} />

        <ScrollingView bounces={false}>
          <View style={{ flex: 1, padding: 20 }}>
            <View style={styles.content}>
              <ThemedText type="title" style={{ textAlign: "center" }}>
                What&apos;s your fullname
              </ThemedText>

              <InputField
                placeholder="Fullname"
                autoCapitalize="words"
                value={fullName}
                onChangeText={setFullName}
              />
            </View>

            <Button
              label="Continue"
              onPress={() => navigation.navigate("ProfilePicture")}
            />
          </View>
        </ScrollingView>
      </AvoidingView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    marginTop: 79,
    gap: 27,
  },
});
