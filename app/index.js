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
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={require("../kgm-uygulama-dosyalar/gorsel/kgm_logo_.png")}
          width={deviceWidth}
          height={deviceWidth * 0.1}
          contentFit="contain"
        />
      </View>
      <View
        style={{
          flex: 2,
          width: "100%",
          flexDirection: "row",
          gap: 32,
        }}
      >
        {cars.map((car, index) => (
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              gap: 0,
              flexDirection: "column",
            }}
            onPress={() => {
              router.push(`/car/${car.slug}`);
            }}
            key={index}
          >
            <View style={{
              flex: 1,
              width: "100%",
            }}>
              <Image
                source={car.mainImage}
                contentFit="contain"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </View>
            <View style={{
              flex: 1,
              width: "100%",
            }}>
              <car.logoSvgComponent width={"100%"} height={"50%"} />
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
        }}
      >
        <Image
          source={require("../kgm-uygulama-dosyalar/gorsel/sahsuvaroglu_grup_guvencesiyle.png")}
          width={"100%"}
          height={"50%"}
          contentFit="contain"
        />
      </View>
    </View>
  );
}
