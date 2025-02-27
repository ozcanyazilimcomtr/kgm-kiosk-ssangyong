import { Image } from "expo-image";
import * as React from "react";
import { View } from "react-native";
import GaleriIkonSvg from "../ikonlar/galeri.svg";

const GaleriIkon = (props) => (
  <GaleriIkonSvg
    width={props.width ?? "800.0d"}
    height={props.height ?? "800.0d"}
  />

);
export default GaleriIkon;
