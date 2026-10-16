/* CS2 Skeleton Knives */

// Constructor for Skeleton Knives
function knifeSkeleton(nameKnife, minKnifeFloat, maxKnifeFloat, price) {
  this.nameKnife = nameKnife;
  this.minKnifeFloat = minKnifeFloat;
  this.maxKnifeFloat = maxKnifeFloat;
  this.price = price || null;
}

//Creation of all Base 13 skeleton knives
let skeletonVanilla = new knifeSkeleton("Vanilla", 0.06, 0.8);
let skeletonSlaughter = new knifeSkeleton("Slaughter", 0.01, 0.26);
let skeletonBlueSteel = new knifeSkeleton("Blue Steel", 0.0, 1.0);
let skeletonCrimsonWeb = new knifeSkeleton("Crimson Web", 0.06, 0.8);
let skeletonCaseHardened = new knifeSkeleton("Case Hardened", 0.0, 1.0);
let skeletonBorealForest = new knifeSkeleton("Boreal Forest", 0.06, 0.8);
let skeletonNight = new knifeSkeleton("Night", 0.06, 0.8);
let skeletonStained = new knifeSkeleton("Stained", 0.0, 1.0);
let skeletonUrbanMasked = new knifeSkeleton("Urban Masked", 0.06, 0.8);
let skeletonScorched = new knifeSkeleton("Scorched", 0.06, 0.8);
let skeletonForestDDPAT = new knifeSkeleton("Forest DDPAT", 0.06, 0.8);
let skeletonSafariMesh = new knifeSkeleton("Safari Mesh", 0.06, 0.8);
let skeletonFade = new knifeSkeleton("Fade", 0.0, 0.08);

//Creation of the remaining "premium" skeleton knives [excluding Dopplers]
let skeletonTigerTooth = new knifeSkeleton("Tiger Tooth", 0.0, 0.08);
let skeletonMarbleFade = new knifeSkeleton("Marble Fade", 0.0, 0.08);
let skeletonDamascusSteel = new knifeSkeleton("Damascus Steel", 0.0, 1.0);
let skeletonRustCoat = new knifeSkeleton("Rust Coat", 0.4, 1.0);
let skeletonUltraviolet = new knifeSkeleton("Ultraviolet", 0.06, 0.8);
let skeletonFreehand = new knifeSkeleton("Freehand", 0.0, 0.5);
let skeletonLore = new knifeSkeleton("Lore", 0.0, 1.0);
let skeletonBlackLaminate = new knifeSkeleton("Black Laminate", 0.0, 0.8);
let skeletonAutotronic = new knifeSkeleton("Autotronic", 0.0, 1.0);
let skeletonBrightWater = new knifeSkeleton("Bright Water", 0.0, 0.7);

//Creation of Doppler and Gamma Doppler skeleton knives
let skeletonDopplerPhase1 = new knifeSkeleton("Doppler Phase 1", 0.0, 0.08);
let skeletonDopplerPhase2 = new knifeSkeleton("Doppler Phase 2", 0.0, 0.08);
let skeletonDopplerPhase3 = new knifeSkeleton("Doppler Phase 3", 0.0, 0.08);
let skeletonDopplerPhase4 = new knifeSkeleton("Doppler Phase 4", 0.0, 0.08);
let skeletonDopplerBlackPearl = new knifeSkeleton(
  "Doppler Black Pearl",
  0.0,
  0.08
);
let skeletonDopplerSapphire = new knifeSkeleton("Doppler Sapphire", 0.0, 0.08);
let skeletonDopplerRuby = new knifeSkeleton("Doppler Ruby", 0.0, 0.08);

//Skeleton does not have Gamma Doppler, Autotronic, Black Laminate,
//Freehand, Bright Water or Lore patterns at this point (7/11/25)

// Skeleton Array - contains all skeleton knife objects
let skeletonArray = [
  skeletonVanilla,
  skeletonSlaughter,
  skeletonBlueSteel,
  skeletonCrimsonWeb,
  skeletonCaseHardened,
  skeletonBorealForest,
  skeletonNight,
  skeletonStained,
  skeletonUrbanMasked,
  skeletonScorched,
  skeletonForestDDPAT,
  skeletonSafariMesh,
  skeletonFade,
  skeletonTigerTooth,
  skeletonMarbleFade,
  skeletonDamascusSteel,
  skeletonRustCoat,
  skeletonUltraviolet,
  skeletonFreehand,
  skeletonLore,
  skeletonBlackLaminate,
  skeletonAutotronic,
  skeletonBrightWater,
  skeletonDopplerPhase1,
  skeletonDopplerPhase2,
  skeletonDopplerPhase3,
  skeletonDopplerPhase4,
  skeletonDopplerBlackPearl,
  skeletonDopplerSapphire,
  skeletonDopplerRuby,
];

export { skeletonArray };
