import React from "react";
import { View, TouchableOpacity } from "react-native";
import Text from "./Text";
import Icon from "@expo/vector-icons/Feather";
type Props = {
  onPress?: () => void;
  title: string;
  icon: keyof typeof Icon.glyphMap;
};
const SettingsItem = (props: Props) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 8,
        justifyContent: "space-between",
      }}
    >
      <Text weight="bold" style={{ top: 2 }}>
        {props.title}
      </Text>
      <Icon name={props.icon} size={24} style={{ marginEnd: 8 }} />
    </TouchableOpacity>
  );
};

export default SettingsItem;
