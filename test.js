import { HashMap } from './script.js';

const test = new HashMap() // or HashMap() if using a factory

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')


// Test get()
console.log("Get 'apple':", test.get('apple')); // red
console.log("Get 'kite':", test.get('kite')); // pink
console.log("Get non-existent:", test.get('zebra')); // null

// Test has()
console.log("Has 'dog':", test.has('dog')); // true
console.log("Has 'zebra':", test.has('zebra')); // false

// Test remove()
console.log("Remove 'banana':", test.remove('banana')); // true
console.log("Has 'banana':", test.has('banana')); // false
console.log("Remove non-existent:", test.remove('zebra')); // false

// Test length()
console.log("Current length:", test.length()); // should be 11

// Test keys()
console.log("All keys:", test.keys());

// Test values()
console.log("All values:", test.values());

// Test entries()
console.log("All entries:", test.entries());

// Test clear()
test.clear();
console.log("After clear - length:", test.length()); // 0
console.log("After clear - keys:", test.keys()); // []