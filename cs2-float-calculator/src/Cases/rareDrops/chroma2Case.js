/* Chroma 2 Case */
// Released: 15 April 2015
// Current Status: Rare Drop

import { allRedRiflesArray } from "../../Guns/red/redRifles";
import { allRedMidTierArray } from "../../Guns/red/redMidTier";
import { bayonetArray } from "../../Knives/bayonetKnife";
import { flipArray } from "../../Knives/flipKnife";
import { gutArray } from "../../Knives/gutKnife";
import { karambitArray } from "../../Knives/karambitKnife";
import { m9Array } from "../../Knives/m9BayonetKnife";

// Reds (Covert) - To be imported from Guns/Reds/
let chroma2CaseReds = [
  ...allRedRiflesArray.filter((gun) => gun.nameGun === "Hyper Beast"),
  ...allRedMidTierArray.filter((gun) => gun.nameGun === "Neon Rider"),
];

let chroma2CaseKnives = [
  ...bayonetArray.slice(13, 17),
  ...bayonetArray.slice(23, 29),
  ...flipArray.slice(13, 17),
  ...flipArray.slice(23, 29),
  ...gutArray.slice(13, 17),
  ...gutArray.slice(23, 29),
  ...karambitArray.slice(13, 17),
  ...karambitArray.slice(23, 29),
  ...m9Array.slice(13, 17),
  ...m9Array.slice(23, 29),
];

// Main case object
let chroma2Case = {
  name: "Chroma 2 Case",
  releaseDate: "15 April 2015",
  status: "Rare Drop",
  reds: chroma2CaseReds,
  knives: chroma2CaseKnives,
  // Later: pinks, purples, blues
};

export { chroma2Case };
