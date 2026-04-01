import { createNativeStackNavigator } from '@react-navigation/native-stack';

import type { HomeStackParamList } from './types';
import Dashboard from '@/screens/home/Dashboard';
import BuyFuel from '@/screens/home/BuyFuel';
import Arrived from '@/screens/home/Arrived';
import ActionCompleted from '@/screens/home/ActionCompleted';
import Analytics from '@/screens/home/Analytics';

const Stack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="BuyFuel" component={BuyFuel} />
      <Stack.Screen name="Arrived" component={Arrived} />
      <Stack.Screen name="ActionCompleted" component={ActionCompleted} />
      <Stack.Screen name="Analytics" component={Analytics} />
    </Stack.Navigator>
  );
}
