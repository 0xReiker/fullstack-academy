/* Chroma Case */
// Released: 08 January 2015
// Current Status: Rare Drop

import { allRedRiflesArray } from "../../Guns/Red [Covert]/redRifles";
import { bayonetArray } from "../../Knives/bayonetKnife";
import { flipArray } from "../../Knives/flipKnife";
import { gutArray } from "../../Knives/gutKnife";
import { karambitArray } from "../../Knives/karambitKnife";
import { m9Array } from "../../Knives/m9BayonetKnife";

let chromaCaseReds = allRedRiflesArray.filter(
  (gun) => gun.nameGun === "Chatterbox" || gun.nameGun === "Man O' War"
);

// Knives - To be imported from Knives/
let chromaCaseKnives = [
  ...bayonetArray.slice(13, 17),
  ...bayonetArray.slice(23, 29),
  ...flipArray.slice(13, 17),
  ...flipArray.slice(23, 29),
  ...gutArray.slice(13, 17),
  ...gutArray.slice(23, 29),
  ...karambitArray.slice(13, 17),
  ...karambitArray.slice(23, 29),
  ...m9Array.slice(13, 17),
  ...m9Array.slice(23, 29),
];

// Main case object
let chromaCase = {
  name: "Chroma Case",
  releaseDate: "08 January 2015",
  status: "Rare Drop",
  reds: chromaCaseReds,
  knives: chromaCaseKnives,
  // Later: pinks, purples, blues
};

export { chromaCase };
