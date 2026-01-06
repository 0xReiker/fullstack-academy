/* Revolver Case */
// Released: 08 December 2015
// Current Status: Rare Drop

import { allRedPistolsArray } from "../../Guns/red/redPistols";
import { allRedRiflesArray } from "../../Guns/red/redRifles";
import { bayonetArray } from "../../Knives/bayonetKnife";
import { flipArray } from "../../Knives/flipKnife";
import { gutArray } from "../../Knives/gutKnife";
import { karambitArray } from "../../Knives/karambitKnife";
import { m9Array } from "../../Knives/m9BayonetKnife";

let revolverCaseReds = [
  ...allRedRiflesArray.filter((gun) => gun.nameGun === "Royal Paladin"),
  ...allRedPistolsArray.filter((gun) => gun.nameGun === "R8 Fade"),
];

let revolverCaseKnives = [
  ...bayonetArray.slice(0, 12),
  ...flipArray.slice(0, 12),
  ...gutArray.slice(0, 12),
  ...karambitArray.slice(0, 12),
  ...m9Array.slice(0, 12),
];

// Main case object
let revolverCase = {
  name: "Revolver Case",
  releaseDate: "08 December 2015",
  status: "Rare Drop",
  reds: revolverCaseReds,
  knives: revolverCaseKnives,
  // Later: pinks, purples, blues
};

export { revolverCase };
