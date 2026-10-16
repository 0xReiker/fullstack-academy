// Array.filter() Practice Problems
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// Syntax: arr.filter(callback(element, index, array))

// ============================================
// Problem #1: Filter Even Numbers
// ============================================
// Filter out all even numbers from the array

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = null; // Your code here

// ============================================
// Problem #2: Filter Numbers Greater Than 5
// ============================================
// Filter numbers that are greater than 5

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const greaterThanFive = null; // Your code here

// ============================================
// Problem #3: Filter Short Words
// ============================================
// Filter words that have 4 or fewer characters

const animals = [
  "cat",
  "elephant",
  "dog",
  "rhinoceros",
  "fish",
  "hippopotamus",
];
const shortWords = null; // Your code here

// ============================================
// Problem #4: Filter Adults
// ============================================
// Filter people who are 18 or older

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 30 },
  { name: "David", age: 16 },
  { name: "Eve", age: 22 },
];
const adults = null; // Your code here

// ============================================
// Problem #5: Filter Available Products
// ============================================
// Filter products that are in stock (inStock === true)

const products = [
  { name: "Laptop", price: 999, inStock: true },
  { name: "Phone", price: 699, inStock: false },
  { name: "Tablet", price: 499, inStock: false },
  { name: "Keyboard", price: 79, inStock: true },
  { name: "Mouse", price: 29, inStock: false },
];
const availableProducts = null; // Your code here

// ============================================
// Problem #6: Filter Strings Containing Substring
// ============================================
// Filter strings that contain the letter 'a'

const fruits = ["apple", "banana", "cherry", "grape", "kiwi", "orange"];
const fruitsWithA = null; // Your code here

// ============================================
// Problem #7: Filter by Multiple Conditions
// ============================================
// Filter numbers that are both even AND greater than 10

const numbers3 = [5, 8, 12, 7, 14, 9, 16, 11, 18, 20, 3];
const evenAndGreaterThan10 = null; // Your code here

// ============================================
// Problem #8: Filter Students Who Passed
// ============================================
// Filter students who have an average grade of 70 or higher
// Hint: You'll need to calculate the average of the grades array

const students = [
  { name: "Alice", grades: [85, 90, 88] },
  { name: "Bob", grades: [55, 60, 58] },
  { name: "Charlie", grades: [70, 75, 72] },
  { name: "Diana", grades: [45, 50, 48] },
];
const passingStudents = null; // Your code here

// ============================================
// Problem #9: Filter Unique Values
// ============================================
// Filter the array to keep only the FIRST occurrence of each number (remove duplicates)
// Hint: Use the index parameter in filter callback

const numbersWithDuplicates = [1, 2, 3, 2, 4, 3, 5, 1, 6, 4];
const uniqueNumbers = null; // Your code here

// ============================================
// Problem #10: Filter Complex Nested Data (CHALLENGE)
// ============================================
// Filter users who:
// - Are active (isActive === true)
// - Have at least one skill that starts with 'J'
// - Have posted at least 5 posts

const users = [
  { name: "John", isActive: true, skills: ["JavaScript", "Java"], posts: 15 },
  { name: "Jane", isActive: true, skills: ["Python", "Ruby"], posts: 8 },
  { name: "Bob", isActive: false, skills: ["JavaScript", "React"], posts: 20 },
  { name: "Alice", isActive: true, skills: ["Java", "Spring"], posts: 3 },
  {
    name: "Charlie",
    isActive: true,
    skills: ["JavaScript", "Node"],
    posts: 12,
  },
];
const qualifiedUsers = null; // Your code here

// Export for testing
module.exports = {
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
};
