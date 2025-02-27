import { Image } from "expo-image";
import * as React from "react";
import { View } from "react-native";
import TeknikDonanimIkonSvg from "../ikonlar/teknik_donanim.svg";

const TeknikDonanimIkon = (props) => (
  <TeknikDonanimIkonSvg width={props.width ?? "800.0d"} height={props.height ?? "800.0d"} />
);
export default TeknikDonanimIkon;
