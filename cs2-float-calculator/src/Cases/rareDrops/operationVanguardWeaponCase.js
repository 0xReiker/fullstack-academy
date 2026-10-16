/* Operation Vanguard Weapon Case */
// Released: 11 November 2014
// Current Status: Rare Drop

import { allRedPistolsArray } from "../../Guns/red/redPistols";
import { allRedRiflesArray } from "../../Guns/red/redRifles";
import { bayonetArray } from "../../Knives/bayonetKnife";
import { flipArray } from "../../Knives/flipKnife";
import { gutArray } from "../../Knives/gutKnife";
import { karambitArray } from "../../Knives/karambitKnife";

let operationVanguardWeaponCaseReds = [
  ...allRedRiflesArray.filter((gun) => gun.nameGun === "Wasteland Rebel"),
  ...allRedPistolsArray.filter((gun) => gun.nameGun === "Fire Elemental"),
];

let operationVanguardWeaponCaseKnives = [
  ...bayonetArray.slice(0, 12),
  ...flipArray.slice(0, 12),
  ...gutArray.slice(0, 12),
  ...karambitArray.slice(0, 12),
];

// Main case object
let operationVanguardWeaponCase = {
  name: "Operation Vanguard Weapon Case",
  releaseDate: "11 November 2014",
  status: "Rare Drop",
  reds: operationVanguardWeaponCaseReds,
  knives: operationVanguardWeaponCaseKnives,
  // Later: pinks, purples, blues
};

export { operationVanguardWeaponCase };
