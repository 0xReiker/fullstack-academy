/* CS2 Red [Covert] Rifles */

// Constructor for Red Rifles
function redRifle(nameGun, minGunFloat, maxGunFloat, price) {
  this.nameGun = nameGun;
  this.minGunFloat = minGunFloat;
  this.maxGunFloat = maxGunFloat;
  this.price = price || null;
}

// ===== AK-47 RED SKINS =====
let ak47TheOligarch = new redRifle("The Oligarch", 0.0, 1.0);
let ak47Inheritance = new redRifle("Inheritance", 0.0, 1.0);
let ak47HeadShot = new redRifle("Head Shot", 0.0, 1.0);
let ak47Nightwish = new redRifle("Nightwish", 0.0, 0.7);
let ak47LeetMuseo = new redRifle("Leet Museo", 0.0, 1.0);
let ak47LegionOfAnubis = new redRifle("Legion of Anubis", 0.0, 0.7);
let ak47Asiimov = new redRifle("AK47 Asiimov", 0.05, 1.0);
let ak47NeonRider = new redRifle("AK47 Neon Rider", 0.0, 1.0);
let ak47TheEmpress = new redRifle("The Empress", 0.0, 1.0);
let ak47Bloodsport = new redRifle("Bloodsport", 0.0, 0.5);
let ak47NeonRevolution = new redRifle("AK47 Neon Revolution", 0.0, 0.7);
let ak47FuelInjector = new redRifle("Fuel Injector", 0.0, 1.0);
let ak47AquamarineRevenge = new redRifle("Aquamarine Revenge", 0.0, 1.0);
let ak47WastelandRebel = new redRifle("Wasteland Rebel", 0.05, 0.7);
let ak47Jaguar = new redRifle("Jaguar", 0.0, 1.0);
let ak47Vulcan = new redRifle("Vulcan", 0.0, 0.9);
let ak47FireSerpent = new redRifle("Fire Serpent", 0.05, 0.76);
let ak47BTheMonster = new redRifle("B the Monster", 0.0, 1.0);
let ak47GoldArabesque = new redRifle("Gold Arabesque", 0.0, 0.7);
let ak47XRay = new redRifle("X-Ray", 0.0, 0.8);
let ak47WildLotus = new redRifle("Wild Lotus", 0.0, 0.7);

// ===== M4A4 RED SKINS =====
let m4a4FullThrottle = new redRifle("Full Throttle", 0.0, 1.0);
let m4a4Temukau = new redRifle("Temukau", 0.0, 1.0);
let m4a4InLivingColor = new redRifle("In Living Color", 0.0, 1.0);
let m4a4TheEmperor = new redRifle("The Emperor", 0.0, 1.0);
let m4a4NeoNoir = new redRifle("M4A4 Neo-Noir", 0.0, 1.0);
let m4a4BuzzKill = new redRifle("Buzz Kill", 0.0, 1.0);
let m4a4TheBattlestar = new redRifle("The Battlestar", 0.0, 1.0);
let m4a4RoyalPaladin = new redRifle("Royal Paladin", 0.0, 1.0);
let m4a4BulletRain = new redRifle("Bullet Rain", 0.0, 1.0);
let m4a4DesertStrike = new redRifle("Desert-Strike", 0.0, 1.0);
let m4a4Asiimov = new redRifle("M4A4 Asiimov", 0.18, 1.0);
let m4a4XRay = new redRifle("X-Ray", 0.0, 1.0);
let m4a4EyeOfHorus = new redRifle("Eye of Horus", 0.0, 0.7);
let m4a4TheCoalition = new redRifle("The Coalition", 0.0, 0.9);
let m4a4Howl = new redRifle("Howl", 0.0, 0.4);

// ===== M4A1-S RED SKINS =====
let m4a1sVaporwave = new redRifle("Vaporwave", 0.0, 1.0);
let m4a1sPrintstream = new redRifle("M4A1-S Printstream", 0.0, 1.0);
let m4a1sPlayerTwo = new redRifle("Player Two", 0.0, 1.0);
let m4a1sMechaIndustries = new redRifle("Mecha Industries", 0.0, 1.0);
let m4a1sChanticosFire = new redRifle("Chantico's Fire", 0.0, 1.0);
let m4a1sGoldenCoil = new redRifle("Golden Coil", 0.0, 1.0);
let m4a1sHyperBeast = new redRifle("Hyper Beast", 0.0, 1.0);
let m4a1sCyrex = new redRifle("Cyrex", 0.0, 1.0);
let m4a1sFade = new redRifle("M4A1-S Fade", 0.0, 0.08);
let m4a1sImminentDanger = new redRifle("Imminent Danger", 0.0, 0.8);
let m4a1sWelcomeToTheJungle = new redRifle("Welcome to the Jungle", 0.08, 0.5);

// ===== AWP RED SKINS =====
let awpPrintstream = new redRifle("AWP Printstream", 0.0, 1.0);
let awpChromeCannon = new redRifle("Chrome Cannon", 0.0, 1.0);
let awpChromaticAberration = new redRifle("Chromatic Aberration", 0.0, 0.7);
let awpContainmentBreach = new redRifle("Containment Breach", 0.0, 1.0);
let awpWildfire = new redRifle("Wildfire", 0.01, 0.7);
let awpNeoNoir = new redRifle("AWP Neo-Noir", 0.0, 0.5);
let awpOniTaiji = new redRifle("Oni Taiji", 0.0, 0.5);
let awpHyperBeast = new redRifle("Hyper Beast", 0.0, 1.0);
let awpManOWar = new redRifle("Man-o'-War", 0.1, 0.2);
let awpAsiimov = new redRifle("AWP Asiimov", 0.18, 1.0);
let awpLightningStrike = new redRifle("Lightnight Strike", 0.0, 0.08);
let awpLongDog = new redRifle("LongDog", 0.0, 1.0);
let awpCMYK = new redRifle("CMYK", 0.0, 0.8);
let awpDesertHydra = new redRifle("Desert Hydra", 0.0, 0.7);
let awpFade = new redRifle("AWP Fade", 0.0, 0.08);
let awpGungnir = new redRifle("Gungnir", 0.0, 0.6);
let awpThePrince = new redRifle("The Prince", 0.0, 0.6);
let awpMedusa = new redRifle("Medusa", 0.0, 0.6);
let awpDragonLore = new redRifle("Dragon Lore", 0.0, 0.7);

// ===== AUG RED SKINS =====
let augAkihabaraAccept = new redRifle("Akihabara Accept", 0.0, 1.0);
let augChameleon = new redRifle("Chameleon", 0.0, 0.5);

// ===== SSG 08 RED SKINS =====
let ssg08Dragonfire = new redRifle("Dragonfire", 0.0, 0.5);
let ssg08BloodInTheWater = new redRifle("Blood in the Water", 0.06, 0.2);

// ===== FAMAS RED SKINS =====
let famasBadTrip = new redRifle("Bad Trip", 0.0, 1.0);
let famasCommemoration = new redRifle("Commemoration", 0.0, 1.0);
let famasRollCage = new redRifle("Roll Cage", 0.0, 1.0);

// ===== GALIL AR RED SKINS =====
let galilChatterbox = new redRifle("Chatterbox", 0.35, 0.85);

// ===== ARRAYS FOR ORGANIZATION =====
// AK-47 Reds Array
let ak47RedsArray = [
  ak47TheOligarch,
  ak47Inheritance,
  ak47HeadShot,
  ak47Nightwish,
  ak47LeetMuseo,
  ak47LegionOfAnubis,
  ak47Asiimov,
  ak47NeonRider,
  ak47TheEmpress,
  ak47Bloodsport,
  ak47NeonRevolution,
  ak47FuelInjector,
  ak47AquamarineRevenge,
  ak47WastelandRebel,
  ak47Jaguar,
  ak47Vulcan,
  ak47FireSerpent,
  ak47BTheMonster,
  ak47GoldArabesque,
  ak47XRay,
  ak47WildLotus,
];

// m4a4 Reds Array
let m4a4RedsArray = [
  m4a4FullThrottle,
  m4a4Temukau,
  m4a4InLivingColor,
  m4a4TheEmperor,
  m4a4NeoNoir,
  m4a4BuzzKill,
  m4a4TheBattlestar,
  m4a4RoyalPaladin,
  m4a4BulletRain,
  m4a4DesertStrike,
  m4a4Asiimov,
  m4a4XRay,
  m4a4EyeOfHorus,
  m4a4TheCoalition,
  m4a4Howl,
];

// M4A1-S Reds Array
let m4a1sRedsArray = [
  m4a1sChanticosFire,
  m4a1sCyrex,
  m4a1sFade,
  m4a1sGoldenCoil,
  m4a1sHyperBeast,
  m4a1sImminentDanger,
  m4a1sMechaIndustries,
  m4a1sPlayerTwo,
  m4a1sPrintstream,
  m4a1sVaporwave,
  m4a1sWelcomeToTheJungle,
];

// AWP Reds Array
let awpRedsArray = [
  awpPrintstream,
  awpChromeCannon,
  awpChromaticAberration,
  awpContainmentBreach,
  awpWildfire,
  awpNeoNoir,
  awpOniTaiji,
  awpHyperBeast,
  awpManOWar,
  awpAsiimov,
  awpLightningStrike,
  awpLongDog,
  awpCMYK,
  awpDesertHydra,
  awpFade,
  awpGungnir,
  awpThePrince,
  awpMedusa,
  awpDragonLore,
];

// AUG Reds Array
let augRedsArray = [augAkihabaraAccept, augChameleon];

// SSG 08 Reds Array
let ssg08RedsArray = [ssg08BloodInTheWater, ssg08Dragonfire];

// FAMAS Reds Array
let famasRedsArray = [famasBadTrip, famasCommemoration, famasRollCage];

// Galil AR Reds Array
let galilRedsArray = [galilChatterbox];

// Master array of all red rifles
let allRedRiflesArray = [
  ...ak47RedsArray,
  ...m4a4RedsArray,
  ...m4a1sRedsArray,
  ...augRedsArray,
  ...ssg08RedsArray,
  ...famasRedsArray,
  ...galilRedsArray,
  ...awpRedsArray,
];

export { allRedRiflesArray };
