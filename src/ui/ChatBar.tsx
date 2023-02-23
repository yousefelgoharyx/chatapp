import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Icon from "@expo/vector-icons/Feather";
import { StylerFn, useStyles, useTheme } from "../utils/createStyles";
import Iconizer from "./Icon";
const ChatBar = () => {
  const styles = useStyles(styler);
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholderTextColor={theme.text}
        placeholder="Type a message"
      />
      <Iconizer name="send" size={24} />
    </View>
  );
};

const styler: StylerFn = (theme) =>
  StyleSheet.create({
    container: {
      height: 80,
      backgroundColor: theme.background,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      paddingHorizontal: 20,
    },
    input: {
      height: 56,
      width: "90%",
      backgroundColor: theme.secondaryBackground,
      borderRadius: 56 / 2,
      paddingHorizontal: 16,
      marginEnd: 8,
      color: theme.text,
    },
  });

export default ChatBar;
