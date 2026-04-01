import React from "react";
import { ScrollView, ScrollViewProps } from "react-native";

interface Props extends ScrollViewProps {
  children: React.ReactNode;
}

const ScrollingView = ({ children, ...rest }: Props) => {
  return (
    <ScrollView
      bounces
      style={{ flexGrow: 1 }}
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
      {...rest}
    >
      {children}
    </ScrollView>
  );
};

export default ScrollingView;
