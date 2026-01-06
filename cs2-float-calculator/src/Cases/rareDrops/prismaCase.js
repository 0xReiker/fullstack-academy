/* Prisma Case */
// Released: 13 March 2019
// Current Status: Rare Drop

import { allRedPistolsArray } from "../../Guns/red/redPistols";
import { allRedRiflesArray } from "../../Guns/red/redRifles";
import { navajaArray } from "../../Knives/navajaKnife";
import { stilettoArray } from "../../Knives/stilettoKnife";
import { talonArray } from "../../Knives/talonKnife";
import { ursusArray } from "../../Knives/ursusKnife";

let prismaCaseReds = [
  ...allRedRiflesArray.filter((gun) => gun.nameGun === "The Emporer"),
  ...allRedPistolsArray.filter((gun) => gun.nameGun === "Angry Mob"),
];

let prismaCaseKnives = [
  ...navajaArray.slice(18, 22),
  ...navajaArray.slice(30, 34),
  ...stilettoArray.slice(18, 22),
  ...stilettoArray.slice(30, 34),
  ...talonArray.slice(18, 22),
  ...talonArray.slice(30, 34),
  ...ursusArray.slice(18, 22),
  ...ursusArray.slice(30, 34),
];

// Main case object
let prismaCase = {
  name: "Prisma Case",
  releaseDate: "13 March 2019",
  status: "Rare Drop",
  reds: prismaCaseReds,
  knives: prismaCaseKnives,
  // Later: pinks, purples, blues
};

export { prismaCase };
