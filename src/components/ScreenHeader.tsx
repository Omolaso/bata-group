import { Ionicons } from "@expo/vector-icons";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Pressable, StyleSheet, View, type ViewStyle } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { colors } from "@/constants/colors";
import { typography } from "@/constants/typography";
import { triggerSelectionHaptics } from "@/functions/haptics";

interface ScreenHeaderProps {
  navigation: NativeStackNavigationProp<any, any>;
  title?: string;
  containerStyle?: ViewStyle;
}

export function ScreenHeader({
  navigation,
  title,
  containerStyle,
}: ScreenHeaderProps) {
  return (
    <View style={[styles.headerRow, containerStyle]}>
      <Pressable
        style={styles.backButton}
        onPress={() => {
          triggerSelectionHaptics();
          navigation.goBack();
        }}
      >
        <Ionicons name="chevron-back-outline" size={16} color={colors.black} />
      </Pressable>

      {title && (
        <ThemedText type="bodySemiBold" style={styles.title}>
          {title}
        </ThemedText>
      )}

      <View style={{ width: 36 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 16,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: colors.gray,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    flex: 1,
    textAlign: "center",
    color: colors.black,
    fontSize: typography.fontSize.lg,
  },
});
