/* CS2 Red [Covert] Pistols */

// Constructor for Red Pistols
function redPistol(nameGun, minGunFloat, maxGunFloat, price) {
  this.nameGun = nameGun;
  this.minGunFloat = minGunFloat;
  this.maxGunFloat = maxGunFloat;
  this.price = price || null;
}

// ===== PISTOL RED SKINS =====
// Glock-18
let glock18GoldToof = new redPistol("Gold Toof", 0.0, 0.73);
let glock18NeoNoir = new redPistol("Glock-18 Neo-Noir", 0.0, 1.0);
let glock18BulletQueen = new redPistol("Bullet Queen", 0.0, 1.0);
let glock18WastelandRebel = new redPistol("Wasteland Rebel", 0.0, 0.54);
let glock18GammaDopplerEmerald = new redPistol(
  "Gamma Doppler Emerald",
  0.0,
  0.5
);
let glock18GammaDopplerPhase1 = new redPistol(
  "Gamma Doppler Phase 1",
  0.0,
  0.5
);
let glock18GammaDopplerPhase2 = new redPistol(
  "Gamma Doppler Phase 2",
  0.0,
  0.5
);
let glock18GammaDopplerPhase3 = new redPistol(
  "Gamma Doppler Phase 3",
  0.0,
  0.5
);
let glock18GammaDopplerPhase4 = new redPistol(
  "Gamma Doppler Phase 4",
  0.0,
  0.5
);

// USP-S
let uspsPrintstream = new redPistol("USPS Printstream", 0.0, 0.85);
let uspsTheTraitor = new redPistol("The Traitor", 0.0, 1.0);
let uspsNeoNoir = new redPistol("USPS Neo-Noir", 0.0, 0.7);
let uspsKillConfirmed = new redPistol("Kill Confirmed", 0.0, 1.0);

// P2000
let p2000FireElemental = new redPistol("Fire Elemental", 0.0, 0.6);

// P250
let p250SeeYaLater = new redPistol("See Ya Later", 0.0, 0.7);

// Desert Eagle
let desertEagleOceanDrive = new redPistol("Ocean Drive", 0.0, 1.0);
let desertEaglePrintstream = new redPistol(
  "Desert Eagle Printstream",
  0.0,
  0.8
);
let desertEagleCodeRed = new redPistol("Code Red", 0.0, 1.0);
let desertEagleGoldenKoi = new redPistol("Golden Koi", 0.0, 0.12);

// CZ75-Auto
let cz75Victoria = new redPistol("Victoria", 0.0, 0.75);

// Tec-9

// Five-SeveN
let fiveSevenAngryMob = new redPistol("Angry Mob", 0.0, 0.7);
let fiveSevenHyperBeast = new redPistol("Hyper Beast", 0.0, 1.0);

// Dual Berettas

// R8 Revolver
let r8RevolverFade = new redPistol("R8 Fade", 0.0, 0.4);

// ===== ARRAYS FOR ORGANIZATION =====
// Pistol Reds Arrays
let glock18RedsArray = [
  glock18GoldToof,
  glock18NeoNoir,
  glock18BulletQueen,
  glock18WastelandRebel,
  glock18GammaDopplerEmerald,
  glock18GammaDopplerPhase1,
  glock18GammaDopplerPhase2,
  glock18GammaDopplerPhase3,
  glock18GammaDopplerPhase4,
];

let uspsRedsArray = [
  uspsPrintstream,
  uspsTheTraitor,
  uspsNeoNoir,
  uspsKillConfirmed,
];

let p2000RedsArray = [p2000FireElemental];

let p250RedsArray = [p250SeeYaLater];

let deagleRedsArray = [
  desertEagleOceanDrive,
  desertEaglePrintstream,
  desertEagleCodeRed,
  desertEagleGoldenKoi,
];

let cz75RedsArray = [cz75Victoria];

let tec9RedsArray = [];

let fivesevenRedsArray = [fiveSevenAngryMob, fiveSevenHyperBeast];

let dualBerettasRedsArray = [];

let r8RevolverRedsArray = [r8RevolverFade];

// Master array of all red pistols
let allRedPistolsArray = [
  ...glock18RedsArray,
  ...uspsRedsArray,
  ...p2000RedsArray,
  ...p250RedsArray,
  ...deagleRedsArray,
  ...cz75RedsArray,
  ...tec9RedsArray,
  ...fivesevenRedsArray,
  ...dualBerettasRedsArray,
  ...r8RevolverRedsArray,
];

export { allRedPistolsArray };
