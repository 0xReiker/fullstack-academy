/* CS2 Stiletto Knives */

// Constructor for Stiletto Knives
function knifeStiletto(nameKnife, minKnifeFloat, maxKnifeFloat, price) {
  this.nameKnife = nameKnife;
  this.minKnifeFloat = minKnifeFloat;
  this.maxKnifeFloat = maxKnifeFloat;
  this.price = price || null;
}

//Creation of all Base 13 stiletto knives
let stilettoVanilla = new knifeStiletto("Vanilla", 0.06, 0.8);
let stilettoSlaughter = new knifeStiletto("Slaughter", 0.01, 0.26);
let stilettoBlueSteel = new knifeStiletto("Blue Steel", 0.0, 1.0);
let stilettoCrimsonWeb = new knifeStiletto("Crimson Web", 0.06, 0.8);
let stilettoCaseHardened = new knifeStiletto("Case Hardened", 0.0, 1.0);
let stilettoBorealForest = new knifeStiletto("Boreal Forest", 0.06, 0.8);
let stilettoNight = new knifeStiletto("Night", 0.06, 0.8);
let stilettoStained = new knifeStiletto("Stained", 0.0, 1.0);
let stilettoUrbanMasked = new knifeStiletto("Urban Masked", 0.06, 0.8);
let stilettoScorched = new knifeStiletto("Scorched", 0.06, 0.8);
let stilettoForestDDPAT = new knifeStiletto("Forest DDPAT", 0.06, 0.8);
let stilettoSafariMesh = new knifeStiletto("Safari Mesh", 0.06, 0.8);
let stilettoFade = new knifeStiletto("Fade", 0.0, 0.08);

//Creation of the remaining "premium" stiletto knives [excluding Dopplers]
let stilettoTigerTooth = new knifeStiletto("Tiger Tooth", 0.0, 0.08);
let stilettoMarbleFade = new knifeStiletto("Marble Fade", 0.0, 0.08);
let stilettoDamascusSteel = new knifeStiletto("Damascus Steel", 0.0, 1.0);
let stilettoRustCoat = new knifeStiletto("Rust Coat", 0.4, 1.0);
let stilettoUltraviolet = new knifeStiletto("Ultraviolet", 0.06, 0.8);
let stilettoFreehand = new knifeStiletto("Freehand", 0.0, 0.5);
let stilettoLore = new knifeStiletto("Lore", 0.0, 1.0);
let stilettoBlackLaminate = new knifeStiletto("Black Laminate", 0.0, 0.8);
let stilettoAutotronic = new knifeStiletto("Autotronic", 0.0, 1.0);
let stilettoBrightWater = new knifeStiletto("Bright Water", 0.0, 0.7);

//Creation of Doppler and Gamma Doppler stiletto knives
let stilettoDopplerPhase1 = new knifeStiletto("Doppler Phase 1", 0.0, 0.08);
let stilettoDopplerPhase2 = new knifeStiletto("Doppler Phase 2", 0.0, 0.08);
let stilettoDopplerPhase3 = new knifeStiletto("Doppler Phase 3", 0.0, 0.08);
let stilettoDopplerPhase4 = new knifeStiletto("Doppler Phase 4", 0.0, 0.08);
let stilettoDopplerBlackPearl = new knifeStiletto(
  "Doppler Black Pearl",
  0.0,
  0.08
);
let stilettoDopplerSapphire = new knifeStiletto("Doppler Sapphire", 0.0, 0.08);
let stilettoDopplerRuby = new knifeStiletto("Doppler Ruby", 0.0, 0.08);

//Stiletto does not have Gamma Doppler, Autotronic, Black Laminate,
//Freehand, Bright Water or Lore patterns at this point (7/11/25)

// Stiletto Array - contains all stiletto knife objects
let stilettoArray = [
  stilettoVanilla,
  stilettoSlaughter,
  stilettoBlueSteel,
  stilettoCrimsonWeb,
  stilettoCaseHardened,
  stilettoBorealForest,
  stilettoNight,
  stilettoStained,
  stilettoUrbanMasked,
  stilettoScorched,
  stilettoForestDDPAT,
  stilettoSafariMesh,
  stilettoFade,
  stilettoTigerTooth,
  stilettoMarbleFade,
  stilettoDamascusSteel,
  stilettoRustCoat,
  stilettoUltraviolet,
  stilettoFreehand,
  stilettoLore,
  stilettoBlackLaminate,
  stilettoAutotronic,
  stilettoBrightWater,
  stilettoDopplerPhase1,
  stilettoDopplerPhase2,
  stilettoDopplerPhase3,
  stilettoDopplerPhase4,
  stilettoDopplerBlackPearl,
  stilettoDopplerSapphire,
  stilettoDopplerRuby,
];

export { stilettoArray };
