import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

import { Button } from '@/components/Button';
import type { HomeStackParamList } from '@/src/navigation/types';

type Props = {
  navigation: NativeStackNavigationProp<HomeStackParamList, 'Arrived'>;
};

export default function Arrived({ navigation }: Props) {
  const [pressed, setPressed] = useState(false);
  const [location, setLocation] = useState('');

  const locationFilled = !!location;

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView style={styles.container} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.headerRow}>
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Text style={styles.backChevron}>‹</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>I've Arrived</Text>
        <Text style={styles.subtitle}>Complete the steps to successfully "Ive Arrived"</Text>

        {/* Step 1 */}
        <View style={styles.stepRow}>
          <View style={[styles.stepDot, pressed && styles.stepDotDone]}>
            {pressed
              ? <Ionicons name="checkmark" size={14} color="#fff" />
              : <View style={styles.stepDotInner} />}
          </View>
          <View style={styles.stepContent}>
            <Text style={styles.stepLabel}>I've Arrived</Text>
            <TouchableOpacity
              style={[styles.pressBtn, pressed && styles.pressBtnDone]}
              onPress={() => setPressed(true)}>
              <Text style={styles.pressBtnText}>{pressed ? 'Pressed ✓' : 'press'}</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Step 2 */}
        <View style={styles.stepRow}>
          <View style={[styles.stepDot, locationFilled && styles.stepDotDone]}>
            {locationFilled
              ? <Ionicons name="checkmark" size={14} color="#fff" />
              : <View style={styles.stepDotInner} />}
          </View>
          <View style={styles.stepContent}>
            <Text style={styles.stepLabel}>Enter Location</Text>
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
            onPress={() => navigation.navigate('ActionCompleted')}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { paddingBottom: 40 },
  headerRow: { paddingTop: 56, paddingHorizontal: 20, marginBottom: 12 },
  backBtn: {
    width: 36, height: 36, borderRadius: 18,
    backgroundColor: '#F2F2F2', alignItems: 'center', justifyContent: 'center',
  },
  backChevron: { fontSize: 22, color: '#050505', lineHeight: 26 },
  title: { fontSize: 24, fontWeight: '700', color: '#050505', paddingHorizontal: 20, marginBottom: 4 },
  subtitle: { fontSize: 13, color: '#999', paddingHorizontal: 20, marginBottom: 24 },
  stepRow: { flexDirection: 'row', paddingHorizontal: 20, marginBottom: 20, gap: 14 },
  stepDot: {
    width: 26, height: 26, borderRadius: 13,
    backgroundColor: '#E0E0E0', alignItems: 'center', justifyContent: 'center', marginTop: 2,
  },
  stepDotDone: { backgroundColor: '#22C55E' },
  stepDotInner: { width: 10, height: 10, borderRadius: 5, backgroundColor: '#bbb' },
  stepContent: { flex: 1 },
  stepLabel: { fontSize: 14, fontWeight: '600', color: '#050505', marginBottom: 10 },
  pressBtn: {
    backgroundColor: '#111', borderRadius: 8,
    paddingVertical: 14, alignItems: 'center',
  },
  pressBtnDone: { backgroundColor: '#22C55E' },
  pressBtnText: { color: '#fff', fontSize: 14, fontWeight: '600' },
  input: {
    backgroundColor: '#F5F5F5', borderRadius: 10,
    paddingHorizontal: 14, paddingVertical: 14,
    fontSize: 14, color: '#050505',
  },
  footer: { paddingHorizontal: 20, marginTop: 16 },
  button: { borderRadius: 30, paddingVertical: 16 },
});
