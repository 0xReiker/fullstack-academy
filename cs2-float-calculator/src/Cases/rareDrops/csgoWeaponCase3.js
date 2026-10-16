/* CS:GO Weapon Case 3 */
// Released: 12 February 2014
// Current Status: Rare Drop

import { allRedPistolsArray } from "../../Guns/Red [Covert]/redPistols";
import { bayonetArray } from "../../Knives/bayonetKnife";
import { flipArray } from "../../Knives/flipKnife";
import { gutArray } from "../../Knives/gutKnife";
import { karambitArray } from "../../Knives/karambitKnife";

let csgoWeaponCase3Reds = allRedPistolsArray.filter(
  (gun) => gun.nameGun === "Victoria"
);

let csgoWeaponCase3Knives = [
  ...bayonetArray.slice(0, 12),
  ...flipArray.slice(0, 12),
  ...gutArray.slice(0, 12),
  ...karambitArray.slice(0, 12),
];

// Main case object
let csgoWeaponCase3 = {
  name: "CS:GO Weapon Case 3",
  releaseDate: "12 February 2014",
  status: "Rare Drop",
  reds: csgoWeaponCase3Reds,
  knives: csgoWeaponCase3Knives,
  // Later: pinks, purples, blues
};

export { csgoWeaponCase3 };
