const test = require("node:test");
const assert = require("node:assert");

// Import the solutions
const {
  doubled,
  uppercased,
  lengths,
  names,
  withIndex,
  formattedPrices,
  fullNames,
  studentsWithAverage,
  squareRoots,
  transformedProducts,
} = require("./arrayMap.js");

test("Problem #1: Double All Numbers", () => {
  const expected = [2, 4, 6, 8, 10];
  assert.deepStrictEqual(doubled, expected);
});

test("Problem #2: Convert to Uppercase", () => {
  const expected = ["HELLO", "WORLD", "JAVASCRIPT", "MAP"];
  assert.deepStrictEqual(uppercased, expected);
});

test("Problem #3: Get String Lengths", () => {
  const expected = [5, 6, 4, 10];
  assert.deepStrictEqual(lengths, expected);
});

test("Problem #4: Extract Property Values", () => {
  const expected = ["Alice", "Bob", "Charlie"];
  assert.deepStrictEqual(names, expected);
});

test("Problem #5: Add Index to Values", () => {
  const expected = [10, 21, 32, 43, 54];
  assert.deepStrictEqual(withIndex, expected);
});

test("Problem #6: Format Prices", () => {
  const expected = ["$19.99", "$5.50", "$100.00", "$0.99"];
  assert.deepStrictEqual(formattedPrices, expected);
});

test("Problem #7: Create Full Names", () => {
  const expected = ["John Doe", "Jane Smith", "Bob Johnson"];
  assert.deepStrictEqual(fullNames, expected);
});

test("Problem #8: Calculate Grades", () => {
  const expected = [
    { name: "Alice", grades: [85, 90, 88], average: 87.67 },
    { name: "Bob", grades: [75, 80, 78], average: 77.67 },
    { name: "Charlie", grades: [95, 92, 98], average: 95 },
  ];
  assert.deepStrictEqual(studentsWithAverage, expected);
});

test("Problem #9: Square Roots with Precision", () => {
  const expected = [2, 3, 4, 5, 7.07, 10];
  assert.deepStrictEqual(squareRoots, expected);
});

test("Problem #10: Transform Product Data (CHALLENGE)", () => {
  const expected = [
    { name: "Laptop", price: 1198.8, discountPrice: 1078.92, inStock: true },
    { name: "Mouse", price: 34.8, discountPrice: 31.32, inStock: true },
    { name: "Keyboard", price: 94.8, discountPrice: 85.32, inStock: false },
  ];
  assert.deepStrictEqual(transformedProducts, expected);
});
