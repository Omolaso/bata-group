import { createNativeStackNavigator } from '@react-navigation/native-stack';

import type { ProfileStackParamList } from './types';
import Account from '@/screens/profile/Account';
import Notifications from '@/screens/profile/Notifications';
import ChangePassword from '@/screens/profile/ChangePassword';

const Stack = createNativeStackNavigator<ProfileStackParamList>();

export default function ProfileNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
    </Stack.Navigator>
  );
}
