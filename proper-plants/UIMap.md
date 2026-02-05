**Map out the UI before starting on the code**

Looks like we have;

<h1>Proper Plants<h1>

A plants section with;

15 text of an emoji of a plant, each with a name and a button

- text of an emoji of a plant
- the name on the bottom left of the image
- an "Add to Cart" button
  - The "add to cart" button needs;
    - something like `onClick(() => SelectedPlant(plant))
    - i++

On the right side we have Cart with the quantity of our plants

- small image of plant
- small name of plant
- minus button
  - some sort of onClick(() => SelectedPlant(decrease))?
  - if (!plant) unrender? make gone?
- plus button
  - some sort of onClick(() => SelectedPlant(increase))??
  - no conditional? only guard case seems to be on minus

**= = = QUESTIONS FOR LESTER = = =**

**Why can't I `export default const PLANTS`** - a

If we want to remove cactus we have to check

if it exists, then we find it, subtract 1, and if the quantity is already 1, then we remove it
