// Array.map() Practice Problems
// The map() method creates a new array with the results of calling a function on every element.
// Syntax: arr.map(callback(element, index, array))

// ============================================
// Problem #1: Double All Numbers
// ============================================
// Map each number to double its value

const numbers1 = [1, 2, 3, 4, 5];
const doubled = null; // Your code here

// ============================================
// Problem #2: Convert to Uppercase
// ============================================
// Map each string to its uppercase version

const words = ["hello", "world", "javascript", "map"];
const uppercased = null; // Your code here

// ============================================
// Problem #3: Get String Lengths
// ============================================
// Map each string to its length

const fruits = ["apple", "banana", "kiwi", "strawberry"];
const lengths = null; // Your code here

// ============================================
// Problem #4: Extract Property Values
// ============================================
// Map each person object to just their name

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];
const names = null; // Your code here

// ============================================
// Problem #5: Add Index to Values
// ============================================
// Map each number to itself plus its index
// Hint: Use the index parameter

const numbers2 = [10, 20, 30, 40, 50];
const withIndex = null; // Your code here

// ============================================
// Problem #6: Format Prices
// ============================================
// Map each price number to a formatted string with dollar sign

const prices = [19.99, 5.5, 100, 0.99];
const formattedPrices = null; // Your code here

// ============================================
// Problem #7: Create Full Names
// ============================================
// Map each person object to a full name string

const users = [
  { firstName: "John", lastName: "Doe" },
  { firstName: "Jane", lastName: "Smith" },
  { firstName: "Bob", lastName: "Johnson" },
];
const fullNames = null; // Your code here

// ============================================
// Problem #8: Calculate Grades
// ============================================
// Map each student to include their average grade
// Keep all original properties and add an 'average' property

const students = [
  { name: "Alice", grades: [85, 90, 88] },
  { name: "Bob", grades: [75, 80, 78] },
  { name: "Charlie", grades: [95, 92, 98] },
];
const studentsWithAverage = null; // Your code here

// ============================================
// Problem #9: Square Roots with Precision
// ============================================
// Map each number to its square root rounded to 2 decimal places

const numbers3 = [4, 9, 16, 25, 50, 100];
const squareRoots = null; // Your code here

// ============================================
// Problem #10: Transform Product Data (CHALLENGE)
// ============================================
// Map each product to a new object with:
// - name (unchanged)
// - price with 20% tax added, formatted to 2 decimals
// - discountPrice (10% off the taxed price), formatted to 2 decimals
// - inStock (unchanged)

const products = [
  { name: "Laptop", price: 999, inStock: true },
  { name: "Mouse", price: 29, inStock: true },
  { name: "Keyboard", price: 79, inStock: false },
];
const transformedProducts = null; // Your code here

// Export for testing
module.exports = {
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
};
