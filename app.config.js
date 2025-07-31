export default {
  expo: {
    name: "KGM Kiosk",
    slug: "kgm-kios",
    version: "1.6.4",
    orientation: "landscape",
    scheme: "kgm-kios",
    icon: "./assets/app_icon.jpeg",
    userInterfaceStyle: "light",
    newArchEnabled: true,
    androidNavigationBar: {
      visible: "immersive",
    },
    androidStatusBar: {
      hidden: true,
    },
    splash: {
      image: "./assets/app_icon.jpeg",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.fcalisan.kgmkios",
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/app_icon.jpeg",
        backgroundColor: "#ffffff",
      },
      package: "com.fcalisan.kgmkios",
    },
    web: {
      favicon: "./assets/app_icon.jpeg",
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
      "expo-video",
      [
        "expo-navigation-bar",
        {
          position: "relative",
          visibility: "hidden",
          behavior: "inset-swipe",
        },
      ],
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
