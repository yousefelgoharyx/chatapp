import { StyleSheet, TextInput, View } from "react-native";
import Icon from "@expo/vector-icons/Feather";
type InputProps = React.ComponentProps<typeof TextInput>;
const SearchInput = (props: InputProps) => {
  const { style, ...rest } = props;
  return (
    <View style={[styles.inputWrapper, style]}>
      <TextInput style={styles.input} cursorColor="#000" {...rest} />
      <View style={styles.iconWrapper}>
        <Icon name="search" size={24} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    backgroundColor: "#eaeaea",
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
