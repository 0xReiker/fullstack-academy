/* CS2 Paracord Knives */

// Constructor for Paracord Knives
function knifeParacord(nameKnife, minKnifeFloat, maxKnifeFloat, price) {
  this.nameKnife = nameKnife;
  this.minKnifeFloat = minKnifeFloat;
  this.maxKnifeFloat = maxKnifeFloat;
  this.price = price || null;
}

//Creation of all Base 13 paracord knives
let paracordVanilla = new knifeParacord("Vanilla", 0.06, 0.8);
let paracordSlaughter = new knifeParacord("Slaughter", 0.01, 0.26);
let paracordBlueSteel = new knifeParacord("Blue Steel", 0.0, 1.0);
let paracordCrimsonWeb = new knifeParacord("Crimson Web", 0.06, 0.8);
let paracordCaseHardened = new knifeParacord("Case Hardened", 0.0, 1.0);
let paracordBorealForest = new knifeParacord("Boreal Forest", 0.06, 0.8);
let paracordNight = new knifeParacord("Night", 0.06, 0.8);
let paracordStained = new knifeParacord("Stained", 0.0, 1.0);
let paracordUrbanMasked = new knifeParacord("Urban Masked", 0.06, 0.8);
let paracordScorched = new knifeParacord("Scorched", 0.06, 0.8);
let paracordForestDDPAT = new knifeParacord("Forest DDPAT", 0.06, 0.8);
let paracordSafariMesh = new knifeParacord("Safari Mesh", 0.06, 0.8);
let paracordFade = new knifeParacord("Fade", 0.0, 0.08);

//Creation of the remaining "premium" paracord knives [excluding Dopplers]
let paracordTigerTooth = new knifeParacord("Tiger Tooth", 0.0, 0.08);
let paracordMarbleFade = new knifeParacord("Marble Fade", 0.0, 0.08);
let paracordDamascusSteel = new knifeParacord("Damascus Steel", 0.0, 1.0);
let paracordRustCoat = new knifeParacord("Rust Coat", 0.4, 1.0);
let paracordUltraviolet = new knifeParacord("Ultraviolet", 0.06, 0.8);
let paracordFreehand = new knifeParacord("Freehand", 0.0, 0.5);
let paracordLore = new knifeParacord("Lore", 0.0, 1.0);
let paracordBlackLaminate = new knifeParacord("Black Laminate", 0.0, 0.8);
let paracordAutotronic = new knifeParacord("Autotronic", 0.0, 1.0);
let paracordBrightWater = new knifeParacord("Bright Water", 0.0, 0.7);

//Creation of Doppler and Gamma Doppler paracord knives
let paracordDopplerPhase1 = new knifeParacord("Doppler Phase 1", 0.0, 0.08);
let paracordDopplerPhase2 = new knifeParacord("Doppler Phase 2", 0.0, 0.08);
let paracordDopplerPhase3 = new knifeParacord("Doppler Phase 3", 0.0, 0.08);
let paracordDopplerPhase4 = new knifeParacord("Doppler Phase 4", 0.0, 0.08);
let paracordDopplerBlackPearl = new knifeParacord(
  "Doppler Black Pearl",
  0.0,
  0.08
);
let paracordDopplerSapphire = new knifeParacord("Doppler Sapphire", 0.0, 0.08);
let paracordDopplerRuby = new knifeParacord("Doppler Ruby", 0.0, 0.08);

//Paracord does not have Gamma Doppler, Autotronic, Black Laminate,
//Freehand, Bright Water or Lore patterns at this point (7/11/25)

// Paracord Array - contains all paracord knife objects
let paracordArray = [
  paracordVanilla,
  paracordSlaughter,
  paracordBlueSteel,
  paracordCrimsonWeb,
  paracordCaseHardened,
  paracordBorealForest,
  paracordNight,
  paracordStained,
  paracordUrbanMasked,
  paracordScorched,
  paracordForestDDPAT,
  paracordSafariMesh,
  paracordFade,
  paracordTigerTooth,
  paracordMarbleFade,
  paracordDamascusSteel,
  paracordRustCoat,
  paracordUltraviolet,
  paracordFreehand,
  paracordLore,
  paracordBlackLaminate,
  paracordAutotronic,
  paracordBrightWater,
  paracordDopplerPhase1,
  paracordDopplerPhase2,
  paracordDopplerPhase3,
  paracordDopplerPhase4,
  paracordDopplerBlackPearl,
  paracordDopplerSapphire,
  paracordDopplerRuby,
];

export { paracordArray };
