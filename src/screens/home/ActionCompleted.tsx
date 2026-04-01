import { StyleSheet, Text, View } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import { Button } from '@/components/Button';
import type { HomeStackParamList } from '@/src/navigation/types';

type Props = {
  navigation: NativeStackNavigationProp<HomeStackParamList, 'ActionCompleted'>;
};

export default function ActionCompleted({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <View style={styles.iconCircle}>
          <Ionicons name="checkmark" size={36} color="#fff" />
        </View>
        <Text style={styles.title}>Action Completed!</Text>
        <Text style={styles.subtitle}>
          You have successfully completed{'\n'}the "Buy Fuel" action
        </Text>
      </View>

      <View style={styles.footer}>
        <Button
          label="Okay Great"
          style={styles.button}
          onPress={() => navigation.navigate('Dashboard')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 40 },
  iconCircle: {
    width: 72, height: 72, borderRadius: 36,
    backgroundColor: '#22C55E', alignItems: 'center', justifyContent: 'center', marginBottom: 24,
  },
  title: { fontSize: 22, fontWeight: '700', color: '#050505', marginBottom: 12, textAlign: 'center' },
  subtitle: { fontSize: 14, color: '#888', textAlign: 'center', lineHeight: 22 },
  footer: { paddingHorizontal: 24, paddingBottom: 40 },
  button: { borderRadius: 30, paddingVertical: 16 },
});
