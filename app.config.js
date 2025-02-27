export default {
  expo: {
    name: "KGM Kiosk",
    slug: "kgm-kios",
    version: "1.0.0",
    orientation: "landscape",
    scheme: "kgm-kios",
    icon: "./app_icon.jpeg",
    userInterfaceStyle: "light",
    newArchEnabled: true,
    androidNavigationBar: {
      visible: "immersive",
    },
    packagerOpts: {
      config: "metro.config.js",
    },
    splash: {
      image: "./assets/splash-icon.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.fcalisan.kgmkios",
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      package: "com.fcalisan.kgmkios",
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    plugins: [
      [
        "expo-font",
        {
          fonts: [
            "./fonts/league_spartan_regular.ttf",
            "./fonts/league_spartan_bold.ttf",
          ],
        },
      ],
      "expo-router",
      "@react-native-tvos/config-tv",
      "expo-video",
    ],
    extra: {
      router: {
        origin: false,
      },
      eas: {
        projectId: "6c2e9ad5-f5aa-4725-a49b-068c1f698a92",
      },
    },
  },
};
