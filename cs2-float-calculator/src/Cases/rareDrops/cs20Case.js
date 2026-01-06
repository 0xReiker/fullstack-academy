import { allRedRiflesArray } from "../../Guns/Red [Covert]/redRifles.js";
import { classicArray } from "../../Knives/classicKnife.js";

/* CS20 Case */
// Released: 18 October 2019
// Current Status: Rare Drop

// Reds (Covert) - To be imported from Guns/Reds/
let cs20CaseReds = allRedRiflesArray.filter(
  (gun) => gun.nameGun === "Wildfire" || gun.nameGun === "Commemoration"
);

// Knives - To be imported from Knives/
let cs20CaseKnives = classicArray.slice(0, 13);

// Main case object
let cs20Case = {
  name: "CS20 Case",
  releaseDate: "18 October 2019",
  status: "Rare Drop",
  reds: cs20CaseReds,
  knives: cs20CaseKnives,
  // Later: pinks, purples, blues
};

export { cs20Case };
