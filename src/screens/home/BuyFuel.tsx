import { Ionicons } from "@expo/vector-icons";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import {
  Image,
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
  navigation: NativeStackNavigationProp<HomeStackParamList, "BuyFuel">;
};

type PhotoKey = "odometer" | "attendant" | "gauge";

const STEPS: { key: PhotoKey; label: string }[] = [
  { key: "odometer", label: "Take a Picture of the Odometer" },
  { key: "attendant", label: "Take a Picture of the Fuel Attendant" },
  { key: "gauge", label: "Take a Picture of the Fuel Gauge" },
];

export default function BuyFuel({ navigation }: Props) {
  const [photos, setPhotos] = useState<Record<PhotoKey, string | null>>({
    odometer: null,
    attendant: null,
    gauge: null,
  });

  const [bank, setBank] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [amount, setAmount] = useState("");

  const bankFilled = !!bank && !!accountNumber && !!amount;

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
          Buy Fuel
        </ThemedText>
        <ThemedText type="body" style={styles.subtitle}>
          Complete the steps to successfully buy fuel
        </ThemedText>

        {/* Photo Steps */}
        {STEPS.map((step, index) => {
          const photo = photos[step.key];
          const done = !!photo;
          return (
            <View key={step.key} style={styles.stepRow}>
              <View style={[styles.stepDot, done && styles.stepDotDone]}>
                {done ? (
                  <Ionicons name="checkmark" size={14} color="#fff" />
                ) : (
                  <View style={styles.stepDotInner} />
                )}
              </View>
              <View style={styles.stepContent}>
                <ThemedText type="bodyMedium" style={styles.stepLabel}>
                  {step.label}
                </ThemedText>
                <View style={[styles.photoBox, done && styles.photoBoxDone]}>
                  {done ? (
                    <>
                      <Image
                        source={{ uri: photo! }}
                        style={styles.photoPreview}
                      />
                      <Pressable
                        style={styles.retakeBtn}
                        onPress={() => {
                          triggerSelectionHaptics();
                          setPhotos((p) => ({ ...p, [step.key]: null }));
                        }}
                      >
                        <ThemedText type="small" style={styles.retakeText}>
                          Retake
                        </ThemedText>
                      </Pressable>
                    </>
                  ) : (
                    <Pressable
                      style={styles.takePhotoBtn}
                      onPress={() => {
                        triggerSelectionHaptics();
                        setPhotos((p) => ({
                          ...p,
                          [step.key]: "https://picsum.photos/400/200",
                        }));
                      }}
                    >
                      <ThemedText
                        type="bodySemiBold"
                        style={styles.takePhotoText}
                      >
                        Take Photo
                      </ThemedText>
                    </Pressable>
                  )}
                </View>
              </View>
            </View>
          );
        })}

        {/* Bank Details Step */}
        <View style={styles.stepRow}>
          <View style={[styles.stepDot, bankFilled && styles.stepDotDone]}>
            {bankFilled ? (
              <Ionicons name="checkmark" size={14} color="#fff" />
            ) : (
              <View style={styles.stepDotInner} />
            )}
          </View>
          <View style={styles.stepContent}>
            <ThemedText type="bodyMedium" style={styles.stepLabel}>
              Enter Bank Details
            </ThemedText>
            <Pressable
              style={styles.selectBank}
              onPress={() => {
                triggerSelectionHaptics();
                setBank("United Bank of Africa");
              }}
            >
              <ThemedText
                type="body"
                style={[styles.selectBankText, bank && styles.selectBankFilled]}
              >
                {bank || "Select Bank"}
              </ThemedText>
              <Ionicons name="chevron-down" size={16} color="#999" />
            </Pressable>
            <TextInput
              style={styles.input}
              placeholder="Account Number"
              placeholderTextColor="#B0B0B0"
              keyboardType="number-pad"
              value={accountNumber}
              onChangeText={setAccountNumber}
            />
            {accountNumber.length > 5 && (
              <ThemedText type="body" style={styles.nameResolver}>
                Chamberlain Adaeze Okezie
              </ThemedText>
            )}
            <TextInput
              style={styles.input}
              placeholder="Amount"
              placeholderTextColor="#B0B0B0"
              keyboardType="number-pad"
              value={amount}
              onChangeText={setAmount}
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
  photoBox: {
    borderWidth: 1.5,
    borderColor: "#ddd",
    borderStyle: "dashed",
    borderRadius: 10,
    minHeight: 110,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  photoBoxDone: { borderStyle: "solid", borderColor: "#ccc" },
  photoPreview: { width: "100%", height: 140 },
  retakeBtn: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "rgba(0,0,0,0.55)",
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  retakeText: { color: "#fff", fontSize: 12, fontWeight: "600" },
  takePhotoBtn: {
    backgroundColor: "#111",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  takePhotoText: { color: "#fff", fontSize: 13, fontWeight: "600" },
  selectBank: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 14,
    marginBottom: 10,
  },
  selectBankText: { fontSize: 14, color: "#B0B0B0" },
  selectBankFilled: { color: "#050505" },
  input: {
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 14,
    fontSize: 14,
    color: "#050505",
    marginBottom: 10,
  },
  nameResolver: {
    fontSize: 12,
    color: "#888",
    marginBottom: 8,
    paddingHorizontal: 4,
  },
  footer: { paddingHorizontal: 20, marginTop: 8 },
  button: { borderRadius: 30, paddingVertical: 16 },
});
