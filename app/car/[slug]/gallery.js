import { View, Text, Dimensions, TouchableOpacity, FlatList, ScrollView } from "react-native";
import { styles } from "../../../style";
import { useLocalSearchParams, router } from "expo-router";
import { Image } from "expo-image";
import { cars } from "../../../data";
import PlayButton from "../../../svgs/PlayButton";
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
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
          width: "100%",
        }}
      >
        <View
          style={{
            width: "100%",
            alignItems: "center",
            marginTop: 8,
            marginBottom: 24,
          }}
        >
          <View
            style={{
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              borderTopWidth: 1.25,
              borderBottomWidth: 1.25,
              borderColor: "#2D293E",
              paddingTop: 8,
              paddingBottom: 8,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontFamily: "league-spartan-regular",
                color: "#2D293E",
              }}
            >
              Renk Seçenekleri
            </Text>
          </View>
          <View
            style={{
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{
                width: "100%",
                height: deviceWidth * 0.15,
              }}
              data={car.colors}
              keyExtractor={(item) => item.name}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={{
                    width: deviceWidth * 0.2,
                    padding: deviceWidth * 0.015,
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                  onPress={() => {
                    router.push(`/car/${slug}/color_item?color=${item.name}`);
                  }}
                >
                  <View
                    style={{
                      width: "100%",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      source={item.image}
                      width={"100%"}
                      height={"100%"}
                      contentFit="cover"
                    />
                  </View>
                  <View
                    style={{
                      width: "100%",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 22,
                        fontFamily: "league-spartan-bold",
                        color: "#2D293E",
                        textAlign: "center",
                      }}
                    >
                      {item.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
        <View
          style={{
            width: "100%",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              borderTopWidth: 1.25,
              borderBottomWidth: 1.25,
              borderColor: "#2D293E",
              paddingTop: 8,
              paddingBottom: 8,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontFamily: "league-spartan-regular",
                color: "#2D293E",
              }}
            >
              Galeri
            </Text>
          </View>
          <View
            style={{
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FlatList
              horizontal
              style={{
                width: "100%",
                marginTop: 8,
                height: deviceWidth * 0.2,
              }}
              data={car.gallery}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  style={{
                    marginRight: 8,
                    width: deviceWidth * 0.2,
                    alignItems: "center",
                    borderRadius: 8,
                    borderWidth: 1,
                    borderColor: "#fff",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                  onPress={() => {
                    router.push(
                      `/car/${slug}/gallery_item?color=${item}&index=${index}`
                    );
                  }}
                >
                  <Image
                    source={item}
                    width={"100%"}
                    height={"100%"}
                    contentFit="cover"
                    style={{
                      borderRadius: 8,
                    }}
                  />
                </TouchableOpacity>
              )}
            />
          </View>
          <View
            style={{
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 8,
            }}
          >
            <FlatList
              horizontal
              style={{
                marginTop: 8,
                marginBottom: 8,
                height: deviceWidth * 0.25,
              }}
              data={car.video}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  style={{
                    marginRight: 8,
                    width: deviceWidth * 0.4,
                    alignItems: "center",
                    borderRadius: 8,
                    borderWidth: 1,
                    borderColor: "#fff",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                  onPress={() => {
                    router.push(
                      `/car/${slug}/video_item?color=${item}&index=${index}`
                    );
                  }}
                >
                  <Image
                    source={item.cover}
                    width={"100%"}
                    height={"100%"}
                    contentFit="fill"
                    style={{
                      borderRadius: 8,
                    }}
                  />
                  <View
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <PlayButton
                      width={deviceWidth * 0.03}
                      height={deviceWidth * 0.03}
                    />
                  </View>
                </TouchableOpacity>
              )}
            />
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
      </ScrollView>

    </View>
  );
}
