# Physics Test

After pulling an all-nighter to study for a physics test, you're not sure if you
even remember how to add or subtract two numbers! Luckily, you do know how to code,
so you whip up a quick program to test yourself before the exam.

## Instructions

1. Choose one person in your group to share their screen.
2. Everyone else should follow along and type the answers on their own computers.
3. As a team, read each question out loud and reach a consensus on the answer
   before moving to the next question.

## Install project dependencies

Every Node project is identified by a file named [`package.json`](https://docs.npmjs.com/cli/v11/configuring-npm/package-json),
which lives in the folder alongside the code. If you are looking at a new codebase,
this file is always a good place to start reading!

1. What is the name of this project?
2. Which file is this project's **main** entry point?
3. What command does the "test" script run?
4. What is the name of this project's single **dependency**?

Navigate your terminal to the root directory of this project.

5. Run `npm install`. What happens?
6. What is the purpose of the created `package-lock.json` file?
7. Describe what you find in the `node_modules` directory.
8. `node_modules` is specified in this project's `.gitignore` file. Why do
   we want git to ignore the `node_modules` folder?

## Read the test specs

Test cases are written in `physics.test.js`. The goal of this file is to
provide readers with a solid understanding of what the code is _expected_ to do.

9. What are the names of the 3 functions being imported from `vitest`?
10. What function is imported from `physics.js`?
11. What do we **expect** `getKineticEnergy` to return when mass is negative?
12. What **matcher** is used to test that `getKineticEnergy` returns the expected value?
13. Use `node` or the browser console. What is the result of `1.2 + 1.23`?
14. Why is it a bad idea to use `toEqual` when comparing floating point numbers?
15. What matcher is used when working with floating point numbers?

## Run the tests to fix the code

Now that you know what `getKineticEnergy` should do, let's run the tests to see if
it's actually written correctly. Notice that we haven't actually looked at
the implementation yet. This is intentional!

16. In your terminal, run `npm run test`. This will run the "test" script defined
    in `package.json`. What do you notice?
17. How many test cases are there in total? How many are passing and how many are failing?
18. What are the failing test cases? You may have to scroll up in your terminal
    to see the full details.
19. Now open `physics.js` to look at the code. What syntax is used to **export** `getKineticEnergy`?
20. Fix `getKineticEnergy` in `physics.js` so that it passes all test cases. The tests
    will automatically rerun any time you save the file with your changes.
