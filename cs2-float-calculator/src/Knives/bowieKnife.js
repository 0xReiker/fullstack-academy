/* CS2 Bowie Knives */

// Constructor for Bowie Knives
function knifeBowie(nameKnife, minKnifeFloat, maxKnifeFloat, price) {
  this.nameKnife = nameKnife;
  this.minKnifeFloat = minKnifeFloat;
  this.maxKnifeFloat = maxKnifeFloat;
  this.price = price || null;
}

//Creation of all Base 13 bowie knives
let bowieVanilla = new knifeBowie("Vanilla", 0.06, 0.8);
let bowieSlaughter = new knifeBowie("Slaughter", 0.01, 0.26);
let bowieBlueSteel = new knifeBowie("Blue Steel", 0.0, 1.0);
let bowieCrimsonWeb = new knifeBowie("Crimson Web", 0.06, 0.8);
let bowieCaseHardened = new knifeBowie("Case Hardened", 0.0, 1.0);
let bowieBorealForest = new knifeBowie("Boreal Forest", 0.06, 0.8);
let bowieNight = new knifeBowie("Night", 0.06, 0.8);
let bowieStained = new knifeBowie("Stained", 0.0, 1.0);
let bowieUrbanMasked = new knifeBowie("Urban Masked", 0.06, 0.8);
let bowieScorched = new knifeBowie("Scorched", 0.06, 0.8);
let bowieForestDDPAT = new knifeBowie("Forest DDPAT", 0.06, 0.8);
let bowieSafariMesh = new knifeBowie("Safari Mesh", 0.06, 0.8);
let bowieFade = new knifeBowie("Fade", 0.0, 0.08);

//Creation of the remaining "premium" bowie knives [excluding Dopplers]
let bowieTigerTooth = new knifeBowie("Tiger Tooth", 0.0, 0.08);
let bowieMarbleFade = new knifeBowie("Marble Fade", 0.0, 0.08);
let bowieDamascusSteel = new knifeBowie("Damascus Steel", 0.0, 1.0);
let bowieRustCoat = new knifeBowie("Rust Coat", 0.4, 1.0);
let bowieUltraviolet = new knifeBowie("Ultraviolet", 0.06, 0.8);
let bowieFreehand = new knifeBowie("Freehand", 0.0, 0.5);
let bowieLore = new knifeBowie("Lore", 0.0, 1.0);
let bowieBlackLaminate = new knifeBowie("Black Laminate", 0.0, 0.8);
let bowieAutotronic = new knifeBowie("Autotronic", 0.0, 1.0);
let bowieBrightWater = new knifeBowie("Bright Water", 0.0, 0.7);

//Creation of Doppler and Gamma Doppler bowie knives
let bowieDopplerPhase1 = new knifeBowie("Doppler Phase 1", 0.0, 0.08);
let bowieDopplerPhase2 = new knifeBowie("Doppler Phase 2", 0.0, 0.08);
let bowieDopplerPhase3 = new knifeBowie("Doppler Phase 3", 0.0, 0.08);
let bowieDopplerPhase4 = new knifeBowie("Doppler Phase 4", 0.0, 0.08);
let bowieDopplerBlackPearl = new knifeBowie("Doppler Black Pearl", 0.0, 0.08);
let bowieDopplerSapphire = new knifeBowie("Doppler Sapphire", 0.0, 0.08);
let bowieDopplerRuby = new knifeBowie("Doppler Ruby", 0.0, 0.08);

let bowieGammaDopplerPhase1 = new knifeBowie(
  "Gamma Doppler Phase 1",
  0.0,
  0.08
);
let bowieGammaDopplerPhase2 = new knifeBowie(
  "Gamma Doppler Phase 2",
  0.0,
  0.08
);
let bowieGammaDopplerPhase3 = new knifeBowie(
  "Gamma Doppler Phase 3",
  0.0,
  0.08
);
let bowieGammaDopplerPhase4 = new knifeBowie(
  "Gamma Doppler Phase 4",
  0.0,
  0.08
);
let bowieGammaDopplerEmerald = new knifeBowie(
  "Gamma Doppler Emerald",
  0.0,
  0.08
);

// Bowie Array - contains all bowie knife objects
let bowieArray = [
  bowieVanilla,
  bowieSlaughter,
  bowieBlueSteel,
  bowieCrimsonWeb,
  bowieCaseHardened,
  bowieBorealForest,
  bowieNight,
  bowieStained,
  bowieUrbanMasked,
  bowieScorched,
  bowieForestDDPAT,
  bowieSafariMesh,
  bowieFade,
  bowieTigerTooth,
  bowieMarbleFade,
  bowieDamascusSteel,
  bowieRustCoat,
  bowieUltraviolet,
  bowieFreehand,
  bowieLore,
  bowieBlackLaminate,
  bowieAutotronic,
  bowieBrightWater,
  bowieDopplerPhase1,
  bowieDopplerPhase2,
  bowieDopplerPhase3,
  bowieDopplerPhase4,
  bowieDopplerBlackPearl,
  bowieDopplerSapphire,
  bowieDopplerRuby,
  bowieGammaDopplerPhase1,
  bowieGammaDopplerPhase2,
  bowieGammaDopplerPhase3,
  bowieGammaDopplerPhase4,
  bowieGammaDopplerEmerald,
];

export { bowieArray };
