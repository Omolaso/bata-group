import { Screen } from "@/components/Screen";
import { ScreenHeader } from "@/components/ScreenHeader";
import ScrollingView from "@/components/ScrollingView";
import { ThemedText } from "@/components/themed-text";
import { colors } from "@/constants/colors";
import { Icons } from "@/constants/icons";
import { typography } from "@/constants/typography";
import { triggerSelectionHaptics } from "@/functions/haptics";
import type { ProfileStackParamList } from "@/navigation/types";
import { Feather } from "@expo/vector-icons";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useCallback, useRef } from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";

type Props = {
  navigation: NativeStackNavigationProp<ProfileStackParamList, "Account">;
};

export default function Account({ navigation }: Props) {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const accountOptions = [
    {
      label: "Notifications",
      icon: <Icons.Notification />,
      onPress: () => {
        navigation.navigate("Notifications");
      },
    },
    {
      label: "Change Password",
      icon: <Icons.Lock />,
      onPress: () => {
        navigation.navigate("ChangePassword");
      },
    },
    {
      label: "Log Out",
      icon: <Icons.Logout />,
      onPress: () => {
        openLogout();
      },
    },
  ];

  const openLogout = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);

  const closeLogout = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  return (
    <Screen>
      <ScreenHeader navigation={navigation} title="Account" />

      <ScrollingView>
        <View style={{ flex: 1, padding: 20 }}>
          <View style={{ flex: 1, gap: 40 }}>
            <View style={styles.avatarSection}>
              <Image
                source={{ uri: "https://i.pravatar.cc/120" }}
                style={styles.avatar}
              />
              <ThemedText type="bodySemiBold" style={styles.name}>
                Adaeze Chamberlain
              </ThemedText>
            </View>

            <View style={{ gap: 16 }}>
              <ThemedText type="small" color="gray_inner">
                ACCOUNT
              </ThemedText>

              <View style={{ gap: 36 }}>
                {accountOptions.map((option) => {
                  const isLogout = option.label === "Log Out";

                  return (
                    <Pressable
                      key={option.label}
                      style={[styles.row, { justifyContent: "space-between" }]}
                      onPress={() => {
                        triggerSelectionHaptics();
                        option.onPress();
                      }}
                    >
                      <View style={styles.row}>
                        <>{option.icon}</>
                        <ThemedText
                          type="bodySemiBold"
                          color={isLogout ? "error" : "black"}
                        >
                          {option.label}
                        </ThemedText>
                      </View>
                      <Feather
                        name="chevron-right"
                        size={16}
                        color={colors.gray_inner_10}
                      />
                    </Pressable>
                  );
                })}
              </View>
            </View>
          </View>

          {/* Footer */}
          <ThemedText type="body" style={styles.footer}>
            Betadriver gives car owners the tool to track their spending and
            manage
            {"\n"}
            their drivers it also empowers drivers with jobs loans and so much
            more
          </ThemedText>
        </View>
      </ScrollingView>

      {/* Logout Bottom Sheet */}
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={["30%"]}
        enablePanDownToClose
        backgroundStyle={styles.sheetBackground}
      >
        <BottomSheetView style={styles.sheetContent}>
          <ThemedText type="bodyMedium" style={styles.sheetTitle}>
            Log Out
          </ThemedText>
          <ThemedText type="body" style={styles.sheetSubtitle}>
            You will be logged out of your account, but dont worry, you can
            always come back
          </ThemedText>
          <View style={styles.sheetButtons}>
            <Pressable
              style={styles.cancelBtn}
              onPress={() => {
                triggerSelectionHaptics();
                closeLogout();
              }}
            >
              <ThemedText type="bodyMedium" style={styles.cancelText}>
                Cancel
              </ThemedText>
            </Pressable>
            <Pressable
              style={styles.logoutBtn}
              onPress={() => {
                triggerSelectionHaptics();
                closeLogout();
              }}
            >
              <ThemedText type="bodyMedium" style={styles.logoutText}>
                Log Out
              </ThemedText>
            </Pressable>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </Screen>
  );
}

const styles = StyleSheet.create({
  avatarSection: { alignItems: "center", gap: 16 },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 100,
    backgroundColor: colors.transparent,
    borderWidth: 1,
    borderColor: colors.gray_inner_20,
  },
  name: { fontSize: typography.fontSize.xl },

  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  footer: {
    position: "absolute",
    bottom: 32,
    left: 0,
    right: 0,
    textAlign: "center",
    fontSize: 11,
    color: "#bbb",
    paddingHorizontal: 24,
    lineHeight: 16,
  },
  sheetBackground: { borderRadius: 24, backgroundColor: "#fff" },
  sheetContent: { paddingHorizontal: 24, paddingTop: 8, paddingBottom: 32 },
  sheetTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#050505",
    marginBottom: 8,
  },
  sheetSubtitle: {
    fontSize: 13,
    color: "#888",
    marginBottom: 24,
    lineHeight: 20,
  },
  sheetButtons: { flexDirection: "row", gap: 12 },
  cancelBtn: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    borderRadius: 30,
    paddingVertical: 14,
    alignItems: "center",
  },
  cancelText: { fontSize: 15, fontWeight: "600", color: "#050505" },
  logoutBtn: {
    flex: 1,
    backgroundColor: "#E53935",
    borderRadius: 30,
    paddingVertical: 14,
    alignItems: "center",
  },
  logoutText: { fontSize: 15, fontWeight: "600", color: "#fff" },
});
