import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import Text from "./Text";

type ContactProps = {
  name: string;
  message: string;
  image: string;
  iam?: boolean;
  unread?: boolean;
};

const Contact = ({
  name,
  message,
  image,
  iam = false,
  unread = false,
}: ContactProps) => {
  const router = useRouter();
  return (
    <TouchableOpacity onPress={() => router.push("/signup")}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: image, width: 75, height: 75 }} />
        </View>
        <View
          style={{
            marginStart: 8,
            overflow: "hidden",
            flexShrink: 1,
            marginEnd: 34,
          }}
        >
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
  imageContainer: {
    width: 75,
    height: 75,
    borderRadius: 75 / 2,
    overflow: "hidden",
    backgroundColor: "#eaeaea",
  },
});

export default Contact;
