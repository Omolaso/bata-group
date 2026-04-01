import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

import AvoidingView from "@/components/AvoidingView";
import { Button } from "@/components/Button";
import { Screen } from "@/components/Screen";
import { ScreenHeader } from "@/components/ScreenHeader";
import ScrollingView from "@/components/ScrollingView";
import { ThemedText } from "@/components/themed-text";
import { colors } from "@/constants/colors";
import { textStyles, typography } from "@/constants/typography";
import { triggerSelectionHaptics } from "@/functions/haptics";
import type { OnboardingParamList } from "@/navigation/types";

type Props = {
  navigation: NativeStackNavigationProp<OnboardingParamList, "VerifyNumber">;
};

const CELL_COUNT = 6;

export default function VerifyNumber({ navigation }: Props) {
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <Screen>
      <AvoidingView>
        <ScreenHeader navigation={navigation} />

        <ScrollingView bounces={false}>
          <View style={{ flex: 1, padding: 20 }}>
            <View style={styles.content}>
              <ThemedText type="title" style={{ textAlign: "center" }}>
                Verify your number
              </ThemedText>

              <View style={{ gap: 12 }}>
                <CodeField
                  ref={ref}
                  {...props}
                  value={value}
                  onChangeText={setValue}
                  cellCount={CELL_COUNT}
                  rootStyle={styles.codeFieldRoot}
                  keyboardType="number-pad"
                  textContentType="oneTimeCode"
                  renderCell={({ index, symbol, isFocused }) => (
                    <View
                      key={index}
                      style={[styles.cell, isFocused && styles.cellFocused]}
                      onLayout={getCellOnLayoutHandler(index)}
                    >
                      <ThemedText style={styles.cellText}>
                        {symbol ? symbol : isFocused ? <Cursor /> : "*"}
                      </ThemedText>
                    </View>
                  )}
                />

                <View style={styles.resendRow}>
                  <ThemedText type="regularMedium" color="gray_deep">
                    Didn&apos;t receive code?{" "}
                  </ThemedText>
                  <Pressable onPress={() => triggerSelectionHaptics()}>
                    <ThemedText type="regularMedium" color="track_blue">
                      Resend
                    </ThemedText>
                  </Pressable>
                </View>
              </View>
            </View>

            <View style={{ gap: 30 }}>
              <ThemedText
                type="regularMedium"
                color="gray_deep"
                style={{ textAlign: "center" }}
              >
                We sent a verification code to{"\n"}+234 812 678 2345
              </ThemedText>

              <Button
                label="Continue"
                disabled={value.length !== CELL_COUNT}
                onPress={() => navigation.navigate("CreatePassword")}
              />
            </View>
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
    gap: 20,
  },
  codeFieldRoot: {
    borderWidth: 1,
    borderColor: colors.gray_white,
    borderRadius: 10,
    padding: 4,
    gap: 8,
  },
  cell: {
    flex: 1,
    height: 51,
    backgroundColor: colors.gray_secondary,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: colors.gray_secondary,
  },
  cellFocused: {
    borderColor: colors.track_blue,
    backgroundColor: colors.white,
  },
  cellText: {
    ...textStyles.regularMedium,
    fontSize: typography.fontSize.xxl,
    color: colors.gray_deep,
  },
  resendRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
});
