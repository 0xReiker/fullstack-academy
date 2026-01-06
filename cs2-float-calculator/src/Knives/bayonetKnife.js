/* CS2 Bayonet Knives */

// Constructor for Bayonet Knives
function knifeBayonet(nameKnife, minKnifeFloat, maxKnifeFloat, price) {
  this.nameKnife = nameKnife;
  this.minKnifeFloat = minKnifeFloat;
  this.maxKnifeFloat = maxKnifeFloat;
  this.price = price || null;
}

//Creation of all Base 13 bayonet knives
let bayonetVanilla = new knifeBayonet("Vanilla", 0.06, 0.8);
let bayonetSlaughter = new knifeBayonet("Slaughter", 0.01, 0.26);
let bayonetBlueSteel = new knifeBayonet("Blue Steel", 0.0, 1.0);
let bayonetCrimsonWeb = new knifeBayonet("Crimson Web", 0.06, 0.8);
let bayonetCaseHardened = new knifeBayonet("Case Hardened", 0.0, 1.0);
let bayonetBorealForest = new knifeBayonet("Boreal Forest", 0.06, 0.8);
let bayonetNight = new knifeBayonet("Night", 0.06, 0.8);
let bayonetStained = new knifeBayonet("Stained", 0.0, 1.0);
let bayonetUrbanMasked = new knifeBayonet("Urban Masked", 0.06, 0.8);
let bayonetScorched = new knifeBayonet("Scorched", 0.06, 0.8);
let bayonetForestDDPAT = new knifeBayonet("Forest DDPAT", 0.06, 0.8);
let bayonetSafariMesh = new knifeBayonet("Safari Mesh", 0.06, 0.8);
let bayonetFade = new knifeBayonet("Fade", 0.0, 0.08);

//Creation of the remaining "premium" bayonet knives [excluding Dopplers]
let bayonetTigerTooth = new knifeBayonet("Tiger Tooth", 0.0, 0.08);
let bayonetMarbleFade = new knifeBayonet("Marble Fade", 0.0, 0.08);
let bayonetDamascusSteel = new knifeBayonet("Damascus Steel", 0.0, 1.0);
let bayonetRustCoat = new knifeBayonet("Rust Coat", 0.4, 1.0);
let bayonetUltraviolet = new knifeBayonet("Ultraviolet", 0.06, 0.8);
let bayonetFreehand = new knifeBayonet("Freehand", 0.0, 0.5);
let bayonetLore = new knifeBayonet("Lore", 0.0, 1.0);
let bayonetBlackLaminate = new knifeBayonet("Black Laminate", 0.0, 0.8);
let bayonetAutotronic = new knifeBayonet("Autotronic", 0.0, 1.0);
let bayonetBrightWater = new knifeBayonet("Bright Water", 0.0, 0.7);

//Creation of Doppler and Gamma Doppler bayonet knives
let bayonetDopplerPhase1 = new knifeBayonet("Doppler Phase 1", 0.0, 0.08);
let bayonetDopplerPhase2 = new knifeBayonet("Doppler Phase 2", 0.0, 0.08);
let bayonetDopplerPhase3 = new knifeBayonet("Doppler Phase 3", 0.0, 0.08);
let bayonetDopplerPhase4 = new knifeBayonet("Doppler Phase 4", 0.0, 0.08);
let bayonetDopplerBlackPearl = new knifeBayonet(
  "Doppler Black Pearl",
  0.0,
  0.08
);
let bayonetDopplerSapphire = new knifeBayonet("Doppler Sapphire", 0.0, 0.08);
let bayonetDopplerRuby = new knifeBayonet("Doppler Ruby", 0.0, 0.08);

let bayonetGammaDopplerPhase1 = new knifeBayonet(
  "Gamma Doppler Phase 1",
  0.0,
  0.08
);
let bayonetGammaDopplerPhase2 = new knifeBayonet(
  "Gamma Doppler Phase 2",
  0.0,
  0.08
);
let bayonetGammaDopplerPhase3 = new knifeBayonet(
  "Gamma Doppler Phase 3",
  0.0,
  0.08
);
let bayonetGammaDopplerPhase4 = new knifeBayonet(
  "Gamma Doppler Phase 4",
  0.0,
  0.08
);
let bayonetGammaDopplerEmerald = new knifeBayonet(
  "Gamma Doppler Emerald",
  0.0,
  0.08
);

// Bayonet Array - contains all bayonet knife objects
let bayonetArray = [
  bayonetVanilla,
  bayonetSlaughter,
  bayonetBlueSteel,
  bayonetCrimsonWeb,
  bayonetCaseHardened,
  bayonetBorealForest,
  bayonetNight,
  bayonetStained,
  bayonetUrbanMasked,
  bayonetScorched,
  bayonetForestDDPAT,
  bayonetSafariMesh,
  bayonetFade,
  bayonetTigerTooth,
  bayonetMarbleFade,
  bayonetDamascusSteel,
  bayonetRustCoat,
  bayonetUltraviolet,
  bayonetFreehand,
  bayonetLore,
  bayonetBlackLaminate,
  bayonetAutotronic,
  bayonetBrightWater,
  bayonetDopplerPhase1,
  bayonetDopplerPhase2,
  bayonetDopplerPhase3,
  bayonetDopplerPhase4,
  bayonetDopplerBlackPearl,
  bayonetDopplerSapphire,
  bayonetDopplerRuby,
  bayonetGammaDopplerPhase1,
  bayonetGammaDopplerPhase2,
  bayonetGammaDopplerPhase3,
  bayonetGammaDopplerPhase4,
  bayonetGammaDopplerEmerald,
];

export { bayonetArray };
