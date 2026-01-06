/* Operation Bravo Case */
// Released: 19 September 2013
// Current Status: Rare Drop

import { allRedPistolsArray } from "../../Guns/red/redPistols";
import { allRedRiflesArray } from "../../Guns/red/redRifles";
import { bayonetArray } from "../../Knives/bayonetKnife";
import { flipArray } from "../../Knives/flipKnife";
import { gutArray } from "../../Knives/gutKnife";
import { karambitArray } from "../../Knives/karambitKnife";

let operationBravoCaseRareReds = [
  ...allRedRiflesArray.filter((gun) => gun.nameGun === "Fire Serpent"),
  ...allRedPistolsArray.filter((gun) => gun.nameGun === "Golden Koi"),
];

let operationBravoCaseRareKnives = [
  ...bayonetArray.slice(0, 12),
  ...gutArray.slice(0, 12),
  ...flipArray.slice(0, 12),
  ...karambitArray.slice(0, 12),
];

// Main case object
let operationBravoCaseRare = {
  name: "Operation Bravo Case",
  releaseDate: "19 September 2013",
  status: "Rare Drop",
  reds: operationBravoCaseRareReds,
  knives: operationBravoCaseRareKnives,
  // Later: pinks, purples, blues
};

export { operationBravoCaseRare };
