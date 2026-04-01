import { Ionicons } from "@expo/vector-icons";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, View } from "react-native";

import { Screen } from "@/components/Screen";
import { ThemedText } from "@/components/themed-text";
import { colors } from "@/constants/colors";
import { triggerSelectionHaptics } from "@/functions/haptics";
import type { HomeStackParamList } from "@/navigation/types";

type Props = {
  navigation: NativeStackNavigationProp<HomeStackParamList, "Analytics">;
};

const FILTERS = ["Fuel", "Mileage", "Notification", "Maintenance"];

const STAT_CARDS = [
  { label: "Fuel Spend", value: "₦67,900" },
  { label: "Car Part Spend", value: "₦367,900" },
  { label: "Mainte...", value: "₦17,9..." },
];

const ACTIVITY = [
  {
    id: "1",
    title: "Buy Fuel",
    date: "Thursday, 3rd Mar 2026 12:16PM",
    bank: "2120152625 UBA....",
    amount: "₦45,000",
  },
  {
    id: "2",
    title: "Buy Fuel",
    date: "Thursday, 3rd Mar 2026 12:16PM",
    bank: "2120152625 UBA....",
    amount: "₦45,000",
  },
];

// Simple SVG-free line chart placeholder
function LineChartPlaceholder() {
  return (
    <View style={chart.container}>
      <View style={chart.yAxisLabels}>
        {["₦600k", "₦300k", "₦0"].map((l) => (
          <ThemedText key={l} type="small" style={chart.yLabel}>
            {l}
          </ThemedText>
        ))}
      </View>
      <View style={chart.chartArea}>
        <View style={chart.tooltip}>
          <ThemedText type="small" style={chart.tooltipDate}>
            Mar 6
          </ThemedText>
          <ThemedText type="small" style={chart.tooltipValue}>
            ₦34,000
          </ThemedText>
        </View>
        {/* Simulated curved line */}
        <View style={chart.lineTrack}>
          <View style={chart.line} />
        </View>
        <View style={chart.xLabels}>
          {["Mar 1", "Mar 10", "Mar 19", "Mar 24", "Mar 31"].map((l) => (
            <ThemedText key={l} type="small" style={chart.xLabel}>
              {l}
            </ThemedText>
          ))}
        </View>
      </View>
    </View>
  );
}

export default function Analytics({ navigation }: Props) {
  const [activeFilter, setActiveFilter] = useState("Fuel");

  return (
    <Screen>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
      <View style={styles.headerRow}>
        <Pressable
          style={styles.backBtn}
          onPress={() => {
            triggerSelectionHaptics();
            navigation.goBack();
          }}
        >
          <ThemedText style={styles.backChevron}>‹</ThemedText>
        </Pressable>
        <ThemedText type="bodyMedium" style={styles.headerTitle}>
          Analytics
        </ThemedText>
        <View style={{ width: 36 }} />
      </View>

      {/* Dropdowns */}
      <View style={styles.dropdownRow}>
        <Pressable
          style={styles.dropdown}
          onPress={() => triggerSelectionHaptics()}
        >
          <ThemedText type="body" style={styles.dropdownText}>
            Toyota Hiace
          </ThemedText>
          <Ionicons name="chevron-down" size={14} color="#050505" />
        </Pressable>
        <Pressable
          style={styles.dropdown}
          onPress={() => triggerSelectionHaptics()}
        >
          <ThemedText type="body" style={styles.dropdownText}>
            30 days
          </ThemedText>
          <Ionicons name="chevron-down" size={14} color="#050505" />
        </Pressable>
      </View>

      {/* Stat Cards */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.statRow}
      >
        {STAT_CARDS.map((s) => (
          <View key={s.label} style={styles.statCard}>
            <ThemedText type="small" style={styles.statLabel}>
              {s.label}
            </ThemedText>
            <ThemedText type="bodyMedium" style={styles.statValue}>
              {s.value}
            </ThemedText>
          </View>
        ))}
      </ScrollView>

      {/* Chart */}
      <LineChartPlaceholder />

      {/* Filters */}
      <ThemedText type="bodyMedium" style={styles.activityTitle}>
        Activity
      </ThemedText>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.filterRow}
      >
        {FILTERS.map((f) => (
          <Pressable
            key={f}
            style={[
              styles.filterChip,
              activeFilter === f && styles.filterChipActive,
            ]}
            onPress={() => {
              triggerSelectionHaptics();
              setActiveFilter(f);
            }}
          >
            <ThemedText
              style={[
                styles.filterText,
                activeFilter === f && styles.filterTextActive,
              ]}
            >
              {f}
            </ThemedText>
          </Pressable>
        ))}
      </ScrollView>

      {/* Activity List */}
      {ACTIVITY.map((item) => (
        <View key={item.id} style={styles.activityItem}>
          <View style={styles.activityIcon}>
            <ThemedText style={{ fontSize: 18 }}>💳</ThemedText>
          </View>
          <View style={styles.activityInfo}>
            <ThemedText type="bodyMedium" style={styles.activityItemTitle}>
              {item.title}
            </ThemedText>
            <ThemedText type="small" style={styles.activityDate}>
              {item.date}
            </ThemedText>
            <View style={styles.metaRow}>
              <Ionicons
                name="card-outline"
                size={12}
                color={colors.track_blue}
              />
              <ThemedText type="small" style={styles.metaText}>
                {" "}
                {item.bank}
              </ThemedText>
            </View>
            <View style={styles.metaRow}>
              <Ionicons
                name="card-outline"
                size={12}
                color={colors.track_blue}
              />
              <ThemedText type="small" style={styles.metaText}>
                {" "}
                {item.amount}
              </ThemedText>
            </View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{ marginTop: 8 }}
            >
              {["Photo of Odometer", "Photo of Fuel Attendant"].map((label) => (
                <View key={label} style={styles.photoThumb}>
                  <View style={styles.photoBox} />
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

const chart = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginBottom: 24,
    height: 140,
  },
  yAxisLabels: {
    justifyContent: "space-between",
    paddingVertical: 4,
    marginRight: 6,
  },
  yLabel: { fontSize: 10, color: "#aaa" },
  chartArea: { flex: 1 },
  tooltip: {
    position: "absolute",
    top: 0,
    left: "20%",
    backgroundColor: "#fff",
    borderRadius: 6,
    padding: 4,
    zIndex: 2,
    borderWidth: 1,
    borderColor: "#eee",
  },
  tooltipDate: { fontSize: 9, color: "#888" },
  tooltipValue: { fontSize: 11, fontWeight: "700", color: "#050505" },
  lineTrack: {
    position: "absolute",
    bottom: 24,
    left: 0,
    right: 0,
    height: 80,
    justifyContent: "center",
  },
  line: {
    height: 2,
    backgroundColor: colors.track_blue,
    borderRadius: 1,
    marginHorizontal: 4,
  },
  xLabels: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  xLabel: { fontSize: 9, color: "#aaa" },
});

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  content: { paddingBottom: 40 },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 16,
  },
  backBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#F2F2F2",
    alignItems: "center",
    justifyContent: "center",
  },
  backChevron: { fontSize: 22, color: "#050505", lineHeight: 26 },
  headerTitle: { fontSize: 17, fontWeight: "700", color: "#050505" },
  dropdownRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  dropdown: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  dropdownText: { fontSize: 13, fontWeight: "600", color: "#050505" },
  statRow: { paddingHorizontal: 20, gap: 10, marginBottom: 20 },
  statCard: {
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
    padding: 14,
    minWidth: 110,
  },
  statLabel: { fontSize: 11, color: "#888", marginBottom: 8 },
  statValue: { fontSize: 17, fontWeight: "700", color: "#050505" },
  activityTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#050505",
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  filterRow: { paddingHorizontal: 20, gap: 8, marginBottom: 16 },
  filterChip: {
    backgroundColor: "#F2F2F2",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  filterChipActive: { backgroundColor: "#050505" },
  filterText: { fontSize: 13, color: "#888", fontWeight: "500" },
  filterTextActive: { color: "#fff" },
  activityItem: {
    flexDirection: "row",
    gap: 12,
    paddingHorizontal: 20,
    marginBottom: 20,
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
  activityItemTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#050505",
    marginBottom: 2,
  },
  activityDate: { fontSize: 12, color: "#888", marginBottom: 4 },
  metaRow: { flexDirection: "row", alignItems: "center", marginBottom: 2 },
  metaText: { fontSize: 12, color: "#444" },
  photoThumb: { marginRight: 10, alignItems: "center" },
  photoBox: {
    width: 80,
    height: 60,
    backgroundColor: "#222",
    borderRadius: 8,
    marginBottom: 4,
  },
  photoLabel: { fontSize: 10, color: "#888" },
});
