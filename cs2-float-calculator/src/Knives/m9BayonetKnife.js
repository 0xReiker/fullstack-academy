/* CS2 M9 Bayonet Knives */
//This will be the only knife with an abbreviated name
//To avoid confusion with Bayonet Knife

// Constructor for M9 Knives
function knifeM9(nameKnife, minKnifeFloat, maxKnifeFloat, price) {
  this.nameKnife = nameKnife;
  this.minKnifeFloat = minKnifeFloat;
  this.maxKnifeFloat = maxKnifeFloat;
  this.price = price || null;
}

//Creation of all Base 13 M9 knives
let m9Vanilla = new knifeM9("Vanilla", 0.06, 0.8);
let m9Slaughter = new knifeM9("Slaughter", 0.01, 0.26);
let m9BlueSteel = new knifeM9("Blue Steel", 0.0, 1.0);
let m9CrimsonWeb = new knifeM9("Crimson Web", 0.06, 0.8);
let m9CaseHardened = new knifeM9("Case Hardened", 0.0, 1.0);
let m9BorealForest = new knifeM9("Boreal Forest", 0.06, 0.8);
let m9Night = new knifeM9("Night", 0.06, 0.8);
let m9Stained = new knifeM9("Stained", 0.0, 1.0);
let m9UrbanMasked = new knifeM9("Urban Masked", 0.06, 0.8);
let m9Scorched = new knifeM9("Scorched", 0.06, 0.8);
let m9ForestDDPAT = new knifeM9("Forest DDPAT", 0.06, 0.8);
let m9SafariMesh = new knifeM9("Safari Mesh", 0.06, 0.8);
let m9Fade = new knifeM9("Fade", 0.0, 0.08);

//Creation of the remaining "premium" m9 knives [excluding Dopplers]
let m9TigerTooth = new knifeM9("Tiger Tooth", 0.0, 0.08);
let m9MarbleFade = new knifeM9("Marble Fade", 0.0, 0.08);
let m9DamascusSteel = new knifeM9("Damascus Steel", 0.0, 1.0);
let m9RustCoat = new knifeM9("Rust Coat", 0.4, 1.0);
let m9Ultraviolet = new knifeM9("Ultraviolet", 0.06, 0.8);
let m9Freehand = new knifeM9("Freehand", 0.0, 0.5);
let m9Lore = new knifeM9("Lore", 0.0, 1.0);
let m9BlackLaminate = new knifeM9("Black Laminate", 0.0, 0.8);
let m9Autotronic = new knifeM9("Autotronic", 0.0, 1.0);
let m9BrightWater = new knifeM9("Bright Water", 0.0, 0.7);

//Creation of Doppler and Gamma Doppler m9 knives
let m9DopplerPhase1 = new knifeM9("Doppler Phase 1", 0.0, 0.08);
let m9DopplerPhase2 = new knifeM9("Doppler Phase 2", 0.0, 0.08);
let m9DopplerPhase3 = new knifeM9("Doppler Phase 3", 0.0, 0.08);
let m9DopplerPhase4 = new knifeM9("Doppler Phase 4", 0.0, 0.08);
let m9DopplerBlackPearl = new knifeM9("Doppler Black Pearl", 0.0, 0.08);
let m9DopplerSapphire = new knifeM9("Doppler Sapphire", 0.0, 0.08);
let m9DopplerRuby = new knifeM9("Doppler Ruby", 0.0, 0.08);

let m9GammaDopplerPhase1 = new knifeM9("Gamma Doppler Phase 1", 0.0, 0.08);
let m9GammaDopplerPhase2 = new knifeM9("Gamma Doppler Phase 2", 0.0, 0.08);
let m9GammaDopplerPhase3 = new knifeM9("Gamma Doppler Phase 3", 0.0, 0.08);
let m9GammaDopplerPhase4 = new knifeM9("Gamma Doppler Phase 4", 0.0, 0.08);
let m9GammaDopplerEmerald = new knifeM9("Gamma Doppler Emerald", 0.0, 0.08);

// M9 Array - contains all m9 knife objects
let m9Array = [
  m9Vanilla,
  m9Slaughter,
  m9BlueSteel,
  m9CrimsonWeb,
  m9CaseHardened,
  m9BorealForest,
  m9Night,
  m9Stained,
  m9UrbanMasked,
  m9Scorched,
  m9ForestDDPAT,
  m9SafariMesh,
  m9Fade,
  m9TigerTooth,
  m9MarbleFade,
  m9DamascusSteel,
  m9RustCoat,
  m9Ultraviolet,
  m9Freehand,
  m9Lore,
  m9BlackLaminate,
  m9Autotronic,
  m9BrightWater,
  m9DopplerPhase1,
  m9DopplerPhase2,
  m9DopplerPhase3,
  m9DopplerPhase4,
  m9DopplerBlackPearl,
  m9DopplerSapphire,
  m9DopplerRuby,
  m9GammaDopplerPhase1,
  m9GammaDopplerPhase2,
  m9GammaDopplerPhase3,
  m9GammaDopplerPhase4,
  m9GammaDopplerEmerald,
];

export { m9Array };
