/* eSports 2014 Summer Case */
// Released: 10 July 2014
// Current Status: Discontinued

import { allRedRiflesArray } from "../../Guns/red/redRifles";
import { bayonetArray } from "../../Knives/bayonetKnife";
import { flipArray } from "../../Knives/flipKnife";
import { gutArray } from "../../Knives/gutKnife";
import { karambitArray } from "../../Knives/karambitKnife";

let eSports2014SummerCaseReds = allRedRiflesArray.filter(
  (gun) => gun.nameGun === "Jaguar" || gun.nameGun === "Bullet Rain"
);

let eSports2014SummerCaseKnives = [
  ...bayonetArray.slice(0, 12),
  ...flipArray.slice(0, 12),
  ...gutArray.slice(0, 12),
  ...karambitArray.slice(0, 12),
];

// Main case object
let eSports2014SummerCase = {
  name: "eSports 2014 Summer Case",
  releaseDate: "10 July 2014",
  status: "Discontinued",
  reds: eSports2014SummerCaseReds,
  knives: eSports2014SummerCaseKnives,
  // Later: pinks, purples, blues
};

export { eSports2014SummerCase };
