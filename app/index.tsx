import { Link } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Container from "../ui/Container";
import Text from "../ui/Text";
import Icon from "@expo/vector-icons/Feather";
import SearchInput from "../ui/SearchInput";
import Contact from "../ui/Contact";
function getImage(name: string, color: string) {
  return `https://api.dicebear.com/5.x/adventurer/png?seed=${name}&backgroundColor=${color}`;
}
const index = () => {
  return (
    <Container>
      <View style={styles.header}>
        <Text weight="bold" size={32}>
          Chats
        </Text>
        <View style={styles.headerIcons}>
          <Icon name="external-link" size={24} style={{ marginEnd: 8 }} />
          <Icon name="plus" size={24} />
        </View>
      </View>

      <SearchInput
        style={{ marginTop: 8 }}
        placeholder="Search for chat and messages"
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingVertical: 16, marginTop: 16, paddingTop: 0 }}
      >
        <Contact
          image={getImage(`anthony`, "b6e3f4")}
          name="Anthony"
          message="Hey buddy"
          iam
        />
        <Contact
          image={getImage(`Clarice`, "c0aede")}
          name="Clarice"
          message="Yea that was awesome!"
        />
        <Contact
          image={getImage(`jessica`, "c0aede")}
          name="Jessica"
          message="Are you free tonight?"
          iam
        />
        <Contact
          image={getImage(`Andro`, "ffd5dc")}
          name="Andro"
          message="Thanks for helping me!"
          iam
        />
        <Contact
          image={getImage(`angela`, "ffdfbf")}
          name="Angela"
          message="How are you doing today?"
          unread
        />
        <Contact
          image={getImage(`darline`, "ffdfbf")}
          name="Darline"
          message="Could you take a look at this?"
          unread
        />
        <Contact
          image={getImage(`Jassmine`, "c0aede")}
          name="Jassmine"
          message="I'm glad we met"
          iam
        />
        <Contact
          image={getImage(`Jody`, "ffd5dc")}
          name="Jody"
          message="Looool, that's funny"
          unread
        />
        <Contact
          image={getImage(`aanet`, "ffdfbf")}
          name="Janet"
          message="Well done!"
        />
        <Contact
          image={getImage(`aouise`, "d1d4f9")}
          name="Louise"
          message="This is the recipe I was talking about. It's so good!"
        />
        <Contact
          image={getImage(`griffin`, "b6e3f4")}
          name="Peter"
          message="I can't wait to see you again!"
          iam
        />
        <Contact
          image={getImage(`Vector`, "c0aede")}
          name="Vector"
          message="That is bad news :( I'm sorry. I hope you feel better soon. Tell me if I can help you with anything."
          iam
        />
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerIcons: {
    flexDirection: "row",
  },
});
export default index;
