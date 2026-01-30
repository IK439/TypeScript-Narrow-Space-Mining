# TypeScript-Narrow-Space-Mining

## Description
This program simulates digging in a mine where each attempt may yield an item or nothing. Items have different types and values, such as rock, iron, gold, or platinum. The simulation continues until the mine is empty, demonstrating randomness and type checking in TypeScript.

## Coding Techniques
- TypeScript type annotations and type guards (`Item`, `Diggable`, `isItem`)
- Classes with properties and methods (`Mine`)
- Random number generation to simulate item discovery and mine count
- Conditional logic to handle empty dig results
- Array operations to select random items from a list
- Looping until a condition is met (`while (!mine.isEmpty())`)

## Example Output
```
Found rock
Nothing this time.
Found gold worth £20
Found iron worth £10
Nothing this time.
Found platinum worth £30
Found rock
```
