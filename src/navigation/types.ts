import type { NavigatorScreenParams } from '@react-navigation/native';

export type OnboardingParamList = {
  Welcome: undefined;
  CreateAccount: undefined;
  VerifyNumber: undefined;
  CreatePassword: undefined;
  EnterFullName: undefined;
  ProfilePicture: undefined;
};

export type HomeStackParamList = {
  Dashboard: undefined;
  BuyFuel: undefined;
  Arrived: undefined;
  ActionCompleted: undefined;
  Analytics: undefined;
};

export type ProfileStackParamList = {
  Account: undefined;
  Notifications: undefined;
  ChangePassword: undefined;
};

export type TabParamList = {
  Home: NavigatorScreenParams<HomeStackParamList>;
  Activity: undefined;
  Transactions: undefined;
  Profile: NavigatorScreenParams<ProfileStackParamList>;
};

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  Onboarding: NavigatorScreenParams<OnboardingParamList>;
  Tabs: NavigatorScreenParams<TabParamList>;
  Modal: undefined;
};
