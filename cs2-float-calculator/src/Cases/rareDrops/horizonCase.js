/* Horizon Case */
// Released: 02 August 2018
// Current Status: Rare Drop

import { allRedPistolsArray } from "../../Guns/red/redPistols";
import { allRedRiflesArray } from "../../Guns/red/redRifles";
import { navajaArray } from "../../Knives/navajaKnife";
import { stilettoArray } from "../../Knives/stilettoKnife";
import { talonArray } from "../../Knives/talonKnife";
import { ursusArray } from "../../Knives/ursusKnife";

let horizonCaseReds = [
  ...allRedRiflesArray.filter((gun) => gun.nameGun === "Neon Rider"),
  ...allRedPistolsArray.filter((gun) => gun.nameGun === "Code Red"),
];

let horizonCaseKnives = [
  navajaArray.slice(0, 12),
  stilettoArray.slice(0, 12),
  talonArray.slice(0, 12),
  ursusArray.slice(0, 12),
];

// Main case object
let horizonCase = {
  name: "Horizon Case",
  releaseDate: "02 August 2018",
  status: "Rare Drop",
  reds: horizonCaseReds,
  knives: horizonCaseKnives,
  // Later: pinks, purples, blues
};

export { horizonCase };
