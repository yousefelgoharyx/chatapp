import React from "react";
import { TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
type NextButtonProps = {
    onPress: () => void;
} & React.ComponentProps<typeof TouchableOpacity>;
const NextButton = ({ onPress, ...rest }: NextButtonProps) => {
    return (
        <TouchableOpacity onPress={onPress} {...rest}>
            <View style={{ position: "relative" }}>
                <View
                    style={{
                        width: 48,
                        height: 48,
                        borderRadius: 48,
                        borderStyle: "solid",
                        borderRightColor: "black",
                        borderRightWidth: 2,

                        borderLeftColor: "black",
                        borderLeftWidth: 2,

                        borderTopColor: "white",
                        borderTopWidth: 2,

                        borderBottomColor: "black",
                        borderBottomWidth: 2,
                        transform: [{ rotate: "-90deg" }],
                    }}
                ></View>
                <View style={{ position: "absolute", top: 10, left: 8 }}>
                    <Icon name="arrow-right" size={28} />
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default NextButton;
