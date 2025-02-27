import { View, Text, Dimensions, TouchableOpacity } from "react-native";
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
        <View style={{ width: "90%" }}>
          <Image
            source={require("../../../kgm-uygulama-dosyalar/gorsel/kgm_logo_w.png")}
            width={deviceWidth * 0.15}
            height={deviceWidth * 0.1}
            contentFit="contain"
          />
        </View>

        <View style={{ width: "10%" }}>
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
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <car.blackLogoSvgComponent
          width={deviceWidth * 0.5}
          height={deviceWidth * 0.1}
        />
      </View>
      <View
        style={{
          flex: 2,
          width: "100%",
          flexDirection: "row",
          gap: 16,
        }}
      >
        <TouchableOpacity
          style={styles.carDetailNavigationButtonView}
          onPress={() => {
            router.push(`/car/${slug}/package_select`);
          }}
        >
          <TeknikDonanimIkon
            width={deviceWidth * 0.1}
            height={deviceWidth * 0.1}
            fill="#fff"
          />
          <Text
            style={{
              color: "#fff",
              fontFamily: "league-spartan-regular",
              textAlign: "center",
            }}
          >
            Donanım ve Teknik Özellikler
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.carDetailNavigationButtonView}
          onPress={() => {
            router.push(`/car/${slug}/gallery`);
          }}
        >
          <GaleriIkon
            width={deviceWidth * 0.1}
            height={deviceWidth * 0.1}
            fill="#fff"
          />
          <Text style={{ color: "#fff", fontFamily: "league-spartan-regular" }}>
            Galeri
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.carDetailNavigationButtonView}
          onPress={() => {
            router.push(`/car/${slug}/price_list`);
          }}
        >
          <FiyatListesiIkon
            width={deviceWidth * 0.1}
            height={deviceWidth * 0.1}
            fill="#fff"
          />
          <Text style={{ color: "#fff", fontFamily: "league-spartan-regular" }}>
            Fiyat Listesi
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.carDetailNavigationButtonView}
          onPress={() => {
            router.push("/service_locations");
          }}
        >
          <KonumIkon width={deviceWidth * 0.1} height={deviceWidth * 0.1} />
          <Text
            style={{
              color: "#fff",
              fontFamily: "league-spartan-regular",
              textAlign: "center",
            }}
          >
            Yetkili Satış ve Servis Noktaları
          </Text>
        </TouchableOpacity>
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
