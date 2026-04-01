import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import { Button } from '@/components/Button';
import { Colors } from '@/constants/colors';
import type { OnboardingParamList } from '@/src/navigation/types';

type Props = {
  navigation: NativeStackNavigationProp<OnboardingParamList, 'VerifyNumber'>;
};

const CELL_COUNT = 6;

export default function VerifyNumber({ navigation }: Props) {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({ value, setValue });

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backChevron}>‹</Text>
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>Verify your number</Text>

        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({ index, symbol, isFocused }) => (
            <View
              key={index}
              style={[styles.cell, isFocused && styles.cellFocused]}
              onLayout={getCellOnLayoutHandler(index)}>
              <Text style={styles.cellText}>
                {symbol ? symbol : isFocused ? <Cursor /> : '*'}
              </Text>
            </View>
          )}
        />

        <View style={styles.resendRow}>
          <Text style={styles.resendLabel}>Didn't receive code? </Text>
          <TouchableOpacity>
            <Text style={styles.resendLink}>Resend</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sentTo}>
          We sent a verification code to{'\n'}+234 812 678 2345
        </Text>
      </View>

      <View style={styles.footer}>
        <Button
          label="Continue"
          style={styles.button}
          onPress={() => navigation.navigate('CreatePassword')}
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
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: Colors.black,
    textAlign: 'center',
    marginBottom: 32,
  },
  codeFieldRoot: {
    gap: 8,
  },
  cell: {
    flex: 1,
    height: 48,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#F5F5F5',
  },
  cellFocused: {
    borderColor: Colors.track_blue,
    backgroundColor: '#FFFFFF',
  },
  cellText: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.black,
  },
  resendRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  resendLabel: {
    fontSize: 13,
    color: '#888',
  },
  resendLink: {
    fontSize: 13,
    color: Colors.track_blue,
    fontWeight: '600',
  },
  sentTo: {
    fontSize: 13,
    color: '#888',
    textAlign: 'center',
    marginTop: 32,
    lineHeight: 20,
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
