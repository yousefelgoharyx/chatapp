import { StyleSheet, Text, TextInput, View } from "react-native";

type InputProps = {
    hint: string;
} & React.ComponentProps<typeof TextInput>;
const Input = (props: InputProps) => {
    const { hint, style, ...rest } = props;
    return (
        <View style={[styles.inputWrapper, style]}>
            <TextInput style={styles.input} cursorColor="#000" {...rest} />
            <View style={styles.hintWrapper}>
                <Text style={styles.hint}>{hint}</Text>
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
    },
    input: {
        height: 56,
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 56 / 2,
        width: "100%",
        paddingHorizontal: 20,
        fontFamily: "poppins",
    },
    hintWrapper: {
        position: "absolute",
        paddingHorizontal: 6,
        top: -8,
        left: 20,
        backgroundColor: "#fff",
    },
    hint: {
        fontSize: 12,
        color: "black",
        fontFamily: "poppins-bold",
    },
});
export default Input;
