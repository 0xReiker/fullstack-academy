# Objects Intro

## Instructions

1. Choose one person in your group to share their screen. They will be in
   charge of typing your answers.
2. Select another person in the group to be responsible for sharing your answers
   with the class later on.
3. As a team, read each question out loud and reach a consensus on the answer
   before moving to the next question.

## Create and document an object

An **object** is denoted by **key:value** pairs inside curly braces `{}`. Objects are
usually used to represent something with multiple **properties**.

```js
/**
 * @typedef {{name: string, age: number, coat: string}} Animal
 */

/** @type Animal */
const pet = {
  name: "Pickle",
  age: 8,
  coat: "tabby",
};
```

1. List the key:value pairs of `pet`.
2. What value is associated with the key "name" of `pet`?
3. What key is associated with the value "tabby" of `pet`?

An object's **shape** or **type** refers to the names of its keys and the types of their
values. This can be documented in JSDoc with `@typedef` and `@type`.

4. What is the name of the new type that is being defined?
5. What is the shape of `pet`?

```js
const shape = "square";
const size = "small";
const color = "purple";

const toy = {
  shape: shape,
  size: size,
  color: color,
};
```

We can also use variable values when creating an object.

6. What value is associated with the key "shape" of `toy`?
7. What key is associated with the value "purple" of `toy`?
8. `{foo, bar}` is equivalent to writing out `{foo: foo, bar: bar}`. This is called
   **shorthand property syntax**. Rewrite `toy` to use this syntax instead.

## Use keys to access object values

Once an object is created, we can access its values by referencing its keys.

```js
const card = {
  condition: "Near Mint",
  year: 2018,
  printing: "Foil",
  collectorNumber: 220,
};
```

9. The `in` operator can be used to check if a key exists in an object.
   Evaluate the following expressions.
   1. `"condition" in card`
   2. `"collectorNumber" in card`
   3. `"subject" in card`
10. Evaluate the following **bracket notation** expressions.
    1. `card["condition"]`
    2. `card["year"]`
    3. `card["printing"]`
11. Evaluate the following **dot notation** expressions.
    1. `card.year`
    1. `card.printing`
    1. `card.collectorNumber`
12. Suppose we had the key `"artist name"` in `card`. How would you use bracket
    notation to access its value? What about dot notation?
13. Why do you think the convention is to use **camelCase** instead of spaces
    for keys with multiple words?

## Add, modify, and remove key-value pairs

```js
const subtitles = {
  color: "yellow",
  backgroundColor: "black",
  language: "English",
};
```

Adding and modifying object properties is just like assigning and reassigning a variable!

Consider `foo.bar = "wobble"`.

- If the key `"bar"` does _not_ exist in `foo`, then `bar: "wobble"` will be _added_ to `foo`.
- If it _does_ already exist, then its value will be _reassigned_ to `"wobble"`.

> [!TIP]
>
> This works with _both_ dot _and_ bracket notation!

14. Add the key `fontSize` to `subtitles` with value `20px`.
15. Change the `color` of `subtitles` to `"white"`.
16. Change the `language` of `subtitles` to `"Korean"`.
17. Add the key `textTransform` to `subtitles` with value `"uppercase"`.
18. `delete foo.bar` will delete the `bar` property from `foo`. Delete the
    `backgroundColor` property from `subtitles.`

## Iterate through an object's keys

```js
const graphics = {
  textureResolution: "ultra",
  vSync: false,
  bloom: true,
  frameRate: 144,
};

for (const setting in graphics) {
  console.log(setting, graphics[setting]);
}
```

19. The `for..in` loop allows us to iterate through an object's keys.
    What is the name of the variable used to represent each key?
20. What does this snippet of code print?
21. What would happen if we changed `graphics[setting]` to `graphics.setting`?

> [!WARNING]
>
> `for..in` is different from `in`, and it's also different from `for..of`!
> Use `for..in` with objects and `for..of` with arrays.
