### Custom Set Data Structure in JavaScript (Using Map)
### Overview

This project demonstrates how to implement a Set data structure in JavaScript using the built-in Map object.
Unlike the default JavaScript Set, this CustomSet class allows us to define our own logic for core operations like add, remove, union, and intersection.

### Features

✅ Add elements (no duplicates allowed)

✅ Remove elements

✅ Check if an element exists

✅ Get all values

✅ Find union of two sets

✅ Find intersection of two sets

✅ Get size of the set

🧠 Concept

In JavaScript:

Map → stores key-value pairs (keys are unique)

Set → stores only unique values

Here, we use Map where key and value are the same, mimicking a Set:

this.items.set(elt, elt);


So, each element acts as both key and value — ensuring uniqueness.

### Key Takeaways

Map is an efficient way to create custom data structures.

Custom Set provides flexibility for additional operations.

Ensures data uniqueness and fast lookup.

### Author

Anant Rajput
Student at Oriental Institute of Science & Technology.
