import { createNativeStackNavigator } from '@react-navigation/native-stack';

import type { OnboardingParamList } from './types';
import Welcome from '@/screens/onboarding/Welcome';
import CreateAccount from '@/screens/onboarding/CreateAccount';
import VerifyNumber from '@/screens/onboarding/VerifyNumber';
import CreatePassword from '@/screens/onboarding/CreatePassword';
import EnterFullName from '@/screens/onboarding/EnterFullName';
import ProfilePicture from '@/screens/onboarding/ProfilePicture';

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
