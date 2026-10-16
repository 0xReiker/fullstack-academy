/* CS:GO Weapon Case 2 */
// Released: 08 November 2013
// Current Status: Rare Drop

import { allRedRiflesArray } from "../../Guns/Red [Covert]/redRifles";
import { bayonetArray } from "../../Knives/bayonetKnife";
import { flipArray } from "../../Knives/flipKnife";
import { gutArray } from "../../Knives/gutKnife";
import { karambitArray } from "../../Knives/karambitKnife";

let csgoWeaponCase2Reds = allRedRiflesArray.filter(
  (gun) => gun.nameGun === "Blood in the Water"
);

let csgoWeaponCase2Knives = [
  ...bayonetArray.slice(0, 12),
  ...flipArray.slice(0, 12),
  ...gutArray.slice(0, 12),
  ...karambitArray.slice(0, 12),
];

// Main case object
let csgoWeaponCase2 = {
  name: "CS:GO Weapon Case 2",
  releaseDate: "08 November 2013",
  status: "Rare Drop",
  reds: csgoWeaponCase2Reds,
  knives: csgoWeaponCase2Knives,
  // Later: pinks, purples, blues
};

export { csgoWeaponCase2 };
