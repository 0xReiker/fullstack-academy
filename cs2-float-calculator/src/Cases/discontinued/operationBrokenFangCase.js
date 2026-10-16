/* Operation Broken Fang Case */
// Released: 03 December 2020
// Current Status: Discontinued

import { allRedPistolsArray } from "../../Guns/red/redPistols";
import { allRedRiflesArray } from "../../Guns/red/redRifles";

let operationBrokenFangCaseReds = [
  ...allRedRiflesArray.filter((gun) => gun.nameGun === "M4A1-S Printstream"),
  ...allRedPistolsArray.filter((gun) => gun.nameGun === "Glock Neo Noir"),
];

// Gloves to be added later
let operationBrokenFangCaseGloves = [
  // Gloves
];

// Main case object
let operationBrokenFangCase = {
  name: "Operation Broken Fang Case",
  releaseDate: "03 December 2020",
  status: "Discontinued",
  reds: operationBrokenFangCaseReds,
  knives: operationBrokenFangCaseGloves,
  // Later: pinks, purples, blues
};

export { operationBrokenFangCase };
