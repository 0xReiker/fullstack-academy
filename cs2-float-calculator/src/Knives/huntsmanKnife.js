/* CS2 Huntsman Knives */

// Constructor for Huntsman Knives
function knifeHuntsman(nameKnife, minKnifeFloat, maxKnifeFloat, price) {
  this.nameKnife = nameKnife;
  this.minKnifeFloat = minKnifeFloat;
  this.maxKnifeFloat = maxKnifeFloat;
  this.price = price || null;
}

//Creation of all Base 13 huntsman knives
let huntsmanVanilla = new knifeHuntsman("Vanilla", 0.06, 0.8);
let huntsmanSlaughter = new knifeHuntsman("Slaughter", 0.01, 0.26);
let huntsmanBlueSteel = new knifeHuntsman("Blue Steel", 0.0, 1.0);
let huntsmanCrimsonWeb = new knifeHuntsman("Crimson Web", 0.06, 0.8);
let huntsmanCaseHardened = new knifeHuntsman("Case Hardened", 0.0, 1.0);
let huntsmanBorealForest = new knifeHuntsman("Boreal Forest", 0.06, 0.8);
let huntsmanNight = new knifeHuntsman("Night", 0.06, 0.8);
let huntsmanStained = new knifeHuntsman("Stained", 0.0, 1.0);
let huntsmanUrbanMasked = new knifeHuntsman("Urban Masked", 0.06, 0.8);
let huntsmanScorched = new knifeHuntsman("Scorched", 0.06, 0.8);
let huntsmanForestDDPAT = new knifeHuntsman("Forest DDPAT", 0.06, 0.8);
let huntsmanSafariMesh = new knifeHuntsman("Safari Mesh", 0.06, 0.8);
let huntsmanFade = new knifeHuntsman("Fade", 0.0, 0.08);

//Creation of the remaining "premium" huntsman knives [excluding Dopplers]
let huntsmanTigerTooth = new knifeHuntsman("Tiger Tooth", 0.0, 0.08);
let huntsmanMarbleFade = new knifeHuntsman("Marble Fade", 0.0, 0.08);
let huntsmanDamascusSteel = new knifeHuntsman("Damascus Steel", 0.0, 1.0);
let huntsmanRustCoat = new knifeHuntsman("Rust Coat", 0.4, 1.0);
let huntsmanUltraviolet = new knifeHuntsman("Ultraviolet", 0.06, 0.8);
let huntsmanFreehand = new knifeHuntsman("Freehand", 0.0, 0.5);
let huntsmanLore = new knifeHuntsman("Lore", 0.0, 1.0);
let huntsmanBlackLaminate = new knifeHuntsman("Black Laminate", 0.0, 0.8);
let huntsmanAutotronic = new knifeHuntsman("Autotronic", 0.0, 1.0);
let huntsmanBrightWater = new knifeHuntsman("Bright Water", 0.0, 0.7);

//Creation of Doppler and Gamma Doppler huntsman knives
let huntsmanDopplerPhase1 = new knifeHuntsman("Doppler Phase 1", 0.0, 0.08);
let huntsmanDopplerPhase2 = new knifeHuntsman("Doppler Phase 2", 0.0, 0.08);
let huntsmanDopplerPhase3 = new knifeHuntsman("Doppler Phase 3", 0.0, 0.08);
let huntsmanDopplerPhase4 = new knifeHuntsman("Doppler Phase 4", 0.0, 0.08);
let huntsmanDopplerBlackPearl = new knifeHuntsman(
  "Doppler Black Pearl",
  0.0,
  0.08
);
let huntsmanDopplerSapphire = new knifeHuntsman("Doppler Sapphire", 0.0, 0.08);
let huntsmanDopplerRuby = new knifeHuntsman("Doppler Ruby", 0.0, 0.08);

let huntsmanGammaDopplerPhase1 = new knifeHuntsman(
  "Gamma Doppler Phase 1",
  0.0,
  0.08
);
let huntsmanGammaDopplerPhase2 = new knifeHuntsman(
  "Gamma Doppler Phase 2",
  0.0,
  0.08
);
let huntsmanGammaDopplerPhase3 = new knifeHuntsman(
  "Gamma Doppler Phase 3",
  0.0,
  0.08
);
let huntsmanGammaDopplerPhase4 = new knifeHuntsman(
  "Gamma Doppler Phase 4",
  0.0,
  0.08
);
let huntsmanGammaDopplerEmerald = new knifeHuntsman(
  "Gamma Doppler Emerald",
  0.0,
  0.08
);

// Huntsman Array - contains all huntsman knife objects
let huntsmanArray = [
  huntsmanVanilla,
  huntsmanSlaughter,
  huntsmanBlueSteel,
  huntsmanCrimsonWeb,
  huntsmanCaseHardened,
  huntsmanBorealForest,
  huntsmanNight,
  huntsmanStained,
  huntsmanUrbanMasked,
  huntsmanScorched,
  huntsmanForestDDPAT,
  huntsmanSafariMesh,
  huntsmanFade,
  huntsmanTigerTooth,
  huntsmanMarbleFade,
  huntsmanDamascusSteel,
  huntsmanRustCoat,
  huntsmanUltraviolet,
  huntsmanFreehand,
  huntsmanLore,
  huntsmanBlackLaminate,
  huntsmanAutotronic,
  huntsmanBrightWater,
  huntsmanDopplerPhase1,
  huntsmanDopplerPhase2,
  huntsmanDopplerPhase3,
  huntsmanDopplerPhase4,
  huntsmanDopplerBlackPearl,
  huntsmanDopplerSapphire,
  huntsmanDopplerRuby,
  huntsmanGammaDopplerPhase1,
  huntsmanGammaDopplerPhase2,
  huntsmanGammaDopplerPhase3,
  huntsmanGammaDopplerPhase4,
  huntsmanGammaDopplerEmerald,
];

export { huntsmanArray };
