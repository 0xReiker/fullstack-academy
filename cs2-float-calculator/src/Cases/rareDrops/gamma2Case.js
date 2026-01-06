/* Gamma 2 Case */
// Released: 18 August 2016
// Current Status: Rare Drop

import { allRedRiflesArray } from "../../Guns/Red [Covert]/redRifles";
import { bayonetArray } from "../../Knives/bayonetKnife";
import { flipArray } from "../../Knives/flipKnife";
import { gutArray } from "../../Knives/gutKnife";
import { karambitArray } from "../../Knives/karambitKnife";

let gamma2CaseReds = allRedRiflesArray.filter(
  (gun) => gun.nameGun === "AK47 Neon Revolution" || gun.nameGun === "Roll Cage"
);

let gamma2CaseKnives = [
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
let gamma2Case = {
  name: "Gamma 2 Case",
  releaseDate: "18 August 2016",
  status: "Rare Drop",
  reds: gamma2CaseReds,
  knives: gamma2CaseKnives,
  // Later: pinks, purples, blues
};

export { gamma2Case };
