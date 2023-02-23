import { Stack } from "expo-router";
import { StatusBar, useColorScheme } from "react-native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { useTheme } from "../src/utils/createStyles";

export default function HomeLayout() {
  let [fontsLoaded] = useFonts({
    "poppins-regular": Poppins_400Regular,
    "poppins-bold": Poppins_700Bold,
  });
  const theme = useTheme();
  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <StatusBar translucent={false} backgroundColor={theme.background} />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </>
  );
}
