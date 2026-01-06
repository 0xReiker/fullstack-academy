/* Fracture Case */
// Released: 06 August 2020
// Current Status: Rare Drop

import { allRedPistolsArray } from "../../Guns/Red [Covert]/redPistols";
import { allRedRiflesArray } from "../../Guns/Red [Covert]/redRifles";
import { nomadArray } from "../../Knives/nomadKnife";
import { paracordArray } from "../../Knives/paracordKnife";
import { skeletonArray } from "../../Knives/skeletonKnife";
import { survivalArray } from "../../Knives/survivalKnife";

let fractureCaseReds = [
  ...allRedRiflesArray.filter((gun) => gun.nameGun === "Legion of Anubis"),
  ...allRedPistolsArray.filter(
    (gun) => gun.nameGun === "Desert Eagle Printstream"
  ),
];

let fractureCaseKnives = [
  ...nomadArray.slice(0, 12),
  ...paracordArray.slice(0, 12),
  ...skeletonArray.slice(0, 12),
  ...survivalArray.slice(0, 12),
];

// Main case object
let fractureCase = {
  name: "Fracture Case",
  releaseDate: "06 August 2020",
  status: "Rare Drop",
  reds: fractureCaseReds,
  knives: fractureCaseKnives,
  // Later: pinks, purples, blues
};

export { fractureCase };
