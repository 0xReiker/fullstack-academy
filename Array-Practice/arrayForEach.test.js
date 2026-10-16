const test = require("node:test");
const assert = require("node:assert");

// Import the solutions
const {
  doubled,
  sum,
  fruitString,
  people,
  letterCount,
  targetIndex,
  domains,
  totalSum,
  products,
  inventory,
  summary,
} = require("./arrayForEach.js");

test("Problem #1: Log Each Element", () => {
  const expected = [2, 4, 6, 8, 10];
  assert.deepStrictEqual(doubled, expected);
});

test("Problem #2: Sum Using forEach", () => {
  const expected = 150;
  assert.strictEqual(sum, expected);
});

test("Problem #3: Build a String", () => {
  const expected = "apple, banana, orange, grape";
  assert.strictEqual(fruitString, expected);
});

test("Problem #4: Modify Objects in Place", () => {
  const expected = [
    { name: "Alice", age: 25, adult: true },
    { name: "Bob", age: 17, adult: false },
    { name: "Charlie", age: 30, adult: true },
    { name: "David", age: 16, adult: false },
  ];
  assert.deepStrictEqual(people, expected);
});

test("Problem #5: Count Occurrences", () => {
  const expected = { a: 3, b: 2, c: 2, d: 1 };
  assert.deepStrictEqual(letterCount, expected);
});

test("Problem #6: Find Index of Element", () => {
  const expected = 3;
  assert.strictEqual(targetIndex, expected);
});

test("Problem #7: Extract and Transform", () => {
  const expected = ["gmail.com", "yahoo.com", "hotmail.com"];
  assert.deepStrictEqual(domains, expected);
});

test("Problem #8: Nested Array Operations", () => {
  const expected = 21;
  assert.strictEqual(totalSum, expected);
});

test("Problem #9: Update Product Prices", () => {
  const expected = [
    { name: "Laptop", price: 1098.9 },
    { name: "Mouse", price: 31.9 },
    { name: "Keyboard", price: 86.9 },
  ];
  assert.deepStrictEqual(products, expected);
});

test("Problem #10: Build Complex Data Structure (CHALLENGE)", () => {
  const expectedInventory = [
    { name: "Laptop", price: 999, quantity: 5, value: 4995 },
    { name: "Mouse", price: 29, quantity: 50, value: 1450 },
    { name: "Keyboard", price: 79, quantity: 20, value: 1580 },
  ];
  const expectedSummary = { totalValue: 8025, averageValue: 2675 };

  assert.deepStrictEqual(inventory, expectedInventory);
  assert.deepStrictEqual(summary, expectedSummary);
});
