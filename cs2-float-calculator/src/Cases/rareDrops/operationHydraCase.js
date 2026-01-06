/* Operation Hydra Case */
// Released: 23 May 2017
// Current Status: Rare Drop

import { allRedPistolsArray } from "../../Guns/red/redPistols";
import { allRedRiflesArray } from "../../Guns/red/redRifles";

let operationHydraCaseReds = [
  ...allRedPistolsArray.filter((gun) => gun.nameGun === "Hyper Beast"),
  ...allRedRiflesArray.filter((gun) => gun.nameGun === "Oni Taiji"),
];

// Need to fill in the Gloves later
let operationHydraCaseGloves = [];

// Main case object
let operationHydraCase = {
  name: "Operation Hydra Case",
  releaseDate: "23 May 2017",
  status: "Rare Drop",
  reds: operationHydraCaseReds,
  knives: operationHydraCaseGloves,
  // Later: pinks, purples, blues
};

export { operationHydraCase };
