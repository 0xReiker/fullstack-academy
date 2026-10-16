/* Operation Wildfire Case */
// Released: 17 February 2016
// Current Status: Rare Drop

import { allRedRiflesArray } from "../../Guns/red/redRifles";
import { bowieArray } from "../../Knives/bowieKnife";

let operationWildfireCaseReds = allRedRiflesArray.filter(
  (gun) => gun.nameGun === "Fuel Injector" || gun.nameGun === "The Battlestar"
);

let operationWildfireCaseKnives = bowieArray.slice(0, 12);

// Main case object
let operationWildfireCase = {
  name: "Operation Wildfire Case",
  releaseDate: "17 February 2016",
  status: "Rare Drop",
  reds: operationWildfireCaseReds,
  knives: operationWildfireCaseKnives,
  // Later: pinks, purples, blues
};

export { operationWildfireCase };
