/* CS2 Butterfly Knife */

//Constructor for Butterfly Knives with 0.00
function knifeButterfly(nameKnife, minKnifeFloat, maxKnifeFloat, price) {
  this.nameKnife = nameKnife;
  this.minKnifeFloat = minKnifeFloat;
  this.maxKnifeFloat = maxKnifeFloat;
  this.price = price || null;
}

//Creation of all Base 13 butterfly knives
let butterflyVanilla = new knifeButterfly("Vanilla", 0.06, 0.8);
let butterflySlaughter = new knifeButterfly("Slaughter", 0.01, 0.26);
let butterflyBlueSteel = new knifeButterfly("Blue Steel", 0.0, 1.0);
let butterflyCrimsonWeb = new knifeButterfly("Crimson Web", 0.06, 0.8);
let butterflyCaseHardened = new knifeButterfly("Case Hardened", 0.0, 1.0);
let butterflyBorealForest = new knifeButterfly("Boreal Forest", 0.06, 0.8);
let butterflyNight = new knifeButterfly("Night", 0.06, 0.8);
let butterflyStained = new knifeButterfly("Stained", 0.0, 1.0);
let butterflyUrbanMasked = new knifeButterfly("Urban Masked", 0.06, 0.8);
let butterflyScorched = new knifeButterfly("Scorched", 0.06, 0.8);
let butterflyForestDDPAT = new knifeButterfly("Forest DDPAT", 0.06, 0.8);
let butterflySafariMesh = new knifeButterfly("Safari Mesh", 0.06, 0.8);
let butterflyFade = new knifeButterfly("Fade", 0.0, 0.08);

//Creation of the remaining "premium" butterfly knives [excluding Dopplers]
let butterflyTigerTooth = new knifeButterfly("Tiger Tooth", 0.0, 0.08);
let butterflyMarbleFade = new knifeButterfly("Marble Fade", 0.0, 0.08);
let butterflyDamascusSteel = new knifeButterfly("Damascus Steel", 0.0, 1.0);
let butterflyRustCoat = new knifeButterfly("Rust Coat", 0.4, 1.0);
let butterflyUltraviolet = new knifeButterfly("Ultraviolet", 0.06, 0.8);
let butterflyFreehand = new knifeButterfly("Freehand", 0.0, 0.5);
let butterflyLore = new knifeButterfly("Lore", 0.0, 1.0);
let butterflyBlackLaminate = new knifeButterfly("Black Laminate", 0.0, 0.8);
let butterflyAutotronic = new knifeButterfly("Autotronic", 0.0, 1.0);
let butterflyBrightWater = new knifeButterfly("Bright Water", 0.0, 0.7);

//Creation of Doppler and Gamma Doppler butterfly knives
let butterflyDopplerPhase1 = new knifeButterfly("Doppler Phase 1", 0.0, 0.08);
let butterflyDopplerPhase2 = new knifeButterfly("Doppler Phase 2", 0.0, 0.08);
let butterflyDopplerPhase3 = new knifeButterfly("Doppler Phase 3", 0.0, 0.08);
let butterflyDopplerPhase4 = new knifeButterfly("Doppler Phase 4", 0.0, 0.08);
let butterflyDopplerBlackPearl = new knifeButterfly(
  "Doppler Black Pearl",
  0.0,
  0.08
);
let butterflyDopplerSapphire = new knifeButterfly(
  "Doppler Sapphire",
  0.0,
  0.08
);
let butterflyDopplerRuby = new knifeButterfly("Doppler Ruby", 0.0, 0.08);

let butterflyGammaDopplerPhase1 = new knifeButterfly(
  "Gamma Doppler Phase 1",
  0.0,
  0.08
);
let butterflyGammaDopplerPhase2 = new knifeButterfly(
  "Gamma Doppler Phase 2",
  0.0,
  0.08
);
let butterflyGammaDopplerPhase3 = new knifeButterfly(
  "Gamma Doppler Phase 3",
  0.0,
  0.08
);
let butterflyGammaDopplerPhase4 = new knifeButterfly(
  "Gamma Doppler Phase 4",
  0.0,
  0.08
);
let butterflyGammaDopplerEmerald = new knifeButterfly(
  "Gamma Doppler Emerald",
  0.0,
  0.08
);

// Butterfly Array - contains all butterfly knife objects
let butterflyArray = [
  butterflyVanilla,
  butterflySlaughter,
  butterflyBlueSteel,
  butterflyCrimsonWeb,
  butterflyCaseHardened,
  butterflyBorealForest,
  butterflyNight,
  butterflyStained,
  butterflyUrbanMasked,
  butterflyScorched,
  butterflyForestDDPAT,
  butterflySafariMesh,
  butterflyFade,
  butterflyTigerTooth,
  butterflyMarbleFade,
  butterflyDamascusSteel,
  butterflyRustCoat,
  butterflyUltraviolet,
  butterflyFreehand,
  butterflyLore,
  butterflyBlackLaminate,
  butterflyAutotronic,
  butterflyBrightWater,
  butterflyDopplerPhase1,
  butterflyDopplerPhase2,
  butterflyDopplerPhase3,
  butterflyDopplerPhase4,
  butterflyDopplerBlackPearl,
  butterflyDopplerSapphire,
  butterflyDopplerRuby,
  butterflyGammaDopplerPhase1,
  butterflyGammaDopplerPhase2,
  butterflyGammaDopplerPhase3,
  butterflyGammaDopplerPhase4,
  butterflyGammaDopplerEmerald,
];

export { butterflyArray };
