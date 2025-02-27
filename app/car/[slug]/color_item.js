import { View, Text, Dimensions, TouchableOpacity, FlatList, ScrollView } from "react-native";
import { styles } from "../../../style";
import { useLocalSearchParams, router } from "expo-router";
import { Image } from "expo-image";
import { cars } from "../../../data";
export default function Page() {
  const { slug } = useLocalSearchParams();
  const { color } = useLocalSearchParams();

  const deviceWidth = Dimensions.get("window").width;

  const car = cars.find((car) => car.slug === slug);
  const carColor = car.colors.find((x) => x.name === color);
  return (
    <View
      style={{
        height: "100%",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        paddingLeft: 16,
        paddingRight: 16,
      }}
    >
      <View
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      >
        <Image
          source={carColor.image}
          width={"100%"}
          style={{
            position: "absolute",
            height: "100%",
            left: 0,
            right: 0,
            bottom: 0,
          }}
          contentFit="cover"
        />
      </View>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../../../kgm-uygulama-dosyalar/gorsel/kgm_logo_w.png")}
            width={deviceWidth * 0.15}
            height={deviceWidth * 0.1}
            contentFit="contain"
          />
        </View>

        <View
          style={{ flex: 1, alignItems: "flex-end", justifyContent: "center" }}
        >
          <TouchableOpacity
            onPress={() => {
              router.back();
            }}
            style={{
              alignItems: "center",
              borderWidth: 2,
              position: "absolute",
              zIndex: 1000,
              borderColor: "#2D293E",
              padding: 16,
              borderRadius: 8,
              paddingLeft: 24,
              paddingRight: 24,
            }}
          >
            <Text
              style={{
                color: "#2D293E",
                fontSize: 16,
                fontFamily: "league-spartan-regular",
              }}
            >
              Geri
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          width: "100%",
          alignItems: "flex-end",
          justifyContent: "flex-end",
        }}
      >
        <Image
          source={require("../../../kgm-uygulama-dosyalar/gorsel/sahsuvaroglu_grup_logo.png")}
          width={deviceWidth * 0.15}
          height={deviceWidth * 0.1}
          contentFit="contain"
        />
      </View>
    </View>
  );
}
