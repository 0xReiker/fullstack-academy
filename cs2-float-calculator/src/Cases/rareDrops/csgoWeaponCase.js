/* CS:GO Weapon Case */
// Released: 14 August 2013
// Current Status: Rare Drop

import { allRedRiflesArray } from "../../Guns/Red [Covert]/redRifles";
import { bayonetArray } from "../../Knives/bayonetKnife";
import { flipArray } from "../../Knives/flipKnife";
import { gutArray } from "../../Knives/gutKnife";
import { karambitArray } from "../../Knives/karambitKnife";

// Reds (Covert) - To be imported from Guns/Reds/
let csgoWeaponCaseReds = allRedRiflesArray.filter(
  (gun) => gun.nameGun === "Lightning Strike"
);

let csgoWeaponCaseKnives = [
  ...bayonetArray.slice(0, 12),
  ...flipArray.slice(0, 12),
  ...gutArray.slice(0, 12),
  ...karambitArray.slice(0, 12),
];

// Main case object
let csgoWeaponCase = {
  name: "CS:GO Weapon Case",
  releaseDate: "14 August 2013",
  status: "Rare Drop",
  reds: csgoWeaponCaseReds,
  knives: csgoWeaponCaseKnives,
  // Later: pinks, purples, blues
};

export { csgoWeaponCase };
