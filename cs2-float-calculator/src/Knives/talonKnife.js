/* CS2 Talon Knives */

// Constructor for Talon Knives
function knifeTalon(nameKnife, minKnifeFloat, maxKnifeFloat, price) {
  this.nameKnife = nameKnife;
  this.minKnifeFloat = minKnifeFloat;
  this.maxKnifeFloat = maxKnifeFloat;
  this.price = price || null;
}

//Creation of all Base 13 talon knives
let talonVanilla = new knifeTalon("Vanilla", 0.06, 0.8);
let talonSlaughter = new knifeTalon("Slaughter", 0.01, 0.26);
let talonBlueSteel = new knifeTalon("Blue Steel", 0.0, 1.0);
let talonCrimsonWeb = new knifeTalon("Crimson Web", 0.06, 0.8);
let talonCaseHardened = new knifeTalon("Case Hardened", 0.0, 1.0);
let talonBorealForest = new knifeTalon("Boreal Forest", 0.06, 0.8);
let talonNight = new knifeTalon("Night", 0.06, 0.8);
let talonStained = new knifeTalon("Stained", 0.0, 1.0);
let talonUrbanMasked = new knifeTalon("Urban Masked", 0.06, 0.8);
let talonScorched = new knifeTalon("Scorched", 0.06, 0.8);
let talonForestDDPAT = new knifeTalon("Forest DDPAT", 0.06, 0.8);
let talonSafariMesh = new knifeTalon("Safari Mesh", 0.06, 0.8);
let talonFade = new knifeTalon("Fade", 0.0, 0.08);

//Creation of the remaining "premium" talon knives [excluding Dopplers]
let talonTigerTooth = new knifeTalon("Tiger Tooth", 0.0, 0.08);
let talonMarbleFade = new knifeTalon("Marble Fade", 0.0, 0.08);
let talonDamascusSteel = new knifeTalon("Damascus Steel", 0.0, 1.0);
let talonRustCoat = new knifeTalon("Rust Coat", 0.4, 1.0);
let talonUltraviolet = new knifeTalon("Ultraviolet", 0.06, 0.8);
let talonFreehand = new knifeTalon("Freehand", 0.0, 0.5);
let talonLore = new knifeTalon("Lore", 0.0, 1.0);
let talonBlackLaminate = new knifeTalon("Black Laminate", 0.0, 0.8);
let talonAutotronic = new knifeTalon("Autotronic", 0.0, 1.0);
let talonBrightWater = new knifeTalon("Bright Water", 0.0, 0.7);

//Creation of Doppler and Gamma Doppler talon knives
let talonDopplerPhase1 = new knifeTalon("Doppler Phase 1", 0.0, 0.08);
let talonDopplerPhase2 = new knifeTalon("Doppler Phase 2", 0.0, 0.08);
let talonDopplerPhase3 = new knifeTalon("Doppler Phase 3", 0.0, 0.08);
let talonDopplerPhase4 = new knifeTalon("Doppler Phase 4", 0.0, 0.08);
let talonDopplerBlackPearl = new knifeTalon("Doppler Black Pearl", 0.0, 0.08);
let talonDopplerSapphire = new knifeTalon("Doppler Sapphire", 0.0, 0.08);
let talonDopplerRuby = new knifeTalon("Doppler Ruby", 0.0, 0.08);

//Talon does not have Gamma Doppler, Autotronic, Black Laminate,
//Freehand, Bright Water or Lore patterns at this point (7/11/25)

// Talon Array - contains all talon knife objects
let talonArray = [
  talonVanilla,
  talonSlaughter,
  talonBlueSteel,
  talonCrimsonWeb,
  talonCaseHardened,
  talonBorealForest,
  talonNight,
  talonStained,
  talonUrbanMasked,
  talonScorched,
  talonForestDDPAT,
  talonSafariMesh,
  talonFade,
  talonTigerTooth,
  talonMarbleFade,
  talonDamascusSteel,
  talonRustCoat,
  talonUltraviolet,
  talonFreehand,
  talonLore,
  talonBlackLaminate,
  talonAutotronic,
  talonBrightWater,
  talonDopplerPhase1,
  talonDopplerPhase2,
  talonDopplerPhase3,
  talonDopplerPhase4,
  talonDopplerBlackPearl,
  talonDopplerSapphire,
  talonDopplerRuby,
];

export { talonArray };
