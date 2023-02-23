import { Slot, Stack } from "expo-router";
import { StatusBar } from "react-native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import Container from "../ui/Container";

export default function HomeLayout({ segment }) {
  let [fontsLoaded] = useFonts({
    "poppins-regular": Poppins_400Regular,
    "poppins-bold": Poppins_700Bold,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <StatusBar translucent={false} />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </>
  );
}
