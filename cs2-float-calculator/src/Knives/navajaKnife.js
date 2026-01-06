/* CS2 Navaja Knives */

// Constructor for Navaja Knives
function knifeNavaja(nameKnife, minKnifeFloat, maxKnifeFloat, price) {
  this.nameKnife = nameKnife;
  this.minKnifeFloat = minKnifeFloat;
  this.maxKnifeFloat = maxKnifeFloat;
  this.price = price || null;
}

//Creation of all Base 13 navaja knives
let navajaVanilla = new knifeNavaja("Vanilla", 0.06, 0.8);
let navajaSlaughter = new knifeNavaja("Slaughter", 0.01, 0.26);
let navajaBlueSteel = new knifeNavaja("Blue Steel", 0.0, 1.0);
let navajaCrimsonWeb = new knifeNavaja("Crimson Web", 0.06, 0.8);
let navajaCaseHardened = new knifeNavaja("Case Hardened", 0.0, 1.0);
let navajaBorealForest = new knifeNavaja("Boreal Forest", 0.06, 0.8);
let navajaNight = new knifeNavaja("Night", 0.06, 0.8);
let navajaStained = new knifeNavaja("Stained", 0.0, 1.0);
let navajaUrbanMasked = new knifeNavaja("Urban Masked", 0.06, 0.8);
let navajaScorched = new knifeNavaja("Scorched", 0.06, 0.8);
let navajaForestDDPAT = new knifeNavaja("Forest DDPAT", 0.06, 0.8);
let navajaSafariMesh = new knifeNavaja("Safari Mesh", 0.06, 0.8);
let navajaFade = new knifeNavaja("Fade", 0.0, 0.08);

//Creation of the remaining "premium" navaja knives [excluding Dopplers]
let navajaTigerTooth = new knifeNavaja("Tiger Tooth", 0.0, 0.08);
let navajaMarbleFade = new knifeNavaja("Marble Fade", 0.0, 0.08);
let navajaDamascusSteel = new knifeNavaja("Damascus Steel", 0.0, 1.0);
let navajaRustCoat = new knifeNavaja("Rust Coat", 0.4, 1.0);
let navajaUltraviolet = new knifeNavaja("Ultraviolet", 0.06, 0.8);
let navajaFreehand = new knifeNavaja("Freehand", 0.0, 0.5);
let navajaLore = new knifeNavaja("Lore", 0.0, 1.0);
let navajaBlackLaminate = new knifeNavaja("Black Laminate", 0.0, 0.8);
let navajaAutotronic = new knifeNavaja("Autotronic", 0.0, 1.0);
let navajaBrightWater = new knifeNavaja("Bright Water", 0.0, 0.7);

//Creation of Doppler and Gamma Doppler navaja knives
let navajaDopplerPhase1 = new knifeNavaja("Doppler Phase 1", 0.0, 0.08);
let navajaDopplerPhase2 = new knifeNavaja("Doppler Phase 2", 0.0, 0.08);
let navajaDopplerPhase3 = new knifeNavaja("Doppler Phase 3", 0.0, 0.08);
let navajaDopplerPhase4 = new knifeNavaja("Doppler Phase 4", 0.0, 0.08);
let navajaDopplerBlackPearl = new knifeNavaja("Doppler Black Pearl", 0.0, 0.08);
let navajaDopplerSapphire = new knifeNavaja("Doppler Sapphire", 0.0, 0.08);
let navajaDopplerRuby = new knifeNavaja("Doppler Ruby", 0.0, 0.08);

//Navaja does not have Gamma Doppler, Autotronic, Black Laminate,
//Freehand, Bright Water or Lore patterns at this point (7/11/25)

// Navaja Array - contains all navaja knife objects
let navajaArray = [
  navajaVanilla,
  navajaSlaughter,
  navajaBlueSteel,
  navajaCrimsonWeb,
  navajaCaseHardened,
  navajaBorealForest,
  navajaNight,
  navajaStained,
  navajaUrbanMasked,
  navajaScorched,
  navajaForestDDPAT,
  navajaSafariMesh,
  navajaFade,
  navajaTigerTooth,
  navajaMarbleFade,
  navajaDamascusSteel,
  navajaRustCoat,
  navajaUltraviolet,
  navajaFreehand,
  navajaLore,
  navajaBlackLaminate,
  navajaAutotronic,
  navajaBrightWater,
  navajaDopplerPhase1,
  navajaDopplerPhase2,
  navajaDopplerPhase3,
  navajaDopplerPhase4,
  navajaDopplerBlackPearl,
  navajaDopplerSapphire,
  navajaDopplerRuby,
];

export { navajaArray };
