import type { NavigatorScreenParams } from '@react-navigation/native';

export type OnboardingParamList = {
  Welcome: undefined;
  CreateAccount: undefined;
  VerifyNumber: undefined;
  CreatePassword: undefined;
  EnterFullName: undefined;
  ProfilePicture: undefined;
};

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  Onboarding: NavigatorScreenParams<OnboardingParamList>;
  Tabs: undefined;
  Modal: undefined;
};

export type TabParamList = {
  Home: undefined;
  Explore: undefined;
};
