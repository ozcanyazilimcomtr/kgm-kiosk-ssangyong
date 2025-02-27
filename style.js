import { Dimensions, StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  baseContainer: {
    height: "100%",
    backgroundColor: "#2D2C3E",
  },
  homeScreenLayout: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontFamily: "league-spartan-bold",
  },
  homeLogoView: {
    alignItems: "center",
    justifyContent: "center",
  },
  homeCarListView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 0,
  },
  homeCarView: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 0,
  },
  carDetailNavigationButtonView: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#2D293E",
    padding: 32,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    borderRadius: 8,
  },
});
