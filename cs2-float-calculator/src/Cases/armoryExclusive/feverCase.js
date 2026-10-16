/* Fever Case - Armory Exclusive */
// Released: 31 March 2025
// Current Status: Armory Exclusive (2 stars)

import { allRedRiflesArray } from "../../Guns/red/redRifles";
import { nomadArray } from "../../Knives/nomadKnife";
import { paracordArray } from "../../Knives/paracordKnife";
import { skeletonArray } from "../../Knives/skeletonKnife";
import { survivalArray } from "../../Knives/survivalKnife";

let feverCaseReds = allRedRiflesArray.filter(
  (gun) => gun.nameGun === "AWP Printstream" || gun.nameGun === "Bad Trip"
);

let feverCaseKnives = [
  ...nomadArray.slice(13, 17),
  ...nomadArray.slice(23, 29),
  ...paracordArray.slice(13, 17),
  ...paracordArray.slice(23, 29),
  ...skeletonArray.slice(13, 17),
  ...skeletonArray.slice(23, 29),
  ...survivalArray.slice(13, 17),
  ...survivalArray.slice(23, 29),
];

// Main case object
let feverCase = {
  name: "Fever Case",
  releaseDate: "31 March 2025",
  status: "Armory Exclusive",
  reds: feverCaseReds,
  knives: feverCaseKnives,
  // Later: pinks, purples, blues
};

export { feverCase };
