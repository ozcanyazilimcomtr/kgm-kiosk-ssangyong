import { View, Text, Dimensions, TouchableOpacity, FlatList, ScrollView } from "react-native";
import { styles } from "../../../style";
import { useLocalSearchParams, router, Redirect } from "expo-router";
import TeknikDonanimIkon from "../../../svgs/TeknikDonanimIkon";
import GaleriIkon from "../../../svgs/GaleriIkon";
import FiyatListesiIkon from "../../../svgs/FiyatListesiIkon";
import KonumIkon from "../../../svgs/KonumIkon";
import { Image } from "expo-image";
import { cars } from "../../../data";
import { useState } from "react";
import TeknikListe from "../../../component/teknik_liste";
import DonanimListe from "../../../component/donanim_liste";
export default function Page() {
  const { slug, itemSlug } = useLocalSearchParams();

  const deviceWidth = Dimensions.get("window").width;

  const car = cars.find((car) => car.slug === slug);
  const item = car.models.find((model) => model.slug === itemSlug);
  const [showPackageDetail, setShowPackageDetail] = useState("teknik");

  return (
    <View
      style={{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: 16,
        paddingRight: 16,
      }}
    >
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

      <ScrollView
        style={{
          width: "100%",
        }}
      >
        <View
          style={{
            flex: 1,
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            gap: 16,
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: "flex-start",
              justifyContent: "flex-start",
              height: deviceWidth * 0.25,
            }}
          >
            <Image
              source={car.mainImage}
              width="100%"
              height="100%"
              contentFit="contain"
            />
          </View>
          <View
            style={{
              flex: 1,
              alignItems: "flex-start",
              justifyContent: "flex-start",
              marginBottom: 16,
            }}
          >
            <Text
              style={{
                fontSize: 24,
                fontFamily: "league-spartan-bold",
                color: "#2D293E",
              }}
            >
              {item.name}
            </Text>
            {item.desc_item.map((item, index) => {
              return (
                <Text
                  key={index}
                  style={{
                    fontSize: 16,
                    fontFamily: "league-spartan-regular",
                    color: "#2D293E",
                  }}
                >
                  {"\u2022"} {item}
                </Text>
              );
            })}
            <Text
              style={{
                marginTop: 16,
                fontSize: 16,
                fontFamily: "league-spartan-bold",
                color: "#2D293E",
              }}
            >
              {item.desc}
            </Text>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            onPress={() => setShowPackageDetail("teknik")}
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#302C4D",
              borderRadius: 8,
              padding: 16,
              borderWidth: showPackageDetail === "teknik" ? 3 : 0,
              borderColor: "#AFA8F1",
            }}
          >
            <Text
              style={{
                color: "#AFA8F1",
                fontSize: 16,
                fontFamily: "league-spartan-regular",
              }}
            >
              Teknik Özellikler
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setShowPackageDetail("donanim")}
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#302C4D",
              borderRadius: 8,
              padding: 16,
              borderWidth: showPackageDetail === "donanim" ? 3 : 0,
              borderColor: "#AFA8F1",
            }}
          >
            <Text
              style={{
                color: "#AFA8F1",
                fontSize: 16,
                fontFamily: "league-spartan-regular",
              }}
            >
              Donanım Özellikleri
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 1,
            width: "100%",
          }}
        >
          {showPackageDetail === "teknik" && (
            <TeknikListe ozellikler={item.technic_properties} />
          )}
          {showPackageDetail === "donanim" && (
            <DonanimListe ozellikler={item.hardware_properties} />
          )}
        </View>

        <View
          style={{
            flex: 1,
            width: "100%",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            paddingBottom: deviceWidth * 0.075,
          }}
        >
          <Image
            source={require("../../../kgm-uygulama-dosyalar/gorsel/sahsuvaroglu_grup_logo.png")}
            width={deviceWidth * 0.15}
            height={deviceWidth * 0.1}
            contentFit="contain"
          />
        </View>
      </ScrollView>
    </View>
  );
}
