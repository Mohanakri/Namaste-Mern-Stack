Looking at your comprehensive JavaScript glossary, here are the **missing topics** that should be included for completeness. I've organized them by section with the recommended placement order:

---

# 📋 **MISSING TOPICS TO ADD**

---

## **🧩 VARIABLES & DATA TYPES** (Add after BigInt)

### **Type Conversion / Coercion**
| **Definition**  | Explicit or implicit conversion between types.                                    |
| --------------- | --------------------------------------------------------------------------------- |
| **When to Use** | Parsing user input, API data transformation, explicit type safety.                |
| **Remarks**     | Implicit coercion can cause bugs. Use explicit conversion for clarity and safety. |

```javascript
// Explicit conversion
Number("123");        // 123
String(123);          // "123"
Boolean(0);           // false
parseInt("10px");     // 10
parseFloat("3.14");   // 3.14

// Implicit coercion (avoid)
"5" + 2;              // "52" (string concatenation)
"5" - 2;              // 3 (number subtraction)
```

---

## **🧩 FUNCTIONS** (Add after Callback Function)

### **Recursion**
| **Definition**  | Function that calls itself to solve problems iteratively.                   |
| --------------- | --------------------------------------------------------------------------- |
| **When to Use** | Tree traversal, factorial, Fibonacci, divide-and-conquer algorithms.        |
| **Remarks**     | Must have base case to prevent infinite loops. Can cause stack overflow.    |

```javascript
// Factorial
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

// Fibonacci
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

// Tree traversal
function traverse(node) {
  console.log(node.value);
  node.children.forEach(child => traverse(child));
}
```

---

### **Pure Functions**
| **Definition**  | Functions with no side effects that return same output for same input.          |
| --------------- | -------------------------------------------------------------------------------- |
| **When to Use** | Functional programming, predictable behavior, testing, memoization.              |
| **Remarks**     | Easier to test and debug. Enables optimization. Core principle of Redux/React.   |

```javascript
// Pure function
function add(a, b) {
  return a + b;
}

// Impure (modifies external state)
let total = 0;
function addToTotal(n) {
  total += n;
  return total;
}

// Pure alternative
function calculateTotal(current, n) {
  return current + n;
}
```

---

## **🧱 OBJECTS & ARRAYS** (Add after Computed Property)

### **Object.freeze() / Object.seal()**
| **Definition**  | `freeze()` makes object immutable. `seal()` prevents add/delete but allows modification. |
| --------------- | ----------------------------------------------------------------------------------------- |
| **When to Use** | Constants, preventing mutations, configuration objects.                                   |
| **Remarks**     | Shallow only. Nested objects remain mutable. Use libraries for deep freeze.               |

```javascript
const config = Object.freeze({
  API_URL: 'https://api.com',
  timeout: 5000
});

// config.API_URL = 'new'; // Error in strict mode

const user = Object.seal({
  name: 'Alice',
  age: 30
});

user.age = 31;        // OK
// user.email = '...'; // Error
```

---

### **Shallow vs Deep Copy**
| **Definition**  | Shallow copies top level only. Deep copies nested structures.                      |
| --------------- | ---------------------------------------------------------------------------------- |
| **When to Use** | Shallow: simple objects. Deep: nested data, state management.                      |
| **Remarks**     | Spread/Object.assign are shallow. Use `structuredClone()` or libraries for deep.   |

```javascript
// Shallow copy
const shallow = { ...original };
const shallow2 = Object.assign({}, original);

// Problem with nested objects
const original = { user: { name: 'Alice' } };
const copy = { ...original };
copy.user.name = 'Bob';
console.log(original.user.name); // 'Bob' (mutated!)

// Deep copy (ES2022+)
const deep = structuredClone(original);

// Deep copy (JSON - limitations)
const deep2 = JSON.parse(JSON.stringify(original));
// Loses functions, undefined, symbols, dates
```

---

## **🔁 ARRAY METHODS** (Add after splice)

### **flat() / flatMap()**
| **Definition**  | `flat()` flattens nested arrays. `flatMap()` maps then flattens.         |
| --------------- | ------------------------------------------------------------------------ |
| **When to Use** | Nested arrays, data transformation, cleaning data structures.            |
| **Remarks**     | `flat()` depth param (default 1). `flatMap()` = `map()` + `flat(1)`.    |

```javascript
// flat()
const nested = [1, [2, 3], [4, [5, 6]]];
nested.flat();      // [1, 2, 3, 4, [5, 6]]
nested.flat(2);     // [1, 2, 3, 4, 5, 6]
nested.flat(Infinity); // Fully flattened

// flatMap()
const arr = [1, 2, 3];
arr.flatMap(x => [x, x * 2]);
// [1, 2, 2, 4, 3, 6]

// Real-world use
const sentences = ["hello world", "foo bar"];
sentences.flatMap(s => s.split(' '));
// ["hello", "world", "foo", "bar"]
```

---

### **sort() / reverse()**
| **Definition**  | `sort()` sorts array in place. `reverse()` reverses order.                        |
| --------------- | ---------------------------------------------------------------------------------- |
| **When to Use** | Sorting lists, alphabetical order, numerical sorting.                              |
| **Remarks**     | Both mutate original. Default sort is lexicographic. Provide compareFn for numbers.|

```javascript
// Default sort (strings)
const letters = ['c', 'a', 'b'];
letters.sort(); // ['a', 'b', 'c']

// Number sort (requires compareFn)
const nums = [10, 5, 20, 1];
nums.sort((a, b) => a - b); // [1, 5, 10, 20]

// Reverse
nums.reverse(); // [20, 10, 5, 1]

// Non-mutating alternatives
const sorted = [...nums].sort((a, b) => a - b);
const reversed = [...nums].reverse();
```

---

### **includes() / indexOf()**
| **Definition**  | `includes()` checks existence. `indexOf()` returns index.                |
| --------------- | ------------------------------------------------------------------------ |
| **When to Use** | Checking membership, finding position, validation.                       |
| **Remarks**     | `includes()` returns boolean. `indexOf()` returns -1 if not found.       |

```javascript
const arr = [1, 2, 3, 4, 5];

arr.includes(3);        // true
arr.includes(10);       // false

arr.indexOf(3);         // 2
arr.indexOf(10);        // -1

// String support
const names = ['Alice', 'Bob'];
names.includes('Alice'); // true

// Case sensitivity
names.includes('alice'); // false
```

---

### **concat() / join()**
| **Definition**  | `concat()` merges arrays. `join()` converts array to string.            |
| --------------- | ------------------------------------------------------------------------ |
| **When to Use** | Combining arrays, creating CSV, formatting output.                       |
| **Remarks**     | Both non-mutating. Spread operator often preferred over `concat()`.      |

```javascript
// concat()
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = arr1.concat(arr2); // [1, 2, 3, 4]

// Modern alternative
const combined2 = [...arr1, ...arr2];

// join()
const words = ['Hello', 'World'];
words.join(' ');     // "Hello World"
words.join('-');     // "Hello-World"
words.join('');      // "HelloWorld"

// CSV generation
const data = ['name', 'age', 'email'];
const csv = data.join(','); // "name,age,email"
```

---

### **push() / pop() / shift() / unshift()**
| **Definition**  | Stack/queue operations. Add/remove from start or end.                    |
| --------------- | ------------------------------------------------------------------------ |
| **When to Use** | Stack (LIFO), queue (FIFO), managing collections.                        |
| **Remarks**     | All mutate original. Return removed item or new length.                  |

```javascript
const arr = [1, 2, 3];

// push() - add to end
arr.push(4);        // [1, 2, 3, 4]

// pop() - remove from end
arr.pop();          // 4, arr = [1, 2, 3]

// unshift() - add to start
arr.unshift(0);     // [0, 1, 2, 3]

// shift() - remove from start
arr.shift();        // 0, arr = [1, 2, 3]

// Stack (LIFO)
const stack = [];
stack.push(1, 2, 3);
stack.pop(); // 3

// Queue (FIFO)
const queue = [];
queue.push(1, 2, 3);
queue.shift(); // 1
```

---

## **NEW SECTION: ASYNC PROGRAMMING** (Add after Error Handling, before Modules)

# ⏱️ **ASYNC PROGRAMMING**

### **Callback Pattern**
| **Definition**  | Pass function as argument to be executed after async operation completes.        |
| --------------- | -------------------------------------------------------------------------------- |
| **When to Use** | Legacy APIs, event handlers, simple async flows.                                 |
| **Remarks**     | Can lead to "callback hell". Error handling with first param convention.         |

```javascript
// Basic callback
function fetchData(callback) {
  setTimeout(() => {
    callback(null, { data: 'value' });
  }, 1000);
}

fetchData((err, result) => {
  if (err) return console.error(err);
  console.log(result);
});

// Callback hell (avoid)
getData((err, data) => {
  processData(data, (err, processed) => {
    saveData(processed, (err, saved) => {
      // Deeply nested...
    });
  });
});
```

---

### **Promise**
| **Definition**  | Object representing eventual completion/failure of async operation.              |
| --------------- | -------------------------------------------------------------------------------- |
| **When to Use** | Modern async code, API calls, chaining operations.                               |
| **Remarks**     | Three states: pending, fulfilled, rejected. Chain with `.then()` and `.catch()`. |

```javascript
// Creating Promise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (success) resolve(data);
    else reject(error);
  }, 1000);
});

// Consuming
promise
  .then(result => console.log(result))
  .catch(err => console.error(err))
  .finally(() => console.log('Done'));

// Chaining
fetch('/api/user')
  .then(res => res.json())
  .then(data => processData(data))
  .then(result => save(result))
  .catch(handleError);
```

---

### **async / await**
| **Definition**  | Syntactic sugar over Promises for cleaner async code.                            |
| --------------- | -------------------------------------------------------------------------------- |
| **When to Use** | Modern async/await is preferred over raw Promises.                               |
| **Remarks**     | Must use in `async` function. Use `try/catch` for errors. Returns Promise.       |

```javascript
async function fetchUser(id) {
  try {
    const response = await fetch(`/api/users/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed:', error);
    throw error;
  }
}

// Sequential
async function sequential() {
  const user = await getUser();
  const posts = await getPosts(user.id);
  return { user, posts };
}

// Parallel
async function parallel() {
  const [user, posts] = await Promise.all([
    getUser(),
    getPosts()
  ]);
  return { user, posts };
}
```

---

### **Promise.all() / Promise.race()**
| **Definition**  | `all()` waits for all. `race()` waits for first to settle.                      |
| --------------- | -------------------------------------------------------------------------------- |
| **When to Use** | Parallel operations, timeout implementations, batch processing.                  |
| **Remarks**     | `all()` rejects if any fails. `allSettled()` waits for all regardless of result.|

```javascript
// Promise.all() - all must succeed
const results = await Promise.all([
  fetch('/api/users'),
  fetch('/api/posts'),
  fetch('/api/comments')
]);

// Promise.race() - first wins
const fastest = await Promise.race([
  fetch('/api/endpoint1'),
  fetch('/api/endpoint2')
]);

// Timeout pattern
const withTimeout = Promise.race([
  fetchData(),
  new Promise((_, reject) =>
    setTimeout(() => reject(new Error('Timeout')), 5000)
  )
]);

// Promise.allSettled() - wait for all
const results = await Promise.allSettled([
  promise1,
  promise2,
  promise3
]);
// [{status: 'fulfilled', value: ...}, {status: 'rejected', reason: ...}]
```

---

### **setTimeout() / setInterval()**
| **Definition**  | Schedule code execution. `setTimeout()` once, `setInterval()` repeatedly.        |
| --------------- | -------------------------------------------------------------------------------- |
| **When to Use** | Delays, polling, animations (prefer `requestAnimationFrame` for animations).     |
| **Remarks**     | Not guaranteed timing. Clear with `clearTimeout()`/`clearInterval()`.            |

```javascript
// setTimeout - delay execution
const timerId = setTimeout(() => {
  console.log('Executed after 1s');
}, 1000);

clearTimeout(timerId); // Cancel

// setInterval - repeat execution
const intervalId = setInterval(() => {
  console.log('Every 2 seconds');
}, 2000);

clearInterval(intervalId); // Stop

// Better interval pattern
function poll() {
  doWork();
  setTimeout(poll, 1000);
}
poll(); // Waits for doWork() to complete
```

---

### **Event Loop**
| **Definition**  | JS runtime mechanism handling async operations via call stack, queues, and heap. |
| --------------- | -------------------------------------------------------------------------------- |
| **When to Use** | Understanding async behavior, debugging timing issues.                           |
| **Remarks**     | Microtasks (Promises) run before macrotasks (setTimeout). Critical concept.      |

```javascript
console.log('1');

setTimeout(() => console.log('2'), 0);

Promise.resolve().then(() => console.log('3'));

console.log('4');

// Output: 1, 4, 3, 2
// Microtasks (Promise) run before macrotasks (setTimeout)

// Execution order:
// 1. Synchronous code (call stack)
// 2. Microtask queue (Promises, queueMicrotask)
// 3. Macrotask queue (setTimeout, setInterval, I/O)
```

---

## **NEW SECTION: DOM MANIPULATION** (Add after Async Programming)

# 🌐 **DOM MANIPULATION**

### **querySelector() / querySelectorAll()**
| **Definition**  | Select DOM elements using CSS selectors.                                         |
| --------------- | -------------------------------------------------------------------------------- |
| **When to Use** | Modern DOM selection, event handling, dynamic content.                           |
| **Remarks**     | `querySelector()` returns first match. `querySelectorAll()` returns NodeList.    |

```javascript
// Single element
const header = document.querySelector('h1');
const button = document.querySelector('.btn-primary');
const input = document.querySelector('#email');

// Multiple elements
const items = document.querySelectorAll('.list-item');
items.forEach(item => {
  item.addEventListener('click', handleClick);
});

// Complex selectors
const nested = document.querySelector('div.container > p:first-child');
const checked = document.querySelectorAll('input[type="checkbox"]:checked');
```

---

### **addEventListener() / removeEventListener()**
| **Definition**  | Attach/detach event handlers to DOM elements.                                    |
| --------------- | -------------------------------------------------------------------------------- |
| **When to Use** | User interactions, form validation, dynamic behavior.                            |
| **Remarks**     | Supports event bubbling/capturing. Use named functions to remove listeners.      |

```javascript
// Add listener
button.addEventListener('click', handleClick);

// Options
element.addEventListener('click', handler, {
  once: true,      // Remove after first trigger
  passive: true,   // Never calls preventDefault()
  capture: false   // Bubble phase (default)
});

// Remove listener
button.removeEventListener('click', handleClick);

// Common events
input.addEventListener('input', e => {
  console.log(e.target.value);
});

form.addEventListener('submit', e => {
  e.preventDefault();
  handleSubmit();
});
```

---

### **createElement() / appendChild()**
| **Definition**  | Create and insert DOM elements dynamically.                                      |
| --------------- | -------------------------------------------------------------------------------- |
| **When to Use** | Dynamic content, rendering lists, building UI programmatically.                  |
| **Remarks**     | Modern alternative: use template literals with `innerHTML` (sanitize first).     |

```javascript
// Create element
const div = document.createElement('div');
div.className = 'card';
div.textContent = 'Hello World';

// Append
document.body.appendChild(div);

// Insert at position
parent.insertBefore(newNode, referenceNode);

// Modern alternative
container.innerHTML = `
  <div class="card">
    <h2>${title}</h2>
    <p>${description}</p>
  </div>
`;

// Building list
const ul = document.createElement('ul');
items.forEach(item => {
  const li = document.createElement('li');
  li.textContent = item;
  ul.appendChild(li);
});
```

---

### **classList API**
| **Definition**  | Manipulate element CSS classes.                                                  |
| --------------- | -------------------------------------------------------------------------------- |
| **When to Use** | Toggle states, animations, conditional styling.                                  |
| **Remarks**     | Modern, clean API. Preferred over direct `className` manipulation.               |

```javascript
const element = document.querySelector('.box');

element.classList.add('active');
element.classList.remove('hidden');
element.classList.toggle('expanded');
element.classList.contains('active'); // true

// Multiple classes
element.classList.add('class1', 'class2');

// Conditional
if (isActive) {
  element.classList.add('active');
} else {
  element.classList.remove('active');
}

// Replace
element.classList.replace('old-class', 'new-class');
```

---

### **getAttribute() / setAttribute()**
| **Definition**  | Get/set HTML attributes on elements.                                             |
| --------------- | -------------------------------------------------------------------------------- |
| **When to Use** | Data attributes, aria labels, dynamic attribute management.                      |
| **Remarks**     | Use `dataset` for data-* attributes. Direct property access often preferred.     |

```javascript
// Get/Set attributes
const link = document.querySelector('a');
link.getAttribute('href');
link.setAttribute('href', '/new-url');
link.removeAttribute('target');

// Data attributes
element.setAttribute('data-id', '123');
element.getAttribute('data-id');

// Modern dataset API
element.dataset.id = '123';
element.dataset.userName = 'alice';
// <div data-id="123" data-user-name="alice">

// Aria attributes
button.setAttribute('aria-expanded', 'true');
button.setAttribute('aria-label', 'Close menu');
```

---

## **NEW SECTION: JSON METHODS** (Add after Modules)

# 📄 **JSON METHODS**

### **JSON.stringify()**
| **Definition**  | Converts JavaScript value to JSON string.                                        |
| --------------- | -------------------------------------------------------------------------------- |
| **When to Use** | API requests, localStorage, data serialization.                                  |
| **Remarks**     | Doesn't serialize functions, undefined, symbols. Supports replacer and spacing.  |

```javascript
const user = { name: 'Alice', age: 30 };
const json = JSON.stringify(user);
// '{"name":"Alice","age":30}'

// Pretty print
JSON.stringify(user, null, 2);

// Filtering properties
JSON.stringify(user, ['name']); // Only name

// Custom serialization
JSON.stringify(user, (key, value) => {
  if (key === 'password') return undefined;
  return value;
});

// Edge cases
JSON.stringify(undefined);    // undefined
JSON.stringify(function(){});  // undefined
JSON.stringify(NaN);          // "null"
```

---

### **JSON.parse()**
| **Definition**  | Parses JSON string to JavaScript value.                                          |
| --------------- | -------------------------------------------------------------------------------- |
| **When to Use** | API responses, localStorage retrieval, data deserialization.                     |
| **Remarks**     | Throws error on invalid JSON. Use try/catch. Supports reviver function.          |

```javascript
const json = '{"name":"Alice","age":30}';
const user = JSON.parse(json);

// Error handling
try {
  const data = JSON.parse(invalidJSON);
} catch (error) {
  console.error('Invalid JSON:', error);
}

// Reviver function
const parsed = JSON.parse(json, (key, value) => {
  if (key === 'date') return new Date(value);
  return value;
});

// Handling localStorage
const stored = localStorage.getItem('user');
const user = stored ? JSON.parse(stored) : null;
```

---

## **Add to COMMON PATTERNS & BEST PRACTICES**

### **Singleton Pattern**
| **Definition**  | Ensures only one instance of an object exists.                                   |
| --------------- | -------------------------------------------------------------------------------- |
| **When to Use** | Database connections, configuration managers, logging.                           |
| **Remarks**     | Use ES6 modules for simpler singleton implementation.                            |

```javascript
// Class-based
class Database {
  constructor() {
    if (Database.instance) {
      return Database.instance;
    }
    this.connection = null;
    Database.instance = this;
  }

  connect() {
    if (!this.connection) {
      this.connection = createConnection();
    }
    return this.connection;
  }
}

// Module-based (simpler)
// db.js
const connection = createConnection();
export default connection;

// usage.js
import db from './db.js'; // Same instance everywhere
```

---

### **Module Pattern**
| **Definition**  | Encapsulates private and public members using closures.                          |
| --------------- | -------------------------------------------------------------------------------- |
| **When to Use** | Creating namespaces, hiding implementation details.                              |
| **Remarks**     | Less common with ES6 modules but useful for IIFE patterns.                       |

```javascript
const CounterModule = (function() {
  // Private
  let count = 0;

  // Public API
  return {
    increment() {
      count++;
    },
    getCount() {
      return count;
    },
    reset() {
      count = 0;
    }
  };
})();

CounterModule.increment();
CounterModule.getCount(); // 1
```

---

### **Observer Pattern (Pub/Sub)**
| **Definition**  | Objects subscribe to events and get notified when they occur.                    |
| --------------- | -------------------------------------------------------------------------------- |
| **When to Use** | Event systems, state management, loosely coupled components.                     |
| **Remarks**     | Core pattern in frameworks like Vue, Angular. EventEmitter in Node.js.           |

```javascript
class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }

  emit(event, data) {
    if (this.events[event]) {
      this.events[event].forEach(cb => cb(data));
    }
  }

  off(event, callback) {
    if (this.events[event]) {
      this.events[event] = this.events[event]
        .filter(cb => cb !== callback);
    }
  }
}

// Usage
const emitter = new EventEmitter();
emitter.on('userLogin', data => console.log('User logged in:', data));
emitter.emit('userLogin', { id: 1, name: 'Alice' });
```

---

### **Factory Pattern**
| **Definition**  | Create objects without specifying exact class.                                   |
| --------------- | -------------------------------------------------------------------------------- |
| **When to Use** | Creating similar objects, conditional instantiation.                             |
| **Remarks**     | Simplifies object creation logic. Common in frameworks and libraries.            |

```javascript
class Car {
  constructor(type) {
    this.type = type;
  }
}

class Bike {
  constructor(type) {
    this.type = type;
  }
}

class VehicleFactory {
  static createVehicle(type) {
    switch(type) {
      case 'car':
        return new Car('sedan');
      case 'bike':
        return new Bike('sports');
      default:
        throw new Error('Unknown vehicle type');
    }
  }
}

const myCar = VehicleFactory.createVehicle('car');
```

---

## **Add to ES6+ FEATURES**

### **Nullish Coalescing Assignment (??=)**
| **Definition**  | Assigns value only if current value is nullish.                                  |
| --------------- | -------------------------------------------------------------------------------- |
| **When to Use** | Setting default values conditionally.                                            |
| **Remarks**     | ES2021 feature. Similar to `??` but with assignment.                             |

```javascript
let config = { timeout: null };

config.timeout ??= 5000;
// Assigns 5000 only if timeout is null/undefined

// Equivalent to:
config.timeout = config.timeout ?? 5000;

// Use case
function loadConfig(userConfig) {
  userConfig.retries ??= 3;
  userConfig.timeout ??= 5000;
  return userConfig;
}
```

---

### **Logical Assignment Operators (&&=, ||=)**
| **Definition**  | Conditional assignment based on logical operators.                               |
| --------------- | -------------------------------------------------------------------------------- |
| **When to Use** | Compact conditional updates.                                                     |
| **Remarks**     | ES2021. `&&=` assigns if truthy, `||=` assigns if falsy.                         |

```javascript
// ||= (logical OR assignment)
let count = 0;
count ||= 10; // count is now 10

// &&= (logical AND assignment)
let user = { name: 'Alice' };
user.name &&= user.name.toUpperCase();
// Only modifies if name exists

// Real-world use
function cacheResult(key, computeFn) {
  cache[key] ||= computeFn();
  return cache[key];
}
```

---

### **Numeric Separators**
| **Definition**  | Use underscores in numbers for readability.                                      |
| --------------- | -------------------------------------------------------------------------------- |
| **When to Use** | Large numbers, binary/hex literals, improving code clarity.                      |
| **Remarks**     | ES2021. Purely visual—doesn't affect value. Works with all number formats.       |

```javascript
const billion = 1_000_000_000;
const bytes = 0b1010_0001_1000_0011;
const hex = 0xDE_AD_BE_EF;
const decimal = 123_456.789_012;

console.log(billion); // 1000000000
```

---

### **Private Class Fields (#)**
| **Definition**  | True private properties in classes using `#` prefix.                             |
| --------------- | -------------------------------------------------------------------------------- |
| **When to Use** | Encapsulation, hiding implementation details.                                    |
| **Remarks**     | ES2022. Hard private (not accessible outside class). Can't be dynamically added. |

```javascript
class BankAccount {
  #balance = 0;  // Private field

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }

  #validate() {  // Private method
    return this.#balance >= 0;
  }
}

const account = new BankAccount();
account.deposit(100);
console.log(account.getBalance()); // 100
// console.log(account.#balance); // SyntaxError
```

---

### **Top-Level Await**
| **Definition**  | Use `await` at module top level without wrapping in async function.              |
| --------------- | -------------------------------------------------------------------------------- |
| **When to Use** | Module initialization, loading config, dynamic imports.                          |
| **Remarks**     | ES2022. Only in ES modules. Blocks module execution until resolved.              |

```javascript
// config.js
const response = await fetch('/api/config');
const config = await response.json();
export default config;

// app.js
import config from './config.js';
console.log(config); // Already loaded

// Dynamic import
const module = await import('./utils.js');
module.doSomething();
```

---

## **📑 RECOMMENDED SECTION ORDER**

1. **🧩 VARIABLES & DATA TYPES** *(add Type Conversion)*
2. **🧩 FUNCTIONS** *(add Recursion, Pure Functions)*
3. **🧱 OBJECTS & ARRAYS** *(add Object.freeze/seal, Shallow vs Deep Copy)*
4. **🧩 OOP & CLASSES**
5. **🧩 OPERATORS**
6. **🧩 SCOPE & CONTEXT**
7. **🔁 ARRAY METHODS** *(add flat/flatMap, sort/reverse, includes/indexOf, concat/join, push/pop/shift/unshift)*
8. **⚠️ ERROR HANDLING**
9. **⏱️ ASYNC PROGRAMMING** *(NEW SECTION)*
10. **📦 MODULES**
11. **📄 JSON METHODS** *(NEW SECTION)*
12. **🌐 DOM MANIPULATION** *(NEW SECTION)*
13. **🧠 ADVANCED CONCEPTS**
14. **🔧 COMMON PATTERNS & BEST PRACTICES** *(add Singleton, Module, Observer, Factory patterns)*
15. **🚀 ES6+ FEATURES** *(add ??=, &&=, ||=, Numeric Separators, Private Fields, Top-Level Await)*
16. **🧪 DEBUGGING & TESTING**
17. **⚠️ COMMON GOTCHAS & PITFALLS**
18. **🚀 PERFORMANCE OPTIMIZATION**
19. **📚 QUICK TIPS & BEST PRACTICES**

---

This structure provides complete coverage of modern JavaScript fundamentals through advanced concepts! Would you like me to create the complete combined document with all sections?