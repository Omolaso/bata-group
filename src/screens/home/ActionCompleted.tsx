import { Ionicons } from "@expo/vector-icons";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StyleSheet, View } from "react-native";

import { Button } from "@/components/Button";
import { Screen } from "@/components/Screen";
import { ThemedText } from "@/components/themed-text";
import type { HomeStackParamList } from "@/navigation/types";

type Props = {
  navigation: NativeStackNavigationProp<HomeStackParamList, "ActionCompleted">;
};

export default function ActionCompleted({ navigation }: Props) {
  return (
    <Screen>
      <View style={styles.center}>
        <View style={styles.iconCircle}>
          <Ionicons name="checkmark" size={36} color="#fff" />
        </View>
        <ThemedText type="title" style={styles.title}>
          Action Completed!
        </ThemedText>
        <ThemedText type="body" style={styles.subtitle}>
          You have successfully completed{"\n"}the &rdquo;Buy Fuel&ldquo; action
        </ThemedText>
      </View>

      <View style={styles.footer}>
        <Button
          label="Okay Great"
          style={styles.button}
          onPress={() => navigation.navigate("Dashboard")}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 40,
  },
  iconCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: "#22C55E",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#050505",
    marginBottom: 12,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
    lineHeight: 22,
  },
  footer: { paddingHorizontal: 24, paddingBottom: 40 },
  button: { borderRadius: 30, paddingVertical: 16 },
});
