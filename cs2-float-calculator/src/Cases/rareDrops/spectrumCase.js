/* Spectrum Case */
// Released: 15 March 2017
// Current Status: Rare Drop

import { allRedPistolsArray } from "../../Guns/red/redPistols";
import { allRedRiflesArray } from "../../Guns/red/redRifles";
import { bowieArray } from "../../Knives/bowieKnife";
import { butterflyArray } from "../../Knives/butterflyKnife";
import { falchionArray } from "../../Knives/falchionKnife";
import { huntsmanArray } from "../../Knives/huntsmanKnife";
import { shadowDaggersArray } from "../../Knives/shadowDaggers";

let spectrumCaseReds = [
  ...allRedRiflesArray.filter((gun) => gun.nameGun === "Bloodsport"),
  ...allRedPistolsArray.filter((gun) => gun.nameGun === "USPS Neo Noir"),
];

let spectrumCaseKnives = [
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
let spectrumCase = {
  name: "Spectrum Case",
  releaseDate: "15 March 2017",
  status: "Rare Drop",
  reds: spectrumCaseReds,
  knives: spectrumCaseKnives,
  // Later: pinks, purples, blues
};

export { spectrumCase };
