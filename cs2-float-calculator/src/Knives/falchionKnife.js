/* CS2 Falchion Knives */

// Constructor for Falchion Knives
function knifeFalchion(nameKnife, minKnifeFloat, maxKnifeFloat, price) {
  this.nameKnife = nameKnife;
  this.minKnifeFloat = minKnifeFloat;
  this.maxKnifeFloat = maxKnifeFloat;
  this.price = price || null;
}

//Creation of all Base 13 falchion knives
let falchionVanilla = new knifeFalchion("Vanilla", 0.06, 0.8);
let falchionSlaughter = new knifeFalchion("Slaughter", 0.01, 0.26);
let falchionBlueSteel = new knifeFalchion("Blue Steel", 0.0, 1.0);
let falchionCrimsonWeb = new knifeFalchion("Crimson Web", 0.06, 0.8);
let falchionCaseHardened = new knifeFalchion("Case Hardened", 0.0, 1.0);
let falchionBorealForest = new knifeFalchion("Boreal Forest", 0.06, 0.8);
let falchionNight = new knifeFalchion("Night", 0.06, 0.8);
let falchionStained = new knifeFalchion("Stained", 0.0, 1.0);
let falchionUrbanMasked = new knifeFalchion("Urban Masked", 0.06, 0.8);
let falchionScorched = new knifeFalchion("Scorched", 0.06, 0.8);
let falchionForestDDPAT = new knifeFalchion("Forest DDPAT", 0.06, 0.8);
let falchionSafariMesh = new knifeFalchion("Safari Mesh", 0.06, 0.8);
let falchionFade = new knifeFalchion("Fade", 0.0, 0.08);

//Creation of the remaining "premium" falchion knives [excluding Dopplers]
let falchionTigerTooth = new knifeFalchion("Tiger Tooth", 0.0, 0.08);
let falchionMarbleFade = new knifeFalchion("Marble Fade", 0.0, 0.08);
let falchionDamascusSteel = new knifeFalchion("Damascus Steel", 0.0, 1.0);
let falchionRustCoat = new knifeFalchion("Rust Coat", 0.4, 1.0);
let falchionUltraviolet = new knifeFalchion("Ultraviolet", 0.06, 0.8);
let falchionFreehand = new knifeFalchion("Freehand", 0.0, 0.5);
let falchionLore = new knifeFalchion("Lore", 0.0, 1.0);
let falchionBlackLaminate = new knifeFalchion("Black Laminate", 0.0, 0.8);
let falchionAutotronic = new knifeFalchion("Autotronic", 0.0, 1.0);
let falchionBrightWater = new knifeFalchion("Bright Water", 0.0, 0.7);

//Creation of Doppler and Gamma Doppler falchion knives
let falchionDopplerPhase1 = new knifeFalchion("Doppler Phase 1", 0.0, 0.08);
let falchionDopplerPhase2 = new knifeFalchion("Doppler Phase 2", 0.0, 0.08);
let falchionDopplerPhase3 = new knifeFalchion("Doppler Phase 3", 0.0, 0.08);
let falchionDopplerPhase4 = new knifeFalchion("Doppler Phase 4", 0.0, 0.08);
let falchionDopplerBlackPearl = new knifeFalchion(
  "Doppler Black Pearl",
  0.0,
  0.08
);
let falchionDopplerSapphire = new knifeFalchion("Doppler Sapphire", 0.0, 0.08);
let falchionDopplerRuby = new knifeFalchion("Doppler Ruby", 0.0, 0.08);

let falchionGammaDopplerPhase1 = new knifeFalchion(
  "Gamma Doppler Phase 1",
  0.0,
  0.08
);
let falchionGammaDopplerPhase2 = new knifeFalchion(
  "Gamma Doppler Phase 2",
  0.0,
  0.08
);
let falchionGammaDopplerPhase3 = new knifeFalchion(
  "Gamma Doppler Phase 3",
  0.0,
  0.08
);
let falchionGammaDopplerPhase4 = new knifeFalchion(
  "Gamma Doppler Phase 4",
  0.0,
  0.08
);
let falchionGammaDopplerEmerald = new knifeFalchion(
  "Gamma Doppler Emerald",
  0.0,
  0.08
);

// Falchion Array - contains all falchion knife objects
let falchionArray = [
  falchionVanilla,
  falchionSlaughter,
  falchionBlueSteel,
  falchionCrimsonWeb,
  falchionCaseHardened,
  falchionBorealForest,
  falchionNight,
  falchionStained,
  falchionUrbanMasked,
  falchionScorched,
  falchionForestDDPAT,
  falchionSafariMesh,
  falchionFade,
  falchionTigerTooth,
  falchionMarbleFade,
  falchionDamascusSteel,
  falchionRustCoat,
  falchionUltraviolet,
  falchionFreehand,
  falchionLore,
  falchionBlackLaminate,
  falchionAutotronic,
  falchionBrightWater,
  falchionDopplerPhase1,
  falchionDopplerPhase2,
  falchionDopplerPhase3,
  falchionDopplerPhase4,
  falchionDopplerBlackPearl,
  falchionDopplerSapphire,
  falchionDopplerRuby,
  falchionGammaDopplerPhase1,
  falchionGammaDopplerPhase2,
  falchionGammaDopplerPhase3,
  falchionGammaDopplerPhase4,
  falchionGammaDopplerEmerald,
];

export { falchionArray };
