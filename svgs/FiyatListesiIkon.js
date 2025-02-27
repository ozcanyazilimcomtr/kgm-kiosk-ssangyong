import * as React from "react";
import FiyatListesiIkonSvg from "../ikonlar/fiyat_liste.svg";

const FiyatListesiIkon = (props) => (
  <FiyatListesiIkonSvg
    width={props.width ?? "800.0d"}
    height={props.height ?? "800.0d"}
  />
);
export default FiyatListesiIkon;
