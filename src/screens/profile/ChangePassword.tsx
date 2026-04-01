import AvoidingView from "@/components/AvoidingView";
import { Button } from "@/components/Button";
import InputField from "@/components/InputField";
import { Screen } from "@/components/Screen";
import { ScreenHeader } from "@/components/ScreenHeader";
import ScrollingView from "@/components/ScrollingView";
import type { ProfileStackParamList } from "@/navigation/types";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

type Props = {
  navigation: NativeStackNavigationProp<
    ProfileStackParamList,
    "ChangePassword"
  >;
};

export default function ChangePassword({ navigation }: Props) {
  const [current, setCurrent] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  return (
    <Screen>
      <AvoidingView>
        <ScreenHeader navigation={navigation} title="Change Password" />

        <ScrollingView>
          <View style={{ flex: 1, padding: 20 }}>
            <View style={styles.content}>
              <InputField
                secureTextEntry
                value={current}
                placeholder="Current password"
                onChangeText={setCurrent}
              />

              <InputField
                placeholder="New password"
                secureTextEntry
                value={newpassword}
                onChangeText={setNewPassword}
              />

              <InputField
                placeholder="Confirm password"
                secureTextEntry
                value={confirm}
                onChangeText={setConfirm}
              />
            </View>

            <Button label="Save Changes" onPress={() => navigation.goBack()} />
          </View>
        </ScrollingView>
      </AvoidingView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: { flex: 1, gap: 12 },
});
