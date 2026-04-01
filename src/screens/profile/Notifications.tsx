import {
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';

import { Button } from '@/components/Button';
import { Colors } from '@/constants/colors';
import type { ProfileStackParamList } from '@/src/navigation/types';

type Props = {
  navigation: NativeStackNavigationProp<ProfileStackParamList, 'Notifications'>;
};

export default function Notifications({ navigation }: Props) {
  const [actionReminders, setActionReminders] = useState(true);
  const [transactionNotifs, setTransactionNotifs] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.backChevron}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
        <View style={{ width: 36 }} />
      </View>

      <View style={styles.content}>
        <View style={styles.row}>
          <View style={styles.rowText}>
            <Text style={styles.rowTitle}>Action Reminders</Text>
            <Text style={styles.rowSubtitle}>Get notified when you have a pending action</Text>
          </View>
          <Switch
            value={actionReminders}
            onValueChange={setActionReminders}
            trackColor={{ false: '#E0E0E0', true: '#22C55E' }}
            thumbColor="#fff"
          />
        </View>

        <View style={styles.row}>
          <View style={styles.rowText}>
            <Text style={styles.rowTitle}>Transaction Notifications</Text>
            <Text style={styles.rowSubtitle}>Be the first to know when money has been{'\n'}sent</Text>
          </View>
          <Switch
            value={transactionNotifs}
            onValueChange={setTransactionNotifs}
            trackColor={{ false: '#E0E0E0', true: '#22C55E' }}
            thumbColor="#fff"
          />
        </View>
      </View>

      <View style={styles.footer}>
        <Button label="Save Changes" style={styles.button} onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
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
  content: { flex: 1, paddingHorizontal: 24, paddingTop: 12 },
  row: {
    flexDirection: 'row', alignItems: 'center',
    paddingVertical: 16, borderBottomWidth: 1, borderBottomColor: '#F2F2F2',
  },
  rowText: { flex: 1, marginRight: 12 },
  rowTitle: { fontSize: 15, fontWeight: '600', color: '#050505', marginBottom: 4 },
  rowSubtitle: { fontSize: 12, color: '#888', lineHeight: 18 },
  footer: { paddingHorizontal: 24, paddingBottom: 40 },
  button: { borderRadius: 30, paddingVertical: 16 },
});
