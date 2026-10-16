/* Falchion Case */
// Released: 26 May 2015
// Current Status: Rare Drop

import { allRedRiflesArray } from "../../Guns/Red [Covert]/redRifles";
import { falchionArray } from "../../Knives/falchionKnife";

let falchionCaseReds = allRedRiflesArray.filter(
  (gun) =>
    gun.nameGun === "Aquamarine Revenge" || gun.nameGun === "AWP Hyper Beast"
);

let falchionCaseKnives = falchionArray.slice(0, 12);

// Main case object
let falchionCase = {
  name: "Falchion Case",
  releaseDate: "26 May 2015",
  status: "Rare Drop",
  reds: falchionCaseReds,
  knives: falchionCaseKnives,
  // Later: pinks, purples, blues
};

export { falchionCase };
