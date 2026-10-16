/* Spectrum 2 Case */
// Released: 14 September 2017
// Current Status: Rare Drop

import { allRedPistolsArray } from "../../Guns/red/redPistols";
import { allRedRiflesArray } from "../../Guns/red/redRifles";
import { bowieArray } from "../../Knives/bowieKnife";
import { butterflyArray } from "../../Knives/butterflyKnife";
import { falchionArray } from "../../Knives/falchionKnife";
import { huntsmanArray } from "../../Knives/huntsmanKnife";
import { shadowDaggersArray } from "../../Knives/shadowDaggers";

let spectrum2CaseReds = [
  ...allRedRiflesArray.filter((gun) => gun.nameGun === "The Empress"),
  ...allRedPistolsArray.filter((gun) => gun.nameGun === "See Ya Later"),
];

let spectrum2CaseKnives = [
  ...bowieArray.slice(18, 22),
  ...bowieArray.slice(30, 34),
  ...butterflyArray.slice(18, 22),
  ...butterflyArray.slice(30, 34),
  ...falchionArray.slice(18, 22),
  ...falchionArray.slice(30, 34),
  ...huntsmanArray.slice(18, 22),
  ...huntsmanArray.slice(30, 34),
  ...shadowDaggersArray.slice(18, 22),
  ...shadowDaggersArray.slice(30, 34),
];

// Main case object
let spectrum2Case = {
  name: "Spectrum 2 Case",
  releaseDate: "14 September 2017",
  status: "Rare Drop",
  reds: spectrum2CaseReds,
  knives: spectrum2CaseKnives,
  // Later: pinks, purples, blues
};

export { spectrum2Case };
