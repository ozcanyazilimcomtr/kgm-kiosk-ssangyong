import { Image } from "expo-image";
import * as React from "react";
import { View } from "react-native";
import Svg, { Defs, ClipPath, Path } from "react-native-svg";
import MussoGrandHomeLogoSvg from "../arac_isim_svg/mussogrand_beyaz_kirmizi.svg";
import MussoGrandColorLogoSvg from "../arac_isim_svg/mussogrand_siyah_kirmizi.svg";

const MussoGrandHomeLogo = (props) => (
  <MussoGrandHomeLogoSvg
    width={props.width ?? "420.0d"}
    height={props.height ?? "48.0d"}
  />
);

const MussoGrandColorLogo = (props) => (
  <MussoGrandColorLogoSvg
    width={props.width ?? "420.0d"}
    height={props.height ?? "48.0d"}
  />
);

export { MussoGrandHomeLogo, MussoGrandColorLogo };
