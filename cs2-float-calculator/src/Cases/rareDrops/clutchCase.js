/* Clutch Case */
// Released: 15 February 2018
// Current Status: Rare Drop

import { allRedMidTierArray } from "../../Guns/red/redMidTier";
import { allRedRiflesArray } from "../../Guns/red/redRifles";

let clutchCaseReds = [
  ...allRedRiflesArray.filter((gun) => gun.nameGun === "M4A4 Neo Noir"),
  ...allRedMidTierArray.filter((gun) => gun.nameGun === "Bloodsport"),
];

let clutchCaseGloves = [];

//This case contains GLOVES

// Main case object
let clutchCase = {
  name: "Clutch Case",
  releaseDate: "15 February 2018",
  status: "Rare Drop",
  reds: clutchCaseReds,
  knives: clutchCaseGloves,
  // Later: pinks, purples, blues
};

export { clutchCase };
