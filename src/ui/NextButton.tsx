import React from "react";
import { TouchableOpacity, View } from "react-native";
import { useTheme } from "../utils/createStyles";
import Iconizer from "./Icon";
type NextButtonProps = {
  onPress: () => void;
} & React.ComponentProps<typeof TouchableOpacity>;
const NextButton = ({ onPress, ...rest }: NextButtonProps) => {
  const theme = useTheme();
  return (
    <TouchableOpacity onPress={onPress} {...rest}>
      <View style={{ position: "relative" }}>
        <View
          style={{
            width: 48,
            height: 48,
            borderRadius: 48,
            borderStyle: "solid",
            borderRightColor: theme.text,
            borderRightWidth: 2,

            borderLeftColor: theme.text,
            borderLeftWidth: 2,

            borderTopColor: theme.background,
            borderTopWidth: 2,

            borderBottomColor: theme.text,
            borderBottomWidth: 2,
            transform: [{ rotate: "-90deg" }],
          }}
        ></View>
        <View style={{ position: "absolute", top: 10, left: 8 }}>
          <Iconizer name="arrow-right" size={28} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NextButton;
