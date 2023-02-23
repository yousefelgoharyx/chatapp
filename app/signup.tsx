import { StyleSheet, TouchableOpacity, View } from "react-native";
import Container from "../src/ui/Container";
import Input from "../src/ui/Input";
import NextButton from "../src/ui/NextButton";
import Text from "../src/ui/Text";
import Icon from "@expo/vector-icons/Feather";
import { useRouter } from "expo-router";
const index = () => {
  const router = useRouter();

  const handleLogin = () => router.push("/signin");

  return (
    <Container style={styles.container}>
      <Text weight="bold" style={styles.heading}>
        Sign up
      </Text>

      <Input hint="Name" placeholder="Yousef" style={{ marginBottom: 16 }} />
      <Input
        hint="Username"
        placeholder="yousefelgoharyx"
        style={{ marginBottom: 16 }}
      />
      <Input secureTextEntry placeholder="********" hint="Password" />
      <NextButton onPress={() => {}} style={{ marginTop: 64 }} />
      <TouchableOpacity style={styles.signup} onPress={handleLogin}>
        <Icon name="log-in" size={24} />
        <Text
          weight="bold"
          size={18}
          style={{ marginStart: 8, textTransform: "uppercase" }}
        >
          Login
        </Text>
      </TouchableOpacity>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 28,
    textTransform: "uppercase",
    marginBottom: 16,
  },
  signup: {
    position: "absolute",
    bottom: 32,
    flexDirection: "row",
    alignItems: "center",
  },
});
export default index;
