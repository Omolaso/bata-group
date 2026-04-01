import { StyleSheet, Text, View } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import type { OnboardingParamList } from '@/src/navigation/types';

type Props = {
  navigation: NativeStackNavigationProp<OnboardingParamList, 'ProfilePicture'>;
};

export default function ProfilePicture({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Picture</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
});
