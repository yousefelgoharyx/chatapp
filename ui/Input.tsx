import { StyleSheet, TextInput, View } from "react-native";
import Text from "./Text";

type InputProps = {
  hint: string;
} & React.ComponentProps<typeof TextInput>;
const Input = (props: InputProps) => {
  const { hint, style, ...rest } = props;
  return (
    <View style={[styles.inputWrapper, style]}>
      <TextInput style={styles.input} cursorColor="#000" {...rest} />
      <View style={styles.hintWrapper}>
        <Text weight="bold" style={styles.hint}>
          {hint}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  inputWrapper: {
    width: "100%",
    position: "relative",
    height: 56,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 56 / 2,
  },
  input: {
    height: 56,
    width: "100%",
    paddingHorizontal: 24,
    fontFamily: "poppins-regular",
  },
  hintWrapper: {
    position: "absolute",
    paddingHorizontal: 4,
    top: -10,
    left: 20,
    backgroundColor: "#fff",
  },
  hint: {
    fontSize: 12,
    color: "black",
  },
});
export default Input;
