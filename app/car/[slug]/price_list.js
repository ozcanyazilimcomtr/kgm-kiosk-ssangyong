import { View, Text, Dimensions, TouchableOpacity, FlatList } from "react-native";
import { styles } from "../../../style";
import { useLocalSearchParams, router } from "expo-router";
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

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
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
      <View
        style={{
          flex: 2,
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
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
      <View style={{ width: "100%", flex: 3 }}>
        <View style={{ marginBottom: 16 }}>
          <Text style={{ fontSize: 24, fontFamily: "league-spartan-bold" }}>
            {car.name}
          </Text>
        </View>
        <FlatList
          data={car.prices}
          ListHeaderComponent={() => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    flex: 1,
                    alignItems: "flex-start",
                    justifyContent: "center",
                    borderWidth: 1,
                    borderColor: "white",
                    padding: 6,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: "league-spartan-regular",
                    }}
                  >
                    Model
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    borderWidth: 1,
                    borderColor: "white",
                    padding: 6,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: "league-spartan-regular",
                    }}
                  >
                    GSR 2 Donanımlı Kampanyalı Anahtar Teslim Tavsiye Edilen
                    Liste Fiyatı
                  </Text>
                </View>
              </View>
            );
          }}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    flex: 1,
                    alignItems: "flex-start",
                    justifyContent: "center",
                    borderWidth: 1,
                    borderColor: "white",
                    padding: 6,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      color: "white",
                      fontFamily: "league-spartan-regular",
                    }}
                  >
                    {item.model}
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    borderWidth: 1,
                    borderColor: "white",
                    padding: 6,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      color: "white",
                      fontFamily: "league-spartan-regular",
                    }}
                  >
                    ₺{item.price}
                  </Text>
                </View>
              </View>
            );
          }}
        />
        <View style={{ marginTop: 4 }}>
          <Text
            style={{
              fontSize: 18,
              textAlign: "center",
              color: "#fff",
              fontFamily: "league-spartan-regular",
            }}
          >
            Tavsiye edilen kampanyalı anahtar teslim fiyatlarına ÖTV, KDV ,MTV,
            Trafik Tescil Masrafları Dahil Olup, Trafik Sigortası Masrafları
            Dahil Değildir.
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          width: "100%",
          alignItems: "flex-end",
          justifyContent: "center",
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
