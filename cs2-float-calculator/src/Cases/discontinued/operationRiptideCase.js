/* Operation Riptide Case */
// Released: 21 September 2021
// Current Status: Discontinued

import { allRedPistolsArray } from "../../Guns/red/redPistols";
import { allRedRiflesArray } from "../../Guns/red/redRifles";
import { bowieArray } from "../../Knives/bowieKnife";
import { butterflyArray } from "../../Knives/butterflyKnife";
import { falchionArray } from "../../Knives/falchionKnife";
import { huntsmanArray } from "../../Knives/huntsmanKnife";
import { shadowDaggersArray } from "../../Knives/shadowDaggers";

let operationRiptideCaseReds = [
  ...allRedRiflesArray.filter((gun) => gun.nameGun === "Leet Museo"),
  ...allRedPistolsArray.filter((gun) => gun.nameGun === "Ocean Drive"),
];

let operationRiptideCaseKnives = [
  ...bowieArray.slice(18, 22),
  ...bowieArray.slice(30, 34),
  ...butterflyArray.slice(18, 22),
  ...butterflyArray.slice(30, 34),
  ...falchionArray.slice(18, 22),
  ...falchionArray.slice(30, 34),
  ...huntsmanArray.slice(18, 22),
  ...huntsmanArray.slice(30, 34),
  ...shadowDaggersArray.slice(18, 22),
  ...shadowDaggersArray.slice(30, 34),
];

// Main case object
let operationRiptideCase = {
  name: "Operation Riptide Case",
  releaseDate: "21 September 2021",
  status: "Discontinued",
  reds: operationRiptideCaseReds,
  knives: operationRiptideCaseKnives,
  // Later: pinks, purples, blues
};

export { operationRiptideCase };
