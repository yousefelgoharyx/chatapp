import {
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import Input from "../ui/Input";
import NextButton from "../ui/NextButton";
const index = () => {
    return (
        <View style={styles.container}>
            <Input
                hint="Name"
                placeholder="Yousef"
                style={{ marginBottom: 16 }}
            />
            <Input
                hint="Username"
                placeholder="yousefelgoharyx"
                style={{ marginBottom: 16 }}
            />
            <Input secureTextEntry placeholder="********" hint="Password" />
            <NextButton onPress={() => {}} style={{ marginTop: 32 }} />
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
});
export default index;
