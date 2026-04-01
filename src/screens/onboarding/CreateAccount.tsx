import AvoidingView from "@/components/AvoidingView";
import { Button } from "@/components/Button";
import InputField from "@/components/InputField";
import { Screen } from "@/components/Screen";
import { ScreenHeader } from "@/components/ScreenHeader";
import ScrollingView from "@/components/ScrollingView";
import { ThemedText } from "@/components/themed-text";
import { colors } from "@/constants/colors";
import type { OnboardingParamList } from "@/navigation/types";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

type Props = {
  navigation: NativeStackNavigationProp<OnboardingParamList, "CreateAccount">;
};

export default function CreateAccount({ navigation }: Props) {
  const [phone, setPhone] = useState<string>("");

  return (
    <Screen>
      <AvoidingView>
        <ScreenHeader navigation={navigation} />

        <ScrollingView bounces={false}>
          <View style={{ flex: 1, padding: 20 }}>
            <View style={styles.content}>
              <ThemedText type="title" style={{ textAlign: "center" }}>
                Create Account
              </ThemedText>

              <InputField
                placeholder="Phone Number"
                value={phone}
                keyboardType="phone-pad"
                onChangeText={setPhone}
              />
            </View>

            <Button
              label="Continue"
              onPress={() => navigation.navigate("VerifyNumber")}
            />
          </View>
        </ScrollingView>
      </AvoidingView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
    marginTop: 79,
    gap: 27,
  },
});
