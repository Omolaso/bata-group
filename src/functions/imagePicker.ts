import * as ImagePicker from "expo-image-picker";
import { Alert } from "react-native";

const selectImage = async () => {
  const permissionResult =
    await ImagePicker.requestMediaLibraryPermissionsAsync();

  if (!permissionResult.granted) {
    Alert.alert(
      "Permission required",
      "Permission to access the media library is required.",
    );
    return;
  }

  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ["images", "videos"],
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  if (result.canceled) return;

  return result.assets[0];
};

export { selectImage };
