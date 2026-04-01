import { Button } from "@/components/Button";
import { Screen } from "@/components/Screen";
import { ScreenHeader } from "@/components/ScreenHeader";
import ScrollingView from "@/components/ScrollingView";
import { ThemedText } from "@/components/themed-text";
import type { ProfileStackParamList } from "@/navigation/types";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { StyleSheet, Switch, View } from "react-native";

type Props = {
  navigation: NativeStackNavigationProp<ProfileStackParamList, "Notifications">;
};

export default function Notifications({ navigation }: Props) {
  const [actionReminders, setActionReminders] = useState<boolean>(true);
  const [transactionNotifs, setTransactionNotifs] = useState<boolean>(true);

  return (
    <Screen>
      <ScreenHeader navigation={navigation} title="Notifications" />

      <ScrollingView>
        <View style={{ flex: 1, padding: 20 }}>
          <View style={styles.content}>
            <View style={styles.row}>
              <View style={styles.rowText}>
                <ThemedText type="bodyMedium">Action Reminders</ThemedText>
                <ThemedText type="regularMedium" color="gray_inner">
                  Get notified when you have a pending action
                </ThemedText>
              </View>
              <Switch
                value={actionReminders}
                onValueChange={setActionReminders}
                trackColor={{ false: "#E0E0E0", true: "#22C55E" }}
                thumbColor="#fff"
              />
            </View>

            <View style={styles.row}>
              <View style={styles.rowText}>
                <ThemedText type="bodyMedium">
                  Transaction Notifications
                </ThemedText>
                <ThemedText type="regularMedium" color="gray_inner">
                  Be the first to know when money has been{"\n"}sent
                </ThemedText>
              </View>
              <Switch
                value={transactionNotifs}
                onValueChange={setTransactionNotifs}
                trackColor={{ false: "#E0E0E0", true: "#22C55E" }}
                thumbColor="#fff"
              />
            </View>
          </View>

          <Button label="Save Changes" onPress={() => navigation.goBack()} />
        </View>
      </ScrollingView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: { flex: 1 },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F2F2F2",
  },
  rowText: { flex: 1, gap: 4 },
});
