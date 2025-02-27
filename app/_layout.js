import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import { styles } from "../style";
import { LinearGradient } from "expo-linear-gradient";
import { NavigationBar } from "expo-navigation-bar";
import { useEffect } from "react";
import AppLayout from "../component/AppLayout";


export default function Page() {

  const [fontsLoaded] = useFonts({
    "league-spartan-regular": require("../fonts/league_spartan_regular.ttf"),
    "league-spartan-bold": require("../fonts/league_spartan_bold.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }



  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AppLayout>
        <Slot />
      </AppLayout>
    </SafeAreaView>
  );
}

