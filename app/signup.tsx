import { StyleSheet, TouchableOpacity } from "react-native";
import Container from "../src/ui/Container";
import Input from "../src/ui/Input";
import NextButton from "../src/ui/NextButton";
import Text from "../src/ui/Text";
import { useRouter } from "expo-router";
import Iconizer from "../src/ui/Icon";
const index = () => {
  const router = useRouter();

  const handleSignup = () => router.push("/signin");
  const handleLogin = () => router.push("/");
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
      <NextButton onPress={handleLogin} style={{ marginTop: 64 }} />
      <TouchableOpacity style={styles.signup} onPress={handleSignup}>
        <Iconizer name="log-in" size={24} />
        <Text
          weight="bold"
          size={18}
          style={{ marginStart: 8, textTransform: "uppercase" }}
        >
          Sign in
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
