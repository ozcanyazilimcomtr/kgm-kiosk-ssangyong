import { Image } from "expo-image";
import { router } from "expo-router";
import {
  Dimensions,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ServiceLocationItem from "../component/service_location_item";
import { services } from "../service_data";

export default function Page() {
  const deviceWidth = Dimensions.get("window").width;

  console.log(services.length);

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
            source={require("../kgm-uygulama-dosyalar/gorsel/kgm_logo_w.png")}
            width={deviceWidth * 0.15}
            height={deviceWidth * 0.1}
            contentFit="contain"
          />
        </View>

        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text
            style={{
              color: "#2D293E",
              fontSize: deviceWidth * 0.025,
              fontFamily: "league-spartan-bold",
            }}
          >
            SATIŞ VE SERVİS
          </Text>
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
      <View style={{ width: "100%", flex: 5 }}>
        <FlatList
          data={services}
          contentContainerStyle={{
            flexGrow: 1,
            gap: 12,
          }}
          renderItem={({ item }) => {
            return <ServiceLocationItem location={item} />;
          }}
        />
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
          source={require("../kgm-uygulama-dosyalar/gorsel/sahsuvaroglu_grup_logo.png")}
          width={deviceWidth * 0.15}
          height={deviceWidth * 0.1}
          contentFit="contain"
        />
      </View>
    </View>
  );
}
