/* Operation Breakout Weapon Case */
// Released: 01 July 2014
// Current Status: Rare Drop

import { allRedMidTierArray } from "../../Guns/red/redMidTier";
import { allRedRiflesArray } from "../../Guns/red/redRifles";
import { butterflyArray } from "../../Knives/butterflyKnife";

let operationBreakoutWeaponCaseReds = [
  ...allRedMidTierArray.filter((gun) => gun.nameGun === "Asiimov"),
  ...allRedRiflesArray.filter((gun) => gun.nameGun === "Cyrex"),
];

let operationBreakoutWeaponCaseKnives = butterflyArray.slice(0, 12);

// Main case object
let operationBreakoutWeaponCase = {
  name: "Operation Breakout Weapon Case",
  releaseDate: "01 July 2014",
  status: "Rare Drop",
  reds: operationBreakoutWeaponCaseReds,
  knives: operationBreakoutWeaponCaseKnives,
  // Later: pinks, purples, blues
};

export { operationBreakoutWeaponCase };
