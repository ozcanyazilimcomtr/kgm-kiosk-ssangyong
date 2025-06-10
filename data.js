import ActyonHomeLogo from "./svgs/ActyonHomeLogo";
import { MussoGrandColorLogo, MussoGrandHomeLogo } from "./svgs/MussoGrandHomeLogo";
import { TorresColorLogo, TorresHomeLogo, TorresBlackLogo } from "./svgs/TorresHomeLogo";
import { KorandoWhiteLogo, KorandoColorLogo } from "./svgs/KorandoHomeLogo";
import { TorresEvxColorLogo, TorresEvxHomeLogo, TorresEvxBlackLogo } from "./svgs/TorresEvxHomeLogo";
import { torresColors, torresGallery, torresModels, torresPrices, torresVideo } from "./torres_model_data";
import { torresEvxColors, torresEvxGallery, torresEvxModels, torresEvxPrices, torresEvxVideo } from "./torres_evx_model_data";
import { actyonColors, actyonGallery, actyonModels, actyonPrices, actyonVideo } from "./actyon_model_data";
import { mussoGrandColors, mussoGrandModels, mussoGrandPrices, mussoGrandGallery, mussoGrandVideo } from "./musso_grand_model_data";
import { korandoColors, korandoGallery, korandoModels, korandoPrices, korandoVideo } from "./korando_model_data";
export const cars = [
  {
    name: "Torres",
    mainImage: require("./torres_ana_gorsel.png"),
    logoSvgComponent: TorresHomeLogo,
    colorLogoSvgComponent: TorresColorLogo,
    blackLogoSvgComponent: TorresBlackLogo,
    slug: "torres_3",
    models: torresModels,
    prices: torresPrices,
    colors: torresColors,
    gallery: torresGallery,
    video: torresVideo,
  },
  {
    name: "Torres Evx",
    mainImage: require("./torres_evx_ana_gorsel.png"),
    logoSvgComponent: TorresEvxHomeLogo,
    colorLogoSvgComponent: TorresEvxColorLogo,
    blackLogoSvgComponent: TorresEvxBlackLogo,
    slug: "torres_3_evx",
    models: torresEvxModels,
    prices: torresEvxPrices,
    colors: torresEvxColors,
    gallery: torresEvxGallery,
    video: torresEvxVideo,
  },
  {
    name: "Actyon",
    mainImage: require("./kgm-uygulama-dosyalar/actyon_1.png"),
    logoSvgComponent: ActyonHomeLogo,
    colorLogoSvgComponent: ActyonHomeLogo,
    blackLogoSvgComponent: ActyonHomeLogo,
    slug: "actyon",
    models: actyonModels,
    prices: actyonPrices,
    colors: actyonColors,
    gallery: actyonGallery,
    video: actyonVideo,
  },
  {
    name: "Musso Grand",
    mainImage: require("./musso_grand_ana_gorsel.png"),
    logoSvgComponent: MussoGrandHomeLogo,
    colorLogoSvgComponent: MussoGrandColorLogo,
    blackLogoSvgComponent: MussoGrandColorLogo,
    slug: "musso_grand",
    models: mussoGrandModels,
    prices: mussoGrandPrices,
    colors: mussoGrandColors,
    gallery: mussoGrandGallery,
    video: mussoGrandVideo,
  },
  {
    name: "Korando",
    mainImage: require("./korando_ana_gorsel.png"),
    logoSvgComponent: KorandoWhiteLogo,
    colorLogoSvgComponent: KorandoWhiteLogo,
    blackLogoSvgComponent: KorandoColorLogo,
    slug: "korando",
    models: korandoModels,
    prices: korandoPrices,
    colors: korandoColors,
    gallery: korandoGallery,
    video: korandoVideo,
  },
];
