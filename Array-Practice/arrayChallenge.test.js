const test = require("node:test");
const assert = require("node:assert");

// Import the solutions
const {
  result1,
  affordableProducts,
  activeUserNames,
  gradeReport,
  customerReport,
} = require("./arrayChallenge.js");

test("Challenge #1: Filter, Map, and Reduce", () => {
  // Filter: [12, 20, 15]
  // Map: [144, 400, 225]
  // Reduce: 769
  const expected = 769;
  assert.strictEqual(result1, expected);
});

test("Challenge #2: Map and Filter", () => {
  // After 20% discount: Shirt=$36, Shoes=$64, Hat=$20, Jacket=$96, Socks=$12
  // Filter under $50: Shirt, Hat, Socks
  const expected = [
    { name: "Shirt", price: 36 },
    { name: "Hat", price: 20 },
    { name: "Socks", price: 12 },
  ];
  assert.deepStrictEqual(affordableProducts, expected);
});

test("Challenge #3: Filter, Map, and Join", () => {
  const expected = "John Doe, Bob Johnson, Alice Williams";
  assert.strictEqual(activeUserNames, expected);
});

test("Challenge #4: Reduce and Map", () => {
  const expected = [
    {
      grade: 10,
      students: ["Alice", "Charlie", "Eve"],
      count: 3,
    },
    {
      grade: 11,
      students: ["Bob", "Diana"],
      count: 2,
    },
    {
      grade: 12,
      students: ["Frank"],
      count: 1,
    },
  ];
  assert.deepStrictEqual(gradeReport, expected);
});

test("Challenge #5: Filter, Reduce, and Map (ADVANCED)", () => {
  // Completed orders: Alice (50, 75, 25), Bob (45), Charlie (100, 60)
  // Alice: $150, 3 orders
  // Charlie: $160, 2 orders
  // Bob: $45, 1 order
  // Sorted by totalSpent descending
  const expected = [
    { customer: "Charlie", totalSpent: 160, orderCount: 2 },
    { customer: "Alice", totalSpent: 150, orderCount: 3 },
    { customer: "Bob", totalSpent: 45, orderCount: 1 },
  ];
  assert.deepStrictEqual(customerReport, expected);
});
