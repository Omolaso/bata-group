import { Ionicons } from "@expo/vector-icons";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Colors } from "@/constants/colors";
import type { HomeStackParamList } from "@/src/navigation/types";

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
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.address}>32c, Cameron Road Ikoyi, Lago...</Text>
          <View style={styles.carRow}>
            <Text style={styles.carName}>Toyota Hiace</Text>
            <View style={styles.plateBadge}>
              <Text style={styles.plateText}>KSF-903RT</Text>
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
          <TouchableOpacity
            key={card.id}
            style={[styles.card, card.id === "maintenance" && styles.cardFull]}
            onPress={() => card.screen && navigation.navigate(card.screen)}
            activeOpacity={0.8}
          >
            <Text style={styles.cardIcon}>{card.icon}</Text>
            <Text style={styles.cardLabel}>{card.label}</Text>
            <Text style={styles.cardStart}>Start</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Recent Activity */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Recent Activity</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>view all</Text>
        </TouchableOpacity>
      </View>

      {RECENT_ACTIVITY.map((item) => (
        <View key={item.id} style={styles.activityItem}>
          <View style={styles.activityIcon}>
            <Text style={{ fontSize: 18 }}>💳</Text>
          </View>
          <View style={styles.activityInfo}>
            <Text style={styles.activityTitle}>{item.title}</Text>
            <Text style={styles.activityDate}>{item.date}</Text>
            <View style={styles.activityRow}>
              <Ionicons
                name="card-outline"
                size={12}
                color={Colors.track_blue}
              />
              <Text style={styles.activityMeta}> {item.bank}</Text>
            </View>
            <View style={styles.activityRow}>
              <Ionicons
                name="card-outline"
                size={12}
                color={Colors.track_blue}
              />
              <Text style={styles.activityMeta}> {item.amount}</Text>
            </View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.photoRow}
            >
              {["Photo of Odometer", "Photo of Fuel Attendant"].map((label) => (
                <View key={label} style={styles.photoThumb}>
                  <View style={styles.photoPlaceholder} />
                  <Text style={styles.photoLabel}>{label}</Text>
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      ))}
    </ScrollView>
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
    paddingTop: 60,
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
  plateText: { fontSize: 11, color: Colors.track_blue, fontWeight: "600" },
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
