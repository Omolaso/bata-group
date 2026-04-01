import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  type PressableProps,
  type StyleProp,
  type TextStyle,
  type ViewStyle,
} from "react-native";

import { ThemedText } from "@/components/themed-text";
import { colors } from "@/constants/colors";
import { triggerSelectionHaptics } from "@/functions/haptics";

type ButtonProps = PressableProps & {
  label: string;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
};

export function Button({
  label,
  style,
  labelStyle,
  onPress,
  disabled,
  ...rest
}: ButtonProps) {
  const handlePress = (e: GestureResponderEvent) => {
    triggerSelectionHaptics();
    onPress?.(e);
  };

  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        {
          opacity: pressed ? 0.8 : 1,
          backgroundColor: disabled ? colors.gray_inner : colors.track_blue,
        },
        style,
      ]}
      onPress={handlePress}
      disabled={disabled}
      {...rest}
    >
      <ThemedText type="bodySemiBold" style={[styles.label, labelStyle]}>
        {label}
      </ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.track_blue,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    height: 48,
  },
  label: {
    color: colors.white,
    fontSize: 16,
  },
});
