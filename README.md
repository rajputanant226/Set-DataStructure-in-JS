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

🧩 Class Implementation
class CustomSet {
    constructor() {
        this.items = new Map();
    }

    add(elt) {
        if (this.items.has(elt)) return false;
        this.items.set(elt, elt);
        return true;
    }

    has(elt) {
        return this.items.has(elt);
    }

    remove(elt) {
        return this.items.delete(elt);
    }

    size() {
        return this.items.size;
    }

    values() {
        return [...this.items.keys()];
    }

    union(otherSet) {
        const unionSet = new CustomSet();
        this.values().forEach(value => unionSet.add(value));
        otherSet.values().forEach(value => unionSet.add(value));
        return unionSet;
    }

    intersection(otherSet) {
        const intersectionSet = new CustomSet();
        const smallerSet = this.size() < otherSet.size() ? this : otherSet;
        const largerSet = this.size() < otherSet.size() ? otherSet : this;

        smallerSet.values().forEach(value => {
            if (largerSet.has(value)) intersectionSet.add(value);
        });
        return intersectionSet;
    }
}

### Test
const setA = new CustomSet();
setA.add(2);
setA.add(4);
setA.add(6);
setA.add(8);
setA.add(10);

const setB = new CustomSet();
setB.add(1);
setB.add(4);
setB.add(7);
setB.add(8);

console.log("Set A:", setA.values());
console.log("Set B:", setB.values());

const unionSet = setA.union(setB);
console.log("Union:", unionSet.values());

const intersectionSet = setA.intersection(setB);
console.log("Intersection:", intersectionSet.values());

setA.remove(2);
console.log("After removing 2 from Set A:", setA.values());


### Key Takeaways

Map is an efficient way to create custom data structures.

Custom Set provides flexibility for additional operations.

Ensures data uniqueness and fast lookup.

### Author

Anant Rajput
Student at Oriental Institute of Science & Technology.
