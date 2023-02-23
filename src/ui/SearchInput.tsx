import { StyleSheet, TextInput, View } from "react-native";
import Icon from "@expo/vector-icons/Feather";
import { StylerFn, useStyles, useTheme } from "../utils/createStyles";
import Iconizer from "./Icon";
type InputProps = React.ComponentProps<typeof TextInput>;
const SearchInput = (props: InputProps) => {
  const { style, ...rest } = props;
  const styles = useStyles(styler);
  const theme = useTheme();
  return (
    <View style={[styles.inputWrapper, style]}>
      <TextInput
        style={styles.input}
        placeholderTextColor={theme.text}
        cursorColor={theme.text}
        {...rest}
      />
      <View style={styles.iconWrapper}>
        <Iconizer name="search" size={24} color={theme.text} />
      </View>
    </View>
  );
};

const styler: StylerFn = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#ff3",
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 20,
    },
    inputWrapper: {
      width: "100%",
      position: "relative",
      backgroundColor: theme.secondaryBackground,
      overflow: "hidden",
      height: 56,
      borderRadius: 56 / 2,
    },
    input: {
      width: "100%",
      paddingHorizontal: 24,
      height: 56,
      fontFamily: "poppins-regular",
      paddingLeft: 24 + 16 + 8,
      marginTop: 2,
    },
    iconWrapper: {
      position: "absolute",
      top: 16,
      left: 16,
    },
  });
export default SearchInput;
