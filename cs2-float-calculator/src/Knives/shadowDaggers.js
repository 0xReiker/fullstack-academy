/* CS2 Shadow Daggers */

// Constructor for Shadow Daggers Knives
function knifeShadowDaggers(nameKnife, minKnifeFloat, maxKnifeFloat, price) {
  this.nameKnife = nameKnife;
  this.minKnifeFloat = minKnifeFloat;
  this.maxKnifeFloat = maxKnifeFloat;
  this.price = price || null;
}

//Creation of all Base 13 Shadow Daggers knives
let shadowDaggersVanilla = new knifeShadowDaggers("Vanilla", 0.06, 0.8);
let shadowDaggersSlaughter = new knifeShadowDaggers("Slaughter", 0.01, 0.26);
let shadowDaggersBlueSteel = new knifeShadowDaggers("Blue Steel", 0.0, 1.0);
let shadowDaggersCrimsonWeb = new knifeShadowDaggers("Crimson Web", 0.06, 0.8);
let shadowDaggersCaseHardened = new knifeShadowDaggers(
  "Case Hardened",
  0.0,
  1.0
);
let shadowDaggersBorealForest = new knifeShadowDaggers(
  "Boreal Forest",
  0.06,
  0.8
);
let shadowDaggersNight = new knifeShadowDaggers("Night", 0.06, 0.8);
let shadowDaggersStained = new knifeShadowDaggers("Stained", 0.0, 1.0);
let shadowDaggersUrbanMasked = new knifeShadowDaggers(
  "Urban Masked",
  0.06,
  0.8
);
let shadowDaggersScorched = new knifeShadowDaggers("Scorched", 0.06, 0.8);
let shadowDaggersForestDDPAT = new knifeShadowDaggers(
  "Forest DDPAT",
  0.06,
  0.8
);
let shadowDaggersSafariMesh = new knifeShadowDaggers("Safari Mesh", 0.06, 0.8);
let shadowDaggersFade = new knifeShadowDaggers("Fade", 0.0, 0.08);

//Creation of the remaining "premium" Shadow Daggers knives [excluding Dopplers]
let shadowDaggersTigerTooth = new knifeShadowDaggers("Tiger Tooth", 0.0, 0.08);
let shadowDaggersMarbleFade = new knifeShadowDaggers("Marble Fade", 0.0, 0.08);
let shadowDaggersDamascusSteel = new knifeShadowDaggers(
  "Damascus Steel",
  0.0,
  1.0
);
let shadowDaggersRustCoat = new knifeShadowDaggers("Rust Coat", 0.4, 1.0);
let shadowDaggersUltraviolet = new knifeShadowDaggers("Ultraviolet", 0.06, 0.8);
let shadowDaggersFreehand = new knifeShadowDaggers("Freehand", 0.0, 0.5);
let shadowDaggersLore = new knifeShadowDaggers("Lore", 0.0, 1.0);
let shadowDaggersBlackLaminate = new knifeShadowDaggers(
  "Black Laminate",
  0.0,
  0.8
);
let shadowDaggersAutotronic = new knifeShadowDaggers("Autotronic", 0.0, 1.0);
let shadowDaggersBrightWater = new knifeShadowDaggers("Bright Water", 0.0, 0.7);

//Creation of Doppler and Gamma Doppler Shadow Daggers knives
let shadowDaggersDopplerPhase1 = new knifeShadowDaggers(
  "Doppler Phase 1",
  0.0,
  0.08
);
let shadowDaggersDopplerPhase2 = new knifeShadowDaggers(
  "Doppler Phase 2",
  0.0,
  0.08
);
let shadowDaggersDopplerPhase3 = new knifeShadowDaggers(
  "Doppler Phase 3",
  0.0,
  0.08
);
let shadowDaggersDopplerPhase4 = new knifeShadowDaggers(
  "Doppler Phase 4",
  0.0,
  0.08
);
let shadowDaggersDopplerBlackPearl = new knifeShadowDaggers(
  "Doppler Black Pearl",
  0.0,
  0.08
);
let shadowDaggersDopplerSapphire = new knifeShadowDaggers(
  "Doppler Sapphire",
  0.0,
  0.08
);
let shadowDaggersDopplerRuby = new knifeShadowDaggers(
  "Doppler Ruby",
  0.0,
  0.08
);

let shadowDaggersGammaDopplerPhase1 = new knifeShadowDaggers(
  "Gamma Doppler Phase 1",
  0.0,
  0.08
);
let shadowDaggersGammaDopplerPhase2 = new knifeShadowDaggers(
  "Gamma Doppler Phase 2",
  0.0,
  0.08
);
let shadowDaggersGammaDopplerPhase3 = new knifeShadowDaggers(
  "Gamma Doppler Phase 3",
  0.0,
  0.08
);
let shadowDaggersGammaDopplerPhase4 = new knifeShadowDaggers(
  "Gamma Doppler Phase 4",
  0.0,
  0.08
);
let shadowDaggersGammaDopplerEmerald = new knifeShadowDaggers(
  "Gamma Doppler Emerald",
  0.0,
  0.08
);

// ShadowDaggers Array - contains all Shadow Daggers knife objects
let shadowDaggersArray = [
  shadowDaggersVanilla,
  shadowDaggersSlaughter,
  shadowDaggersBlueSteel,
  shadowDaggersCrimsonWeb,
  shadowDaggersCaseHardened,
  shadowDaggersBorealForest,
  shadowDaggersNight,
  shadowDaggersStained,
  shadowDaggersUrbanMasked,
  shadowDaggersScorched,
  shadowDaggersForestDDPAT,
  shadowDaggersSafariMesh,
  shadowDaggersFade,
  shadowDaggersTigerTooth,
  shadowDaggersMarbleFade,
  shadowDaggersDamascusSteel,
  shadowDaggersRustCoat,
  shadowDaggersUltraviolet,
  shadowDaggersFreehand,
  shadowDaggersLore,
  shadowDaggersBlackLaminate,
  shadowDaggersAutotronic,
  shadowDaggersBrightWater,
  shadowDaggersDopplerPhase1,
  shadowDaggersDopplerPhase2,
  shadowDaggersDopplerPhase3,
  shadowDaggersDopplerPhase4,
  shadowDaggersDopplerBlackPearl,
  shadowDaggersDopplerSapphire,
  shadowDaggersDopplerRuby,
  shadowDaggersGammaDopplerPhase1,
  shadowDaggersGammaDopplerPhase2,
  shadowDaggersGammaDopplerPhase3,
  shadowDaggersGammaDopplerPhase4,
  shadowDaggersGammaDopplerEmerald,
];

export { shadowDaggersArray };
