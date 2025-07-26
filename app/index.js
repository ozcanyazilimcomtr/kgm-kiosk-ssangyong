import { Image } from "expo-image";
import { router } from "expo-router";
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import { cars } from "../data";

export default function Page() {
  const deviceWidth = Dimensions.get("window").width;
  const deviceHeight = Dimensions.get("window").height;

  // Responsive boyutlandırma - orijinal oranları koruyarak
  const MIN_CARD_WIDTH = 200;
  const MAX_CARD_WIDTH = 400;

  // Ekran boyutuna göre dinamik kart boyutu hesaplama
  const calculateCardSize = () => {
    const baseCardWidth = deviceWidth * 4; // Orijinal oran korundu

    // Min ve max değerler arasında sınırla
    const cardWidth = Math.max(
      MIN_CARD_WIDTH,
      Math.min(MAX_CARD_WIDTH, baseCardWidth)
    );
    const cardHeight = deviceHeight * 0.33; // Orijinal oran korundu

    return { cardWidth, cardHeight };
  };

  const { cardWidth, cardHeight } = calculateCardSize();

  // Araç kartı render fonksiyonu - orijinal mantığı koruyarak
  const renderCarCard = (car, needsSmallSize = false) => {
    if (!car) return null;

    return (
      <TouchableOpacity
        style={{
          width: cardWidth,
          height: cardHeight,
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
        <View
          style={{
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={car.mainImage}
            contentFit="contain"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </View>
        <View
          style={{
            width: "70%", // Orijinal boyut korundu
            height: "25%", // Orijinal oran korundu
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            bottom: -45, // Orijinal konum korundu
          }}
        >
          <car.logoSvgComponent width="100%" height="100%" />
        </View>
      </TouchableOpacity>
    );
  };

  // Actyon modelini bul
  const actyonModel = cars.find((car) => car.name === "Actyon");
  // Torres EVX modelini bul
  const torresEvxModel = cars.find((car) => car.name === "Torres Evx");
  // Diğer araçları filtrele
  const otherCars = cars.filter(
    (car) => car.name !== "Actyon" && car.name !== "Torres Evx"
  );

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: Math.max(80, deviceHeight * 0.1), // Responsive padding
      }}
    >
      {/* Üst sıra: Actyon - Logo - Torres EVX */}
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: Math.max(10, deviceWidth * 0.02), // Responsive padding
          marginTop: 10,
        }}
      >
        {/* Sol: Actyon */}
        {renderCarCard(actyonModel)}

        {/* Orta: Logolar - Orijinal oranları koruyarak */}
        <View
          style={{
            width: cardWidth,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../kgm_logo_birlesik.png")}
            style={{
              width: cardWidth * 1.5, // Orijinal oran korundu
              height: cardWidth * 0.8, // Orijinal oran korundu
            }}
            contentFit="contain"
          />
        </View>

        {/* Sağ: Torres EVX */}
        {renderCarCard(torresEvxModel)}
      </View>

      {/* Alt sıra: Diğer 3 araç */}
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: Math.max(10, deviceWidth * 0.02), // Responsive padding
          marginTop: 20,
        }}
      >
        {renderCarCard(otherCars[0])}
        {renderCarCard(otherCars[1])}
        {renderCarCard(otherCars[2])}
      </View>
    </View>
  );
}

// Responsive stiller
const responsiveStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingVertical: 80,
    paddingHorizontal: 20,
  },
  topRow: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    maxHeight: "45%",
  },
  bottomRow: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    maxHeight: "45%",
  },
  carSlot: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "30%",
  },
  logoSlot: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  carCard: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    borderRadius: 8,
  },
  imageContainer: {
    width: "100%",
    height: "75%",
    alignItems: "center",
    justifyContent: "center",
  },
  carImage: {
    width: "100%",
    height: "100%",
  },
  logoContainer: {
    width: "85%",
    height: "25%",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: -20,
  },
  carLogo: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  mainLogo: {
    resizeMode: "contain",
  },
});
