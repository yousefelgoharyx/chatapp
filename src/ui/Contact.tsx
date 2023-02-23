import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import ContactImage from "./Avatar";
import Text from "./Text";

type ContactProps = {
  name: string;
  message: string;
  image: string;
  iam?: boolean;
  unread?: boolean;
};

const Contact = (props: ContactProps) => {
  const { name, message, image, iam = false, unread = false } = props;
  const router = useRouter();
  return (
    <TouchableOpacity onPress={() => router.push("/chat")}>
      <View style={styles.container}>
        <ContactImage image={image} />
        <View style={styles.infoContainer}>
          <Text weight="bold" size={18} style={{ lineHeight: 24 }}>
            {name}
          </Text>
          <Text
            size={14}
            numberOfLines={1}
            weight={unread ? "bold" : "regular"}
          >
            {iam ? <Text size={14}>You: </Text> : null}

            {message}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    marginBottom: 16,
  },

  infoContainer: {
    marginStart: 8,
    overflow: "hidden",
    flexShrink: 1,
    marginEnd: 34,
  },
});

export default Contact;
