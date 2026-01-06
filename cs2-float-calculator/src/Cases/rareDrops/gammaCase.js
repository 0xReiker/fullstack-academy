/* Gamma Case */
// Released: 15 June 2016
// Current Status: Rare Drop

import { allRedPistolsArray } from "../../Guns/Red [Covert]/redPistols";
import { allRedRiflesArray } from "../../Guns/Red [Covert]/redRifles";
import { bayonetArray } from "../../Knives/bayonetKnife";
import { flipArray } from "../../Knives/flipKnife";
import { gutArray } from "../../Knives/gutKnife";
import { karambitArray } from "../../Knives/karambitKnife";

let gammaCaseReds = [
  ...allRedRiflesArray.filter((gun) => gun.nameGun === "Mecha Industries"),
  ...allRedPistolsArray.filter((gun) => gun.nameGun === "Wasteland Rebel"),
];

let gammaCaseKnives = [
  ...bayonetArray.slice(18, 22),
  ...bayonetArray.slice(30, 34),
  ...flipArray.slice(18, 22),
  ...flipArray.slice(30, 34),
  ...gutArray.slice(18, 22),
  ...gutArray.slice(30, 34),
  ...karambitArray.slice(18, 22),
  ...karambitArray.slice(30, 34),
];

// Main case object
let gammaCase = {
  name: "Gamma Case",
  releaseDate: "15 June 2016",
  status: "Rare Drop",
  reds: gammaCaseReds,
  knives: gammaCaseKnives,
  // Later: pinks, purples, blues
};

export { gammaCase };
