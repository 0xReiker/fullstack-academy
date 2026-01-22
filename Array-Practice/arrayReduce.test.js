const test = require("node:test");
const assert = require("node:assert");

// Import the solutions
const {
  sum,
  max,
  fruitCount,
  flattened,
  totalPrice,
  groupedByAge,
  userLookup,
  average,
  unique,
  inventoryReport,
} = require("./arrayReduce.js");

test("Problem #1: Sum All Numbers", () => {
  const expected = 15;
  assert.strictEqual(sum, expected);
});

test("Problem #2: Find Maximum Value", () => {
  const expected = 89;
  assert.strictEqual(max, expected);
});

test("Problem #3: Count Occurrences", () => {
  const expected = { apple: 3, banana: 2, orange: 1 };
  assert.deepStrictEqual(fruitCount, expected);
});

test("Problem #4: Flatten Nested Array", () => {
  const expected = [1, 2, 3, 4, 5, 6];
  assert.deepStrictEqual(flattened, expected);
});

test("Problem #5: Calculate Total Price", () => {
  const expected = 1107;
  assert.strictEqual(totalPrice, expected);
});

test("Problem #6: Group by Property", () => {
  const expected = {
    25: [
      { name: "Alice", age: 25 },
      { name: "Charlie", age: 25 },
    ],
    30: [
      { name: "Bob", age: 30 },
      { name: "Diana", age: 30 },
    ],
  };
  assert.deepStrictEqual(groupedByAge, expected);
});

test("Problem #7: Build a Lookup Object", () => {
  const expected = {
    1: { id: 1, name: "John", email: "john@example.com" },
    2: { id: 2, name: "Jane", email: "jane@example.com" },
    3: { id: 3, name: "Bob", email: "bob@example.com" },
  };
  assert.deepStrictEqual(userLookup, expected);
});

test("Problem #8: Calculate Average", () => {
  const expected = 86.6;
  assert.strictEqual(average, expected);
});

test("Problem #9: Remove Duplicates", () => {
  const expected = [1, 2, 3, 4, 5, 6];
  assert.deepStrictEqual(unique, expected);
});

test("Problem #10: Build Complex Data Structure (CHALLENGE)", () => {
  const expected = {
    totalSales: 88,
    categories: ["Electronics", "Furniture"],
    productsByCategory: {
      Electronics: [
        { name: "Laptop", category: "Electronics", price: 999, quantity: 5 },
        { name: "Mouse", category: "Electronics", price: 29, quantity: 50 },
        { name: "Monitor", category: "Electronics", price: 399, quantity: 8 },
      ],
      Furniture: [
        { name: "Desk", category: "Furniture", price: 299, quantity: 10 },
        { name: "Chair", category: "Furniture", price: 199, quantity: 15 },
      ],
    },
    mostExpensive: {
      name: "Laptop",
      category: "Electronics",
      price: 999,
      quantity: 5,
    },
  };
  assert.deepStrictEqual(inventoryReport, expected);
});
