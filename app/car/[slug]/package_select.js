import { View, Text, Dimensions, TouchableOpacity, FlatList } from "react-native";
import { styles } from "../../../style";
import { useLocalSearchParams, router, Redirect } from "expo-router";
import TeknikDonanimIkon from "../../../svgs/TeknikDonanimIkon";
import GaleriIkon from "../../../svgs/GaleriIkon";
import FiyatListesiIkon from "../../../svgs/FiyatListesiIkon";
import KonumIkon from "../../../svgs/KonumIkon";
import { Image } from "expo-image";
import { cars } from "../../../data";
export default function Page() {
  const { slug } = useLocalSearchParams();

  const deviceWidth = Dimensions.get("window").width;

  const car = cars.find((car) => car.slug === slug);

  if(
    car.models.length == 1
  ){
    return <Redirect href={`/car/${slug}/package_detail?itemSlug=${car.models[0].slug}`} />
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: 16,
        paddingRight: 16,
      }}
    >
      <View
        style={{
          flex: 1,
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
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <car.blackLogoSvgComponent
            width={deviceWidth * 0.25}
            height={deviceWidth * 0.1}
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

      <View style={{ flex: 5, width: "50%", alignItems: "center", justifyContent: "center" }}>
        <FlatList
          numColumns={2}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{
            gap: 8,
            marginBottom: 8,
          }}
          data={car.models}
          style={{
            width: "100%",
            height: "100%",
          }}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  router.push(`/car/${slug}/package_detail?itemSlug=${item.slug}`)
                }}
                style={{
                  flex: 1,
                  alignItems: "center",
                  borderWidth: 2,
                  borderColor: "#2D293E",
                  borderRadius: 8,
                }}
              >
                <Image
                  source={item.image}
                  width={deviceWidth * 0.25}
                  height={deviceWidth * 0.15}
                  contentFit="contain"
                />
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: "league-spartan-bold",
                    color: "#2D293E",
                  }}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
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
