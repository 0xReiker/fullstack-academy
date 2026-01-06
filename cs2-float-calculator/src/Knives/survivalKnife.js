/* CS2 Survival Knives */

// Constructor for Survival Knives
function knifeSurvival(nameKnife, minKnifeFloat, maxKnifeFloat, price) {
  this.nameKnife = nameKnife;
  this.minKnifeFloat = minKnifeFloat;
  this.maxKnifeFloat = maxKnifeFloat;
  this.price = price || null;
}

//Creation of all Base 13 survival knives
let survivalVanilla = new knifeSurvival("Vanilla", 0.06, 0.8);
let survivalSlaughter = new knifeSurvival("Slaughter", 0.01, 0.26);
let survivalBlueSteel = new knifeSurvival("Blue Steel", 0.0, 1.0);
let survivalCrimsonWeb = new knifeSurvival("Crimson Web", 0.06, 0.8);
let survivalCaseHardened = new knifeSurvival("Case Hardened", 0.0, 1.0);
let survivalBorealForest = new knifeSurvival("Boreal Forest", 0.06, 0.8);
let survivalNight = new knifeSurvival("Night", 0.06, 0.8);
let survivalStained = new knifeSurvival("Stained", 0.0, 1.0);
let survivalUrbanMasked = new knifeSurvival("Urban Masked", 0.06, 0.8);
let survivalScorched = new knifeSurvival("Scorched", 0.06, 0.8);
let survivalForestDDPAT = new knifeSurvival("Forest DDPAT", 0.06, 0.8);
let survivalSafariMesh = new knifeSurvival("Safari Mesh", 0.06, 0.8);
let survivalFade = new knifeSurvival("Fade", 0.0, 0.08);

//Creation of the remaining "premium" survival knives [excluding Dopplers]
let survivalTigerTooth = new knifeSurvival("Tiger Tooth", 0.0, 0.08);
let survivalMarbleFade = new knifeSurvival("Marble Fade", 0.0, 0.08);
let survivalDamascusSteel = new knifeSurvival("Damascus Steel", 0.0, 1.0);
let survivalRustCoat = new knifeSurvival("Rust Coat", 0.4, 1.0);
let survivalUltraviolet = new knifeSurvival("Ultraviolet", 0.06, 0.8);
let survivalFreehand = new knifeSurvival("Freehand", 0.0, 0.5);
let survivalLore = new knifeSurvival("Lore", 0.0, 1.0);
let survivalBlackLaminate = new knifeSurvival("Black Laminate", 0.0, 0.8);
let survivalAutotronic = new knifeSurvival("Autotronic", 0.0, 1.0);
let survivalBrightWater = new knifeSurvival("Bright Water", 0.0, 0.7);

//Creation of Doppler and Gamma Doppler survival knives
let survivalDopplerPhase1 = new knifeSurvival("Doppler Phase 1", 0.0, 0.08);
let survivalDopplerPhase2 = new knifeSurvival("Doppler Phase 2", 0.0, 0.08);
let survivalDopplerPhase3 = new knifeSurvival("Doppler Phase 3", 0.0, 0.08);
let survivalDopplerPhase4 = new knifeSurvival("Doppler Phase 4", 0.0, 0.08);
let survivalDopplerBlackPearl = new knifeSurvival(
  "Doppler Black Pearl",
  0.0,
  0.08
);
let survivalDopplerSapphire = new knifeSurvival("Doppler Sapphire", 0.0, 0.08);
let survivalDopplerRuby = new knifeSurvival("Doppler Ruby", 0.0, 0.08);

//Survival does not have Gamma Doppler, Autotronic, Black Laminate,
//Freehand, Bright Water or Lore patterns at this point (7/11/25)

// Survival Array - contains all survival knife objects
let survivalArray = [
  survivalVanilla,
  survivalSlaughter,
  survivalBlueSteel,
  survivalCrimsonWeb,
  survivalCaseHardened,
  survivalBorealForest,
  survivalNight,
  survivalStained,
  survivalUrbanMasked,
  survivalScorched,
  survivalForestDDPAT,
  survivalSafariMesh,
  survivalFade,
  survivalTigerTooth,
  survivalMarbleFade,
  survivalDamascusSteel,
  survivalRustCoat,
  survivalUltraviolet,
  survivalFreehand,
  survivalLore,
  survivalBlackLaminate,
  survivalAutotronic,
  survivalBrightWater,
  survivalDopplerPhase1,
  survivalDopplerPhase2,
  survivalDopplerPhase3,
  survivalDopplerPhase4,
  survivalDopplerBlackPearl,
  survivalDopplerSapphire,
  survivalDopplerRuby,
];

export { survivalArray };
