const test = require("node:test");
const assert = require("node:assert");

// Import the solutions
const {
  evenNumbers,
  greaterThanFive,
  shortWords,
  adults,
  availableProducts,
  fruitsWithA,
  evenAndGreaterThan10,
  passingStudents,
  uniqueNumbers,
  qualifiedUsers,
} = require("./arrayFilter.js");

test("Problem #1: Filter Even Numbers", () => {
  const expected = [2, 4, 6, 8, 10];
  assert.deepStrictEqual(evenNumbers, expected);
});

test("Problem #2: Filter Numbers Greater Than 5", () => {
  const expected = [6, 7, 8, 9, 10];
  assert.deepStrictEqual(greaterThanFive, expected);
});

test("Problem #3: Filter Short Words", () => {
  const expected = ["cat", "dog", "fish"];
  assert.deepStrictEqual(shortWords, expected);
});

test("Problem #4: Filter Adults", () => {
  const expected = [
    { name: "Alice", age: 25 },
    { name: "Charlie", age: 30 },
    { name: "Eve", age: 22 },
  ];
  assert.deepStrictEqual(adults, expected);
});

test("Problem #5: Filter Available Products", () => {
  const expected = [
    { name: "Laptop", price: 999, inStock: true },
    { name: "Keyboard", price: 79, inStock: true },
  ];
  assert.deepStrictEqual(availableProducts, expected);
});

test("Problem #6: Filter Strings Containing Substring", () => {
  const expected = ["apple", "banana", "grape", "orange"];
  assert.deepStrictEqual(fruitsWithA, expected);
});

test("Problem #7: Filter by Multiple Conditions", () => {
  const expected = [12, 14, 16, 18, 20];
  assert.deepStrictEqual(evenAndGreaterThan10, expected);
});

test("Problem #8: Filter Students Who Passed", () => {
  const expected = [
    { name: "Alice", grades: [85, 90, 88] },
    { name: "Charlie", grades: [70, 75, 72] },
  ];
  assert.deepStrictEqual(passingStudents, expected);
});

test("Problem #9: Filter Unique Values", () => {
  const expected = [1, 2, 3, 4, 5, 6];
  assert.deepStrictEqual(uniqueNumbers, expected);
});

test("Problem #10: Filter Complex Nested Data (CHALLENGE)", () => {
  const expected = [
    { name: "John", isActive: true, skills: ["JavaScript", "Java"], posts: 15 },
    {
      name: "Charlie",
      isActive: true,
      skills: ["JavaScript", "Node"],
      posts: 12,
    },
  ];
  assert.deepStrictEqual(qualifiedUsers, expected);
});
