import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BlurView } from "expo-blur";
import { ImageBackground, StyleSheet, View } from "react-native";

import { Button } from "@/components/Button";
import { Screen } from "@/components/Screen";
import { colors } from "@/constants/colors";
import { Icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { typography } from "@/constants/typography";
import type { OnboardingParamList } from "@/navigation/types";

type Props = {
  navigation: NativeStackNavigationProp<OnboardingParamList, "Welcome">;
};

export default function Welcome({ navigation }: Props) {
  return (
    <Screen removeSafeArea>
      <ImageBackground
        source={images.onboardingBg}
        style={styles.background}
        resizeMode="cover"
      >
        <BlurView intensity={10} style={styles.blurContainer} />
        <View style={styles.overlay} />

        <View style={styles.center}>
          {/* <Image source={images.icon} style={styles.icon} /> */}
          <Icons.Logo width={150} height={100} />
        </View>

        <View style={styles.footer}>
          <Button
            label="Get Started"
            style={styles.button}
            onPress={() => navigation.navigate("CreateAccount")}
          />
        </View>
      </ImageBackground>
    </Screen>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  blurContainer: {
    ...StyleSheet.absoluteFill,
  },
  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: "rgba(0, 0, 0, 0.45)",
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  icon: {
    width: 72,
    height: 72,
    borderRadius: 16,
  },
  title: {
    color: colors.white,
    fontSize: typography.fontSize["4xl"],
    letterSpacing: 0.5,
  },
  footer: {
    paddingHorizontal: 24,
    paddingBottom: 48,
  },
  button: {
    borderRadius: 30,
    paddingVertical: 16,
  },
});
