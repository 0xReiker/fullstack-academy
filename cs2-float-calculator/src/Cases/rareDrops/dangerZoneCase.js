/* Danger Zone Case */
// Released: 08 December 2018
// Current Status: Rare Drop

import { allRedRiflesArray } from "../../Guns/Red [Covert]/redRifles";
import { navajaArray } from "../../Knives/navajaKnife";
import { stilettoArray } from "../../Knives/stilettoKnife";
import { talonArray } from "../../Knives/talonKnife";
import { ursusArray } from "../../Knives/ursusKnife";

let dangerZoneCaseReds = allRedRiflesArray.filter(
  (gun) => gun.nameGun === "AWP Asiimov" || gun.nameGun === "AWP Neo-Noir"
);

let dangerZoneCaseKnives = [
  ...navajaArray.slice(0, 12),
  ...stilettoArray.slice(0, 12),
  ...talonArray.slice(0, 12),
  ...ursusArray.slice(0, 12),
];

// Main case object
let dangerZoneCase = {
  name: "Danger Zone Case",
  releaseDate: "08 December 2018",
  status: "Rare Drop",
  reds: dangerZoneCaseReds,
  knives: dangerZoneCaseKnives,
  // Later: pinks, purples, blues
};

export { dangerZoneCase };
