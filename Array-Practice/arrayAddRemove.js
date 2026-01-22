// Array Add/Remove Methods Practice Problems
// push() - adds to end, pop() - removes from end
// unshift() - adds to beginning, shift() - removes from beginning
// slice() - returns a copy of a portion (doesn't modify original)
// splice() - adds/removes elements (modifies original)

// ============================================
// Problem #1: Push - Add to End
// ============================================
// Use push to add 'grape' and 'kiwi' to the fruits array

const fruits1 = ["apple", "banana", "orange"];
// Your code here

// ============================================
// Problem #2: Push - Add Multiple Items
// ============================================
// Use push to add all numbers from newNumbers to the numbers array

const numbers1 = [1, 2, 3];
const newNumbers = [4, 5, 6];
// Your code here

// ============================================
// Problem #3: Pop - Remove from End
// ============================================
// Use pop to remove the last item and store it in lastItem

const stack = ["first", "second", "third", "fourth"];
let lastItem;
// Your code here

// ============================================
// Problem #4: Pop - Remove Multiple Items
// ============================================
// Use pop to remove the last 2 items from the array

const items = ["a", "b", "c", "d", "e"];
// Your code here

// ============================================
// Problem #5: Shift - Remove from Beginning
// ============================================
// Use shift to remove the first item and store it in firstItem

const queue = ["first", "second", "third"];
let firstItem;
// Your code here

// ============================================
// Problem #6: Unshift - Add to Beginning
// ============================================
// Use unshift to add 'urgent' and 'priority' to the beginning of tasks

const tasks = ["regular task 1", "regular task 2"];
// Your code here

// ============================================
// Problem #7: Slice - Extract Middle Portion
// ============================================
// Use slice to get elements from index 2 to 5 (not including 5)

const letters = ["a", "b", "c", "d", "e", "f", "g"];
const middleLetters = null;
// Your code here

// ============================================
// Problem #8: Slice - Copy Last 3 Elements
// ============================================
// Use slice with negative index to get the last 3 elements

const numbers2 = [10, 20, 30, 40, 50, 60, 70];
const lastThree = null;
// Your code here

// ============================================
// Problem #9: Splice - Remove and Insert
// ============================================
// Use splice to remove 2 elements starting at index 2 and insert 'cat', 'dog'

const animals = ["elephant", "lion", "tiger", "bear", "wolf"];
// Your code here

// ============================================
// Problem #10: Splice - Remove Elements Only
// ============================================
// Use splice to remove 3 elements starting at index 1

const colors = ["red", "green", "blue", "yellow", "purple", "orange"];
// Your code here

// ============================================
// Problem #11: Mixed - Queue Operations (CHALLENGE)
// ============================================
// Simulate a queue: add 'customer4' to end, remove from beginning, add 'customer5' to end

const customerQueue = ["customer1", "customer2", "customer3"];
let servedCustomer;
// Your code here

// ============================================
// Problem #12: Mixed - Array Manipulation (CHALLENGE)
// ============================================
// 1. Add 'start' to the beginning
// 2. Add 'end' to the end
// 3. Use slice to create a copy
// 4. Use splice on the copy to remove middle 2 elements and insert 'new1', 'new2'

const original = ["a", "b", "c", "d"];
let modified;
// Your code here

// Export for testing
module.exports = {
  fruits1,
  numbers1,
  stack,
  lastItem,
  items,
  queue,
  firstItem,
  tasks,
  middleLetters,
  lastThree,
  animals,
  colors,
  customerQueue,
  servedCustomer,
  original,
  modified,
};
