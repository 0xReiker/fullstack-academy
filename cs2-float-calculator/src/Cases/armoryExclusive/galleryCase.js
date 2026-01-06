/* Gallery Case - Armory Exclusive */
// Released: 02 October 2024
// Current Status: Armory Exclusive (2 stars)

import { allRedPistolsArray } from "../../Guns/red/redPistols";
import { allRedRiflesArray } from "../../Guns/red/redRifles";
import { kukriArray } from "../../Knives/kukriKnife";

let galleryCaseReds = [
  ...allRedRiflesArray.filter((gun) => gun.nameGun === "Vaporwave"),
  ...allRedPistolsArray.filter((gun) => gun.nameGun === "Gold Toof"),
];

let galleryCaseKnives = kukriArray.slice(0, 12);

// Main case object
let galleryCase = {
  name: "Gallery Case",
  releaseDate: "02 October 2024",
  status: "Armory Exclusive",
  reds: galleryCaseReds,
  knives: galleryCaseKnives,
  // Later: pinks, purples, blues
};

export { galleryCase };
