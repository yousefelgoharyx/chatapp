import React, { useEffect, useRef } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Container from "../src/ui/Container";
import { useRouter } from "expo-router";
import ChatHead from "../src/ui/ChatHead";
import ChatMessage from "../src/ui/ChatMessage";
import { getImage } from "../src/utils/getImage";
import ChatBar from "../src/ui/ChatBar";

const msg = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
cumque natus quis necessitatibus vero, asperiores error incidunt
esse nisi ipsum at illum maxime voluptates minima minus est ipsam.
Provident excepturi ab, iste debitis tenetur laborum nisi
voluptates iure nulla repellendus nam incidunt cum vitae placeat,
perspiciatis omnis nesciunt! Officia, commodi.`;

const chat = () => {
  const router = useRouter();
  const scrollViewRef = useRef<ScrollView>();

  return (
    <View style={{ flex: 1 }}>
      <ChatHead
        name="Anthony"
        image={getImage("anthony", "b6e3f4")}
        onBack={router.back}
        status="Online"
      />
      <ScrollView
        onContentSizeChange={() =>
          scrollViewRef.current.scrollToEnd({ animated: true })
        }
        ref={scrollViewRef}
        contentContainerStyle={styles.scrollView}
      >
        <Container>
          <ChatMessage text={msg} />
          <ChatMessage text={msg} me />
        </Container>
      </ScrollView>
      <ChatBar />
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    paddingBottom: 16,
    backgroundColor: "#f4f4f4",
  },
});

export default chat;
