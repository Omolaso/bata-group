import {
  Image,
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
import { Colors } from '@/constants/colors';
import type { HomeStackParamList } from '@/src/navigation/types';

type Props = {
  navigation: NativeStackNavigationProp<HomeStackParamList, 'BuyFuel'>;
};

type PhotoKey = 'odometer' | 'attendant' | 'gauge';

const STEPS: { key: PhotoKey; label: string }[] = [
  { key: 'odometer', label: 'Take a Picture of the Odometer' },
  { key: 'attendant', label: 'Take a Picture of the Fuel Attendant' },
  { key: 'gauge', label: 'Take a Picture of the Fuel Gauge' },
];

export default function BuyFuel({ navigation }: Props) {
  const [photos, setPhotos] = useState<Record<PhotoKey, string | null>>({
    odometer: null,
    attendant: null,
    gauge: null,
  });
  const [bank, setBank] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [amount, setAmount] = useState('');

  const allDone =
    photos.odometer && photos.attendant && photos.gauge && bank && accountNumber && amount;

  const bankFilled = !!bank && !!accountNumber && !!amount;

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView style={styles.container} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.headerRow}>
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Text style={styles.backChevron}>‹</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Buy Fuel</Text>
        <Text style={styles.subtitle}>Complete the steps to successfully buy fuel</Text>

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
                <Text style={styles.stepLabel}>{step.label}</Text>
                <View style={[styles.photoBox, done && styles.photoBoxDone]}>
                  {done ? (
                    <>
                      <Image source={{ uri: photo! }} style={styles.photoPreview} />
                      <TouchableOpacity
                        style={styles.retakeBtn}
                        onPress={() => setPhotos((p) => ({ ...p, [step.key]: null }))}>
                        <Text style={styles.retakeText}>Retake</Text>
                      </TouchableOpacity>
                    </>
                  ) : (
                    <TouchableOpacity
                      style={styles.takePhotoBtn}
                      onPress={() =>
                        setPhotos((p) => ({ ...p, [step.key]: 'https://picsum.photos/400/200' }))
                      }>
                      <Text style={styles.takePhotoText}>Take Photo</Text>
                    </TouchableOpacity>
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
            <Text style={styles.stepLabel}>Enter Bank Details</Text>
            <TouchableOpacity style={styles.selectBank} onPress={() => setBank('United Bank of Africa')}>
              <Text style={[styles.selectBankText, bank && styles.selectBankFilled]}>
                {bank || 'Select Bank'}
              </Text>
              <Ionicons name="chevron-down" size={16} color="#999" />
            </TouchableOpacity>
            <TextInput
              style={styles.input}
              placeholder="Account Number"
              placeholderTextColor="#B0B0B0"
              keyboardType="number-pad"
              value={accountNumber}
              onChangeText={setAccountNumber}
            />
            {accountNumber.length > 5 && (
              <Text style={styles.nameResolver}>Chamberlain Adaeze Okezie</Text>
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
  photoBox: {
    borderWidth: 1.5,
    borderColor: '#ddd',
    borderStyle: 'dashed',
    borderRadius: 10,
    minHeight: 110,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  photoBoxDone: { borderStyle: 'solid', borderColor: '#ccc' },
  photoPreview: { width: '100%', height: 140 },
  retakeBtn: {
    position: 'absolute', top: 8, right: 8,
    backgroundColor: 'rgba(0,0,0,0.55)', borderRadius: 6,
    paddingHorizontal: 10, paddingVertical: 4,
  },
  retakeText: { color: '#fff', fontSize: 12, fontWeight: '600' },
  takePhotoBtn: {
    backgroundColor: '#111', borderRadius: 20,
    paddingHorizontal: 20, paddingVertical: 10,
  },
  takePhotoText: { color: '#fff', fontSize: 13, fontWeight: '600' },
  selectBank: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    backgroundColor: '#F5F5F5', borderRadius: 10,
    paddingHorizontal: 14, paddingVertical: 14, marginBottom: 10,
  },
  selectBankText: { fontSize: 14, color: '#B0B0B0' },
  selectBankFilled: { color: '#050505' },
  input: {
    backgroundColor: '#F5F5F5', borderRadius: 10,
    paddingHorizontal: 14, paddingVertical: 14,
    fontSize: 14, color: '#050505', marginBottom: 10,
  },
  nameResolver: { fontSize: 12, color: '#888', marginBottom: 8, paddingHorizontal: 4 },
  footer: { paddingHorizontal: 20, marginTop: 8 },
  button: { borderRadius: 30, paddingVertical: 16 },
});
