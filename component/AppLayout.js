import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { NavigationBar } from "expo-navigation-bar";
import { useEffect } from "react";
import { AppState } from "react-native";
export default function AppLayout({ children }) {
  // Hide bottom bar
  const hideNavBar = async () => {
    // Prevent content from moving up when bar is shown
    await NavigationBar.setPositionAsync("absolute");

    // Hide bottom bar
    await NavigationBar.setVisibilityAsync("hidden");

    // Show the bar when user swipes
    await NavigationBar.setBehaviorAsync("overlay-swipe");
  };

  useEffect(() => {
    const handleAppStateChange = (nextAppState) => {
      // If app is being used, hide nav bar
      if (nextAppState === "active") {
        hideNavBar();
      }
    };

    // Subscribe to app state changes
    const appStateSubscription = AppState.addEventListener(
      "change",
      handleAppStateChange
    );

    // Clean up the event listener when the component unmounts
    return () => {
      appStateSubscription.remove();
    };
  }, []);

  return (
    <>
      <LinearGradient
        colors={["#d6d4e0", "#b1adbe", "#88859a", "#7a768d", "#69657e"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: "100%",
        }}
      >
        {children}
      </LinearGradient>
      <StatusBar hidden={true} />
    </>
  );
}
