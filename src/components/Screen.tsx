import { colors } from "@/constants/colors";
import type { ViewStyle } from "react-native";
import { StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaView, type Edge } from "react-native-safe-area-context";

interface ScreenProps {
  children: React.ReactNode;
  style?: ViewStyle;
  edges?: Edge[];
  removeSafeArea?: boolean;
}

export function Screen({
  children,
  style,
  edges,
  removeSafeArea,
}: ScreenProps) {
  if (removeSafeArea) {
    return (
      <View style={[styles.container, style]}>
        <StatusBar barStyle="default" />

        {children}
      </View>
    );
  }

  return (
    <SafeAreaView style={[styles.container, style]} edges={edges}>
      <StatusBar barStyle="default" />

      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white },
});
