/* CS2 Red [Covert] Mid-Tier Weapons */
// Includes: SMGs, Shotguns, and Heavy Weapons

// Constructor for Red Mid-Tier Weapons
function redMidTier(nameGun, minGunFloat, maxGunFloat, price) {
  this.nameGun = nameGun;
  this.minGunFloat = minGunFloat;
  this.maxGunFloat = maxGunFloat;
  this.price = price || null;
}

// ===== SMG RED SKINS =====
// MP9
let mp9StarlightProtector = new redMidTier("Starlight Protector", 0.0, 1.0);

// MP7
let mp7Bloodsport = new redMidTier("Bloodsport", 0.0, 0.65);

// MP5-SD

// UMP-45

// P90
let p90Asiimov = new redMidTier("Asiimov", 0.0, 0.92);
let p90DeathByKitty = new redMidTier("Death by Kitty", 0.08, 0.32);

// PP-Bizon
let ppBizonJudgementOfAnubis = new redMidTier("Judgement of Anubis", 0.0, 0.5);

// MAC-10
let mac10Stalker = new redMidTier("Stalker", 0.0, 1.0);
let mac10NeonRider = new redMidTier("Neon Rider", 0.0, 0.45);

// ===== SHOTGUN RED SKINS =====
// Nova

// XM1014

// MAG-7

// Sawed-Off
let sawedOffTheKraken = new redMidTier("The Kraken", 0.0, 0.4);

// ===== HEAVY WEAPON RED SKINS =====
// Negev

// M249

// ===== ARRAYS FOR ORGANIZATION =====
// SMG Reds Arrays
let mp9RedsArray = [mp9StarlightProtector];

let mp7RedsArray = [mp7Bloodsport];

let mp5sdRedsArray = [];

let ump45RedsArray = [];

let p90RedsArray = [p90Asiimov, p90DeathByKitty];

let pbizonRedsArray = [ppBizonJudgementOfAnubis];

let mac10RedsArray = [mac10NeonRider, mac10Stalker];

// Shotgun Reds Arrays
let novaRedsArray = [];

let xm1014RedsArray = [];

let mag7RedsArray = [];

let sawedoffRedsArray = [sawedOffTheKraken];

// Heavy Weapon Reds Arrays
let negevRedsArray = [];
let m249RedsArray = [];

// Master array of all red mid-tier weapons
let allRedMidTierArray = [
  ...mp9RedsArray,
  ...mp7RedsArray,
  ...mp5sdRedsArray,
  ...ump45RedsArray,
  ...p90RedsArray,
  ...pbizonRedsArray,
  ...mac10RedsArray,
  ...novaRedsArray,
  ...xm1014RedsArray,
  ...mag7RedsArray,
  ...sawedoffRedsArray,
  ...negevRedsArray,
  ...m249RedsArray,
];

export { allRedMidTierArray };
