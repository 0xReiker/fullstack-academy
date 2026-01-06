/* Operation Shattered Web Case */
// Released: 19 November 2019
// Current Status: Discontinued

import { allRedMidTierArray } from "../../Guns/red/redMidTier";
import { allRedRiflesArray } from "../../Guns/red/redRifles";
import { nomadArray } from "../../Knives/nomadKnife";
import { paracordArray } from "../../Knives/paracordKnife";
import { skeletonArray } from "../../Knives/skeletonKnife";
import { survivalArray } from "../../Knives/survivalKnife";

let operationShatteredWebCaseReds = [
  ...allRedRiflesArray.filter((gun) => gun.nameGun === "Containment Breach"),
  ...allRedMidTierArray.filter((gun) => gun.nameGun === "Stalker"),
];

let operationShatteredWebCaseKnives = [
  ...nomadArray.slice(0, 12),
  ...paracordArray.slice(0, 12),
  ...skeletonArray.slice(0, 12),
  ...survivalArray.slice(0, 12),
];

// Main case object
let operationShatteredWebCase = {
  name: "Operation Shattered Web Case",
  releaseDate: "19 November 2019",
  status: "Discontinued",
  reds: operationShatteredWebCaseReds,
  knives: operationShatteredWebCaseKnives,
  // Later: pinks, purples, blues
};

export { operationShatteredWebCase };
