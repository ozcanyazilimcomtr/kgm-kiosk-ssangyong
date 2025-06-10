import { StatusBar } from "expo-status-bar";
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useFonts } from "expo-font";
import { styles } from "../style";
import { SvgCssUri } from "react-native-svg/css";
import MussoGrandHomeLogo from "../svgs/MussoGrandHomeLogo";
import { Image } from "expo-image";
import TorresHomeLogo from "../svgs/TorresHomeLogo";
import { cars } from "../data";
import { router } from "expo-router";

export default function Page() {
  const deviceWidth = Dimensions.get("window").width;
  const deviceHeight = Dimensions.get("window").height;

  // Üst sıradaki araçlar için boyutlar
  const TOP_CARD_WIDTH = deviceWidth * 0.35;
  const TOP_CARD_HEIGHT = deviceHeight * 0.22;

  // Alt sıradaki araçlar için daha küçük boyutlar
  const BOTTOM_CARD_WIDTH = deviceWidth * 0.3;
  const BOTTOM_CARD_HEIGHT = deviceHeight * 0.2;

  // Araç kartı render fonksiyonu
  const renderCarCard = (car, isTopRow = false, index = null) => {
    if (!car) return null;

    const cardWidth = isTopRow ? TOP_CARD_WIDTH : BOTTOM_CARD_WIDTH;
    const cardHeight = isTopRow ? TOP_CARD_HEIGHT : BOTTOM_CARD_HEIGHT;

    // Özel boyutlandırma gereken araçlar
    const isFirstCar = index === 0;
    const isMiddleBottomCar = !isTopRow && index === 3;
    const needsSpecialSize = isFirstCar || isMiddleBottomCar;
    const imageScale = needsSpecialSize ? 0.85 : 0.95;

    return (
      <TouchableOpacity
        style={{
          width: cardWidth,
          height: cardHeight,
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          marginBottom: isTopRow ? 35 : 30,
        }}
        onPress={() => {
          router.push(`/car/${car.slug}`);
        }}
        key={car.slug}
      >
        <View style={{
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <Image
            source={car.mainImage}
            contentFit="contain"
            style={{
              width: `${imageScale * 100}%`,
              height: `${imageScale * 100}%`,
              transform: needsSpecialSize ? [{ scale: 0.9 }] : []
            }}
          />
        </View>
        <View
          style={{
            width: "100%",
            height: "25%",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            bottom: isTopRow ? -25 : -25,
          }}
        >

          <car.logoSvgComponent width="70%" height="100%" />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 15,
      }}
    >
      {/* Üst sıra araçlar */}
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-evenly",
          paddingHorizontal: 10,
          marginTop: 10,
        }}
      >
        {renderCarCard(cars[0], true, 0)}
        {renderCarCard(cars[1], true, 1)}
      </View>

      {/* Orta kısım logolar */}
      <View
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          gap: 15,
          marginVertical: 5,
        }}
      >
        <Image
          source={require("../kgm-uygulama-dosyalar/gorsel/kgm_logo_.png")}
          width={deviceWidth * 0.9}
          height={deviceWidth * 0.13}
          contentFit="contain"
        />
        <Image
          source={require("../kgm-uygulama-dosyalar/gorsel/sahsuvaroglu_grup_guvencesiyle.png")}
          width={deviceWidth * 0.2}
          height={deviceWidth * 0.06}
          contentFit="contain"
        />
      </View>

      {/* Alt sıra araçlar */}
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          paddingHorizontal: 5,
        }}
      >
        {renderCarCard(cars[2], false, 2)}
        {renderCarCard(cars[3], false, 3)}
        {renderCarCard(cars[4], false, 4)}
      </View>
    </View>
  );
}
