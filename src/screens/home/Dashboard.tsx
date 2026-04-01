import { Ionicons } from "@expo/vector-icons";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Image, Pressable, ScrollView, StyleSheet, View } from "react-native";

import { Screen } from "@/components/Screen";
import { ThemedText } from "@/components/themed-text";
import { colors } from "@/constants/colors";
import { triggerSelectionHaptics } from "@/functions/haptics";
import type { HomeStackParamList } from "@/navigation/types";

type Props = {
  navigation: NativeStackNavigationProp<HomeStackParamList, "Dashboard">;
};

const ACTION_CARDS = [
  {
    id: "fuel",
    label: "Buy Fuel",
    icon: "💳",
    color: "#EAF3FF",
    screen: "BuyFuel" as const,
  },
  {
    id: "mileage",
    label: "Track Mileage",
    icon: "🟡",
    color: "#FFFBEA",
    screen: null,
  },
  {
    id: "arrived",
    label: "I've Arrived",
    icon: "🔔",
    color: "#EAFFF3",
    screen: "Arrived" as const,
  },
  {
    id: "parts",
    label: "Parts Change",
    icon: "⚙️",
    color: "#FFF0F0",
    screen: null,
  },
  {
    id: "maintenance",
    label: "Maintenance",
    icon: "🧴",
    color: "#FFF6EA",
    screen: null,
  },
];

const RECENT_ACTIVITY = [
  {
    id: "1",
    title: "Buy Fuel",
    date: "Thursday, 3rd Mar 2026 12:16PM",
    bank: "2120152625 UBA....",
    amount: "₦45,000",
  },
];

export default function Dashboard({ navigation }: Props) {
  return (
    <Screen edges={["top", "left", "right"]} style={{ backgroundColor: "#F8F8F8" }}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
      {/* Header */}
      <View style={styles.header}>
        <View>
          <ThemedText type="small" style={styles.address}>
            32c, Cameron Road Ikoyi, Lago...
          </ThemedText>
          <View style={styles.carRow}>
            <ThemedText type="bodySemiBold" style={styles.carName}>
              Toyota Hiace
            </ThemedText>
            <View style={styles.plateBadge}>
              <ThemedText type="mini" style={styles.plateText}>
                KSF-903RT
              </ThemedText>
            </View>
          </View>
        </View>
        <Image
          source={{ uri: "https://i.pravatar.cc/80" }}
          style={styles.avatar}
        />
      </View>

      {/* Action Grid */}
      <View style={styles.grid}>
        {ACTION_CARDS.map((card) => (
          <Pressable
            key={card.id}
            style={[styles.card, card.id === "maintenance" && styles.cardFull]}
            onPress={() => {
              triggerSelectionHaptics();
              card.screen && navigation.navigate(card.screen);
            }}
            android_ripple={{ color: "rgba(0, 0, 0, 0.1)" }}
          >
            <ThemedText style={styles.cardIcon}>{card.icon}</ThemedText>
            <ThemedText type="regularMedium" style={styles.cardLabel}>
              {card.label}
            </ThemedText>
            <ThemedText type="small" style={styles.cardStart}>
              Start
            </ThemedText>
          </Pressable>
        ))}
      </View>

      {/* Recent Activity */}
      <View style={styles.sectionHeader}>
        <ThemedText type="bodyMedium" style={styles.sectionTitle}>
          Recent Activity
        </ThemedText>
        <Pressable onPress={() => triggerSelectionHaptics()}>
          <ThemedText type="small" style={styles.viewAll}>
            view all
          </ThemedText>
        </Pressable>
      </View>

      {RECENT_ACTIVITY.map((item) => (
        <View key={item.id} style={styles.activityItem}>
          <View style={styles.activityIcon}>
            <ThemedText style={{ fontSize: 18 }}>💳</ThemedText>
          </View>
          <View style={styles.activityInfo}>
            <ThemedText type="bodyMedium" style={styles.activityTitle}>
              {item.title}
            </ThemedText>
            <ThemedText type="small" style={styles.activityDate}>
              {item.date}
            </ThemedText>
            <View style={styles.activityRow}>
              <Ionicons
                name="card-outline"
                size={12}
                color={colors.track_blue}
              />
              <ThemedText type="small" style={styles.activityMeta}>
                {" "}
                {item.bank}
              </ThemedText>
            </View>
            <View style={styles.activityRow}>
              <Ionicons
                name="card-outline"
                size={12}
                color={colors.track_blue}
              />
              <ThemedText type="small" style={styles.activityMeta}>
                {" "}
                {item.amount}
              </ThemedText>
            </View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.photoRow}
            >
              {["Photo of Odometer", "Photo of Fuel Attendant"].map((label) => (
                <View key={label} style={styles.photoThumb}>
                  <View style={styles.photoPlaceholder} />
                  <ThemedText type="small" style={styles.photoLabel}>
                    {label}
                  </ThemedText>
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      ))}
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8F8F8" },
  content: { paddingBottom: 32 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 20,
    backgroundColor: "#fff",
  },
  address: { fontSize: 12, color: "#888", marginBottom: 4 },
  carRow: { flexDirection: "row", alignItems: "center", gap: 8 },
  carName: { fontSize: 20, fontWeight: "700", color: "#050505" },
  plateBadge: {
    backgroundColor: "#EAF3FF",
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  plateText: { fontSize: 11, color: colors.track_blue, fontWeight: "600" },
  avatar: { width: 44, height: 44, borderRadius: 22, backgroundColor: "#ddd" },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  card: {
    width: "47%",
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 16,
    gap: 6,
  },
  cardFull: { width: "100%" },
  cardIcon: { fontSize: 26 },
  cardLabel: { fontSize: 15, fontWeight: "600", color: "#050505" },
  cardStart: { fontSize: 12, color: "#888" },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 28,
    marginBottom: 12,
  },
  sectionTitle: { fontSize: 17, fontWeight: "700", color: "#050505" },
  viewAll: { fontSize: 13, color: "#888" },
  activityItem: {
    flexDirection: "row",
    gap: 12,
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  activityIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "#EAF3FF",
    alignItems: "center",
    justifyContent: "center",
  },
  activityInfo: { flex: 1 },
  activityTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#050505",
    marginBottom: 2,
  },
  activityDate: { fontSize: 12, color: "#888", marginBottom: 4 },
  activityRow: { flexDirection: "row", alignItems: "center", marginBottom: 2 },
  activityMeta: { fontSize: 12, color: "#444" },
  photoRow: { marginTop: 8 },
  photoThumb: { marginRight: 10, alignItems: "center" },
  photoPlaceholder: {
    width: 80,
    height: 60,
    backgroundColor: "#222",
    borderRadius: 8,
    marginBottom: 4,
  },
  photoLabel: { fontSize: 10, color: "#888" },
});
