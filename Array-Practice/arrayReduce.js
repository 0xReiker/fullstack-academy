// Array.reduce() Practice Problems
// The reduce() method executes a reducer function on each element, resulting in a single output value.
// Syntax: arr.reduce(callback(accumulator, currentValue, index, array), initialValue)

// ============================================
// Problem #1: Sum All Numbers
// ============================================
// Reduce the array to the sum of all numbers

const numbers1 = [1, 2, 3, 4, 5];
const sum = null; // Your code here

// ============================================
// Problem #2: Find Maximum Value
// ============================================
// Reduce the array to find the largest number

const numbers2 = [10, 45, 23, 67, 12, 89, 34];
const max = null; // Your code here

// ============================================
// Problem #3: Count Occurrences
// ============================================
// Reduce the array to an object counting how many times each fruit appears

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const fruitCount = null; // Your code here

// ============================================
// Problem #4: Flatten Nested Array
// ============================================
// Reduce nested arrays into a single flat array

const nested = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const flattened = null; // Your code here

// ============================================
// Problem #5: Calculate Total Price
// ============================================
// Reduce the array to the total price of all products

const products = [
  { name: "Laptop", price: 999 },
  { name: "Mouse", price: 29 },
  { name: "Keyboard", price: 79 },
];
const totalPrice = null; // Your code here

// ============================================
// Problem #6: Group by Property
// ============================================
// Reduce the array to group people by their age

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
  { name: "Diana", age: 30 },
];
const groupedByAge = null; // Your code here

// ============================================
// Problem #7: Build a Lookup Object
// ============================================
// Reduce the array to create an object with id as key and user as value

const users = [
  { id: 1, name: "John", email: "john@example.com" },
  { id: 2, name: "Jane", email: "jane@example.com" },
  { id: 3, name: "Bob", email: "bob@example.com" },
];
const userLookup = null; // Your code here

// ============================================
// Problem #8: Calculate Average
// ============================================
// Reduce the array to calculate the average of all numbers
// Hint: You'll need to divide by the array length at the end

const grades = [85, 90, 78, 92, 88];
const average = null; // Your code here

// ============================================
// Problem #9: Remove Duplicates
// ============================================
// Reduce the array to remove duplicate values

const numbers3 = [1, 2, 3, 2, 4, 3, 5, 1, 6, 4];
const unique = null; // Your code here

// ============================================
// Problem #10: Build Complex Data Structure (CHALLENGE)
// ============================================
// Reduce the array to create an object with:
// - totalSales: sum of all quantities
// - categories: array of unique categories
// - productsByCategory: object grouping products by category
// - mostExpensive: the product with highest price

const inventory = [
  { name: "Laptop", category: "Electronics", price: 999, quantity: 5 },
  { name: "Mouse", category: "Electronics", price: 29, quantity: 50 },
  { name: "Desk", category: "Furniture", price: 299, quantity: 10 },
  { name: "Chair", category: "Furniture", price: 199, quantity: 15 },
  { name: "Monitor", category: "Electronics", price: 399, quantity: 8 },
];
const inventoryReport = null; // Your code here

// Export for testing
module.exports = {
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
};
