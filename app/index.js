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

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          flex: 1,
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 20,
        }}
      >
        {cars.slice(0, 2).map((car, index) => (
          <TouchableOpacity
            style={{
              width: deviceWidth * (index === 0 ? 0.43 : 0.42),
              height: deviceHeight * (index === 0 ? 0.3 : 0.32),
              alignItems: "center",
              justifyContent: "center",
              marginTop: index === 0 ? 15 : -5,
              position: "relative",
            }}
            onPress={() => {
              router.push(`/car/${car.slug}`);
            }}
            key={index}
          >
            <View
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <Image
                source={car.mainImage}
                contentFit="contain"
                style={{
                  width: "100%",
                  height: index === 0 ? "95%" : "110%",
                  marginTop: index === 1 ? -20 : -15,
                }}
              />
            </View>
            <View
              style={{
                width: "100%",
                height: "30%",
                alignItems: "center",
                justifyContent: "center",
                marginTop: -10,
                position: "absolute",
                bottom: -40,
              }}
            >
              <car.logoSvgComponent
                width={index === 0 ? "70%" : "90%"}
                height={"100%"}
              />
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <View
        style={{
          flex: 1,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          gap: 35,
          marginVertical: 25,
        }}
      >
        <Image
          source={require("../kgm-uygulama-dosyalar/gorsel/kgm_logo_.png")}
          width={deviceWidth * 1}
          height={deviceWidth * 0.15}
          contentFit="contain"
          style={{
            marginTop: deviceHeight * 0.05,
          }}
        />
        <Image
          source={require("../kgm-uygulama-dosyalar/gorsel/sahsuvaroglu_grup_guvencesiyle.png")}
          width={deviceWidth * 0.225}
          height={deviceWidth * 0.07}
          contentFit="contain"
          style={{
            marginTop: -50,
          }}
        />
      </View>

      <View
        style={{
          flex: 1,
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 20,
          marginTop: -20,
          marginBottom: 40,
        }}
      >
        {cars.slice(2, 4).map((car, index) => (
          <TouchableOpacity
            style={{
              width: deviceWidth * (index === 0 ? 0.45 : 0.45),
              height: deviceHeight * (index === 0 ? 0.32 : 0.32),
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 0,
              position: "relative",
              marginTop: -30,
            }}
            onPress={() => {
              router.push(`/car/${car.slug}`);
            }}
            key={index}
          >
            <View
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <Image
                source={car.mainImage}
                contentFit="contain"
                style={{
                  width: "100%",
                  height: "110%",
                  marginTop: index === 1 ? -20 : -15,
                }}
              />
            </View>
            <View
              style={{
                width: "100%",
                height: "30%",
                alignItems: "center",
                justifyContent: "center",
                marginTop: -20,
                position: "absolute",
                bottom: index === 0 ? -45 : -40,
              }}
            >
              <car.logoSvgComponent
                width={index === 0 ? "75%" : "100%"}
                height={"100%"}
              />
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
