import { colors } from "@/constants/colors";
import { textStyles } from "@/constants/typography";
import React from "react";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";

interface InputFieldProps extends TextInputProps {
  placeholder: string;
}

const InputField = ({
  placeholder,
  secureTextEntry,
  keyboardType,
}: InputFieldProps) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        secureTextEntry={secureTextEntry}
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={colors.gray_deep}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    borderColor: colors.gray_white,
    borderRadius: 10,
    padding: 4,
  },
  input: {
    backgroundColor: colors.gray_secondary,
    borderRadius: 10,
    padding: 16,
    ...textStyles.bodyMedium,
    color: colors.black,
  },
});
