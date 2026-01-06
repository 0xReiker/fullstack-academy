/* Prisma 2 Case */
// Released: 31 March 2020
// Current Status: Rare Drop

import { allRedPistolsArray } from "../../Guns/red/redPistols";
import { allRedRiflesArray } from "../../Guns/red/redRifles";
import { navajaArray } from "../../Knives/navajaKnife";
import { stilettoArray } from "../../Knives/stilettoKnife";
import { talonArray } from "../../Knives/talonKnife";
import { ursusArray } from "../../Knives/ursusKnife";

let prisma2CaseReds = [
  ...allRedRiflesArray.filter((gun) => gun.nameGun === "Player Two"),
  ...allRedPistolsArray.filter((gun) => gun.nameGun === "Bullet Queen"),
];

let prisma2CaseKnives = [
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
let prisma2Case = {
  name: "Prisma 2 Case",
  releaseDate: "31 March 2020",
  status: "Rare Drop",
  reds: prisma2CaseReds,
  knives: prisma2CaseKnives,
  // Later: pinks, purples, blues
};

export { prisma2Case };
