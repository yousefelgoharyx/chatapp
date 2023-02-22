import { Slot, Stack } from "expo-router";
import { StatusBar } from "react-native";
import {
    useFonts,
    Poppins_400Regular,
    Poppins_700Bold,
} from "@expo-google-fonts/poppins";

export default function HomeLayout() {
    let [fontsLoaded] = useFonts({
        poppins: Poppins_400Regular,
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
