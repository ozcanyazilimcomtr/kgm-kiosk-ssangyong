import { Image } from "expo-image";
import Svg, { SvgFromUri, SvgFromXml, SvgUri, SvgXml } from "react-native-svg";
import TorresEvxHomeLogoSvg from "../arac_isim_svg/torres_evx_white.svg";
import TorresEvxColorLogoSvg from "../arac_isim_svg/torres_evx_renkli.svg";
import TorresEvxBlackLogoSvg from "../arac_isim_svg/torres_evx.svg";
const TorresEvxHomeLogo = (props) => (
  <TorresEvxHomeLogoSvg
    width={props.width ?? "420.0d"}
    height={props.height ?? "20.0d"}
  />
);

const TorresEvxColorLogo = (props) => (
  <TorresEvxColorLogoSvg
    width={props.width ?? "420.0d"}
    height={props.height ?? "20.0d"}
  />
);

const TorresEvxBlackLogo = (props) => (
  <TorresEvxBlackLogoSvg
    width={props.width ?? "420.0d"}
    height={props.height ?? "20.0d"}
  />
);

export { TorresEvxHomeLogo, TorresEvxColorLogo, TorresEvxBlackLogo };
