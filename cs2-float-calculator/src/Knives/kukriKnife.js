/* CS2 Kukri Knives */

// Constructor for Kukri Knives
function knifeKukri(nameKnife, minKnifeFloat, maxKnifeFloat, price) {
  this.nameKnife = nameKnife;
  this.minKnifeFloat = minKnifeFloat;
  this.maxKnifeFloat = maxKnifeFloat;
  this.price = price || null;
}

//Creation of all Base 13 kukri knives
let kukriVanilla = new knifeKukri("Vanilla", 0.06, 0.8);
let kukriSlaughter = new knifeKukri("Slaughter", 0.01, 0.26);
let kukriBlueSteel = new knifeKukri("Blue Steel", 0.0, 1.0);
let kukriCrimsonWeb = new knifeKukri("Crimson Web", 0.06, 0.8);
let kukriCaseHardened = new knifeKukri("Case Hardened", 0.0, 1.0);
let kukriBorealForest = new knifeKukri("Boreal Forest", 0.06, 0.8);
let kukriNight = new knifeKukri("Night", 0.06, 0.8);
let kukriStained = new knifeKukri("Stained", 0.0, 1.0);
let kukriUrbanMasked = new knifeKukri("Urban Masked", 0.06, 0.8);
let kukriScorched = new knifeKukri("Scorched", 0.06, 0.8);
let kukriForestDDPAT = new knifeKukri("Forest DDPAT", 0.06, 0.8);
let kukriSafariMesh = new knifeKukri("Safari Mesh", 0.06, 0.8);
let kukriFade = new knifeKukri("Fade", 0.0, 0.08);

//Kukri does not have the ten premium knives nor the
//Gamma Doppler, Autotronic, Black Laminate,
//Freehand, Bright Water or Lore patterns at this point (7/11/25)

// Kukri Array - contains all kukri knife objects
let kukriArray = [
  kukriVanilla,
  kukriSlaughter,
  kukriBlueSteel,
  kukriCrimsonWeb,
  kukriCaseHardened,
  kukriBorealForest,
  kukriNight,
  kukriStained,
  kukriUrbanMasked,
  kukriScorched,
  kukriForestDDPAT,
  kukriSafariMesh,
  kukriFade,
];

export { kukriArray };
