# JavaScript Glossary - Enhanced Reference Guide

---

---

# 🧩 **VARIABLES & DATA TYPES**

---

### **var**

| **Definition**  | Function-scoped variable declaration (legacy).                                          |
| --------------- | --------------------------------------------------------------------------------------- |
| **When to Use** | Avoid in modern code; only for legacy browser support.                                  |
| **Remarks**     | Function-scoped, hoisted, can be redeclared causing bugs. Use `let` or `const` instead. |

```javascript
var age = 25;
var age = 30; // allowed

function test() {
  console.log(age); // 30
}
```

---

### **let**

| **Definition**  | Block-scoped variable declaration (ES6+).                             |
| --------------- | --------------------------------------------------------------------- |
| **When to Use** | Use when variable value will change.                                  |
| **Remarks**     | Block-scoped, no redeclaration allowed. Has Temporal Dead Zone (TDZ). |

```javascript
let count = 0;
count = 1; // allowed
// let count = 2; // Error!

if (true) {
  let blockVar = 'local';
}
// console.log(blockVar); // Error!
```

---

### **const**

| **Definition**  | Block-scoped constant (cannot be reassigned).                                                          |
| --------------- | ------------------------------------------------------------------------------------------------------ |
| **When to Use** | Default choice when value won’t change.                                                                |
| **Remarks**     | Prevents reassignment but objects/arrays can still be mutated. Use `Object.freeze()` for immutability. |

```javascript
const API_KEY = 'abc123';
// API_KEY = 'xyz'; // Error!

const user = { name: 'Alice' };
user.name = 'Bob'; // OK (mutating)
// user = {}; // Error (reassigning)
```

---

### **String**

| **Definition**  | Textual data enclosed in quotes.                                            |
| --------------- | --------------------------------------------------------------------------- |
| **When to Use** | For text, messages, names, IDs.                                             |
| **Remarks**     | Use template literals (backticks) for interpolation and multi-line strings. |

```javascript
const greeting = "Hello World";
const name = 'Alice';
const message = `Hi ${name}!`;
const multiline = `Line 1
Line 2`;
```

---

### **Number**

| **Definition**  | Numeric data (integers, decimals, scientific notation).           |
| --------------- | ----------------------------------------------------------------- |
| **When to Use** | Calculations, counters, measurements.                             |
| **Remarks**     | Only one number type in JS. Use `BigInt` for very large integers. |

```javascript
const age = 30;
const price = 19.99;
const scientific = 5e3; // 5000
const hex = 0xFF; // 255
const binary = 0b1010; // 10
```

---

### **Boolean**

| **Definition**  | Logical true/false values.                                                  |
| --------------- | --------------------------------------------------------------------------- |
| **When to Use** | For conditions, flags, toggles.                                             |
| **Remarks**     | JS coerces values in conditions. Falsy: false, 0, '', null, undefined, NaN. |

```javascript
const isActive = true;
const hasAccess = false;
const isValid = 5 > 3; // true
const isEmpty = !user.name;
```

---

### **Undefined**

| **Definition**  | Variable declared but not assigned a value.                  |
| --------------- | ------------------------------------------------------------ |
| **When to Use** | Default uninitialized state; checking if property exists.    |
| **Remarks**     | JS assigns `undefined` automatically. Different from `null`. |

```javascript
let user;
console.log(user); // undefined
console.log(obj.missing); // undefined

function noReturn() {}
console.log(noReturn()); // undefined
```

---

### **Null**

| **Definition**  | Intentional absence of value (programmer-assigned).                   |
| --------------- | --------------------------------------------------------------------- |
| **When to Use** | Explicitly clearing values; API responses.                            |
| **Remarks**     | `typeof null` returns `"object"` (JS quirk). Use `=== null` to check. |

```javascript
let selectedItem = null;
const response = data ?? null;

if (user === null) {
  console.log('No user');
}
```

---

### **Symbol**

| **Definition**  | Unique, immutable identifier useful as object keys. |
| --------------- | --------------------------------------------------- |
| **When to Use** | Creating unique property keys to avoid collisions.  |
| **Remarks**     | Always unique; not enumerable in loops.             |

```javascript
const id = Symbol('userId');
const id2 = Symbol('userId');
console.log(id === id2); // false

const obj = {
  [id]: 12345,
  name: 'Alice'
};
```

---

### **BigInt**

| **Definition**  | Arbitrarily large integers beyond Number.MAX_SAFE_INTEGER.                 |
| --------------- | -------------------------------------------------------------------------- |
| **When to Use** | Large numbers, cryptography, precise calculations.                         |
| **Remarks**     | Cannot mix with regular Numbers. Use `n` suffix or `BigInt()` constructor. |

```javascript
const huge = 9007199254740991n;
const big = BigInt("12345678901234567890");
const calc = huge + 100n;
// const mixed = huge + 100; // Error!
```

---
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
### **WeakMap / WeakSet**

| **Definition**  | Collections with weak references that allow garbage collection.   |
| --------------- | ----------------------------------------------------------------- |
| **When to Use** | Private data, metadata, avoiding memory leaks.                    |
| **Remarks**     | Keys must be objects. Not enumerable. Automatically collected.    |

```javascript
// WeakMap - private data pattern
const privateData = new WeakMap();

class User {
  constructor(name) {
    privateData.set(this, { password: 'secret' });
    this.name = name;
  }
  
  getPassword() {
    return privateData.get(this).password;
  }
}

// WeakSet - tracking objects
const visitedNodes = new WeakSet();
function traverse(node) {
  if (visitedNodes.has(node)) return;
  visitedNodes.add(node);
  // process node...
}
```

---

---


# 🧩 **FUNCTIONS**

---

### **Function Declaration**

| **Definition**  | Named function defined using `function` keyword. Hoisted.             |
| --------------- | --------------------------------------------------------------------- |
| **When to Use** | When you want reusable code blocks that can be called multiple times. |
| **Remarks**     | Fully hoisted (available before definition). Supports recursion.      |

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Alice")); // Hello, Alice!
```

---

### **Function Expression**

| **Definition**  | Anonymous function assigned to a variable. Not hoisted.                 |
| --------------- | ----------------------------------------------------------------------- |
| **When to Use** | When you want functions as values, e.g. pass as arguments or callbacks. |
| **Remarks**     | Must be defined before use. Helps with modular, controlled scope.       |

```javascript
const add = function(a, b) {
  return a + b;
};

console.log(add(2, 3)); // 5
```

---

### **Arrow Function (ES6)**

| **Definition**  | Shorter syntax for writing functions using `=>`.                                           |
| --------------- | ------------------------------------------------------------------------------------------ |
| **When to Use** | For callbacks and concise logic. Especially in functional patterns (`map`, `filter`, etc). |
| **Remarks**     | No `this`, `arguments`, or `new` binding. Not ideal for object methods or constructors.    |

```javascript
const multiply = (a, b) => a * b;
console.log(multiply(3, 4)); // 12

// With single param
const greet = name => console.log(`Hi ${name}`);
greet("Bob");

// Multiline body
const diff = (a, b) => {
  const result = a - b;
  return result;
};
```

---

### **Immediately Invoked Function Expression (IIFE)**

| **Definition**  | Function that runs immediately after it’s defined.                       |
| --------------- | ------------------------------------------------------------------------ |
| **When to Use** | To create isolated scope and avoid polluting global scope.               |
| **Remarks**     | Common in older JS patterns and modules. Still useful for encapsulation. |

```javascript
(function() {
  const msg = "This runs instantly!";
  console.log(msg);
})();
```

---

### **Default Parameters**

| **Definition**  | Set default values for parameters if not provided.  |
| --------------- | --------------------------------------------------- |
| **When to Use** | Simplify function calls and avoid undefined values. |
| **Remarks**     | Works with destructuring and expressions.           |

```javascript
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet(); // Hello, Guest!
greet("Alice"); // Hello, Alice!
```

---

### **Rest Parameters**

| **Definition**  | Collects remaining arguments into an array.                   |
| --------------- | ------------------------------------------------------------- |
| **When to Use** | When handling variable number of arguments.                   |
| **Remarks**     | Always the last parameter. Replaces `arguments` in modern JS. |

```javascript
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3, 4)); // 10
```

---

### **Spread Operator**

| **Definition**  | Expands arrays/objects into individual elements.               |
| --------------- | -------------------------------------------------------------- |
| **When to Use** | Copying, merging, or passing variable-length arguments.        |
| **Remarks**     | Shallow copy only; nested objects still reference same memory. |

```javascript
const arr = [1, 2, 3];
const arr2 = [...arr, 4, 5]; // [1,2,3,4,5]

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // {a:1,b:2,c:3}

function print(x, y, z) {
  console.log(x, y, z);
}
print(...[10, 20, 30]); // 10 20 30
```

---

### **Higher-Order Functions**

| **Definition**  | Functions that take other functions as arguments or return them. |
| --------------- | ---------------------------------------------------------------- |
| **When to Use** | Functional programming (map, filter, reduce, callbacks).         |
| **Remarks**     | Core concept for async and declarative patterns.                 |

```javascript
function higher(fn) {
  return fn(5);
}

function double(x) {
  return x * 2;
}

console.log(higher(double)); // 10
```

---

### **Callback Function**

| **Definition**  | Function passed as argument to another function to be executed later. |
| --------------- | --------------------------------------------------------------------- |
| **When to Use** | Asynchronous operations (event handlers, timers, data fetches).       |
| **Remarks**     | Can lead to "callback hell" → solved by Promises and async/await.     |

```javascript
[1, 2, 3].forEach(num => console.log(num * 2));

setTimeout(() => console.log("Done"), 1000);

button.addEventListener("click", () => handleClick());
```

---
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


# 🧱 **OBJECTS & ARRAYS**

---

### **Object**

| **Definition**  | Collection of key-value pairs representing entities.                    |
| --------------- | ----------------------------------------------------------------------- |
| **When to Use** | Storing related data; modeling real-world structures.                   |
| **Remarks**     | Passed by reference. Everything in JS (except primitives) is an object. |

```javascript
const user = {
  name: "Alice",
  age: 30,
  email: "alice@example.com",
  greet() {
    return `Hi, I'm ${this.name}`;
  }
};

console.log(user.greet()); // Hi, I'm Alice
```

---

### **Array**

| **Definition**  | Ordered list of values accessed by numeric index.          |
| --------------- | ---------------------------------------------------------- |
| **When to Use** | Lists, collections, ordered data.                          |
| **Remarks**     | Zero-indexed. Has built-in methods. Technically an object. |

```javascript
const colors = ["red", "green", "blue"];

console.log(colors[0]); // "red"
console.log(colors.length); // 3

colors.push("yellow");
console.log(colors.pop()); // "yellow"
```

---

### **Object Literal**

| **Definition**  | Direct object creation using `{}` syntax.        |
| --------------- | ------------------------------------------------ |
| **When to Use** | Quick creation of structured data or config.     |
| **Remarks**     | Clean syntax. Supports method shorthand in ES6+. |

```javascript
const book = {
  title: "1984",
  author: "Orwell",
  year: 1949,
  getSummary() {
    return `${this.title} by ${this.author}`;
  }
};

console.log(book.getSummary()); // "1984 by Orwell"
```

---

### **Array Destructuring**

| **Definition**  | Extract array elements into variables.                            |
| --------------- | ----------------------------------------------------------------- |
| **When to Use** | Swapping variables, accessing elements, function returns.         |
| **Remarks**     | Cleaner than index access. Supports skipping, rest, and defaults. |

```javascript
const [first, second, ...rest] = [1, 2, 3, 4, 5];
// first = 1, second = 2, rest = [3, 4, 5]

const [a, , c] = [1, 2, 3]; // Skipping element

// Swapping
let x = 1, y = 2;
[x, y] = [y, x];

// Defaults
const [val = 10] = [];
```

---

### **Object Destructuring**

| **Definition**  | Extract object properties into variables.               |
| --------------- | ------------------------------------------------------- |
| **When to Use** | API responses, React props, cleaner parameter handling. |
| **Remarks**     | Supports renaming, nesting, and default values.         |

```javascript
const user = {
  name: 'Alice',
  age: 30,
  city: 'NYC'
};

const { name, age, city = 'Unknown' } = user;

// Renaming
const { name: userName } = user;

// Nested
const person = { address: { street: "Main St" } };
const { address: { street } } = person;

// In function params
function greet({ name, age }) {
  return `${name} is ${age}`;
}
```

---

### **Spread Operator**

| **Definition**  | Expands iterables or copies arrays/objects.        |
| --------------- | -------------------------------------------------- |
| **When to Use** | Copying, merging, spreading arrays as arguments.   |
| **Remarks**     | Shallow copy. Nested objects are still referenced. |

```javascript
const arr = [1, 2, 3];
const copy = [...arr]; // [1, 2, 3]

const merged = [...arr, 4, 5];

const obj = { name: 'Alice' };
const updated = {
  ...obj,
  age: 30,
  name: 'Bob' // Overwrites
};

const numbers = [1, 2, 3];
Math.max(...numbers); // 3
```

---

### **Property Shorthand**

| **Definition**  | Shorthand for object properties when key matches variable name. |
| --------------- | --------------------------------------------------------------- |
| **When to Use** | Cleaner object creation; reduce repetition.                     |
| **Remarks**     | Widely used in modern JS and frameworks like React.             |

```javascript
const name = "Bob";
const age = 25;

// Long way
const person1 = {
  name: name,
  age: age
};

// Shorthand
const person2 = { name, age };
```

---

### **Computed Property**

| **Definition**  | Allows dynamic property names using `[]`.                  |
| --------------- | ---------------------------------------------------------- |
| **When to Use** | Generating keys dynamically, programmatic object creation. |
| **Remarks**     | Introduced in ES6. Useful for dynamic or symbolic keys.    |

```javascript
const propName = "score";

const game = {
  [propName]: 100,
  [`level_${2}`]: "hard",
  [Symbol('id')]: 123
};

// Dynamic from user input
const key = getUserInput();
const obj = { [key]: value };
```

---

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


---

# 🧩 **OOP & CLASSES**

---

### **Class**

| **Definition**  | Blueprint for creating objects with shared properties and methods.                       |
| --------------- | ---------------------------------------------------------------------------------------- |
| **When to Use** | Creating multiple similar objects; modeling entities.                                    |
| **Remarks**     | ES6 syntax over prototypal inheritance. Not hoisted. Cleaner than constructor functions. |

```javascript
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  drive() {
    return `${this.brand} ${this.model} is driving`;
  }

  static compare(car1, car2) {
    return car1.brand === car2.brand;
  }
}
```

---

### **Constructor**

| **Definition**  | Special method automatically called when a new instance is created.   |
| --------------- | --------------------------------------------------------------------- |
| **When to Use** | To initialize instance properties and perform setup logic.            |
| **Remarks**     | Only one per class. Must call `super()` first when extending a class. |

```javascript
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.createdAt = new Date();
  }
}

const user = new User("Alice", "a@b.com");
console.log(user.name); // "Alice"
```

---

### **this**

| **Definition**  | Refers to the current object instance. Context-sensitive.                                    |
| --------------- | -------------------------------------------------------------------------------------------- |
| **When to Use** | To access instance properties or methods.                                                    |
| **Remarks**     | Value depends on how a function is called. Arrow functions inherit `this` from parent scope. |

```javascript
const obj = {
  name: "Test",
  greet() {
    return `Hello, I'm ${this.name}`;
  },
  arrowGreet: () => {
    return `Hi ${this.name}`; // undefined
  }
};

obj.greet();           // "Hello, I'm Test"
const fn = obj.greet;
fn();                  // this = undefined (in strict mode)
```

---

### **Inheritance**

| **Definition**  | Allows a class to derive from another class. Code reuse.                |
| --------------- | ----------------------------------------------------------------------- |
| **When to Use** | To create a specialized version of a class.                             |
| **Remarks**     | Inherits via prototype chain. Prefer composition over deep inheritance. |

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
  eat() {
    return `${this.name} is eating`;
  }
}

class Dog extends Animal {
  bark() {
    return "Woof!";
  }
}

const dog = new Dog("Buddy");
dog.eat();  // Inherited from Animal
dog.bark(); // Defined in Dog
```

---

### **super**

| **Definition**  | Calls the parent class’s constructor or methods.            |
| --------------- | ----------------------------------------------------------- |
| **When to Use** | Extending or augmenting parent class behavior.              |
| **Remarks**     | Must call `super()` before accessing `this` in constructor. |

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }

  introduce() {
    return `Hi, I'm ${this.name}`;
  }
}

class Employee extends Person {
  constructor(name, role) {
    super(name); // Call parent constructor
    this.role = role;
  }

  introduce() {
    return `${super.introduce()}, Role: ${this.role}`;
  }
}
```

---

### **Prototype**

| **Definition**  | Object from which other objects inherit. Core of JS inheritance.            |
| --------------- | --------------------------------------------------------------------------- |
| **When to Use** | For understanding inheritance; extending built-in behavior (carefully).     |
| **Remarks**     | Avoid modifying built-in prototypes. Classes use prototypes under the hood. |

```javascript
const arr = [1, 2, 3];
console.log(arr.__proto__ === Array.prototype); // true

Array.prototype.last = function() {
  return this[this.length - 1];
};

console.log([1, 2, 3].last()); // 3
```

---

### **Static Method**

| **Definition**  | Method defined on the class itself, not instances.               |
| --------------- | ---------------------------------------------------------------- |
| **When to Use** | Utility methods, constants, factory functions.                   |
| **Remarks**     | No access to instance (`this`). Called via class, not instances. |

```javascript
class MathUtil {
  static add(a, b) {
    return a + b;
  }

  static PI = 3.14159;

  static createFromString(str) {
    return new MathUtil(parseFloat(str));
  }
}

MathUtil.add(5, 3); // 8
```

---

### **Getter / Setter**

| **Definition**  | Special methods for controlled access to properties.                                    |
| --------------- | --------------------------------------------------------------------------------------- |
| **When to Use** | Encapsulation, validation, computed or derived values.                                  |
| **Remarks**     | Accessed like properties. Use `get` and `set` keywords. Prefix backing fields with `_`. |

```javascript
class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  get diameter() {
    return this._radius * 2;
  }

  set diameter(d) {
    if (d < 0) throw new Error("Invalid");
    this._radius = d / 2;
  }

  get area() {
    return Math.PI * this._radius ** 2;
  }
}
```

---

Let me know if you'd like this exported as Markdown, PDF, or another format!

Absolutely! Here's your **OPERATORS** section reformatted in the same clean and structured style you asked for:

---

# 🧩 **OPERATORS**

---

### **Strict Equality (`===`)**

| **Definition**  | Compares value **and** type. No coercion. Safe and predictable.                                 |
| --------------- | ----------------------------------------------------------------------------------------------- |
| **When to Use** | Always prefer over `==` for reliable comparisons.                                               |
| **Remarks**     | Avoids type coercion bugs. Use `Number.isNaN()` for `NaN`, `Object.is()` for object comparison. |

```javascript
5 === 5;           // true
5 === "5";         // false
null === undefined; // false
0 === false;       // false
NaN === NaN;       // false (use Number.isNaN())
```

---

### **Loose Equality (`==`)**

| **Definition**  | Compares values with type coercion.                               |
| --------------- | ----------------------------------------------------------------- |
| **When to Use** | Rarely. Only when you explicitly want coercion (not recommended). |
| **Remarks**     | Type coercion can lead to unexpected behavior. Use with caution.  |

```javascript
5 == "5";             // true
null == undefined;    // true
0 == false;           // true
"" == false;          // true
[] == false;          // true
```

---

### **Ternary Operator (`? :`)**

| **Definition**  | Inline conditional expression (shorthand for `if-else`).          |
| --------------- | ----------------------------------------------------------------- |
| **When to Use** | For simple conditional logic in expressions or assignments.       |
| **Remarks**     | Avoid deep nesting. Works only with expressions (not statements). |

```javascript
const status = age >= 18 ? "adult" : "minor";

const color = isActive ? "green" : "red";

// Nested (harder to read)
const size = width > 1200
  ? "large"
  : width > 800
    ? "medium"
    : "small";
```

---

### **Nullish Coalescing (`??`)**

| **Definition**  | Returns right-hand value only if left is `null` or `undefined`.                  |   |                                                              |
| --------------- | -------------------------------------------------------------------------------- | - | ------------------------------------------------------------ |
| **When to Use** | Setting default values safely without treating `0`, `""`, or `false` as nullish. |   |                                                              |
| **Remarks**     | Better than `                                                                    |   | `when`0`, `false`, or `""` are valid values. ES2020 feature. |

```javascript
const name = userName ?? "Anonymous";
const count = 0 ?? 10;          // 0
const value = "" ?? "default";  // ""
const result = null ?? "fallback"; // "fallback"
```

---

### **Optional Chaining (`?.`)**

| **Definition**  | Safely access deeply nested properties without errors.                                      |
| --------------- | ------------------------------------------------------------------------------------------- |
| **When to Use** | Avoiding `TypeError` on undefined/null intermediate objects.                                |
| **Remarks**     | Returns `undefined` if any part is nullish. ES2020 feature. Combine with `??` for defaults. |

```javascript
const city = user?.address?.city;
const result = obj?.method?.();
const item = arr?.[0];

// Equivalent before ES2020
const city = user && user.address && user.address.city;
```

---

### **Logical AND (`&&`)**

| **Definition**  | Returns first falsy value or last value if all are truthy.              |
| --------------- | ----------------------------------------------------------------------- |
| **When to Use** | Conditional execution; short-circuiting logic.                          |
| **Remarks**     | Not strictly boolean—returns actual value. Common in JSX (e.g., React). |

```javascript
const result = true && "yes";      // "yes"
const check = null && "never";     // null
const value = 0 && "zero";         // 0

// Conditional execution
isLoggedIn && redirect();
user && sendEmail(user);
```

---

### **Logical OR (`||`)**

| **Definition**  | Returns first truthy value or last if none are truthy.                              |
| --------------- | ----------------------------------------------------------------------------------- |
| **When to Use** | Providing fallback/default values.                                                  |
| **Remarks**     | Treats `0`, `""`, and `false` as falsy. Use `??` to handle only `null`/`undefined`. |

```javascript
const name = userName || "Guest";
const value = 0 || 100;        // 100 (0 is falsy)
const text = "" || "default";  // "default"
const final = false || null || "last"; // "last"
```

---
### **Comma Operator**

| **Definition**  | Evaluates multiple expressions and returns the last one.      |
| --------------- | ------------------------------------------------------------- |
| **When to Use** | Multiple operations in one statement (rarely used).           |
| **Remarks**     | Evaluates left to right. Mostly in for loops. Use sparingly.  |

```javascript
let x = (1 + 2, 3 + 4); // x = 7

// In for loops
for (let i = 0, j = 10; i < j; i++, j--) {
  console.log(i, j);
}

// Multiple assignments
let a, b;
(a = 1, b = 2); // a = 1, b = 2
```

---

### **Exponentiation (`**`)**

| **Definition**  | Raises left operand to the power of right operand.           |
| --------------- | ------------------------------------------------------------- |
| **When to Use** | Mathematical calculations, cleaner than `Math.pow()`.         |
| **Remarks**     | ES2016 feature. Right-associative. Has assignment `**=`.      |

```javascript
2 ** 3;        // 8
2 ** 3 ** 2;   // 512 (right-associative: 2 ** (3 ** 2))

let x = 2;
x **= 3;       // x = 8

// Alternative
Math.pow(2, 3); // 8 (older way)
```

---

### **Bitwise Operators**

| **Definition**  | Perform bit-level operations on integers.                     |
| --------------- | ------------------------------------------------------------- |
| **When to Use** | Low-level operations, flags, permissions, optimizations.      |
| **Remarks**     | Converts to 32-bit integers. Fast but less readable.          |

```javascript
// AND, OR, XOR, NOT
5 & 3;    // 1 (0101 & 0011)
5 | 3;    // 7 (0101 | 0011)
5 ^ 3;    // 6 (0101 ^ 0011)
~5;       // -6 (inverts bits)

// Shift operators
5 << 1;   // 10 (left shift)
5 >> 1;   // 2 (right shift)
-5 >>> 1; // 2147483645 (unsigned right shift)

// Practical use: checking flags
const READ = 1;    // 0001
const WRITE = 2;   // 0010
const EXECUTE = 4; // 0100

let permissions = READ | WRITE; // 0011
if (permissions & WRITE) {
  console.log('Can write');
}
```

---

### **in Operator**

| **Definition**  | Checks if property exists in object or prototype chain.       |
| --------------- | ------------------------------------------------------------- |
| **When to Use** | Checking property existence, iterating keys, array indices.   |
| **Remarks**     | Different from `hasOwnProperty()`. Checks prototype chain.    |

```javascript
const obj = { name: 'Alice', age: 30 };

'name' in obj;        // true
'toString' in obj;    // true (inherited)
'missing' in obj;     // false

// Array
const arr = [1, 2, 3];
0 in arr;             // true (index exists)
5 in arr;             // false

// vs hasOwnProperty
obj.hasOwnProperty('name');     // true
obj.hasOwnProperty('toString'); // false (inherited)
```

---

### **delete Operator**

| **Definition**  | Removes property from object.                                 |
| --------------- | ------------------------------------------------------------- |
| **When to Use** | Dynamic property removal (use cautiously for performance).    |
| **Remarks**     | Returns boolean. Can't delete variables. Avoid in hot paths.  |

```javascript
const obj = { name: 'Alice', age: 30 };

delete obj.age;     // true
console.log(obj);   // { name: 'Alice' }

// Can't delete variables
let x = 5;
delete x;           // false (in strict mode: error)

// Array (creates hole, doesn't change length)
const arr = [1, 2, 3];
delete arr[1];
console.log(arr);   // [1, empty, 3]
console.log(arr.length); // 3
```

---

### **void Operator**

| **Definition**  | Evaluates expression and returns `undefined`.                 |
| --------------- | ------------------------------------------------------------- |
| **When to Use** | Getting `undefined` safely, preventing return values.         |
| **Remarks**     | Rarely used. Mostly seen in `javascript:void(0)` links.       |

```javascript
void 0;           // undefined
void (1 + 1);     // undefined

// In links (prevents navigation)
<a href="javascript:void(0)">Click</a>

// Safe undefined
const safeUndefined = void 0;
```

---

---

---
### **typeof**

| **Definition**  | Returns the type of the operand as a string.                                                     |
| --------------- | ------------------------------------------------------------------------------------------------ |
| **When to Use** | Type checks, debugging, simple validations.                                                      |
| **Remarks**     | `typeof null` is `"object"` (known quirk). Arrays also return `"object"`. Use `Array.isArray()`. |

```javascript
typeof 42;            // "number"
typeof "hello";       // "string"
typeof undefined;     // "undefined"
typeof true;          // "boolean"
typeof null;          // "object" (quirk)
typeof function() {}; // "function"
typeof [];            // "object"
```

---

### **instanceof**

| **Definition**  | Checks if an object is an instance of a specific constructor.                  |
| --------------- | ------------------------------------------------------------------------------ |
| **When to Use** | Checking types, inheritance, class relationships.                              |
| **Remarks**     | Looks up prototype chain. Doesn't work across frames. Primitives return false. |

```javascript
[] instanceof Array;        // true
({}) instanceof Object;     // true
new Date() instanceof Date; // true
"text" instanceof String;   // false (primitive)

class Dog extends Animal {}
const dog = new Dog();
dog instanceof Dog;         // true
dog instanceof Animal;      // true
```

---

Let me know if you'd like this exported as a Markdown file or need the next section in this style!

Certainly! Here's your **SCOPE & CONTEXT** section fully reformatted in the same structured and developer-friendly style:

---

# 🧩 **SCOPE & CONTEXT**

---

### **Global Scope**

| **Definition**  | Variables accessible from anywhere in the program.                                 |
| --------------- | ---------------------------------------------------------------------------------- |
| **When to Use** | Rarely. Only for truly global data or configs.                                     |
| **Remarks**     | Can lead to name collisions. Avoid polluting global scope—use modules or closures. |

```javascript
var globalVar = "accessible everywhere";
window.globalName = "also global"; // browser only

function test() {
  console.log(globalVar); // works
}

if (true) {
  console.log(globalVar); // also works
}
```

---

### **Function Scope**

| **Definition**  | Variables accessible only within the function they’re declared in.           |
| --------------- | ---------------------------------------------------------------------------- |
| **When to Use** | Encapsulating logic; hiding implementation details.                          |
| **Remarks**     | `var` is function-scoped, unlike `let`/`const`. Source of confusion pre-ES6. |

```javascript
function myFunc() {
  var local = "function scope";
  let alsoLocal = "block scoped";

  if (true) {
    var stillLocal = "function scoped";
    let blockOnly = "block scoped";
  }

  console.log(stillLocal); // works
  // console.log(blockOnly); // Error: not defined
}

// console.log(local); // Error: not defined
```

---

### **Block Scope**

| **Definition**  | Variables accessible only inside `{}` blocks (`let`/`const`).   |
| --------------- | --------------------------------------------------------------- |
| **When to Use** | Loop counters, conditionals, and constants.                     |
| **Remarks**     | `let`/`const` prevent bugs caused by `var`. ES6+ best practice. |

```javascript
if (true) {
  let blockVar = "inside block";
  const alsoBlock = "inside block";
  var notBlock = "function scoped";
}

// console.log(blockVar); // Error
console.log(notBlock); // works

for (let i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}
// console.log(i); // Error
```

---

### **Lexical Scope**

| **Definition**  | Inner functions have access to variables from outer scope.          |
| --------------- | ------------------------------------------------------------------- |
| **When to Use** | Understanding closures; variable resolution in nested functions.    |
| **Remarks**     | Scope is determined at *write time*, not runtime. Enables closures. |

```javascript
function outer() {
  const x = 10;

  function inner() {
    const y = 20;
    console.log(x); // 10
    console.log(y); // 20
  }

  inner();
  // console.log(y); // Error: y is not defined
}
```
---
### **Closure**

| **Definition**  | Function that retains access to outer scope variables after outer function returns. |
| --------------- | ------------------------------------------------------------------------------------ |
| **When to Use** | Data privacy, factory functions, callbacks, event handlers.                          |
| **Remarks**     | Core JavaScript concept. Enables module pattern, currying, memoization.              |

```javascript
// Basic closure
function outer(x) {
  return function inner(y) {
    return x + y; // inner has access to x
  };
}

const add5 = outer(5);
add5(3); // 8

// Private variables
function createCounter() {
  let count = 0; // private
  
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count
  };
}

const counter = createCounter();
counter.increment(); // 1
// counter.count; // undefined (private)

// Event handlers
function setupButton() {
  const color = 'red';
  button.addEventListener('click', () => {
    element.style.color = color; // closure over color
  });
}
```

---

---

---

### **Hoisting**

| **Definition**  | JavaScript moves declarations to the top of their scope.                    |
| --------------- | --------------------------------------------------------------------------- |
| **When to Use** | Mainly to understand quirks of `var`, `function`, and TDZ.                  |
| **Remarks**     | Only declarations are hoisted, not initializations. `let`/`const` have TDZ. |

```javascript
console.log(x); // undefined (hoisted declaration)
var x = 5;

sayHi(); // works
function sayHi() {
  console.log("Hi");
}

// console.log(y); // ReferenceError: Cannot access before initialization
let y = 10;
```

---

### **TDZ (Temporal Dead Zone)**

| **Definition**  | Time between entering scope and `let`/`const` declaration.         |
| --------------- | ------------------------------------------------------------------ |
| **When to Use** | Understanding safe variable access with `let`/`const`.             |
| **Remarks**     | Accessing variables in TDZ throws ReferenceError. Enforces safety. |

```javascript
// TDZ begins
console.log(x); // ReferenceError
console.log(y); // ReferenceError

let x = 5;  // TDZ ends for x
const y = 10; // TDZ ends for y

console.log(x); // 5
console.log(y); // 10
```

---

### **call()**

| **Definition**  | Calls a function with specified `this` and individual arguments. |
| --------------- | ---------------------------------------------------------------- |
| **When to Use** | Explicit `this` binding; method borrowing.                       |
| **Remarks**     | `this` is set manually. Arguments passed individually.           |

```javascript
function greet(greeting, punctuation) {
  return `${greeting}, ${this.name}${punctuation}`;
}

const user = { name: "Alice" };

greet.call(user, "Hello", "!"); // "Hello, Alice!"

// Method borrowing
const arrayLike = { 0: 'a', 1: 'b', length: 2 };
const arr = Array.prototype.slice.call(arrayLike); // ['a', 'b']
```

---

### **apply()**

| **Definition**  | Same as `call()` but takes arguments as an array. |
| --------------- | ------------------------------------------------- |
| **When to Use** | Passing argument arrays (e.g., `Math.max`).       |
| **Remarks**     | Spread syntax is now preferred in many cases.     |

```javascript
function sum(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];
sum.apply(null, numbers); // 6

// Math.max with array
const max = Math.max.apply(null, [5, 10, 3]);

// Modern alternative
const max2 = Math.max(...[5, 10, 3]);
```

---

### **bind()**

| **Definition**  | Creates a new function with permanently bound `this`.       |
| --------------- | ----------------------------------------------------------- |
| **When to Use** | Event handlers, React class methods, partial application.   |
| **Remarks**     | Returns a new function. `this` is fixed. Can pre-fill args. |

```javascript
const obj = { name: "Bob" };

function greet(greeting) {
  return `${greeting}, ${this.name}`;
}

const boundGreet = greet.bind(obj);
boundGreet("Hi"); // "Hi, Bob"

// Partial application
const add = (a, b) => a + b;
const add5 = add.bind(null, 5);
add5(3); // 8
```

---

Let me know if you'd like to continue with another topic or get this as a downloadable file (Markdown, PDF, etc.)!

Absolutely! Here's your **ARRAY METHODS** section reformatted with the same clear, structured, and developer-friendly style:

---

# 🔁 **ARRAY METHODS**

---

### **map()**

| **Definition**  | Transforms each element and returns a new array.                      |
| --------------- | --------------------------------------------------------------------- |
| **When to Use** | Data transformation; rendering lists in UI (e.g., React).             |
| **Remarks**     | Doesn't mutate original. Returns array of same length. Pure function. |

```javascript
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);
// [2, 4, 6]

const users = data.map(user => ({
  id: user.id,
  name: user.fullName,
  email: user.contact.email
}));
```

---

### **filter()**

| **Definition**  | Returns a new array with elements that pass the condition.        |
| --------------- | ----------------------------------------------------------------- |
| **When to Use** | Filtering lists, removing invalid entries, conditional rendering. |
| **Remarks**     | Doesn't mutate original. May return shorter or empty array.       |

```javascript
const nums = [1, 2, 3, 4, 5, 6];
const evens = nums.filter(n => n % 2 === 0);
// [2, 4, 6]

const adults = users.filter(user => user.age >= 18);

// Remove nulls
const clean = arr.filter(item => item != null);
```

---

### **reduce()**

| **Definition**  | Reduces array to a single value using an accumulator.                  |
| --------------- | ---------------------------------------------------------------------- |
| **When to Use** | Totals, grouping, flattening, object transformation.                   |
| **Remarks**     | Powerful but can be complex. Needs initial value. Can return any type. |

```javascript
// Sum
const sum = [1, 2, 3, 4].reduce((acc, n) => acc + n, 0);
// 10

// Group by role
const grouped = users.reduce((acc, user) => {
  const key = user.role;
  acc[key] = acc[key] || [];
  acc[key].push(user);
  return acc;
}, {});

// Flatten array
const flat = [[1, 2], [3, 4]].reduce((acc, arr) => acc.concat(arr), []);
```

---

### **forEach()**

| **Definition**  | Executes a function for each array element (no return).            |
| --------------- | ------------------------------------------------------------------ |
| **When to Use** | Side effects like logging, DOM updates, etc.                       |
| **Remarks**     | Returns `undefined`. Cannot use `break` or `return` to exit early. |

```javascript
const names = ["Alice", "Bob", "Charlie"];

names.forEach((name, index) => {
  console.log(`${index}: ${name}`);
});

// Only skips "Bob"
names.forEach(name => {
  if (name === "Bob") return;
  console.log(name);
});
```

---

### **find()**

| **Definition**  | Returns the first element that satisfies the condition.    |
| --------------- | ---------------------------------------------------------- |
| **When to Use** | Finding a single item (e.g., by ID or unique match).       |
| **Remarks**     | Returns `undefined` if not found. Stops after first match. |

```javascript
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];

const user = users.find(u => u.id === 2);
// { id: 2, name: "Bob" }

const missing = users.find(u => u.id === 99);
// undefined
```

---
### **findIndex() / findLastIndex()**

| **Definition**  | Returns index of first/last element matching condition.       |
| --------------- | ------------------------------------------------------------- |
| **When to Use** | Finding position for updates, deletions, insertions.          |
| **Remarks**     | Returns -1 if not found. `findLastIndex()` is ES2023.         |

```javascript
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];

const index = users.findIndex(u => u.id === 2); // 1
const missing = users.findIndex(u => u.id === 99); // -1

// findLastIndex (ES2023)
const arr = [1, 2, 3, 2, 1];
arr.findLastIndex(x => x === 2); // 3

// Use case: update by condition
const idx = users.findIndex(u => u.name === 'Bob');
if (idx !== -1) {
  users[idx].active = true;
}
```

---

---


### **some()**

| **Definition**  | Checks if **at least one** element meets the condition.          |
| --------------- | ---------------------------------------------------------------- |
| **When to Use** | Validation, permissions, conditional logic.                      |
| **Remarks**     | Returns `true` or `false`. Stops at first match. Short-circuits. |

```javascript
const nums = [1, 3, 5, 8];
const hasEven = nums.some(n => n % 2 === 0);
// true

const hasAccess = permissions.some(p => p.role === "admin");

// Empty array
[].some(n => n > 0); // false
```

---

### **every()**

| **Definition**  | Checks if **all** elements pass the condition.               |
| --------------- | ------------------------------------------------------------ |
| **When to Use** | Validation (e.g., "are all items valid?").                   |
| **Remarks**     | Returns boolean. Empty array returns `true` (vacuous truth). |

```javascript
const nums = [2, 4, 6];
const allEven = nums.every(n => n % 2 === 0);
// true

const allValid = users.every(user => user.age >= 18 && user.email);

// Empty array
[].every(n => n > 0); // true
```

---

### **slice()**

| **Definition**  | Extracts a section of an array (non-mutating).    |
| --------------- | ------------------------------------------------- |
| **When to Use** | Creating copies, subarrays, pagination.           |
| **Remarks**     | End index is exclusive. Accepts negative indices. |

```javascript
const arr = [0, 1, 2, 3, 4];
const part = arr.slice(1, 4); // [1, 2, 3]
const copy = arr.slice(); // [0, 1, 2, 3, 4]
const last2 = arr.slice(-2); // [3, 4]

// Pagination
const page = items.slice(
  (pageNum - 1) * pageSize,
  pageNum * pageSize
);
```

---

### **splice()**

| **Definition**  | Adds/removes/replaces items (mutates original array). |
| --------------- | ----------------------------------------------------- |
| **When to Use** | In-place edits: insert, delete, replace items.        |
| **Remarks**     | Destructive. Returns array of removed items.          |

```javascript
const arr = [1, 2, 3, 4, 5];

// Remove 2 items at index 2
arr.splice(2, 2); // [3, 4]
// arr = [1, 2, 5]

// Insert at index 1
arr.splice(1, 0, 'a', 'b');
// arr = [1, 'a', 'b', 2, 5]

// Replace 1 item at index 2
arr.splice(2, 1, 'x');
// arr = [1, 'a', 'x', 2, 5]
```

---

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


---

# ⚠️ **ERROR HANDLING**

---


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



### **try / catch**

| **Definition**  | Executes code in `try`; catches runtime errors in `catch`.                                                                              |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| **When to Use** | Risky operations like JSON parsing, API calls, async/await logic.                                                                       |
| **Remarks**     | Catches **synchronous** errors only. Use with `async/await` for async code. Doesn't catch inside callbacks or promises without `await`. |

```javascript
// Synchronous
try {
  const data = JSON.parse(invalidJSON);
  processData(data);
} catch (error) {
  console.error("Parse error:", error.message);
  return defaultData; // fallback
}

// Asynchronous
try {
  const response = await fetch("/api");
  const data = await response.json();
} catch (error) {
  handleError(error);
}
```

---

### **throw**

| **Definition**  | Throws a custom error to stop execution and jump to `catch`.                                         |
| --------------- | ---------------------------------------------------------------------------------------------------- |
| **When to Use** | Input validation, enforcing rules/contracts, raising exceptions.                                     |
| **Remarks**     | Can throw anything, but use `Error` objects for consistency. Use custom errors for better debugging. |

```javascript
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
}

// Custom error class
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

throw new ValidationError("Invalid input");
```

---

### **finally**

| **Definition**  | Executes code **after** `try` or `catch`, regardless of outcome.               |
| --------------- | ------------------------------------------------------------------------------ |
| **When to Use** | Cleanup tasks like closing DB, hiding loaders, releasing locks.                |
| **Remarks**     | Always runs—whether an error is thrown or not, even after `return` or `throw`. |

```javascript
let loading = true;

try {
  const data = await fetchData();
  processData(data);
} catch (error) {
  handleError(error);
} finally {
  loading = false;           // Always runs
  hideLoadingSpinner();      // Cleanup
}

// Even runs after return
try {
  return result;
} finally {
  cleanup(); // Executes before returning
}
```

---

### **Error Object**

| **Definition**  | Built-in object representing an error. Used to throw meaningful exceptions.                                              |
| --------------- | ------------------------------------------------------------------------------------------------------------------------ |
| **When to Use** | Creating errors with messages, stack traces, and names. Extend for custom errors.                                        |
| **Remarks**     | Includes `message`, `name`, and `stack`. Supports built-in error types. Use for debugging and structured error handling. |

```javascript
const err = new Error("Something failed");
console.log(err.name);    // "Error"
console.log(err.message); // "Something failed"
console.log(err.stack);   // Stack trace

// Built-in types
new TypeError("Wrong type");
new ReferenceError("Variable not defined");
new SyntaxError("Invalid syntax");

// Custom error class
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = "AppError";
    this.statusCode = statusCode;
  }
}

throw new AppError("User not found", 404);
```

---

Would you like me to now compile all sections (**Operators**, **Scope & Context**, **Array Methods**, and **Error Handling**) into a single formatted Markdown file or export it as a PDF?

Here’s your **MODULES** section rewritten and formatted in the same clean, concise, professional style as your previous cheat sheets:

---


# 📦 **MODULES (ES6)**

---

### **import**

| **Definition**  | Brings in exported values from other modules.                                                                                                                           |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **When to Use** | Splitting code, reusing logic, accessing shared dependencies.                                                                                                           |
| **Remarks**     | Static (compile-time) imports. Top-level only. Enables tree-shaking. File extensions required in browsers. Supports named, default, namespace, and side-effect imports. |

```javascript
// Named imports
import { add, subtract } from './math.js';

// Default import
import React from 'react';

// Namespace import
import * as utils from './utils.js';

// Renaming imports
import { longFunction as short } from './helpers.js';

// Side effects only (no bindings)
import './styles.css';
```

---

### **export**

| **Definition**  | Makes values available for other modules to import.                                                                            |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| **When to Use** | Sharing code across files, libraries, reusable functions.                                                                      |
| **Remarks**     | Supports multiple named exports and one default export. Can re-export from other modules. Improves modularity and reusability. |

```javascript
// Named exports
export const PI = 3.14;
export function calculateArea(r) {
  return PI * r * r;
}

// Export list
const a = 1;
const b = 2;
export { a, b };

// Re-export from another file
export { formatDate } from './dateUtils.js';
export * from './validators.js';
```

---

### **default export**

| **Definition**  | Exports a single main value from a module.                                                    |
| --------------- | --------------------------------------------------------------------------------------------- |
| **When to Use** | Main function/class per file; React components; libraries.                                    |
| **Remarks**     | Only one allowed per file. Can be imported with any name. Works well alongside named exports. |

```javascript
// math.js
export default function add(a, b) {
  return a + b;
}

// or
function add(a, b) {
  return a + b;
}
export default add;

// app.js
import add from './math.js';
import myAdd from './math.js'; // works – name is arbitrary
```

---

### **named export**

| **Definition**  | Allows multiple specific exports per file.                                                                 |
| --------------- | ---------------------------------------------------------------------------------------------------------- |
| **When to Use** | Utility functions, constants, reusable helpers.                                                            |
| **Remarks**     | Must import with exact names (or alias them). Better tree-shaking. Combine with default exports if needed. |

```javascript
// utils.js
export const format = str => str.trim();
export const validate = val => val != null;
export const API_URL = 'https://api.example.com';

// app.js
import {
  format,
  validate,
  API_URL
} from './utils.js';

// Namespace import
import * as utils from './utils.js';
utils.format(' test ');
```

---

✅ Want me to compile all five sections (**Operators**, **Scope & Context**, **Array Methods**, **Error Handling**, and **Modules**) into one clean Markdown or PDF cheat sheet for you?

Here's your **ADVANCED CONCEPTS** section rewritten in the same clean, professional format as the rest of your cheat sheet series — concise explanations, real-world use cases, and clearly formatted code examples.

---

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

# 🧠 **ADVANCED CONCEPTS**

---

### **Currying**

| **Definition**  | Transforms a function to take one argument at a time.                          |
| --------------- | ------------------------------------------------------------------------------ |
| **When to Use** | Partial application, function composition, React hooks.                        |
| **Remarks**     | Encourages reusable and specialized functions. Functional programming pattern. |

```javascript
// Basic curry
const add = a => b => a + b;
const add5 = add(5);
add5(3); // 8

// Real-world use
const greet = greeting => name => `${greeting}, ${name}!`;

const sayHi = greet("Hi");
sayHi("Alice"); // "Hi, Alice!"
```

---

### **Memoization**

| **Definition**  | Caches function results to avoid redundant work.                                                    |
| --------------- | --------------------------------------------------------------------------------------------------- |
| **When to Use** | Expensive calculations, recursive functions, performance optimization.                              |
| **Remarks**     | Pure function friendly. Use `Map` for caching. Can grow in memory. Pattern used in `React.useMemo`. |

```javascript
const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};

const expensiveCalc = memoize(n => {
  console.log("Computing...");
  return n * n;
});

expensiveCalc(5); // Computing... 25
expensiveCalc(5); // 25 (cached)
```

---

### **Debouncing**

| **Definition**  | Delays function execution until pause in calls.                                       |
| --------------- | ------------------------------------------------------------------------------------- |
| **When to Use** | Search bars, form input, resize events.                                               |
| **Remarks**     | Waits for user to stop typing before triggering. Reduces frequency of function calls. |

```javascript
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

// Usage: API search
const searchAPI = debounce(query => {
  fetch(`/api/search?q=${query}`);
}, 300);

input.addEventListener('input', e => {
  searchAPI(e.target.value);
});
```

---

### **Throttling**

| **Definition**  | Limits function to run at most once per time interval.                                       |
| --------------- | -------------------------------------------------------------------------------------------- |
| **When to Use** | Scroll events, mousemove, rate-limiting UI actions.                                          |
| **Remarks**     | Runs periodically, unlike debounce (which waits for pause). Ideal for high-frequency events. |

```javascript
function throttle(fn, limit) {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

const handleScroll = throttle(() => {
  console.log("Scrolling...");
}, 1000);

window.addEventListener('scroll', handleScroll);
```

---

### **Generator**

| **Definition**  | A function that can pause with `yield` and resume later.                     |
| --------------- | ---------------------------------------------------------------------------- |
| **When to Use** | Lazy iteration, infinite sequences, async control.                           |
| **Remarks**     | Memory-efficient. Returns `Iterator`. Used in `Redux-Saga`, lazy evaluation. |

```javascript
function* numberGen() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = numberGen();
console.log(gen.next()); // { value: 1, done: false }

// Infinite generator
function* idGenerator() {
  let id = 1;
  while (true) yield id++;
}

const ids = idGenerator();
ids.next().value; // 1
ids.next().value; // 2
```

---

### **Iterator**

| **Definition**  | An object with a `next()` method that returns `{ value, done }`.                              |
| --------------- | --------------------------------------------------------------------------------------------- |
| **When to Use** | Custom iteration, working with `for...of` or spread.                                          |
| **Remarks**     | Use `[Symbol.iterator]()` to make an object iterable. Works with strings, arrays, Maps, Sets. |

```javascript
const iterable = {
  [Symbol.iterator]() {
    let i = 0;
    const data = [1, 2, 3];
    return {
      next: () => ({
        value: data[i],
        done: i++ >= data.length
      })
    };
  }
};

for (const val of iterable) {
  console.log(val); // 1, 2, 3
}

const arr = [...iterable]; // [1, 2, 3]
```

---

### **Proxy**

| **Definition**  | Wrapper that intercepts operations on an object.                                             |
| --------------- | -------------------------------------------------------------------------------------------- |
| **When to Use** | Validation, logging, reactivity (e.g., Vue 3), data binding.                                 |
| **Remarks**     | 13 “traps” like `get`, `set`, etc. Used in meta-programming. Adds behavior to object access. |

```javascript
const handler = {
  get: (obj, prop) => {
    console.log(`Getting ${prop}`);
    return prop in obj ? obj[prop] : 'N/A';
  },
  set: (obj, prop, value) => {
    console.log(`Setting ${prop} to ${value}`);
    if (prop === 'age' && typeof value !== 'number') {
      throw new TypeError('Age must be a number');
    }
    obj[prop] = value;
    return true;
  }
};

const user = new Proxy({ name: 'Alice' }, handler);
user.age = 30;          // Setting age to 30
console.log(user.age);  // Getting age -> 30
```

---

### **Reflect**

| **Definition**  | A built-in object with methods to perform low-level object operations.                |
| --------------- | ------------------------------------------------------------------------------------- |
| **When to Use** | Inside Proxy traps, object manipulation, consistent behavior.                         |
| **Remarks**     | Mirror of Proxy traps. Safer (returns booleans). Enables default behavior in Proxies. |

```javascript
const obj = { name: 'Bob', age: 30 };

Reflect.get(obj, 'name');           // 'Bob'
Reflect.set(obj, 'age', 31);        // true
Reflect.has(obj, 'name');           // true
Reflect.deleteProperty(obj, 'age'); // true

// Using Reflect inside Proxy
const handler = {
  get: (target, prop) => {
    console.log(`Getting ${prop}`);
    return Reflect.get(target, prop);
  }
};

const proxied = new Proxy(obj, handler);
proxied.name; // Getting name → 'Bob'
```

---

✅ Want me to bundle **all six sections** into one complete cheat sheet (Markdown or PDF)?

Here is the **COMMON PATTERNS & BEST PRACTICES** section rewritten in the same clear, modular, and professional style as the previous cheat sheets. Everything is concise, real-world focused, and syntax-highlighted for easy scanning.

---

# 🔧 **COMMON PATTERNS & BEST PRACTICES**

---

### **Method Chaining**

| **Definition**  | Return `this` from methods to allow chained calls.              |
| --------------- | --------------------------------------------------------------- |
| **When to Use** | Fluent APIs, builder patterns (e.g., jQuery, Lodash).           |
| **Remarks**     | Improves readability. Avoid chaining too deeply. Return `this`. |

```javascript
class Calculator {
  constructor() {
    this.value = 0;
  }

  add(n) {
    this.value += n;
    return this;
  }

  multiply(n) {
    this.value *= n;
    return this;
  }

  getValue() {
    return this.value;
  }
}

const result = new Calculator()
  .add(5)
  .multiply(2)
  .add(3)
  .getValue(); // 13
```

---

### **Object.assign()**

| **Definition**  | Copies properties from source objects into a target.   |
| --------------- | ------------------------------------------------------ |
| **When to Use** | Shallow cloning, merging configs, applying defaults.   |
| **Remarks**     | Doesn't deep clone. Spread (`{...obj}`) often cleaner. |

```javascript
const defaults = { theme: 'light', size: 'md', animations: true };
const userSettings = { theme: 'dark', language: 'en' };

const config = Object.assign({}, defaults, userSettings);
// { theme: 'dark', size: 'md', animations: true, language: 'en' }
```

---

### **Object.keys()**

| **Definition**  | Returns an array of a given object's own keys.          |
| --------------- | ------------------------------------------------------- |
| **When to Use** | Looping over object props, validations, counting keys.  |
| **Remarks**     | Skips inherited keys. Use `Object.entries()` for pairs. |

```javascript
const user = { name: 'Alice', age: 30, email: 'alice@example.com' };

Object.keys(user); // ['name', 'age', 'email']

// Iterate
Object.keys(user).forEach(key => {
  console.log(`${key}: ${user[key]}`);
});
```

---

### **Object.values()**

| **Definition**  | Returns an array of a given object's own values.        |
| --------------- | ------------------------------------------------------- |
| **When to Use** | Summing, filtering, or mapping over values.             |
| **Remarks**     | Values only. Order usually preserved (insertion order). |

```javascript
const scores = { math: 90, science: 85, english: 88 };

Object.values(scores); // [90, 85, 88]

// Average
const avg = Object.values(scores)
  .reduce((a, b) => a + b, 0) / Object.values(scores).length;
```

---

### **Object.entries()**

| **Definition**  | Returns `[key, value]` pairs from an object.                       |
| --------------- | ------------------------------------------------------------------ |
| **When to Use** | Iterating key-value pairs, converting to/from `Map`.               |
| **Remarks**     | Works well with `for...of`. Use `Object.fromEntries()` to reverse. |

```javascript
const user = { name: 'Bob', age: 25, role: 'admin' };

// Iterate with destructuring
for (const [key, value] of Object.entries(user)) {
  console.log(`${key}: ${value}`);
}

// Filter properties
const filtered = Object.fromEntries(
  Object.entries(user).filter(([key, val]) => typeof val === 'string')
);
```

---

### **Array.from()**

| **Definition**  | Converts iterable or array-like values to real arrays.          |
| --------------- | --------------------------------------------------------------- |
| **When to Use** | Convert NodeLists, arguments, strings, Sets.                    |
| **Remarks**     | Second arg is optional mapping function. Alternative to spread. |

```javascript
Array.from('hello'); // ['h', 'e', 'l', 'l', 'o']

// Set to array
const unique = Array.from(new Set([1, 2, 2, 3])); // [1, 2, 3]

// Array-like
function sum() {
  const args = Array.from(arguments);
  return args.reduce((a, b) => a + b);
}
```

---

### **Template Literals**

| **Definition**  | String interpolation using backticks (`) and `${}` syntax. |
| --------------- | ---------------------------------------------------------- |
| **When to Use** | HTML templates, dynamic text, multi-line strings.          |
| **Remarks**     | Supports expressions, multi-line, and tagged templates.    |

```javascript
const name = 'World';
const greeting = `Hello, ${name}!`;

// HTML template
const html = `
  <div class="card">
    <h2>${title}</h2>
    <p>${description}</p>
  </div>
`;

// Tagged template
function highlight(strings, ...values) {
  return strings.reduce((res, str, i) =>
    res + str + (values[i] ? `<mark>${values[i]}</mark>` : ''), ''
  );
}

const text = highlight`Hello ${name}, you have ${count} messages`;
```

---

### **Short-Circuit Evaluation**

| **Definition**  | Uses `&&`, `||`, or `??` for inline logic or defaults. |
|----------------|--------------------------------------------------------|
| **When to Use**| Guards, fallback values, React rendering. |
| **Remarks**    | `&&` stops at falsy, `||` at truthy, `??` for null/undefined only. |

```javascript
const name = userName || 'Guest';
isLoggedIn && showDashboard();

// Guard clause
function processUser(user) {
  if (!user) return null;
  return user.name.toUpperCase();
}

// Chained defaults
const value = input || localStorage.get('key') || DEFAULT;
```

---

### **Destructuring with Defaults**

| **Definition**  | Assign default values during destructuring.     |
| --------------- | ----------------------------------------------- |
| **When to Use** | Optional config, function parameters, props.    |
| **Remarks**     | Works with arrays and objects. Useful in React. |

```javascript
function createUser({
  name,
  age = 18,
  role = 'user',
  active = true
}) {
  return { name, age, role, active };
}

createUser({ name: 'Alice' });
// { name: 'Alice', age: 18, role: 'user', active: true }

// Array destructuring
const [first = 'default', second = 'default'] = arr;
```

---

### **Optional Chaining with Nullish Coalescing**

| **Definition**  | Safely access deeply nested values with fallback.                        |
| --------------- | ------------------------------------------------------------------------ |
| **When to Use** | APIs, user input, optional configs.                                      |
| **Remarks**     | `?.` avoids errors on null/undefined. `??` only checks nullish. ES2020+. |

```javascript
const city = user?.address?.city ?? 'Unknown';

const result = obj?.method?.() ?? defaultValue;
const firstItem = data?.items?.[0] ?? 'No items';

// Before ES2020
const city = (user && user.address && user.address.city) || 'Unknown';

// Complex case
const config = {
  serverUrl: api?.servers?.[0]?.url ?? DEFAULT_URL,
  timeout: settings?.network?.timeout ?? 5000,
  retries: options?.retry?.count ?? 3
};
```

---

✅ Want all cheat sheets combined into a **single document (PDF or Markdown)** with navigation and styling? Let me know — I can generate and format it for easy printing or digital reference.

Here’s your **ES6+ FEATURES QUICK REFERENCE**, rewritten in the same clean, modular format as the previous sections. Designed for quick scanning, retention, and practical application:

---

# 🚀 **ES6+ FEATURES QUICK REFERENCE**

---

### **let / const**

| **Definition**  | Block-scoped variable declarations.                              |
| --------------- | ---------------------------------------------------------------- |
| **When to Use** | Always use `const` unless you plan to reassign with `let`.       |
| **Remarks**     | Never use `var`. `const` is default; `let` for mutable bindings. |

```javascript
const MAX = 100;   // constant
let count = 0;     // mutable

if (true) {
  let localVar = 'inside block';
  const another = 'still inside block';
}

// console.log(localVar); // ReferenceError
```

---

### **Arrow Functions**

| **Definition**  | Short syntax for writing functions.                         |
| --------------- | ----------------------------------------------------------- |
| **When to Use** | Inline functions, callbacks, React components.              |
| **Remarks**     | Lexical `this`, no `arguments`, not usable as constructors. |

```javascript
// Single param
const square = x => x * x;

// Multiple params
const add = (a, b) => a + b;

// Block body
const compute = x => {
  const double = x * 2;
  return double + 1;
};

// Return object
const createUser = name => ({
  name,
  active: true
});
```

---

### **Spread / Rest**

| **Definition**  | Spread (`...`) expands. Rest (`...`) collects.       |
| --------------- | ---------------------------------------------------- |
| **When to Use** | Copying, merging, variadic functions, destructuring. |
| **Remarks**     | Rest must be last in parameter list. Shallow copy.   |

```javascript
// Spread
const copy = [...arr];
const combined = [...arr1, ...arr2];
const userUpdated = { ...user, role: 'admin' };

// Rest
function sum(...nums) {
  return nums.reduce((a, b) => a + b);
}

// Destructuring with rest
const [first, ...others] = [1, 2, 3, 4];
const { name, ...rest } = user;
```

---

### **Map / Set**

| **Definition**  | ES6 collections for key-value and unique values.                      |
| --------------- | --------------------------------------------------------------------- |
| **When to Use** | Map: complex keys, ordered entries. Set: uniqueness.                  |
| **Remarks**     | Both iterable. Map keys can be any type. Set auto-removes duplicates. |

```javascript
// Set
const set = new Set([1, 2, 2, 3]); // {1, 2, 3}
set.add(4);
set.has(2); // true

// Map
const map = new Map();
map.set('name', 'Alice');
map.set({ id: 1 }, 'value');
console.log(map.get('name')); // 'Alice'

// Iterating Map
for (const [key, value] of map) {
  console.log(key, value);
}
```

---

### **for...of**

| **Definition**  | Loop over values in iterables (arrays, strings, etc.).                |
| --------------- | --------------------------------------------------------------------- |
| **When to Use** | Cleaner alternative to `for` or `forEach` on iterables.               |
| **Remarks**     | Use `for...in` only for object keys. Use `Object.keys()` for objects. |

```javascript
// Array
for (const num of [1, 2, 3]) {
  console.log(num);
}

// String
for (const char of 'hello') {
  console.log(char);
}

// Map
for (const [key, val] of map) {
  console.log(key, val);
}

// With break/continue
for (const item of items) {
  if (item > 10) break;
  console.log(item);
}
```

---

✅ Let me know if you’d like:

* A **PDF/Markdown** version of all cheat sheets combined
* A **poster-style layout** for printing
* Flashcard format for **practice/memory testing**

Ready when you are.

Here’s your **DEBUGGING & TESTING** reference, formatted in the same clean, modular style for fast scanning and practical application:

---

# 🧪 **DEBUGGING & TESTING QUICK REFERENCE**

---

### **`console.log()`**

| **Definition**  | Print values to the console.                                                  |
| --------------- | ----------------------------------------------------------------------------- |
| **When to Use** | Basic debugging, value inspection.                                            |
| **Remarks**     | Simple, widely used. Object shorthand improves clarity. Remove in production. |

```javascript
console.log('value:', x);

// Multiple values
console.log('User:', user, 'Count:', count);

// Object shorthand
console.log({ user, posts, comments });

// Styled output
console.log('%c Important!', 'color: red; font-size: 20px');
```

---

### **`console.table()`**

| **Definition**  | Display arrays or objects as a formatted table.                   |
| --------------- | ----------------------------------------------------------------- |
| **When to Use** | Inspecting structured or tabular data.                            |
| **Remarks**     | Great for arrays of objects. Select specific columns for clarity. |

```javascript
const users = [
  { id: 1, name: 'Alice', age: 30 },
  { id: 2, name: 'Bob', age: 25 },
  { id: 3, name: 'Charlie', age: 35 }
];

console.table(users);

// Specific columns
console.table(users, ['name', 'age']);
```

---

### **`debugger`**

| **Definition**  | Pause execution and enter debug mode in DevTools.                      |
| --------------- | ---------------------------------------------------------------------- |
| **When to Use** | Deep inspection, complex logic, step-by-step debugging.                |
| **Remarks**     | Breakpoint inserted in code. Use conditionally. Remove for production. |

```javascript
function calculate(x, y) {
  debugger; // Pauses here
  return x * y + 10;
}

// Conditional pause
if (user.role === 'admin') {
  debugger;
}
```

---

### **`console.assert()`**

| **Definition**  | Log message if condition is false.                                    |
| --------------- | --------------------------------------------------------------------- |
| **When to Use** | Validation, sanity checks in dev.                                     |
| **Remarks**     | No interruption; logs only on failure. Useful for inline assumptions. |

```javascript
console.assert(x > 0, 'x must be positive');

console.assert(Array.isArray(data), 'data must be an array');

function divide(a, b) {
  console.assert(b !== 0, 'Division by zero!');
  return a / b;
}
```

---

### **`console.trace()`**

| **Definition**  | Logs the call stack leading to current function.          |
| --------------- | --------------------------------------------------------- |
| **When to Use** | Understand call paths and debugging indirect calls.       |
| **Remarks**     | Shows the full function call chain. Call origin tracking. |

```javascript
function a() { b(); }
function b() { c(); }
function c() {
  console.trace('How did we get here?');
}

a(); // Outputs: c → b → a → global
```

---

### **Performance Measurement**

| **Definition**  | Measure and log execution time.                                           |
| --------------- | ------------------------------------------------------------------------- |
| **When to Use** | Finding slow code and performance bottlenecks.                            |
| **Remarks**     | Use `console.time()` for rough timing, `performance.now()` for precision. |

```javascript
// console.time / timeEnd
console.time('operation');
expensiveOperation();
console.timeEnd('operation'); // Logs: operation: 234ms

// performance.now() (high resolution)
const start = performance.now();
doSomething();
const end = performance.now();
console.log(`Took ${end - start}ms`);

// Multiple timings
console.time('fetch');
await fetchData();
console.timeEnd('fetch');

console.time('process');
processData();
console.timeEnd('process');
```

---

✅ Let me know if you want:

* A **combined PDF** of all cheat sheets
* A **print-friendly version**
* A **flashcard-style** layout for revision

Happy to package this for whatever use you have in mind.

Here’s the **COMMON GOTCHAS & PITFALLS** quick reference formatted cleanly for easy scanning and practical use:

---

# ⚠️ **COMMON GOTCHAS & PITFALLS QUICK REFERENCE**

---

### **Type Coercion**

| **Why It Happens** | `==` performs type conversion which can lead to unexpected truthy results. |
| ------------------ | -------------------------------------------------------------------------- |
| **Solution**       | Always use strict equality `===` to avoid coercion surprises.              |

```javascript
// Bad (coercion)
0 == false;   // true
"" == false;  // true

// Good (strict)
0 === false;  // false
"" === false; // false
```

---

### **`this` Binding**

| **Why It Happens** | `this` depends on the calling context, often lost in callbacks. |
| ------------------ | --------------------------------------------------------------- |
| **Solution**       | Use arrow functions or `.bind()` to preserve correct `this`.    |

```javascript
const obj = {
  name: 'Test',
  greet: function() {
    // Problem: `this` lost inside regular function
    setTimeout(function() {
      console.log(this.name); // undefined
    }, 100);
  },

  greetFixedArrow: function() {
    setTimeout(() => {
      console.log(this.name); // 'Test'
    }, 100);
  },

  greetFixedBind: function() {
    setTimeout(function() {
      console.log(this.name); // 'Test'
    }.bind(this), 100);
  }
};
```

---

### **Array/Object Mutation**

| **Why It Happens** | Arrays/objects are assigned by reference, not copied, leading to mutations.      |
| ------------------ | -------------------------------------------------------------------------------- |
| **Solution**       | Use spread (`...`) or proper deep copy methods (like `structuredClone`) to copy. |

```javascript
// Problem (mutation)
const original = [1, 2, 3];
const copy = original;
copy.push(4);
console.log(original); // [1, 2, 3, 4] — original mutated!

// Solution (shallow copy)
const copyShallow = [...original];

// Solution (deep copy)
const deepCopy = structuredClone(original);
```

---

### **Floating Point Precision**

| **Why It Happens** | Binary floating point cannot exactly represent decimals.           |
| ------------------ | ------------------------------------------------------------------ |
| **Solution**       | Use rounding (`toFixed`, `Math.round`) or libraries for precision. |

```javascript
// Problem
0.1 + 0.2; // 0.30000000000000004

// Solution
(0.1 + 0.2).toFixed(2);          // "0.30"
Math.round((0.1 + 0.2) * 100)/100; // 0.3
```

---

### **Async/Await Errors**

| **Why It Happens** | Forgetting to use `try/catch` for error handling or omitting `await`. |
| ------------------ | --------------------------------------------------------------------- |
| **Solution**       | Always wrap async calls in `try/catch` blocks to handle errors.       |

```javascript
// Problem: unhandled rejection
async function getData() {
  const data = await fetch('/api');
}

// Solution: handle errors properly
async function getData() {
  try {
    const data = await fetch('/api');
    return data;
  } catch (error) {
    console.error('Failed:', error);
    throw error;
  }
}
```

---

✅ Want me to package these cheat sheets for you?
Or create more like this? Just ask!

Here’s your **PERFORMANCE OPTIMIZATION** quick reference formatted clearly and practically:

---

# 🚀 **PERFORMANCE OPTIMIZATION QUICK REFERENCE**

---

### **Lazy Loading**

| **Definition & Usage** | Load resources only when needed to improve initial load times and reduce bundle size. Ideal for images, modules, routes, and large data. Common in Single Page Applications (SPAs). Browsers support native lazy loading for images. |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |

```javascript
// Dynamic import for modules
const module = await import('./heavy-module.js');

// React lazy loading
const LazyComponent = React.lazy(() => import('./Component.js'));

// Native image lazy loading (HTML)
<img loading="lazy" src="image.jpg" alt="Lazy loaded image" />
```

---

### **Web Workers**

| **Definition & Usage** | Run scripts in a background thread to offload heavy computations or data processing without blocking the UI. Cannot access DOM directly. Great for CPU-intensive tasks but comes with data transfer overhead. Enables parallel processing. |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |

```javascript
// main.js
const worker = new Worker('worker.js');

worker.postMessage({ data: largeArray });

worker.onmessage = (e) => {
  console.log('Result:', e.data);
};

// worker.js
self.onmessage = (e) => {
  const result = processData(e.data);
  self.postMessage(result);
};
```

---

### **requestAnimationFrame**

| **Definition & Usage** | Schedule animation or visual updates synced with the browser’s refresh rate (~60fps). Better than setInterval for smooth animations and scrolling. Automatically pauses in inactive tabs to save resources. |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

```javascript
function animate() {
  // Update animation state
  element.style.transform = `translateX(${x}px)`;
  x += 1;

  if (x < 500) {
    requestAnimationFrame(animate);
  }
}

requestAnimationFrame(animate);
```

---

✅ Need more optimization tips or examples? Just say the word!

## **QUICK TIPS & BEST PRACTICES**

**🎯 Always:**
- Use `const` by default, `let` when needed, never `var`
- Use `===` instead of `==`
- Prefer arrow functions for callbacks
- Embrace destructuring and spread operators
- Handle async operations with try/catch
- Avoid mutating objects/arrays directly
- Use optional chaining `?.` and nullish coalescing `??`
- Write pure functions when possible

**⚠️ Avoid:**
- Global variables
- Callback hell (use Promises/async-await)
- Modifying built-in prototypes
- Using `eval()` or `with`
- Deep nesting (keep functions small)
- Magic numbers (use named constants)

**📚 Understanding Key Concepts:**
- **Closures**: Foundation of many JS patterns
- **Scope & Context**: Know the difference
- **Event Loop**: Critical for async understanding
- **Prototypal Inheritance**: How JS objects work
- **Hoisting**: Why var behaves strangely
- **this binding**: Context in different scenarios

**🔧 Development Tools:**
- Browser DevTools (Chrome, Firefox)
- ESLint for code quality
- Prettier for formatting
- Jest/Vitest for testing
- Webpack/Vite for bundling

**📖 Further Learning:**
- **MDN Web Docs**: Comprehensive JavaScript reference
- **JavaScript.info**: Modern tutorial with depth
- **You Don't Know JS**: Deep dive book series
- Practice with real projects to solidify concepts
- Read source code of popular libraries

---

**Pro Tip**: Bookmark this comprehensive guide for quick JavaScript reference! 🚀

**Last Updated**: 2025 - Includes all modern JavaScript features through ES2024