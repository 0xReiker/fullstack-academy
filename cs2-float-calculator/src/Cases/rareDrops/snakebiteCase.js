/* Snakebite Case */
// Released: 03 May 2021
// Current Status: Rare Drop

import { allRedPistolsArray } from "../../Guns/red/redPistols";
import { allRedRiflesArray } from "../../Guns/red/redRifles";

let snakebiteCaseReds = [
  ...allRedPistolsArray.filter((gun) => gun.nameGun === "The Traitor"),
  ...allRedRiflesArray.filter((gun) => gun.nameGun === "In Living Color"),
];

// Add in the gloves later
let snakebiteCaseGloves = [];

// Main case object
let snakebiteCase = {
  name: "Snakebite Case",
  releaseDate: "03 May 2021",
  status: "Rare Drop",
  reds: snakebiteCaseReds,
  knives: snakebiteCaseGloves,
  // Later: pinks, purples, blues
};

export { snakebiteCase };
