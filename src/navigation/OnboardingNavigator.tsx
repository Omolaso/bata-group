import { createNativeStackNavigator } from '@react-navigation/native-stack';

import type { OnboardingParamList } from './types';
import Welcome from '@/src/screens/onboarding/Welcome';
import CreateAccount from '@/src/screens/onboarding/CreateAccount';
import VerifyNumber from '@/src/screens/onboarding/VerifyNumber';
import CreatePassword from '@/src/screens/onboarding/CreatePassword';
import EnterFullName from '@/src/screens/onboarding/EnterFullName';
import ProfilePicture from '@/src/screens/onboarding/ProfilePicture';

const Stack = createNativeStackNavigator<OnboardingParamList>();

export default function OnboardingNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
      <Stack.Screen name="VerifyNumber" component={VerifyNumber} />
      <Stack.Screen name="CreatePassword" component={CreatePassword} />
      <Stack.Screen name="EnterFullName" component={EnterFullName} />
      <Stack.Screen name="ProfilePicture" component={ProfilePicture} />
    </Stack.Navigator>
  );
}
