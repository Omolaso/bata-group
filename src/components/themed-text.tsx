import { colors } from "@/constants/colors";
import { CustomTextStyle, textStyles } from "@/constants/typography";
import { Text, type TextProps } from "react-native";

export type ThemedTextProps = TextProps & {
  type?: CustomTextStyle;
  color?: keyof typeof colors;
};

export function ThemedText({
  style,
  color = "black",
  type = "regularMedium",
  ...rest
}: ThemedTextProps) {
  return (
    <Text
      style={[{ ...textStyles[type], color: colors[color] }, style]}
      {...rest}
    />
  );
}
