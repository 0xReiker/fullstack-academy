**Physics Test Answers for Guided Practice with Liam Armstrong**

1. Physics-test

2. package.json

3. vitest

4. "vitest": "^4.0.15"

5. added 41 packages, and audited 42 packages in 2s

6. It looks like it's probably the place where we describe our dependencies, provide the URL for them and any other information that is needed for the npm packages we're using.

7. This is the actual code within the npm packages. If package-lock.json was like the table of contents for each of them, or an index of sources, then our node_modules folder is the actual content of those packages.

8. node_modules is a large file that can be accessed by anyone from their terminal. If you have the package-lock.json or another file that is pointing towards the npm packages then they can 'npm install' them on their own and theirs no reason to waste the space on Github.

9. 'describe', 'it' and 'expect'

10. getKineticEnergy

11. undefined

12. .toBeUndefined()

13. 2.4299999999999997

14. I don't know exactly with toEqual, but normally you want to make sure the function or method you're using is percise enough for the variable type.

15. I'm assuming based on this code;

it("handles floating point numbers: 0.2kg, 12.2m/s => 14.884J", function () {
expect(getKineticEnergy(0.2, 12.2)).toBeCloseTo(14.884);
});

For it to be 'toBeCloseTo()'?

16. It looks like it tested our physics.test.js program. It passed five of the eight tests. The three tests it did not pass were these;

    × handles positive numbers: 3kg, 5m/s => 37.5J 4ms
    × handles negative numbers: 3kg, -5m/s => 37.5J 0ms
    × handles floating point numbers: 0.2kg, 12.2m/s => 14.884J 0ms

17. 8 test cases. 5 passing. 3 failing.

18. See #16

19. export?

20. Done! \* speed++
