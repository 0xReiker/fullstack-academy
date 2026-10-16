# Array Methods Practice Problems

A comprehensive collection of JavaScript array method practice problems with automated tests.

---

## How to Use This Folder

### Initial Setup

1. **Navigate to the arrays folder**

   ```bash
   cd extraProblems/arrays
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   Note: This project uses Node.js built-in test runner, so no external dependencies are required.

### Working on Problems

1. Open any of the practice files (e.g., `arrayFilter.js`)
2. Read the problem descriptions
3. Replace the `null` values or add your code where indicated
4. Run the tests to check your solutions

### Running Tests

**Run all tests:**

```bash
npm test
```

**Run tests for a specific file:**

```bash
node --test arrayFilter.test.js
node --test arrayMap.test.js
node --test arrayForEach.test.js
node --test arrayReduce.test.js
node --test arrayAddRemove.test.js
node --test arrayChallenge.test.js
```

**Tips:**

- Start with problem #1 in each file and work your way up
- Tests will show you which problems are passing/failing
- Green checkmarks = passing, red X = failing
- Read error messages carefully - they tell you what's expected vs. what you got

---

## What's in This Folder

### 1. `arrayFilter.js` - filter() Method

**10 problems** practicing the `filter()` method.

`filter()` creates a new array with all elements that pass a test. It doesn't modify the original array.

**What you'll learn:**

- Filtering numbers and strings by conditions
- Filtering objects by property values
- Combining multiple filter conditions
- Working with nested data structures

**Example:**

```javascript
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter((num) => num % 2 === 0);
// Result: [2, 4]
```

---

### 2. `arrayMap.js` - map() Method

**10 problems** practicing the `map()` method.

`map()` creates a new array by transforming every element. It doesn't modify the original array.

**What you'll learn:**

- Transforming numbers (doubling, squaring, etc.)
- Transforming strings (uppercase, formatting, etc.)
- Extracting properties from objects
- Adding/modifying properties in objects
- Using the index parameter

**Example:**

```javascript
const numbers = [1, 2, 3];
const doubled = numbers.map((num) => num * 2);
// Result: [2, 4, 6]
```

---

### 3. `arrayForEach.js` - forEach() Method

**10 problems** practicing the `forEach()` method.

`forEach()` executes a function for each element. Unlike map/filter, it doesn't return anything - it's used for side effects.

**What you'll learn:**

- Building new arrays with forEach
- Calculating sums and totals
- Modifying objects in place
- Building strings and objects
- Working with nested arrays

**Example:**

```javascript
const numbers = [1, 2, 3];
let sum = 0;
numbers.forEach((num) => (sum += num));
// sum is now 6
```

---

### 4. `arrayReduce.js` - reduce() Method

**10 problems** practicing the `reduce()` method.

`reduce()` executes a reducer function on each element, resulting in a single output value.

**What you'll learn:**

- Summing numbers and calculating totals
- Finding max/min values
- Counting occurrences
- Flattening nested arrays
- Grouping data by properties
- Building complex data structures

**Example:**

```javascript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, num) => acc + num, 0);
// Result: 10
```

---

### 5. `arrayAddRemove.js` - Add/Remove Methods

**12 problems** practicing array manipulation methods.

Covers `push()`, `pop()`, `shift()`, `unshift()`, `slice()`, and `splice()`.

**What you'll learn:**

- Adding elements to start/end of arrays
- Removing elements from start/end of arrays
- Extracting portions of arrays without modifying
- Inserting/removing elements at specific positions
- Combining multiple operations

**Methods:**

- `push()` - add to end
- `pop()` - remove from end
- `unshift()` - add to beginning
- `shift()` - remove from beginning
- `slice()` - copy a portion (doesn't modify original)
- `splice()` - insert/remove at any position (modifies original)

---

### 6. `arrayChallenge.js` - Challenge Problems

**5 advanced problems** combining multiple array methods.

These problems require chaining or combining 2-3 different array methods to solve.

**What you'll learn:**

- Chaining filter, map, and reduce together
- Building complex data transformations
- Grouping, filtering, and sorting data
- Real-world data processing scenarios

**Example:**

```javascript
// Filter numbers > 10, square them, then sum
const result = numbers
  .filter((num) => num > 10)
  .map((num) => num * num)
  .reduce((sum, num) => sum + num, 0);
```

---

## Need Help?

- Start with the easier problems (#1-5) in each file
- Read the problem description and expected output carefully
- Use `console.log()` to debug your solutions
- Check the test files to see what the expected output format is
- Remember: most array methods don't modify the original array!

Good luck and happy coding! 🚀
