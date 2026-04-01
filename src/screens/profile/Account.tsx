import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useCallback, useRef } from 'react';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { Ionicons } from '@expo/vector-icons';

import { Button } from '@/components/Button';
import { Colors } from '@/constants/colors';
import type { ProfileStackParamList } from '@/src/navigation/types';

type Props = {
  navigation: NativeStackNavigationProp<ProfileStackParamList, 'Account'>;
};

export default function Account({ navigation }: Props) {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const openLogout = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);

  const closeLogout = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerRow}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.backChevron}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Account</Text>
        <View style={{ width: 36 }} />
      </View>

      {/* Avatar */}
      <View style={styles.avatarSection}>
        <Image source={{ uri: 'https://i.pravatar.cc/120' }} style={styles.avatar} />
        <Text style={styles.name}>Adaeze Chamberlain</Text>
      </View>

      {/* Account Section */}
      <Text style={styles.sectionLabel}>ACCOUNT</Text>

      <TouchableOpacity style={styles.row} onPress={() => navigation.navigate('Notifications')}>
        <Ionicons name="notifications-outline" size={20} color="#050505" style={styles.rowIcon} />
        <Text style={styles.rowLabel}>Notifications</Text>
        <Ionicons name="chevron-forward" size={16} color="#ccc" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.row} onPress={() => navigation.navigate('ChangePassword')}>
        <Ionicons name="lock-closed-outline" size={20} color="#050505" style={styles.rowIcon} />
        <Text style={styles.rowLabel}>Change Password</Text>
        <Ionicons name="chevron-forward" size={16} color="#ccc" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.row} onPress={openLogout}>
        <Ionicons name="log-out-outline" size={20} color="#E53935" style={styles.rowIcon} />
        <Text style={[styles.rowLabel, styles.rowLabelRed]}>Log Out</Text>
        <Ionicons name="chevron-forward" size={16} color="#ccc" />
      </TouchableOpacity>

      {/* Footer */}
      <Text style={styles.footer}>
        Betadriver gives car owners the tool to track their spending and manage{'\n'}
        their drivers it also empowers drivers with jobs loans and so much more
      </Text>

      {/* Logout Bottom Sheet */}
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={['30%']}
        enablePanDownToClose
        backgroundStyle={styles.sheetBackground}>
        <BottomSheetView style={styles.sheetContent}>
          <Text style={styles.sheetTitle}>Log Out</Text>
          <Text style={styles.sheetSubtitle}>
            You will be logged out of your account, but dont worry, you can always come back
          </Text>
          <View style={styles.sheetButtons}>
            <TouchableOpacity style={styles.cancelBtn} onPress={closeLogout}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.logoutBtn} onPress={closeLogout}>
              <Text style={styles.logoutText}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </BottomSheetView>
      </BottomSheet>
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
  avatarSection: { alignItems: 'center', marginBottom: 28 },
  avatar: {
    width: 80, height: 80, borderRadius: 40,
    backgroundColor: '#ddd', borderWidth: 3, borderColor: '#eee', marginBottom: 12,
  },
  name: { fontSize: 18, fontWeight: '700', color: '#050505' },
  sectionLabel: { fontSize: 11, fontWeight: '700', color: '#aaa', paddingHorizontal: 24, marginBottom: 4, letterSpacing: 1 },
  row: {
    flexDirection: 'row', alignItems: 'center',
    paddingHorizontal: 24, paddingVertical: 16,
    borderBottomWidth: 1, borderBottomColor: '#F2F2F2',
  },
  rowIcon: { marginRight: 14 },
  rowLabel: { flex: 1, fontSize: 15, color: '#050505' },
  rowLabelRed: { color: '#E53935' },
  footer: {
    position: 'absolute', bottom: 32, left: 0, right: 0,
    textAlign: 'center', fontSize: 11, color: '#bbb', paddingHorizontal: 24, lineHeight: 16,
  },
  sheetBackground: { borderRadius: 24, backgroundColor: '#fff' },
  sheetContent: { paddingHorizontal: 24, paddingTop: 8, paddingBottom: 32 },
  sheetTitle: { fontSize: 18, fontWeight: '700', color: '#050505', marginBottom: 8 },
  sheetSubtitle: { fontSize: 13, color: '#888', marginBottom: 24, lineHeight: 20 },
  sheetButtons: { flexDirection: 'row', gap: 12 },
  cancelBtn: {
    flex: 1, backgroundColor: '#F2F2F2', borderRadius: 30,
    paddingVertical: 14, alignItems: 'center',
  },
  cancelText: { fontSize: 15, fontWeight: '600', color: '#050505' },
  logoutBtn: {
    flex: 1, backgroundColor: '#E53935', borderRadius: 30,
    paddingVertical: 14, alignItems: 'center',
  },
  logoutText: { fontSize: 15, fontWeight: '600', color: '#fff' },
});
