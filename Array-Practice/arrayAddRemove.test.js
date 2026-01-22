const test = require("node:test");
const assert = require("node:assert");

// Import the solutions
const {
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
} = require("./arrayAddRemove.js");

test("Problem #1: Push - Add to End", () => {
  const expected = ["apple", "banana", "orange", "grape", "kiwi"];
  assert.deepStrictEqual(fruits1, expected);
});

test("Problem #2: Push - Add Multiple Items", () => {
  const expected = [1, 2, 3, 4, 5, 6];
  assert.deepStrictEqual(numbers1, expected);
});

test("Problem #3: Pop - Remove from End", () => {
  const expectedStack = ["first", "second", "third"];
  const expectedLastItem = "fourth";
  assert.deepStrictEqual(stack, expectedStack);
  assert.strictEqual(lastItem, expectedLastItem);
});

test("Problem #4: Pop - Remove Multiple Items", () => {
  const expected = ["a", "b", "c"];
  assert.deepStrictEqual(items, expected);
});

test("Problem #5: Shift - Remove from Beginning", () => {
  const expectedQueue = ["second", "third"];
  const expectedFirstItem = "first";
  assert.deepStrictEqual(queue, expectedQueue);
  assert.strictEqual(firstItem, expectedFirstItem);
});

test("Problem #6: Unshift - Add to Beginning", () => {
  const expected = ["urgent", "priority", "regular task 1", "regular task 2"];
  assert.deepStrictEqual(tasks, expected);
});

test("Problem #7: Slice - Extract Middle Portion", () => {
  const expected = ["c", "d", "e"];
  assert.deepStrictEqual(middleLetters, expected);
});

test("Problem #8: Slice - Copy Last 3 Elements", () => {
  const expected = [50, 60, 70];
  assert.deepStrictEqual(lastThree, expected);
});

test("Problem #9: Splice - Remove and Insert", () => {
  const expected = ["elephant", "lion", "cat", "dog", "wolf"];
  assert.deepStrictEqual(animals, expected);
});

test("Problem #10: Splice - Remove Elements Only", () => {
  const expected = ["red", "purple", "orange"];
  assert.deepStrictEqual(colors, expected);
});

test("Problem #11: Mixed - Queue Operations (CHALLENGE)", () => {
  const expectedQueue = ["customer2", "customer3", "customer4", "customer5"];
  const expectedServedCustomer = "customer1";
  assert.deepStrictEqual(customerQueue, expectedQueue);
  assert.strictEqual(servedCustomer, expectedServedCustomer);
});

test("Problem #12: Mixed - Array Manipulation (CHALLENGE)", () => {
  const expectedOriginal = ["start", "a", "b", "c", "d", "end"];
  const expectedModified = ["start", "a", "new1", "new2", "d", "end"];
  assert.deepStrictEqual(original, expectedOriginal);
  assert.deepStrictEqual(modified, expectedModified);
});
