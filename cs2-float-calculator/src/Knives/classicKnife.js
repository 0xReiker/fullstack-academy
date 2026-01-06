/* CS2 Classic Knives */

// Constructor for Classic Knives
function knifeClassic(nameKnife, minKnifeFloat, maxKnifeFloat, price) {
  this.nameKnife = nameKnife;
  this.minKnifeFloat = minKnifeFloat;
  this.maxKnifeFloat = maxKnifeFloat;
  this.price = price || null;
}

//Creation of all Base 13 classic knives
let classicVanilla = new knifeClassic("Vanilla", 0.06, 0.8);
let classicSlaughter = new knifeClassic("Slaughter", 0.01, 0.26);
let classicBlueSteel = new knifeClassic("Blue Steel", 0.0, 1.0);
let classicCrimsonWeb = new knifeClassic("Crimson Web", 0.06, 0.8);
let classicCaseHardened = new knifeClassic("Case Hardened", 0.0, 1.0);
let classicBorealForest = new knifeClassic("Boreal Forest", 0.06, 0.8);
let classicNight = new knifeClassic("Night", 0.06, 0.8);
let classicStained = new knifeClassic("Stained", 0.0, 1.0);
let classicUrbanMasked = new knifeClassic("Urban Masked", 0.06, 0.8);
let classicScorched = new knifeClassic("Scorched", 0.06, 0.8);
let classicForestDDPAT = new knifeClassic("Forest DDPAT", 0.06, 0.8);
let classicSafariMesh = new knifeClassic("Safari Mesh", 0.06, 0.8);
let classicFade = new knifeClassic("Fade", 0.0, 0.08);

//Classic does not have the ten premium knives nor the
//Gamma Doppler, Autotronic, Black Laminate,
//Freehand, Bright Water or Lore patterns at this point (7/11/25)

// Classic Array - contains all classic knife objects
let classicArray = [
  classicVanilla,
  classicSlaughter,
  classicBlueSteel,
  classicCrimsonWeb,
  classicCaseHardened,
  classicBorealForest,
  classicNight,
  classicStained,
  classicUrbanMasked,
  classicScorched,
  classicForestDDPAT,
  classicSafariMesh,
  classicFade,
];

export { classicArray };
