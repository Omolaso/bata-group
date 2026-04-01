import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';

import { Button } from '@/components/Button';
import { Colors } from '@/constants/colors';
import type { OnboardingParamList } from '@/src/navigation/types';

type Props = {
  navigation: NativeStackNavigationProp<OnboardingParamList, 'ProfilePicture'>;
};

export default function ProfilePicture({ navigation }: Props) {
  const [imageUri, setImageUri] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backChevron}>‹</Text>
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>Add a Profile Photo</Text>

        <TouchableOpacity style={styles.imagePicker} onPress={() => {}}>
          {imageUri ? (
            <Image source={{ uri: imageUri }} style={styles.previewImage} />
          ) : (
            <View style={styles.placeholder}>
              <Text style={styles.placeholderIcon}>🖼</Text>
              <Text style={styles.placeholderText}>Add Image</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Button
          label="Continue"
          style={styles.button}
          onPress={() => navigation.getParent()?.navigate('Tabs')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  backButton: {
    marginTop: 56,
    marginLeft: 20,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backChevron: {
    fontSize: 22,
    color: Colors.black,
    lineHeight: 26,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: Colors.black,
    textAlign: 'center',
    marginBottom: 32,
  },
  imagePicker: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: '#F5F5F5',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  placeholder: {
    alignItems: 'center',
    gap: 8,
  },
  placeholderIcon: {
    fontSize: 32,
    opacity: 0.35,
  },
  placeholderText: {
    fontSize: 14,
    color: '#B0B0B0',
  },
  previewImage: {
    width: '100%',
    height: '100%',
  },
  footer: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  button: {
    borderRadius: 30,
    paddingVertical: 16,
  },
});
