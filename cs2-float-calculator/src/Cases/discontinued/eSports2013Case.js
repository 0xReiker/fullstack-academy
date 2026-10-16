/* eSports 2013 Case */
// Released: 14 August 2013
// Current Status: Discontinued

import { allRedMidTierArray } from "../../Guns/red/redMidTier";
import { bayonetArray } from "../../Knives/bayonetKnife";
import { flipArray } from "../../Knives/flipKnife";
import { gutArray } from "../../Knives/gutKnife";
import { karambitArray } from "../../Knives/karambitKnife";

let eSports2013CaseReds = allRedMidTierArray.filter(
  (gun) => gun.nameGun === "Death by Kitty"
);

let eSports2013CaseKnives = [
  ...bayonetArray.slice(0, 12),
  ...flipArray.slice(0, 12),
  ...gutArray.slice(0, 12),
  ...karambitArray.slice(0, 12),
];

// Main case object
let eSports2013Case = {
  name: "eSports 2013 Case",
  releaseDate: "14 August 2013",
  status: "Discontinued",
  reds: eSports2013CaseReds,
  knives: eSports2013CaseKnives,
  // Later: pinks, purples, blues
};

export { eSports2013Case };
