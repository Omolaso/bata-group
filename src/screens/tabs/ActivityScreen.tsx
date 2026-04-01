import { StyleSheet } from "react-native";

import { Screen } from "@/components/Screen";
import { ThemedText } from "@/components/themed-text";

export default function ActivityScreen() {
  return (
    <Screen edges={["top", "left", "right"]} style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        ACTIVITY SCREEN
      </ThemedText>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: { fontSize: 18, fontWeight: "700", color: "#050505" },
});
