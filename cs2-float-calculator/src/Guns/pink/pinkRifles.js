/* CS2 Pink [Classified] Rifles */

// Constructor for Pink Rifles

function pinkRifle(nameGun, minGunFloat, maxGunFloat, price) {
    this.nameGun = nameGun;
    this.minGunFloat = minGunFloat;
    this.maxGunFloat = maxGunFloat;
    this.price = price || null;
};

// ===== AK-47 RED SKINS =====
// Example: let ak47Nightwish = new pinkRifle("AK-47", "Nightwish", 0.00, 0.70);


// ===== M4A4 RED SKINS =====
// Example: let m4a4EtchLord = new pinkRifle("M4A4", "Etch Lord", 0.00, 0.50);


// ===== M4A1-S RED SKINS =====
// Example: let m4a1sBluePhosphor = new pinkRifle("M4A1-S", "Blue Phosphor", 0.00, 0.80);


// ===== AUG RED SKINS =====


// ===== SG 553 RED SKINS =====


// ===== FAMAS RED SKINS =====


// ===== GALIL AR RED SKINS =====


// ===== ARRAYS FOR ORGANIZATION =====
// AK-47 Pinks Array
let ak47PinksArray = [
    // Add AK-47 pink objects here
];

// M4A4 Pinks Array
let m4a4PinksArray = [
    // Add M4A4 pink objects here
];

// M4A1-S Pinks Array
let m4a1sPinksArray = [
    // Add M4A1-S pink objects here
];

// AUG Pinks Array
let augPinksArray = [
    // Add AUG pink objects here
];

// SG 553 Pinks Array
let sg553PinksArray = [
    // Add SG 553 pink objects here
];

// FAMAS Pinks Array
let famasPinksArray = [
    // Add FAMAS pink objects here
];

// Galil AR Pinks Array
let galilPinksArray = [
    // Add Galil AR pink objects here
];

// Master array of all pink rifles
let allPinkRiflesArray = [
    ...ak47PinksArray,
    ...m4a4PinksArray,
    ...m4a1sPinksArray,
    ...augPinksArray,
    ...sg553PinksArray,
    ...famasPinksArray,
    ...galilPinksArray
];
