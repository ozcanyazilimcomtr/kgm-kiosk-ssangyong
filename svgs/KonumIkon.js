import { Image } from "expo-image";
import * as React from "react";
import { View } from "react-native";
import Svg, { Path, Defs, Pattern, Use } from "react-native-svg";
import ServisKonumIkon from "../ikonlar/servis_konum.svg";

const KonumIkon = (props) => (
  <ServisKonumIkon
    width={props.width ?? "800.0d"}
    height={props.height ?? "800.0d"}
  />
);
export default KonumIkon;
