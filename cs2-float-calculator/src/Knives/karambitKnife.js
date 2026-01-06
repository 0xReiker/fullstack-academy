/* CS2 Karambit Knives */

// Constructor for Karambit Knives
function knifeKarambit(nameKnife, minKnifeFloat, maxKnifeFloat, price) {
  this.nameKnife = nameKnife;
  this.minKnifeFloat = minKnifeFloat;
  this.maxKnifeFloat = maxKnifeFloat;
  this.price = price || null;
}

//Creation of all Base 13 karambit knives
let karambitVanilla = new knifeKarambit("Vanilla", 0.06, 0.8);
let karambitSlaughter = new knifeKarambit("Slaughter", 0.01, 0.26);
let karambitBlueSteel = new knifeKarambit("Blue Steel", 0.0, 1.0);
let karambitCrimsonWeb = new knifeKarambit("Crimson Web", 0.06, 0.8);
let karambitCaseHardened = new knifeKarambit("Case Hardened", 0.0, 1.0);
let karambitBorealForest = new knifeKarambit("Boreal Forest", 0.06, 0.8);
let karambitNight = new knifeKarambit("Night", 0.06, 0.8);
let karambitStained = new knifeKarambit("Stained", 0.0, 1.0);
let karambitUrbanMasked = new knifeKarambit("Urban Masked", 0.06, 0.8);
let karambitScorched = new knifeKarambit("Scorched", 0.06, 0.8);
let karambitForestDDPAT = new knifeKarambit("Forest DDPAT", 0.06, 0.8);
let karambitSafariMesh = new knifeKarambit("Safari Mesh", 0.06, 0.8);
let karambitFade = new knifeKarambit("Fade", 0.0, 0.08);

//Creation of the remaining "premium" karambit knives [excluding Dopplers]
let karambitTigerTooth = new knifeKarambit("Tiger Tooth", 0.0, 0.08);
let karambitMarbleFade = new knifeKarambit("Marble Fade", 0.0, 0.08);
let karambitDamascusSteel = new knifeKarambit("Damascus Steel", 0.0, 1.0);
let karambitRustCoat = new knifeKarambit("Rust Coat", 0.4, 1.0);
let karambitUltraviolet = new knifeKarambit("Ultraviolet", 0.06, 0.8);
let karambitFreehand = new knifeKarambit("Freehand", 0.0, 0.5);
let karambitLore = new knifeKarambit("Lore", 0.0, 1.0);
let karambitBlackLaminate = new knifeKarambit("Black Laminate", 0.0, 0.8);
let karambitAutotronic = new knifeKarambit("Autotronic", 0.0, 1.0);
let karambitBrightWater = new knifeKarambit("Bright Water", 0.0, 0.7);

//Creation of Doppler and Gamma Doppler karambit knives
let karambitDopplerPhase1 = new knifeKarambit("Doppler Phase 1", 0.0, 0.08);
let karambitDopplerPhase2 = new knifeKarambit("Doppler Phase 2", 0.0, 0.08);
let karambitDopplerPhase3 = new knifeKarambit("Doppler Phase 3", 0.0, 0.08);
let karambitDopplerPhase4 = new knifeKarambit("Doppler Phase 4", 0.0, 0.08);
let karambitDopplerBlackPearl = new knifeKarambit(
  "Doppler Black Pearl",
  0.0,
  0.08
);
let karambitDopplerSapphire = new knifeKarambit("Doppler Sapphire", 0.0, 0.08);
let karambitDopplerRuby = new knifeKarambit("Doppler Ruby", 0.0, 0.08);

let karambitGammaDopplerPhase1 = new knifeKarambit(
  "Gamma Doppler Phase 1",
  0.0,
  0.08
);
let karambitGammaDopplerPhase2 = new knifeKarambit(
  "Gamma Doppler Phase 2",
  0.0,
  0.08
);
let karambitGammaDopplerPhase3 = new knifeKarambit(
  "Gamma Doppler Phase 3",
  0.0,
  0.08
);
let karambitGammaDopplerPhase4 = new knifeKarambit(
  "Gamma Doppler Phase 4",
  0.0,
  0.08
);
let karambitGammaDopplerEmerald = new knifeKarambit(
  "Gamma Doppler Emerald",
  0.0,
  0.08
);

// Karambit Array - contains all karambit knife objects
let karambitArray = [
  karambitVanilla,
  karambitSlaughter,
  karambitBlueSteel,
  karambitCrimsonWeb,
  karambitCaseHardened,
  karambitBorealForest,
  karambitNight,
  karambitStained,
  karambitUrbanMasked,
  karambitScorched,
  karambitForestDDPAT,
  karambitSafariMesh,
  karambitFade,
  karambitTigerTooth,
  karambitMarbleFade,
  karambitDamascusSteel,
  karambitRustCoat,
  karambitUltraviolet,
  karambitFreehand,
  karambitLore,
  karambitBlackLaminate,
  karambitAutotronic,
  karambitBrightWater,
  karambitDopplerPhase1,
  karambitDopplerPhase2,
  karambitDopplerPhase3,
  karambitDopplerPhase4,
  karambitDopplerBlackPearl,
  karambitDopplerSapphire,
  karambitDopplerRuby,
  karambitGammaDopplerPhase1,
  karambitGammaDopplerPhase2,
  karambitGammaDopplerPhase3,
  karambitGammaDopplerPhase4,
  karambitGammaDopplerEmerald,
];

export { karambitArray };
