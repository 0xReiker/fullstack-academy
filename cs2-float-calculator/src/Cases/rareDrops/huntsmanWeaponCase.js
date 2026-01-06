/* Huntsman Weapon Case */
// Released: 01 May 2014
// Current Status: Rare Drop

import { allRedRiflesArray } from "../../Guns/red/redRifles";
import { huntsmanArray } from "../../Knives/huntsmanKnife";

let huntsmanWeaponCaseReds = allRedRiflesArray.filter(
  (gun) => gun.nameGun === "Desert Strike" || gun.nameGun === "Vulcan"
);

let huntsmanWeaponCaseKnives = huntsmanArray.slice(0, 14);

// Main case object
let huntsmanWeaponCase = {
  name: "Huntsman Weapon Case",
  releaseDate: "01 May 2014",
  status: "Rare Drop",
  reds: huntsmanWeaponCaseReds,
  knives: huntsmanWeaponCaseKnives,
  // Later: pinks, purples, blues
};

export { huntsmanWeaponCase };
