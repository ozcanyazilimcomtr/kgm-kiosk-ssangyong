import * as React from "react";
import PlayButtonSvg from "../ikonlar/play_button.svg";

const PlayButton = (props) => (
  <PlayButtonSvg
    width={props.width ?? "800.0d"}
    height={props.height ?? "800.0d"}
  />
);
export default PlayButton;
