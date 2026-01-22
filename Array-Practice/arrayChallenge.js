// Array Challenge Problems
// These problems require combining multiple array methods to solve

// ============================================
// Challenge #1: Filter, Map, and Reduce
// ============================================
// 1. Filter numbers greater than 10
// 2. Map to square each number
// 3. Reduce to find the sum

const numbers1 = [5, 12, 8, 20, 3, 15, 7];
const result1 = null; // Your code here

// ============================================
// Challenge #2: Map and Filter
// ============================================
// 1. Map each product to its discounted price (20% off)
// 2. Filter to only include products under $50 after discount

const products = [
  { name: "Shirt", price: 45 },
  { name: "Shoes", price: 80 },
  { name: "Hat", price: 25 },
  { name: "Jacket", price: 120 },
  { name: "Socks", price: 15 },
];
const affordableProducts = null; // Your code here

// ============================================
// Challenge #3: Filter, Map, and Join
// ============================================
// 1. Filter users who are active
// 2. Map to get their full names (firstName + lastName)
// 3. Join them into a comma-separated string

const users = [
  { firstName: "John", lastName: "Doe", isActive: true },
  { firstName: "Jane", lastName: "Smith", isActive: false },
  { firstName: "Bob", lastName: "Johnson", isActive: true },
  { firstName: "Alice", lastName: "Williams", isActive: true },
  { firstName: "Charlie", lastName: "Brown", isActive: false },
];
const activeUserNames = null; // Your code here

// ============================================
// Challenge #4: Reduce and Map
// ============================================
// 1. Use reduce to group students by grade level
// 2. Use map to transform the result into an array of objects with format:
//    { grade: number, students: array, count: number }

const students = [
  { name: "Alice", grade: 10 },
  { name: "Bob", grade: 11 },
  { name: "Charlie", grade: 10 },
  { name: "Diana", grade: 11 },
  { name: "Eve", grade: 10 },
  { name: "Frank", grade: 12 },
];
const gradeReport = null; // Your code here

// ============================================
// Challenge #5: Filter, Reduce, and Map (ADVANCED)
// ============================================
// Create a summary report:
// 1. Filter orders that are 'completed'
// 2. Use reduce to group by customer and calculate their total spent
// 3. Use map to create an array of objects with format:
//    { customer: string, totalSpent: number, orderCount: number }
// 4. Sort by totalSpent descending

const orders = [
  { customer: "Alice", amount: 50, status: "completed" },
  { customer: "Bob", amount: 30, status: "pending" },
  { customer: "Alice", amount: 75, status: "completed" },
  { customer: "Charlie", amount: 100, status: "completed" },
  { customer: "Bob", amount: 45, status: "completed" },
  { customer: "Alice", amount: 25, status: "completed" },
  { customer: "Charlie", amount: 60, status: "completed" },
];
const customerReport = null; // Your code here

// Export for testing
module.exports = {
  result1,
  affordableProducts,
  activeUserNames,
  gradeReport,
  customerReport,
};
