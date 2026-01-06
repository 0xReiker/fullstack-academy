/* CS2 Flip Knives */

// Constructor for Flip Knives
function knifeFlip(nameKnife, minKnifeFloat, maxKnifeFloat, price) {
  this.nameKnife = nameKnife;
  this.minKnifeFloat = minKnifeFloat;
  this.maxKnifeFloat = maxKnifeFloat;
  this.price = price || null;
}

//Creation of all Base 13 flip knives
let flipVanilla = new knifeFlip("Vanilla", 0.06, 0.8);
let flipSlaughter = new knifeFlip("Slaughter", 0.01, 0.26);
let flipBlueSteel = new knifeFlip("Blue Steel", 0.0, 1.0);
let flipCrimsonWeb = new knifeFlip("Crimson Web", 0.06, 0.8);
let flipCaseHardened = new knifeFlip("Case Hardened", 0.0, 1.0);
let flipBorealForest = new knifeFlip("Boreal Forest", 0.06, 0.8);
let flipNight = new knifeFlip("Night", 0.06, 0.8);
let flipStained = new knifeFlip("Stained", 0.0, 1.0);
let flipUrbanMasked = new knifeFlip("Urban Masked", 0.06, 0.8);
let flipScorched = new knifeFlip("Scorched", 0.06, 0.8);
let flipForestDDPAT = new knifeFlip("Forest DDPAT", 0.06, 0.8);
let flipSafariMesh = new knifeFlip("Safari Mesh", 0.06, 0.8);
let flipFade = new knifeFlip("Fade", 0.0, 0.08);

//Creation of the remaining "premium" flip knives [excluding Dopplers]
let flipTigerTooth = new knifeFlip("Tiger Tooth", 0.0, 0.08);
let flipMarbleFade = new knifeFlip("Marble Fade", 0.0, 0.08);
let flipDamascusSteel = new knifeFlip("Damascus Steel", 0.0, 1.0);
let flipRustCoat = new knifeFlip("Rust Coat", 0.4, 1.0);
let flipUltraviolet = new knifeFlip("Ultraviolet", 0.06, 0.8);
let flipFreehand = new knifeFlip("Freehand", 0.0, 0.5);
let flipLore = new knifeFlip("Lore", 0.0, 1.0);
let flipBlackLaminate = new knifeFlip("Black Laminate", 0.0, 0.8);
let flipAutotronic = new knifeFlip("Autotronic", 0.0, 1.0);
let flipBrightWater = new knifeFlip("Bright Water", 0.0, 0.7);

//Creation of Doppler and Gamma Doppler flip knives
let flipDopplerPhase1 = new knifeFlip("Doppler Phase 1", 0.0, 0.08);
let flipDopplerPhase2 = new knifeFlip("Doppler Phase 2", 0.0, 0.08);
let flipDopplerPhase3 = new knifeFlip("Doppler Phase 3", 0.0, 0.08);
let flipDopplerPhase4 = new knifeFlip("Doppler Phase 4", 0.0, 0.08);
let flipDopplerBlackPearl = new knifeFlip("Doppler Black Pearl", 0.0, 0.08);
let flipDopplerSapphire = new knifeFlip("Doppler Sapphire", 0.0, 0.08);
let flipDopplerRuby = new knifeFlip("Doppler Ruby", 0.0, 0.08);

let flipGammaDopplerPhase1 = new knifeFlip("Gamma Doppler Phase 1", 0.0, 0.08);
let flipGammaDopplerPhase2 = new knifeFlip("Gamma Doppler Phase 2", 0.0, 0.08);
let flipGammaDopplerPhase3 = new knifeFlip("Gamma Doppler Phase 3", 0.0, 0.08);
let flipGammaDopplerPhase4 = new knifeFlip("Gamma Doppler Phase 4", 0.0, 0.08);
let flipGammaDopplerEmerald = new knifeFlip("Gamma Doppler Emerald", 0.0, 0.08);

// Flip Array - contains all flip knife objects
let flipArray = [
  flipVanilla,
  flipSlaughter,
  flipBlueSteel,
  flipCrimsonWeb,
  flipCaseHardened,
  flipBorealForest,
  flipNight,
  flipStained,
  flipUrbanMasked,
  flipScorched,
  flipForestDDPAT,
  flipSafariMesh,
  flipFade,
  flipTigerTooth,
  flipMarbleFade,
  flipDamascusSteel,
  flipRustCoat,
  flipUltraviolet,
  flipFreehand,
  flipLore,
  flipBlackLaminate,
  flipAutotronic,
  flipBrightWater,
  flipDopplerPhase1,
  flipDopplerPhase2,
  flipDopplerPhase3,
  flipDopplerPhase4,
  flipDopplerBlackPearl,
  flipDopplerSapphire,
  flipDopplerRuby,
  flipGammaDopplerPhase1,
  flipGammaDopplerPhase2,
  flipGammaDopplerPhase3,
  flipGammaDopplerPhase4,
  flipGammaDopplerEmerald,
];

export { flipArray };
