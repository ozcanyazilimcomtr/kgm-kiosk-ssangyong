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

  // Tüm kartlar için eşit boyut
  const CARD_WIDTH = deviceWidth * 0.32;
  const CARD_HEIGHT = deviceHeight * 0.27;

  // Araç kartı render fonksiyonu
  const renderCarCard = (car, needsSmallSize = false, scales = {small: 0.95, large: 1.15}) => {
    if (!car) return null;

    const imageScale = needsSmallSize ? scales.small : scales.large;

    return (
      <TouchableOpacity
        style={{
          width: CARD_WIDTH,
          height: CARD_HEIGHT,
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          marginBottom: 30,
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
              transform: needsSmallSize ? [{ scale: 0.9 }] : []
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
            bottom: -45,
          }}
        >
          <car.logoSvgComponent width="70%" height="100%" />
        </View>
      </TouchableOpacity>
    );
  };

  // Actyon modelini bul
  const actyonModel = cars.find(car => car.name === "Actyon");
  // Torres EVX modelini bul
  const torresEvxModel = cars.find(car => car.name === "Torres Evx");
  // Diğer araçları filtrele
  const otherCars = cars.filter(car => car.name !== "Actyon" && car.name !== "Torres Evx");

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 150,
      }}
    >
      {/* Üst sıra: Actyon - Logo - Torres EVX */}
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 10,
          marginTop: 10,
        }}
      >
        {/* Sol: Actyon */}
        {renderCarCard(actyonModel, false)}

        {/* Orta: Logolar */}
        <View
          style={{
            width: CARD_WIDTH,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../kgm_logo_birlesik.png")}
            style={{
              width: CARD_WIDTH * 1.5,
              height: CARD_WIDTH * 0.6,
            }}
            contentFit="contain"
          />
        </View>

        {/* Sağ: Torres EVX */}
        {renderCarCard(torresEvxModel, false)}
      </View>

      {/* Alt sıra: Diğer 3 araç */}
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 10,
          marginTop: 20,
        }}
      >
        {renderCarCard(otherCars[0], false)}
        {renderCarCard(otherCars[1], false)}
        {renderCarCard(otherCars[2], false)}
      </View>
    </View>
  );
}
