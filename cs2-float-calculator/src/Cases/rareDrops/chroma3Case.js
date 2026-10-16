/* Chroma 3 Case */
// Released: 27 April 2016
// Current Status: Rare Drop

import { allRedRiflesArray } from "../../Guns/Red [Covert]/redRifles";
import { allRedMidTierArray } from "../../Guns/Red [Covert]/redMidTier";
import { bayonetArray } from "../../Knives/bayonetKnife";
import { flipArray } from "../../Knives/flipKnife";
import { gutArray } from "../../Knives/gutKnife";
import { karambitArray } from "../../Knives/karambitKnife";
import { m9Array } from "../../Knives/m9BayonetKnife";

let chroma3CaseReds = [
  ...allRedRiflesArray.filter((gun) => gun.nameGun === "Chanticos Fire"),
  ...allRedMidTierArray.filter((gun) => gun.nameGun === "Judgement of Anubis"),
];

// Knives - To be imported from Knives/
let chroma3CaseKnives = [
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
let chroma3Case = {
  name: "Chroma 3 Case",
  releaseDate: "27 April 2016",
  status: "Rare Drop",
  reds: chroma3CaseReds,
  knives: chroma3CaseKnives,
  // Later: pinks, purples, blues
};

export { chroma3Case };
