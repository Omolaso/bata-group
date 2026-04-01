import { Ionicons } from "@expo/vector-icons";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

import { Button } from "@/components/Button";
import { Screen } from "@/components/Screen";
import { ScreenHeader } from "@/components/ScreenHeader";
import { ThemedText } from "@/components/themed-text";
import { triggerSelectionHaptics } from "@/functions/haptics";
import type { HomeStackParamList } from "@/navigation/types";

type Props = {
  navigation: NativeStackNavigationProp<HomeStackParamList, "Arrived">;
};

export default function Arrived({ navigation }: Props) {
  const [pressed, setPressed] = useState(false);
  const [location, setLocation] = useState("");

  const locationFilled = !!location;

  return (
    <Screen>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <ScreenHeader navigation={navigation} />
        <ThemedText type="title" style={styles.title}>
          I&apos;ve Arrived
        </ThemedText>
        <ThemedText type="body" style={styles.subtitle}>
          Complete the steps to successfully &quot;Ive Arrived&quot;
        </ThemedText>

        {/* Step 1 */}
        <View style={styles.stepRow}>
          <View style={[styles.stepDot, pressed && styles.stepDotDone]}>
            {pressed ? (
              <Ionicons name="checkmark" size={14} color="#fff" />
            ) : (
              <View style={styles.stepDotInner} />
            )}
          </View>
          <View style={styles.stepContent}>
            <ThemedText type="bodyMedium" style={styles.stepLabel}>
              I&apos;ve Arrived
            </ThemedText>
            <Pressable
              style={[styles.pressBtn, pressed && styles.pressBtnDone]}
              onPress={() => {
                triggerSelectionHaptics();
                setPressed(true);
              }}
            >
              <ThemedText type="bodyMedium" style={styles.pressBtnText}>
                {pressed ? "Pressed ✓" : "press"}
              </ThemedText>
            </Pressable>
          </View>
        </View>

        {/* Step 2 */}
        <View style={styles.stepRow}>
          <View style={[styles.stepDot, locationFilled && styles.stepDotDone]}>
            {locationFilled ? (
              <Ionicons name="checkmark" size={14} color="#fff" />
            ) : (
              <View style={styles.stepDotInner} />
            )}
          </View>
          <View style={styles.stepContent}>
            <ThemedText type="bodyMedium" style={styles.stepLabel}>
              Enter Location
            </ThemedText>
            <TextInput
              style={styles.input}
              placeholder="e.g Tantalizer at Lekki"
              placeholderTextColor="#B0B0B0"
              value={location}
              onChangeText={setLocation}
            />
          </View>
        </View>

        <View style={styles.footer}>
          <Button
            label="Complete Action"
            style={styles.button}
            onPress={() => navigation.navigate("ActionCompleted")}
          />
        </View>
      </ScrollView>
      </KeyboardAvoidingView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: { paddingBottom: 40 },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#050505",
    paddingHorizontal: 20,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 13,
    color: "#999",
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  stepRow: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginBottom: 20,
    gap: 14,
  },
  stepDot: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: "#E0E0E0",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 2,
  },
  stepDotDone: { backgroundColor: "#22C55E" },
  stepDotInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#bbb",
  },
  stepContent: { flex: 1 },
  stepLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#050505",
    marginBottom: 10,
  },
  pressBtn: {
    backgroundColor: "#111",
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: "center",
  },
  pressBtnDone: { backgroundColor: "#22C55E" },
  pressBtnText: { color: "#fff", fontSize: 14, fontWeight: "600" },
  input: {
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 14,
    fontSize: 14,
    color: "#050505",
  },
  footer: { paddingHorizontal: 20, marginTop: 16 },
  button: { borderRadius: 30, paddingVertical: 16 },
});
