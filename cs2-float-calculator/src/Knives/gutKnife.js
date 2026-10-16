/* CS2 Knife Arrays - Organized structure for all knife types and finishes */

// Constructor for Gut Knives
function knifeGut(nameKnife, minKnifeFloat, maxKnifeFloat, price) {
  this.nameKnife = nameKnife;
  this.minKnifeFloat = minKnifeFloat;
  this.maxKnifeFloat = maxKnifeFloat;
  this.price = price || null;
}

//Creation of all Base 13 gut knives
let gutVanilla = new knifeGut("Vanilla", 0.06, 0.8);
let gutSlaughter = new knifeGut("Slaughter", 0.01, 0.26);
let gutBlueSteel = new knifeGut("Blue Steel", 0.0, 1.0);
let gutCrimsonWeb = new knifeGut("Crimson Web", 0.06, 0.8);
let gutCaseHardened = new knifeGut("Case Hardened", 0.0, 1.0);
let gutBorealForest = new knifeGut("Boreal Forest", 0.06, 0.8);
let gutNight = new knifeGut("Night", 0.06, 0.8);
let gutStained = new knifeGut("Stained", 0.0, 1.0);
let gutUrbanMasked = new knifeGut("Urban Masked", 0.06, 0.8);
let gutScorched = new knifeGut("Scorched", 0.06, 0.8);
let gutForestDDPAT = new knifeGut("Forest DDPAT", 0.06, 0.8);
let gutSafariMesh = new knifeGut("Safari Mesh", 0.06, 0.8);
let gutFade = new knifeGut("Fade", 0.0, 0.08);

//Creation of the remaining "premium" gut knives [excluding Dopplers]
let gutTigerTooth = new knifeGut("Tiger Tooth", 0.0, 0.08);
let gutMarbleFade = new knifeGut("Marble Fade", 0.0, 0.08);
let gutDamascusSteel = new knifeGut("Damascus Steel", 0.0, 1.0);
let gutRustCoat = new knifeGut("Rust Coat", 0.4, 1.0);
let gutUltraviolet = new knifeGut("Ultraviolet", 0.06, 0.8);
let gutFreehand = new knifeGut("Freehand", 0.0, 0.5);
let gutLore = new knifeGut("Lore", 0.0, 1.0);
let gutBlackLaminate = new knifeGut("Black Laminate", 0.0, 0.8);
let gutAutotronic = new knifeGut("Autotronic", 0.0, 1.0);
let gutBrightWater = new knifeGut("Bright Water", 0.0, 0.7);

//Creation of Doppler and Gamma Doppler gut knives
let gutDopplerPhase1 = new knifeGut("Doppler Phase 1", 0.0, 0.08);
let gutDopplerPhase2 = new knifeGut("Doppler Phase 2", 0.0, 0.08);
let gutDopplerPhase3 = new knifeGut("Doppler Phase 3", 0.0, 0.08);
let gutDopplerPhase4 = new knifeGut("Doppler Phase 4", 0.0, 0.08);
let gutDopplerBlackPearl = new knifeGut("Doppler Black Pearl", 0.0, 0.08);
let gutDopplerSapphire = new knifeGut("Doppler Sapphire", 0.0, 0.08);
let gutDopplerRuby = new knifeGut("Doppler Ruby", 0.0, 0.08);

let gutGammaDopplerPhase1 = new knifeGut("Gamma Doppler Phase 1", 0.0, 0.08);
let gutGammaDopplerPhase2 = new knifeGut("Gamma Doppler Phase 2", 0.0, 0.08);
let gutGammaDopplerPhase3 = new knifeGut("Gamma Doppler Phase 3", 0.0, 0.08);
let gutGammaDopplerPhase4 = new knifeGut("Gamma Doppler Phase 4", 0.0, 0.08);
let gutGammaDopplerEmerald = new knifeGut("Gamma Doppler Emerald", 0.0, 0.08);

// Gut Array - contains all gut knife objects
let gutArray = [
  gutVanilla,
  gutSlaughter,
  gutBlueSteel,
  gutCrimsonWeb,
  gutCaseHardened,
  gutBorealForest,
  gutNight,
  gutStained,
  gutUrbanMasked,
  gutScorched,
  gutForestDDPAT,
  gutSafariMesh,
  gutFade,
  gutTigerTooth,
  gutMarbleFade,
  gutDamascusSteel,
  gutRustCoat,
  gutUltraviolet,
  gutFreehand,
  gutLore,
  gutBlackLaminate,
  gutAutotronic,
  gutBrightWater,
  gutDopplerPhase1,
  gutDopplerPhase2,
  gutDopplerPhase3,
  gutDopplerPhase4,
  gutDopplerBlackPearl,
  gutDopplerSapphire,
  gutDopplerRuby,
  gutGammaDopplerPhase1,
  gutGammaDopplerPhase2,
  gutGammaDopplerPhase3,
  gutGammaDopplerPhase4,
  gutGammaDopplerEmerald,
];

export { gutArray };
