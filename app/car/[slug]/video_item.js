import { View, Text, Dimensions, TouchableOpacity, FlatList, ScrollView } from "react-native";
import { styles } from "../../../style";
import { useLocalSearchParams, router } from "expo-router";
import { Image } from "expo-image";
import { cars } from "../../../data";
import { useVideoPlayer, VideoView } from "expo-video";
export default function Page() {
  const { slug, index } = useLocalSearchParams();

  const deviceWidth = Dimensions.get("window").width;

  const car = cars.find((car) => car.slug === slug);
  const image = car.video[index];
  console.log(image.video);
  console.log(index);


  const player = useVideoPlayer(image.video, (player) => {
    player.loop = true;
    player.play();
  });

  return (
    <View>
      <View
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        <VideoView
          style={{
            width: "100%",
            height: "100%",
          }}
          contentFit="fill"
          allowFullscreen={true}
          allowPictureInPicture={true}
          allowMuting={true}
          player={player}
        />
      </View>
      <View
        style={{
          height: "100%",
          width: "100%",
          flexDirection: "column",
          paddingRight: 16,
          paddingLeft: 16,
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
              source={require("../../../kgm-uygulama-dosyalar/gorsel/kgm_gallery_logo.png")}
              width={deviceWidth * 0.15}
              height={deviceWidth * 0.1}
              contentFit="contain"
            />
          </View>

          <View
            style={{
              flex: 1,
              alignItems: "flex-end",
              justifyContent: "center",
            }}
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
                borderColor: "#fff",
                padding: 16,
                borderRadius: 8,
                paddingLeft: 24,
                paddingRight: 24,
              }}
            >
              <Text
                style={{
                  color: "#fff",
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
    </View>
  );
}
