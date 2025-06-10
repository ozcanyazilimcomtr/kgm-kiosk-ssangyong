import { Image } from "expo-image";
import * as React from "react";
import { View } from "react-native";
import Svg, { Defs, ClipPath, Path } from "react-native-svg";
import KorandoWhiteLogoSvg from "../arac_isim_svg/korando_beyaz.svg";
import KorandoColorLogoSvg from "../arac_isim_svg/korando_siyah.svg";

const KorandoWhiteLogo = (props) => (
  <Image
    source={require("../arac_isim_svg/korando-beyaz-logo.png")}
    contentFit="contain"
    style={{
      width: props.width ?? "100%",
      height: props.height ?? "100%",
    }}
  />
);

const KorandoColorLogo = (props) => (
  <Image
    source={require("../arac_isim_svg/korando-siyah-logo.png")}
    contentFit="contain"
    style={{
      width: props.width ?? "100%",
      height: props.height ?? "100%",
    }}
  />
);

export { KorandoWhiteLogo, KorandoColorLogo };
