import React from "react";
import {
    KeyboardAvoidingView,
    KeyboardAvoidingViewProps,
    Platform,
} from "react-native";

interface Props extends KeyboardAvoidingViewProps {
  children: React.ReactNode;
}

const AvoidingView = ({ children, ...rest }: Props) => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      {...rest}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {children}
    </KeyboardAvoidingView>
  );
};

export default AvoidingView;
