import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Icon from "@expo/vector-icons/Feather";
const ChatBar = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Type a message" />
      <Icon name="send" size={24} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: "#f4f4f4",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  input: {
    height: 56,
    width: "90%",
    backgroundColor: "#eaeaea",
    borderRadius: 56 / 2,
    paddingHorizontal: 16,
    marginEnd: 8,
  },
});

export default ChatBar;
