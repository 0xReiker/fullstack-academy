/* eSports 2013 Winter Case */
// Released: 18 December 2013
// Current Status: Discontinued

import { allRedRiflesArray } from "../../Guns/red/redRifles";
import { bayonetArray } from "../../Knives/bayonetKnife";
import { flipArray } from "../../Knives/flipKnife";
import { gutArray } from "../../Knives/gutKnife";
import { karambitArray } from "../../Knives/karambitKnife";

// Reds (Covert) - To be imported from Guns/Reds/
let eSports2013WinterCaseReds = allRedRiflesArray.filter(
  (gun) => gun.nameGun === "X-Ray"
);

let eSports2013WinterCaseKnives = [
  ...bayonetArray.slice(0, 12),
  ...flipArray.slice(0, 12),
  ...gutArray.slice(0, 12),
  ...karambitArray.slice(0, 12),
];

// Main case object
let eSports2013WinterCase = {
  name: "eSports 2013 Winter Case",
  releaseDate: "18 December 2013",
  status: "Discontinued",
  reds: eSports2013WinterCaseReds,
  knives: eSports2013WinterCaseKnives,
  // Later: pinks, purples, blues
};

export { eSports2013WinterCase };
