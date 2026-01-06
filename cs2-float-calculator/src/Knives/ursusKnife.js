/* CS2 Ursus Knives */

// Constructor for Ursus Knives
function knifeUrsus(nameKnife, minKnifeFloat, maxKnifeFloat, price) {
  this.nameKnife = nameKnife;
  this.minKnifeFloat = minKnifeFloat;
  this.maxKnifeFloat = maxKnifeFloat;
  this.price = price || null;
}

//Creation of all Base 13 ursus knives
let ursusVanilla = new knifeUrsus("Vanilla", 0.06, 0.8);
let ursusSlaughter = new knifeUrsus("Slaughter", 0.01, 0.26);
let ursusBlueSteel = new knifeUrsus("Blue Steel", 0.0, 1.0);
let ursusCrimsonWeb = new knifeUrsus("Crimson Web", 0.06, 0.8);
let ursusCaseHardened = new knifeUrsus("Case Hardened", 0.0, 1.0);
let ursusBorealForest = new knifeUrsus("Boreal Forest", 0.06, 0.8);
let ursusNight = new knifeUrsus("Night", 0.06, 0.8);
let ursusStained = new knifeUrsus("Stained", 0.0, 1.0);
let ursusUrbanMasked = new knifeUrsus("Urban Masked", 0.06, 0.8);
let ursusScorched = new knifeUrsus("Scorched", 0.06, 0.8);
let ursusForestDDPAT = new knifeUrsus("Forest DDPAT", 0.06, 0.8);
let ursusSafariMesh = new knifeUrsus("Safari Mesh", 0.06, 0.8);
let ursusFade = new knifeUrsus("Fade", 0.0, 0.08);

//Creation of the remaining "premium" ursus knives [excluding Dopplers]
let ursusTigerTooth = new knifeUrsus("Tiger Tooth", 0.0, 0.08);
let ursusMarbleFade = new knifeUrsus("Marble Fade", 0.0, 0.08);
let ursusDamascusSteel = new knifeUrsus("Damascus Steel", 0.0, 1.0);
let ursusRustCoat = new knifeUrsus("Rust Coat", 0.4, 1.0);
let ursusUltraviolet = new knifeUrsus("Ultraviolet", 0.06, 0.8);
let ursusFreehand = new knifeUrsus("Freehand", 0.0, 0.5);
let ursusLore = new knifeUrsus("Lore", 0.0, 1.0);
let ursusBlackLaminate = new knifeUrsus("Black Laminate", 0.0, 0.8);
let ursusAutotronic = new knifeUrsus("Autotronic", 0.0, 1.0);
let ursusBrightWater = new knifeUrsus("Bright Water", 0.0, 0.7);

//Creation of Doppler and Gamma Doppler ursus knives
let ursusDopplerPhase1 = new knifeUrsus("Doppler Phase 1", 0.0, 0.08);
let ursusDopplerPhase2 = new knifeUrsus("Doppler Phase 2", 0.0, 0.08);
let ursusDopplerPhase3 = new knifeUrsus("Doppler Phase 3", 0.0, 0.08);
let ursusDopplerPhase4 = new knifeUrsus("Doppler Phase 4", 0.0, 0.08);
let ursusDopplerBlackPearl = new knifeUrsus("Doppler Black Pearl", 0.0, 0.08);
let ursusDopplerSapphire = new knifeUrsus("Doppler Sapphire", 0.0, 0.08);
let ursusDopplerRuby = new knifeUrsus("Doppler Ruby", 0.0, 0.08);

//Ursus does not have Gamma Doppler, Autotronic, Black Laminate,
//Freehand, Bright Water or Lore patterns at this point (7/11/25)

// Ursus Array - contains all ursus knife objects
let ursusArray = [
  ursusVanilla,
  ursusSlaughter,
  ursusBlueSteel,
  ursusCrimsonWeb,
  ursusCaseHardened,
  ursusBorealForest,
  ursusNight,
  ursusStained,
  ursusUrbanMasked,
  ursusScorched,
  ursusForestDDPAT,
  ursusSafariMesh,
  ursusFade,
  ursusTigerTooth,
  ursusMarbleFade,
  ursusDamascusSteel,
  ursusRustCoat,
  ursusUltraviolet,
  ursusFreehand,
  ursusLore,
  ursusBlackLaminate,
  ursusAutotronic,
  ursusBrightWater,
  ursusDopplerPhase1,
  ursusDopplerPhase2,
  ursusDopplerPhase3,
  ursusDopplerPhase4,
  ursusDopplerBlackPearl,
  ursusDopplerSapphire,
  ursusDopplerRuby,
];

export { ursusArray };
