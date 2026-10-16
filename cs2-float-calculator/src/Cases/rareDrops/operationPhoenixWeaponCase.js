/* Operation Phoenix Weapon Case */
// Released: 20 February 2014
// Current Status: Rare Drop

import { allRedRiflesArray } from "../../Guns/red/redRifles";
import { bayonetArray } from "../../Knives/bayonetKnife";
import { flipArray } from "../../Knives/flipKnife";
import { gutArray } from "../../Knives/gutKnife";
import { karambitArray } from "../../Knives/karambitKnife";

let operationPhoenixWeaponCaseRareReds = allRedRiflesArray.filter(
  (gun) => gun.nameGun === "AWP Asiimov" || gun.nameGun === "Chameleon"
);

let operationPhoenixWeaponCaseRareKnives = [
  ...bayonetArray.slice(0, 12),
  ...flipArray.slice(0, 12),
  ...gutArray.slice(0, 12),
  ...karambitArray.slice(0, 12),
];

// Main case object
let operationPhoenixWeaponCaseRare = {
  name: "Operation Phoenix Weapon Case",
  releaseDate: "20 February 2014",
  status: "Rare Drop",
  reds: operationPhoenixWeaponCaseRareReds,
  knives: operationPhoenixWeaponCaseRareKnives,
  // Later: pinks, purples, blues
};

export { operationPhoenixWeaponCaseRare };
