import { GestureResponderEvent, Pressable, StyleSheet, Text, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const IconButton = ({
  label,
  icon,
  onPress,
}: {
  label: string;
  /**
   * Nom icone
   * @see Voir https://icons.expo.fyi/
   */
  icon: any;
  onPress: (event: GestureResponderEvent) => void;
}) => {
  return (
    <Pressable style={styles.iconButton} onPress={onPress}>
      <MaterialIcons name={icon} size={24} color="#fff" />
      <Text style={styles.iconButtonLabel}>{label}</Text>
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  iconButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconButtonLabel: {
    color: "#fff",
    marginTop: 12,
  },
});
