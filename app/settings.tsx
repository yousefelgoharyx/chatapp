import { View } from "react-native";
import Avatar from "../src/ui/Avatar";
import Container from "../src/ui/Container";
import SettingsItem from "../src/ui/SettingsItem";
import Text from "../src/ui/Text";
import { getImage } from "../src/utils/getImage";
const settings = () => {
  return (
    <Container style={{ backgroundColor: "#fff" }}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 64,
        }}
      >
        <Avatar image={getImage("anthony", "b6e3f4")} size={128} />
        <Text weight="bold" size={32} style={{ marginTop: 8 }}>
          Anthony
        </Text>
      </View>
      <Text
        weight="bold"
        size={12}
        style={{ color: "#999", textTransform: "uppercase", marginTop: 32 }}
      >
        General
      </Text>
      <SettingsItem icon="user" title="Profile" />
      <SettingsItem icon="smartphone" title="Share Your Account" />
      <SettingsItem icon="bell" title="Notifications" />
      <SettingsItem icon="shield" title="Security" />
      <SettingsItem icon="power" title="Sign out" />
    </Container>
  );
};

export default settings;
