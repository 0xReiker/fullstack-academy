/* CS2 Nomad Knives */

// Constructor for Nomad Knives
function knifeNomad(nameKnife, minKnifeFloat, maxKnifeFloat, price) {
  this.nameKnife = nameKnife;
  this.minKnifeFloat = minKnifeFloat;
  this.maxKnifeFloat = maxKnifeFloat;
  this.price = price || null;
}

//Creation of all Base 13 nomad knives
let nomadVanilla = new knifeNomad("Vanilla", 0.06, 0.8);
let nomadSlaughter = new knifeNomad("Slaughter", 0.01, 0.26);
let nomadBlueSteel = new knifeNomad("Blue Steel", 0.0, 1.0);
let nomadCrimsonWeb = new knifeNomad("Crimson Web", 0.06, 0.8);
let nomadCaseHardened = new knifeNomad("Case Hardened", 0.0, 1.0);
let nomadBorealForest = new knifeNomad("Boreal Forest", 0.06, 0.8);
let nomadNight = new knifeNomad("Night", 0.06, 0.8);
let nomadStained = new knifeNomad("Stained", 0.0, 1.0);
let nomadUrbanMasked = new knifeNomad("Urban Masked", 0.06, 0.8);
let nomadScorched = new knifeNomad("Scorched", 0.06, 0.8);
let nomadForestDDPAT = new knifeNomad("Forest DDPAT", 0.06, 0.8);
let nomadSafariMesh = new knifeNomad("Safari Mesh", 0.06, 0.8);
let nomadFade = new knifeNomad("Fade", 0.0, 0.08);

//Creation of the remaining "premium" nomad knives [excluding Dopplers]
let nomadTigerTooth = new knifeNomad("Tiger Tooth", 0.0, 0.08);
let nomadMarbleFade = new knifeNomad("Marble Fade", 0.0, 0.08);
let nomadDamascusSteel = new knifeNomad("Damascus Steel", 0.0, 1.0);
let nomadRustCoat = new knifeNomad("Rust Coat", 0.4, 1.0);
let nomadUltraviolet = new knifeNomad("Ultraviolet", 0.06, 0.8);
let nomadFreehand = new knifeNomad("Freehand", 0.0, 0.5);
let nomadLore = new knifeNomad("Lore", 0.0, 1.0);
let nomadBlackLaminate = new knifeNomad("Black Laminate", 0.0, 0.8);
let nomadAutotronic = new knifeNomad("Autotronic", 0.0, 1.0);
let nomadBrightWater = new knifeNomad("Bright Water", 0.0, 0.7);

//Creation of Doppler and Gamma Doppler nomad knives
let nomadDopplerPhase1 = new knifeNomad("Doppler Phase 1", 0.0, 0.08);
let nomadDopplerPhase2 = new knifeNomad("Doppler Phase 2", 0.0, 0.08);
let nomadDopplerPhase3 = new knifeNomad("Doppler Phase 3", 0.0, 0.08);
let nomadDopplerPhase4 = new knifeNomad("Doppler Phase 4", 0.0, 0.08);
let nomadDopplerBlackPearl = new knifeNomad("Doppler Black Pearl", 0.0, 0.08);
let nomadDopplerSapphire = new knifeNomad("Doppler Sapphire", 0.0, 0.08);
let nomadDopplerRuby = new knifeNomad("Doppler Ruby", 0.0, 0.08);

//Nomad does not have Gamma Doppler, Autotronic, Black Laminate,
//Freehand, Bright Water or Lore patterns at this point (7/11/25)

// Nomad Array - contains all nomad knife objects
let nomadArray = [
  nomadVanilla,
  nomadSlaughter,
  nomadBlueSteel,
  nomadCrimsonWeb,
  nomadCaseHardened,
  nomadBorealForest,
  nomadNight,
  nomadStained,
  nomadUrbanMasked,
  nomadScorched,
  nomadForestDDPAT,
  nomadSafariMesh,
  nomadFade,
  nomadTigerTooth,
  nomadMarbleFade,
  nomadDamascusSteel,
  nomadRustCoat,
  nomadUltraviolet,
  nomadFreehand,
  nomadLore,
  nomadBlackLaminate,
  nomadAutotronic,
  nomadBrightWater,
  nomadDopplerPhase1,
  nomadDopplerPhase2,
  nomadDopplerPhase3,
  nomadDopplerPhase4,
  nomadDopplerBlackPearl,
  nomadDopplerSapphire,
  nomadDopplerRuby,
];

export { nomadArray };
