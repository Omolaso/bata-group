import * as Haptics from "expo-haptics";

export const triggerSelectionHaptics = async () => {
  try {
    await Haptics.selectionAsync();
  } catch (error) {
    console.warn("Haptics not supported on this device:", error);
  }
};
