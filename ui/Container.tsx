import React from "react";
import { View } from "react-native";

type Props = React.ComponentProps<typeof View>;
const Container = ({ children, style, ...rest }: Props) => {
  return (
    <View
      style={[
        { paddingHorizontal: 20, flex: 1, backgroundColor: "#fff" },
        style,
      ]}
      {...rest}
    >
      {children}
    </View>
  );
};

export default Container;
