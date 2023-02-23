import React from "react";
import { StyleSheet, View } from "react-native";
import Text from "./Text";

type Props = {
  text: React.ReactNode;
  me?: boolean;
};
function ChatMessage(props: Props) {
  const classes: any = [styles.message];
  if (props.me) classes.push(styles.messageMe);
  return (
    <View style={classes}>
      <Text>{props.text}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  message: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 16,
    maxWidth: "80%",
    alignSelf: "flex-start",
    marginTop: 16,
  },
  messageMe: {
    backgroundColor: "#0055ff20",
    alignSelf: "flex-end",
  },
});

export default ChatMessage;
