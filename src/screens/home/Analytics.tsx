import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

import { Colors } from '@/constants/colors';
import type { HomeStackParamList } from '@/src/navigation/types';

type Props = {
  navigation: NativeStackNavigationProp<HomeStackParamList, 'Analytics'>;
};

const FILTERS = ['Fuel', 'Mileage', 'Notification', 'Maintenance'];

const STAT_CARDS = [
  { label: 'Fuel Spend', value: '₦67,900' },
  { label: 'Car Part Spend', value: '₦367,900' },
  { label: 'Mainte...', value: '₦17,9...' },
];

const ACTIVITY = [
  { id: '1', title: 'Buy Fuel', date: 'Thursday, 3rd Mar 2026 12:16PM', bank: '2120152625 UBA....', amount: '₦45,000' },
  { id: '2', title: 'Buy Fuel', date: 'Thursday, 3rd Mar 2026 12:16PM', bank: '2120152625 UBA....', amount: '₦45,000' },
];

// Simple SVG-free line chart placeholder
function LineChartPlaceholder() {
  return (
    <View style={chart.container}>
      <View style={chart.yAxisLabels}>
        {['₦600k', '₦300k', '₦0'].map((l) => (
          <Text key={l} style={chart.yLabel}>{l}</Text>
        ))}
      </View>
      <View style={chart.chartArea}>
        <View style={chart.tooltip}>
          <Text style={chart.tooltipDate}>Mar 6</Text>
          <Text style={chart.tooltipValue}>₦34,000</Text>
        </View>
        {/* Simulated curved line */}
        <View style={chart.lineTrack}>
          <View style={chart.line} />
        </View>
        <View style={chart.xLabels}>
          {['Mar 1', 'Mar 10', 'Mar 19', 'Mar 24', 'Mar 31'].map((l) => (
            <Text key={l} style={chart.xLabel}>{l}</Text>
          ))}
        </View>
      </View>
    </View>
  );
}

export default function Analytics({ navigation }: Props) {
  const [activeFilter, setActiveFilter] = useState('Fuel');

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <View style={styles.headerRow}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.backChevron}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Analytics</Text>
        <View style={{ width: 36 }} />
      </View>

      {/* Dropdowns */}
      <View style={styles.dropdownRow}>
        <TouchableOpacity style={styles.dropdown}>
          <Text style={styles.dropdownText}>Toyota Hiace</Text>
          <Ionicons name="chevron-down" size={14} color="#050505" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.dropdown}>
          <Text style={styles.dropdownText}>30 days</Text>
          <Ionicons name="chevron-down" size={14} color="#050505" />
        </TouchableOpacity>
      </View>

      {/* Stat Cards */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.statRow}>
        {STAT_CARDS.map((s) => (
          <View key={s.label} style={styles.statCard}>
            <Text style={styles.statLabel}>{s.label}</Text>
            <Text style={styles.statValue}>{s.value}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Chart */}
      <LineChartPlaceholder />

      {/* Filters */}
      <Text style={styles.activityTitle}>Activity</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterRow}>
        {FILTERS.map((f) => (
          <TouchableOpacity
            key={f}
            style={[styles.filterChip, activeFilter === f && styles.filterChipActive]}
            onPress={() => setActiveFilter(f)}>
            <Text style={[styles.filterText, activeFilter === f && styles.filterTextActive]}>{f}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Activity List */}
      {ACTIVITY.map((item) => (
        <View key={item.id} style={styles.activityItem}>
          <View style={styles.activityIcon}>
            <Text style={{ fontSize: 18 }}>💳</Text>
          </View>
          <View style={styles.activityInfo}>
            <Text style={styles.activityItemTitle}>{item.title}</Text>
            <Text style={styles.activityDate}>{item.date}</Text>
            <View style={styles.metaRow}>
              <Ionicons name="card-outline" size={12} color={Colors.track_blue} />
              <Text style={styles.metaText}> {item.bank}</Text>
            </View>
            <View style={styles.metaRow}>
              <Ionicons name="card-outline" size={12} color={Colors.track_blue} />
              <Text style={styles.metaText}> {item.amount}</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 8 }}>
              {['Photo of Odometer', 'Photo of Fuel Attendant'].map((label) => (
                <View key={label} style={styles.photoThumb}>
                  <View style={styles.photoBox} />
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

const chart = StyleSheet.create({
  container: { flexDirection: 'row', marginHorizontal: 20, marginBottom: 24, height: 140 },
  yAxisLabels: { justifyContent: 'space-between', paddingVertical: 4, marginRight: 6 },
  yLabel: { fontSize: 10, color: '#aaa' },
  chartArea: { flex: 1 },
  tooltip: {
    position: 'absolute', top: 0, left: '20%',
    backgroundColor: '#fff',
    borderRadius: 6, padding: 4, zIndex: 2,
    borderWidth: 1, borderColor: '#eee',
  },
  tooltipDate: { fontSize: 9, color: '#888' },
  tooltipValue: { fontSize: 11, fontWeight: '700', color: '#050505' },
  lineTrack: { position: 'absolute', bottom: 24, left: 0, right: 0, height: 80, justifyContent: 'center' },
  line: {
    height: 2, backgroundColor: Colors.track_blue,
    borderRadius: 1, marginHorizontal: 4,
  },
  xLabels: { position: 'absolute', bottom: 0, left: 0, right: 0, flexDirection: 'row', justifyContent: 'space-between' },
  xLabel: { fontSize: 9, color: '#aaa' },
});

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { paddingBottom: 40 },
  headerRow: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: 20, paddingTop: 56, paddingBottom: 16,
  },
  backBtn: {
    width: 36, height: 36, borderRadius: 18,
    backgroundColor: '#F2F2F2', alignItems: 'center', justifyContent: 'center',
  },
  backChevron: { fontSize: 22, color: '#050505', lineHeight: 26 },
  headerTitle: { fontSize: 17, fontWeight: '700', color: '#050505' },
  dropdownRow: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginBottom: 16 },
  dropdown: {
    flexDirection: 'row', alignItems: 'center', gap: 6,
    backgroundColor: '#F5F5F5', borderRadius: 8,
    paddingHorizontal: 12, paddingVertical: 8,
  },
  dropdownText: { fontSize: 13, fontWeight: '600', color: '#050505' },
  statRow: { paddingHorizontal: 20, gap: 10, marginBottom: 20 },
  statCard: {
    backgroundColor: '#F5F5F5', borderRadius: 12,
    padding: 14, minWidth: 110,
  },
  statLabel: { fontSize: 11, color: '#888', marginBottom: 8 },
  statValue: { fontSize: 17, fontWeight: '700', color: '#050505' },
  activityTitle: { fontSize: 17, fontWeight: '700', color: '#050505', paddingHorizontal: 20, marginBottom: 12 },
  filterRow: { paddingHorizontal: 20, gap: 8, marginBottom: 16 },
  filterChip: {
    backgroundColor: '#F2F2F2', borderRadius: 20,
    paddingHorizontal: 16, paddingVertical: 8,
  },
  filterChipActive: { backgroundColor: '#050505' },
  filterText: { fontSize: 13, color: '#888', fontWeight: '500' },
  filterTextActive: { color: '#fff' },
  activityItem: { flexDirection: 'row', gap: 12, paddingHorizontal: 20, marginBottom: 20 },
  activityIcon: {
    width: 40, height: 40, borderRadius: 12,
    backgroundColor: '#EAF3FF', alignItems: 'center', justifyContent: 'center',
  },
  activityInfo: { flex: 1 },
  activityItemTitle: { fontSize: 15, fontWeight: '600', color: '#050505', marginBottom: 2 },
  activityDate: { fontSize: 12, color: '#888', marginBottom: 4 },
  metaRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 2 },
  metaText: { fontSize: 12, color: '#444' },
  photoThumb: { marginRight: 10, alignItems: 'center' },
  photoBox: { width: 80, height: 60, backgroundColor: '#222', borderRadius: 8, marginBottom: 4 },
  photoLabel: { fontSize: 10, color: '#888' },
});
