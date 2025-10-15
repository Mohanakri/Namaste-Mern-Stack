# JavaScript Glossary - Enhanced Reference Guide

---

Absolutely! Here's your **🧩 FUNCTIONS** section in the exact format you specified — clean markdown, matching the style of your **VARIABLES & DATA TYPES** table, and ready to paste into your `.md` file.

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

| **Definition**  | Function assigned to a variable. Not hoisted.                           |
| --------------- | ----------------------------------------------------------------------- |
| **When to Use** | When you need a function as a value (e.g., callbacks, passing around).  |
| **Remarks**     | Not hoisted. Can be anonymous or named. Useful for functional patterns. |

```javascript
const add = function (a, b) {
  return a + b;
};

console.log(add(2, 3)); // 5
```

---

### **Arrow Function**

| **Definition**  | Concise function syntax using `=>`. Lexically binds `this`.              |
| --------------- | ------------------------------------------------------------------------ |
| **When to Use** | For short functions, callbacks, and when you don't need your own `this`. |
| **Remarks**     | No `this`, `arguments`, or `super`. Cannot be used as constructors.      |

```javascript
const multiply = (x, y) => x * y;

console.log(multiply(4, 5)); // 20
```

---

### **Immediately Invoked Function Expression (IIFE)**

| **Definition**  | Function that runs immediately after being defined.        |
| --------------- | ---------------------------------------------------------- |
| **When to Use** | To create a private scope or avoid polluting global scope. |
| **Remarks**     | Runs once. Useful for module patterns and encapsulation.   |

```javascript
(function () {
  const secret = "hidden";
  console.log("IIFE executed!");
})();

// console.log(secret); // Error! secret is not defined
```

---

### **Callback Function**

| **Definition**  | A function passed as an argument to another function.                  |
| --------------- | ---------------------------------------------------------------------- |
| **When to Use** | Asynchronous operations, event handling, array methods, etc.           |
| **Remarks**     | Helps make code non-blocking. Can lead to "callback hell" if overused. |

```javascript
function fetchData(callback) {
  setTimeout(() => {
    callback("Data received");
  }, 1000);
}

fetchData((data) => {
  console.log(data); // Data received
});
```

---

Let me know if you'd like a section for **Async/Await**, **Generators**, or **Closures** next!

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

Would you like me to continue the **Objects, Arrays & JSON** section next — formatted in the same Markdown table + example layout?

## **OBJECTS & ARRAYS**

| Term | Definition & Usage | Example |
|------|-------------------|---------|
| **Object** | **Definition**: Collection of key-value pairs representing entities<br><br>**When to Use**: Storing related data; modeling real-world entities<br><br>**Remarks**: Everything in JS (except primitives) is an object. Passed by reference. Use for structured, related data. | javascript<br>const user = {<br>  name: "Alice",<br>  age: 30,<br>  email: "alice@example.com",<br>  greet() {<br>    return `Hi, I'm ${this.name}`;<br>  }<br>};<br> |
| **Array** | **Definition**: Ordered list of values accessed by numeric index<br><br>**When to Use**: Lists, collections, ordered data<br><br>**Remarks**: Actually an object with numeric keys. Has built-in methods. Use for ordered collections. Zero-indexed. | javascript<br>const colors = ["red", "green", "blue"];<br>colors[0]; // "red"<br>colors.length; // 3<br>colors.push("yellow");<br>colors.pop(); // "yellow"<br> |
| **Object Literal** | **Definition**: Direct object creation using {} notation<br><br>**When to Use**: Quick object creation; configuration objects<br><br>**Remarks**: Simple, readable syntax. ES6 added method shorthand. Use for single-use objects and configurations. | javascript<br>const book = {<br>  title: "1984",<br>  author: "Orwell",<br>  year: 1949,<br>  getSummary() {<br>    return `${this.title} by ${this.author}`;<br>  }<br>};<br> |
| **Array Destructuring** | **Definition**: Extract array values into separate variables<br><br>**When to Use**: Unpacking values; swapping variables; function returns<br><br>**Remarks**: Cleaner than index access. Works with any iterable. Enables elegant swaps. Common in React hooks: `[state, setState]`. | javascript<br>const [first, second, ...rest] = [1, 2, 3, 4, 5];<br>// first=1, second=2, rest=[3,4,5]<br><br>// Skipping elements<br>const [a, , c] = [1, 2, 3];<br><br>// Swapping<br>[x, y] = [y, x];<br><br>// With defaults<br>const [val = 10] = [];<br> |
| **Object Destructuring** | **Definition**: Extract object properties into variables<br><br>**When to Use**: Function parameters; extracting API data; imports<br><br>**Remarks**: Reduces boilerplate. Works with nested objects. Combine with default values. Commonly used in React props, API responses. | javascript<br>const user = {<br>  name: 'Alice',<br>  age: 30,<br>  city: 'NYC'<br>};<br>const { name, age, city = 'Unknown' } = user;<br><br>// Renaming<br>const { name: userName } = user;<br><br>// Nested<br>const { address: { street } } = person;<br><br>// Function params<br>function greet({ name, age }) {<br>  return `${name} is ${age}`;<br>}<br> |
| **Spread Operator** | **Definition**: Expands iterables or copies objects/arrays<br><br>**When to Use**: Copying, merging, passing array as arguments<br><br>**Remarks**: Creates shallow copy. Nested objects are still referenced. For deep copy, use `structuredClone()` or libraries. | javascript<br>const arr = [1, 2, 3];<br>const copy = [...arr];<br>const merged = [...arr1, ...arr2];<br><br>const obj = { name: 'Alice' };<br>const updated = {<br>  ...obj,<br>  age: 30,<br>  name: 'Bob' // overwrites<br>};<br><br>Math.max(...numbers);<br> |
| **Property Shorthand** | **Definition**: Concise syntax when key matches variable name<br><br>**When to Use**: Reducing boilerplate; cleaner object literals<br><br>**Remarks**: Reduces repetition. Very common in modern JS. Works with destructuring too. | javascript<br>const name = "Bob";<br>const age = 25;<br><br>// Old way<br>const person1 = {<br>  name: name,<br>  age: age<br>};<br><br>// ES6 shorthand<br>const person2 = { name, age };<br> |
| **Computed Property** | **Definition**: Dynamic property names using []<br><br>**When to Use**: Dynamic keys; creating objects programmatically<br><br>**Remarks**: Enables dynamic property names at creation time. Before ES6, had to create object first, then add property. | javascript<br>const propName = "score";<br>const game = {<br>  [propName]: 100,<br>  [`level_${2}`]: "hard",<br>  [Symbol('id')]: 123<br>};<br><br>// Dynamic object creation<br>const key = getUserInput();<br>const obj = { [key]: value };<br> |

---

Perfect — here's your **🧱 OBJECTS & ARRAYS** section, reformatted in the same clean markdown style you've used for **VARIABLES & DATA TYPES** and **FUNCTIONS**.

You can paste this directly into your `.md` file. ✅

---

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

Let me know if you’d like a bonus section on **Maps/Sets**, **JSON methods**, or deep vs shallow copies!

Certainly! Here's your **OOP & CLASSES** section reformatted to match the style of the **🧩 FUNCTIONS** section:

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

Would you like all three sections (**Operators**, **Scope & Context**, and **Array Methods**) combined into one Markdown or PDF file?

Absolutely! Here's your **ERROR HANDLING** section rewritten and formatted in the same clean, professional style as the previous sections:

---

# ⚠️ **ERROR HANDLING**

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

## **ES6+ FEATURES QUICK REFERENCE**

| Feature | Definition & Usage | Example |
|---------|-------------------|---------|
| **let/const** | **Definition**: Block-scoped variables<br><br>**When to Use**: Always (replace var)<br><br>**Remarks**: Use `const` by default, `let` when reassignment needed. Never use `var`. Default choice. | javascript<br>const MAX = 100; // won't change<br>let count = 0; // will change<br><br>if (true) {<br>  let blockScoped = 'local';<br>  const alsoBlock = 'local';<br>}<br>// console.log(blockScoped); // Error<br> |
| **Arrow Functions** | **Definition**: Concise function syntax<br><br>**When to Use**: Callbacks, short functions, lexical this<br><br>**Remarks**: Inherits `this` from parent. No `arguments` object. Can't be constructor. Lexical this. | javascript<br>// One parameter<br>const double = x => x * 2;<br><br>// Multiple parameters<br>const add = (a, b) => a + b;<br><br>// Block body<br>const complex = (x) => {<br>  const result = x * 2;<br>  return result + 1;<br>};<br><br>// Returning object (wrap in parens)<br>const makeUser = name => ({<br>  name,<br>  active: true<br>});<br> |
| **Spread/Rest** | **Definition**: Expand/collect elements<br><br>**When to Use**: Copying, merging, function args<br><br>**Remarks**: Context determines meaning. Rest must be last parameter. Shallow copy only. Versatile. | javascript<br>// Spread in arrays<br>const merged = [...arr1, ...arr2];<br>const copy = [...original];<br><br>// Spread in objects<br>const updated = { ...user, age: 31 };<br><br>// Rest in functions<br>function sum(...numbers) {<br>  return numbers.reduce((a, b) => a + b, 0);<br>}<br><br>// Rest in destructuring<br>const [first, ...rest] = [1, 2, 3, 4];<br>const { name, ...otherProps } = user;<br> |
| **Map/Set** | **Definition**: Better data structures<br><br>**When to Use**: Unique values, key-value with any key type<br><br>**Remarks**: Map preserves key order, allows any key type. Set ensures uniqueness. Both iterable. Better than objects. | javascript<br>// Set - unique values<br>const unique = new Set([1, 2, 2, 3]);<br>// {1, 2, 3}<br>unique.add(4);<br>unique.has(2); // true<br>unique.size; // 4<br><br>// Map - any key type<br>const map = new Map();<br>map.set('name', 'Alice');<br>map.set(obj, 'value'); // object as key!<br>map.get('name'); // 'Alice'<br>map.size; // 2<br><br>// Iteration<br>for (const [key, value] of map) {<br>  console.log(key, value);<br>}<br> |
| **for...of** | **Definition**: Iterate over values<br><br>**When to Use**: Arrays, strings, iterables<br><br>**Remarks**: Cleaner than `for` loop. Gets values, not indices. Works with any iterable. Use `for...in` for object keys (but prefer `Object.keys()`). Modern iteration. | javascript<br>// Array<br>for (const item of [1, 2, 3]) {<br>  console.log(item); // 1, 2, 3<br>}<br><br>// String<br>for (const char of 'hello') {<br>  console.log(char); // h, e, l, l, o<br>}<br><br>// Map<br>for (const [key, value] of map) {<br>  console.log(key, value);<br>}<br><br>// Can use break/continue<br>for (const item of items) {<br>  if (item > 10) break;<br>  console.log(item);<br>}<br> |

---

## **DEBUGGING & TESTING**

| Tool/Method | Definition & Usage | Example |
|-------------|-------------------|---------|
| **console.log()** | **Definition**: Print values to console<br><br>**When to Use**: Basic debugging, checking values<br><br>**Remarks**: Simple but effective. Use object shorthand for multiple variables. Remove before production. Most common. | javascript<br>console.log('value:', x);<br><br>// Multiple values<br>console.log('User:', user, 'Count:', count);<br><br>// Object shorthand<br>console.log({ user, posts, comments });<br><br>// Styled output<br>console.log('%c Important!',<br>  'color: red; font-size: 20px');<br> |
| **console.table()** | **Definition**: Display arrays/objects as table<br><br>**When to Use**: Viewing structured data<br><br>**Remarks**: Great for arrays of objects. Shows in tabular format. More readable than log. Readable format. | javascript<br>const users = [<br>  { id: 1, name: 'Alice', age: 30 },<br>  { id: 2, name: 'Bob', age: 25 },<br>  { id: 3, name: 'Charlie', age: 35 }<br>];<br><br>console.table(users);<br><br>// Select columns<br>console.table(users, ['name', 'age']);<br> |
| **debugger** | **Definition**: Pause execution for debugging<br><br>**When to Use**: Complex debugging, inspecting state<br><br>**Remarks**: Pauses execution in DevTools. Inspect variables, step through code. Remember to remove before production. Powerful. | javascript<br>function calculate(x, y) {<br>  debugger; // Execution pauses here<br>  const result = x * y;<br>  return result + 10;<br>}<br><br>// Conditional debugging<br>if (user.role === 'admin') {<br>  debugger;<br>}<br> |
| **console.assert()** | **Definition**: Log if assertion fails<br><br>**When to Use**: Validation, testing assumptions<br><br>**Remarks**: Only logs if assertion fails. Doesn't stop execution. Good for development checks. Quick checks. | javascript<br>console.assert(x > 0, 'x must be positive');<br>console.assert(<br>  Array.isArray(data),<br>  'data must be array'<br>);<br><br>function divide(a, b) {<br>  console.assert(b !== 0, 'Division by zero!');<br>  return a / b;<br>}<br> |
| **console.trace()** | **Definition**: Show stack trace<br><br>**When to Use**: Tracking function calls<br><br>**Remarks**: Shows function call chain. Useful for understanding code flow. Helps find where function is called from. Call stack. | javascript<br>function a() {<br>  b();<br>}<br><br>function b() {<br>  c();<br>}<br><br>function c() {<br>  console.trace('How did we get here?');<br>}<br><br>a(); // Shows: c -> b -> a<br> |
| **Performance Measurement** | **Definition**: Measure execution time<br><br>**When to Use**: Optimization, finding bottlenecks<br><br>**Remarks**: Identifies slow operations. Use `performance.now()` for precise timing. Browser DevTools have advanced profilers. Performance profiling. | javascript<br>// console.time/timeEnd<br>console.time('myOperation');<br>expensiveOperation();<br>console.timeEnd('myOperation');<br>// myOperation: 234ms<br><br>// performance.now()<br>const start = performance.now();<br>doSomething();<br>const end = performance.now();<br>console.log(`Took ${end - start}ms`);<br><br>// Multiple measurements<br>console.time('fetch');<br>await fetchData();<br>console.timeEnd('fetch');<br><br>console.time('process');<br>processData();<br>console.timeEnd('process');<br> |

---

## **COMMON GOTCHAS & PITFALLS**

| Issue | Why It Happens & Solution | Example |
|-------|---------------------------|---------|
| **Type Coercion** | **Why**: `==` performs type conversion<br><br>**Solution**: Always use `===` | javascript<br>// Bad<br>0 == false; // true<br>"" == false; // true<br><br>// Good<br>0 === false; // false<br>"" === false; // false<br> |
| **`this` binding** | **Why**: `this` depends on how function is called<br><br>**Solution**: Use arrow functions or `.bind()` | javascript<br>// Problem<br>const obj = {<br>  name: 'Test',<br>  greet: function() {<br>    setTimeout(function() {<br>      console.log(this.name); // undefined<br>    }, 100);<br>  }<br>};<br><br>// Solution 1: Arrow function<br>greet: function() {<br>  setTimeout(() => {<br>    console.log(this.name); // works!<br>  }, 100);<br>}<br><br>// Solution 2: bind<br>setTimeout(function() {<br>  console.log(this.name);<br>}.bind(this), 100);<br> |
| **Array/Object Mutation** | **Why**: References, not copies<br><br>**Solution**: Use spread or proper copy methods | javascript<br>// Problem<br>const original = [1, 2, 3];<br>const copy = original;<br>copy.push(4);<br>console.log(original);<br>// [1, 2, 3, 4] - mutated!<br><br>// Solution<br>const copy = [...original]; // shallow<br>const deepCopy = structuredClone(original);<br> |
| **Floating Point** | **Why**: Binary representation imprecision<br><br>**Solution**: Use toFixed() or libraries | javascript<br>// Problem<br>0.1 + 0.2; // 0.30000000000000004<br><br>// Solution<br>(0.1 + 0.2).toFixed(2); // "0.30"<br>Math.round((0.1 + 0.2) * 100) / 100; // 0.3<br> |
| **Async/Await Errors** | **Why**: Forgot try/catch or await<br><br>**Solution**: Always handle errors | javascript<br>// Problem<br>async function getData() {<br>  const data = await fetch('/api');<br>  // unhandled rejection<br>}<br><br>// Solution<br>async function getData() {<br>  try {<br>    const data = await fetch('/api');<br>    return data;<br>  } catch (error) {<br>    console.error('Failed:', error);<br>    throw error;<br>  }<br>}<br> |

---

## **PERFORMANCE OPTIMIZATION**

| Technique | Definition & Usage | Example |
|-----------|-------------------|---------|
| **Lazy Loading** | **Definition**: Load resources on demand<br><br>**When to Use**: Images, modules, routes, large data<br><br>**Remarks**: Improves initial load. Load only what's needed. Reduces bundle size. Common in SPAs. Browser native for images. | javascript<br>// Dynamic import<br>const module = await import('./heavy-module.js');<br><br>// React lazy<br>const LazyComponent = React.lazy(() => {<br>  return import('./Component.js');<br>});<br><br>// Image lazy loading<br><img loading="lazy" src="image.jpg" /><br> |
| **Web Workers** | **Definition**: Run scripts in background thread<br><br>**When to Use**: Heavy computations, data processing<br><br>**Remarks**: Doesn't block UI. No DOM access. Use for CPU-intensive tasks. Overhead in data transfer. Parallel processing. | javascript<br>// main.js<br>const worker = new Worker('worker.js');<br><br>worker.postMessage({ data: largeArray });<br><br>worker.onmessage = (e) => {<br>  console.log('Result:', e.data);<br>};<br><br>// worker.js<br>self.onmessage = (e) => {<br>  const result = processData(e.data);<br>  self.postMessage(result);<br>};<br> |
| **requestAnimationFrame** | **Definition**: Schedule visual updates<br><br>**When to Use**: Animations, smooth scrolling<br><br>**Remarks**: Syncs with browser refresh. Pauses in inactive tabs. Better than setInterval for animations. 60 FPS. | javascript<br>function animate() {<br>  // Update animation state<br>  element.style.transform =<br>    `translateX(${x}px)`;<br>  x += 1;<br><br>  if (x < 500) {<br>    requestAnimationFrame(animate);<br>  }<br>}<br><br>requestAnimationFrame(animate);<br> |

---

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