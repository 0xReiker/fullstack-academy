/* Shadow Case */
// Released: 17 September 2015
// Current Status: Rare Drop

import { allRedPistolsArray } from "../../Guns/red/redPistols";
import { allRedRiflesArray } from "../../Guns/red/redRifles";
import { shadowDaggersArray } from "../../Knives/shadowDaggers";

let shadowCaseReds = [
  ...allRedPistolsArray.filter((gun) => gun.nameGun === "Kill Confirmed"),
  ...allRedRiflesArray.filter((gun) => gun.nameGun === "Golden Coil"),
];

let shadowCaseKnives = shadowDaggersArray.slice(0, 12);

// Main case object
let shadowCase = {
  name: "Shadow Case",
  releaseDate: "17 September 2015",
  status: "Rare Drop",
  reds: shadowCaseReds,
  knives: shadowCaseKnives,
  // Later: pinks, purples, blues
};

export { shadowCase };
