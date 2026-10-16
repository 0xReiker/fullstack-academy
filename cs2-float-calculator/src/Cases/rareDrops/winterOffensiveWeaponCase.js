/* Winter Offensive Weapon Case */
// Released: 18 December 2013
// Current Status: Rare Drop

import { allRedRiflesArray } from "../../Guns/red/redRifles";
import { allMidTierArray } from "../../Guns/red/redMidTier";
import { bayonetArray } from "../../Knives/bayonetKnife";
import { flipArray } from "../../Knives/flipKnife";
import { gutArray } from "../../Knives/gutKnife";
import { karambitArray } from "../../Knives/karambitKnife";

let winterOffensiveWeaponCaseReds = [
  ...allRedRiflesArray.filter((gun) => gun.nameGun === "M4A4 Asiimov"),
  ...allMidTierArray.filter((gun) => gun.nameGun === "The Kraken"),
];

let winterOffensiveWeaponCaseKnives = [
  ...bayonetArray.slice(0, 12),
  ...flipArray.slice(0, 12),
  ...gutArray.slice(0, 12),
  ...karambitArray.slice(0, 12),
];

// Main case object
let winterOffensiveWeaponCase = {
  name: "Winter Offensive Weapon Case",
  releaseDate: "18 December 2013",
  status: "Rare Drop",
  reds: winterOffensiveWeaponCaseReds,
  knives: winterOffensiveWeaponCaseKnives,
  // Later: pinks, purples, blues
};

export { winterOffensiveWeaponCase };
