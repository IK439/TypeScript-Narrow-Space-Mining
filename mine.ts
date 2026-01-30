// Type for possible item in mine
type Item = {
  kind: string;
  value?: number;
};

// A diggable can be an Item or nothing (null)
type Diggable = Item | null;

// Type guard to check if a diggable is an actual item
function isItem(diggable: Diggable): diggable is Item {
  return diggable !== null;
}

// Mine class represents a mine with items
class Mine {
  // Possible items in the mine
  readonly possible: Item[] = [
    { kind: "rock" },
    { kind: "iron", value: 10 },
    { kind: "gold", value: 20 },
    { kind: "platinum", value: 30 },
  ];

  count: number; // How many items are left in the mine

  constructor() {
    // Initialize mine with up to 10 items
    this.count = Math.floor(Math.random() * 10);
  }

  // Attempt to dig an item from the mine
  dig(): Diggable {
    // If no items left or random chance fails, return nothing
    if (this.count === 0 || Math.random() > 0.5) return null;

    this.count--; // Reduce the count of remaining items
    // Return a random item from the possible list
    return this.possible[Math.floor(Math.random() * this.possible.length)];
  }

  // Check if the mine is empty
  isEmpty(): boolean {
    return this.count === 0;
  }
}

// Create a mine
let mine = new Mine();

// Keep digging until the mine is empty
while (!mine.isEmpty()) {
  const find = mine.dig();

  if (isItem(find)) {
    console.log(
      "Found " + find.kind + (find.value ? ` worth £${find.value}` : "")
    );
  } else {
    console.log("Nothing this time.");
  }
}