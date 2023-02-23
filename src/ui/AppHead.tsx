import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Icon from "@expo/vector-icons/Feather";
import Text from "./Text";
import { useRouter } from "expo-router";

type Props = {
  onSettingsPress?: () => void;
};
const AppHead = (props: Props) => {
  const router = useRouter();
  return (
    <View style={styles.header}>
      <Text weight="bold" size={32} onPress={() => router.push("signin")}>
        Chats
      </Text>
      <View style={styles.headerIcons}>
        <TouchableOpacity onPress={props.onSettingsPress}>
          <Icon name="settings" size={24} style={{ marginEnd: 8 }} />
        </TouchableOpacity>
        <Icon name="external-link" size={24} style={{ marginEnd: 8 }} />
        <Icon name="plus" size={24} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerIcons: {
    flexDirection: "row",
  },
});

export default AppHead;
