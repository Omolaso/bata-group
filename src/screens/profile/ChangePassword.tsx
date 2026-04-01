import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';

import { Button } from '@/components/Button';
import type { ProfileStackParamList } from '@/src/navigation/types';

type Props = {
  navigation: NativeStackNavigationProp<ProfileStackParamList, 'ChangePassword'>;
};

export default function ChangePassword({ navigation }: Props) {
  const [current, setCurrent] = useState('');
  const [next, setNext] = useState('');
  const [confirm, setConfirm] = useState('');

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.container}>
        <View style={styles.headerRow}>
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Text style={styles.backChevron}>‹</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Change Password</Text>
          <View style={{ width: 36 }} />
        </View>

        <View style={styles.content}>
          <TextInput
            style={styles.input}
            placeholder="Current password"
            placeholderTextColor="#B0B0B0"
            secureTextEntry
            value={current}
            onChangeText={setCurrent}
          />
          <TextInput
            style={styles.input}
            placeholder="New password"
            placeholderTextColor="#B0B0B0"
            secureTextEntry
            value={next}
            onChangeText={setNext}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm password"
            placeholderTextColor="#B0B0B0"
            secureTextEntry
            value={confirm}
            onChangeText={setConfirm}
          />
        </View>

        <View style={styles.footer}>
          <Button label="Save Changes" style={styles.button} onPress={() => navigation.goBack()} />
        </View>
      </View>
    </KeyboardAvoidingView>
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
  content: { flex: 1, paddingHorizontal: 24, paddingTop: 16, gap: 12 },
  input: {
    backgroundColor: '#F5F5F5', borderRadius: 10,
    paddingHorizontal: 16, paddingVertical: 14,
    fontSize: 14, color: '#050505',
  },
  footer: { paddingHorizontal: 24, paddingBottom: 40 },
  button: { borderRadius: 30, paddingVertical: 16 },
});
