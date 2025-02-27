import { Image } from "expo-image";
import * as React from "react";
import { View } from "react-native";
import Svg, { Defs, ClipPath, Path } from "react-native-svg";
import TorresHomeLogoSvg from "../arac_isim_svg/torres_white.svg";
import TorresColorLogoSvg from "../arac_isim_svg/torres_renkli.svg";
import TorresBlackLogoSvg from "../arac_isim_svg/torres.svg";

const TorresHomeLogo = (props) => (
  <TorresHomeLogoSvg
    width={props.width ?? "420.0d"}
    height={props.height ?? "20.0d"}
  />
);

const TorresColorLogo = (props) => (
  <TorresColorLogoSvg
    width={props.width ?? "420.0d"}
    height={props.height ?? "20.0d"}
  />
);

const TorresBlackLogo = (props) => (
  <TorresBlackLogoSvg
    width={props.width ?? "420.0d"}
    height={props.height ?? "20.0d"}
  />
);

export { TorresHomeLogo, TorresColorLogo, TorresBlackLogo };
