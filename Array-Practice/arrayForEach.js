// Array.forEach() Practice Problems
// The forEach() method executes a provided function once for each array element.
// Syntax: arr.forEach(callback(element, index, array))
// Note: forEach() doesn't return anything, it's used for side effects

// ============================================
// Problem #1: Log Each Element
// ============================================
// Use forEach to push each number multiplied by 2 into the result array

const numbers1 = [1, 2, 3, 4, 5];
const doubled = [];
// Your code here

// ============================================
// Problem #2: Sum Using forEach
// ============================================
// Use forEach to calculate the sum of all numbers

const numbers2 = [10, 20, 30, 40, 50];
let sum = 0;
// Your code here

// ============================================
// Problem #3: Build a String
// ============================================
// Use forEach to concatenate all fruits into a single comma-separated string

const fruits = ["apple", "banana", "orange", "grape"];
let fruitString = "";
// Your code here

// ============================================
// Problem #4: Modify Objects in Place
// ============================================
// Use forEach to add a 'adult' property to each person (true if age >= 18, false otherwise)

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 30 },
  { name: "David", age: 16 },
];
// Your code here

// ============================================
// Problem #5: Count Occurrences
// ============================================
// Use forEach to count how many times each letter appears

const letters = ["a", "b", "a", "c", "b", "a", "d", "c"];
const letterCount = {};
// Your code here

// ============================================
// Problem #6: Find Index of Element
// ============================================
// Use forEach to find the index of the first occurrence of 'target'

const numbers3 = [5, 10, 15, 20, 25, 30];
const target = 20;
let targetIndex = -1;
// Your code here

// ============================================
// Problem #7: Extract and Transform
// ============================================
// Use forEach to extract all email domains and store them in the domains array

const users = [
  { name: "John", email: "john@gmail.com" },
  { name: "Jane", email: "jane@yahoo.com" },
  { name: "Bob", email: "bob@hotmail.com" },
];
const domains = [];
// Your code here

// ============================================
// Problem #8: Nested Array Operations
// ============================================
// Use forEach to flatten the nested arrays and sum all numbers

const nestedNumbers = [
  [1, 2],
  [3, 4],
  [5, 6],
];
let totalSum = 0;
// Your code here

// ============================================
// Problem #9: Update Product Prices
// ============================================
// Use forEach to increase all product prices by 10% and round to 2 decimal places

const products = [
  { name: "Laptop", price: 999 },
  { name: "Mouse", price: 29 },
  { name: "Keyboard", price: 79 },
];
// Your code here

// ============================================
// Problem #10: Build Complex Data Structure (CHALLENGE)
// ============================================
// Use forEach to:
// 1. Calculate total inventory value (price * quantity) for each product
// 2. Add a 'value' property to each product
// 3. Build a summary object with totalValue and averageValue

const inventory = [
  { name: "Laptop", price: 999, quantity: 5 },
  { name: "Mouse", price: 29, quantity: 50 },
  { name: "Keyboard", price: 79, quantity: 20 },
];
const summary = { totalValue: 0, averageValue: 0 };
// Your code here

// Export for testing
module.exports = {
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
};
