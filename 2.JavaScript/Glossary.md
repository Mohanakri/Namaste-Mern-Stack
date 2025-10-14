# JavaScript Glossary - Enhanced Reference Guide
* Here alternative is old syntax
---

## **VARIABLES & DATA TYPES**

| Term | Definition | When to Use | Example | Alternative Syntax |
|------|------------|-------------|---------|-------------------|
| **var** | Function-scoped variable declaration (legacy, can be redeclared) | Avoid in modern code; only for legacy browser support | var age = 25;<br>var age = 30; // allowed | Use `let` or `const` instead |
| **let** | Block-scoped variable declaration (ES6+, cannot be redeclared) | When variable value will change | let count = 0;<br>count = 1; // allowed<br>let count = 2; // error | N/A |
| **const** | Block-scoped constant (cannot be reassigned) | Default choice for all variables; when value won't change | const API_KEY = 'abc123';<br>API_KEY = 'xyz'; // error | N/A |
| **String** | Textual data enclosed in quotes | For text, messages, names, IDs | const greeting = "Hello World";<br>const name = 'Alice';<br>const msg = \`Hi ${name}\`; | Double quotes: "text"<br>Single quotes: 'text'<br>Template literals: \`text ${var}\` |
| **Number** | Numeric data (integers, decimals, scientific notation) | For calculations, counters, measurements | const age = 30;<br>const price = 19.99;<br>const scientific = 5e3; // 5000 | Integer: 42<br>Float: 3.14<br>Scientific: 1e6<br>Hex: 0xFF<br>Binary: 0b1010 |
| **Boolean** | Logical true/false values | For conditions, flags, toggles | const isActive = true;<br>const hasAccess = false;<br>const isValid = 5 > 3; // true | N/A |
| **Undefined** | Variable declared but not assigned a value | Default state; checking if property exists | let user;<br>console.log(user); // undefined<br>console.log(obj.missing); // undefined | N/A |
| **Null** | Intentional absence of value (programmer-assigned) | Explicitly clearing values; API responses | let selectedItem = null;<br>const response = data ?? null; | N/A |
| **Symbol** | Unique, immutable identifier (useful for object keys) | Creating unique property keys; avoiding collisions | const id = Symbol('userId');<br>const obj = { [id]: 12345 }; | N/A |
| **BigInt** | Arbitrarily large integers beyond Number.MAX_SAFE_INTEGER | Large numbers, cryptography, precise calculations | const huge = 9007199254740991n;<br>const big = BigInt(123456789); | With 'n' suffix: 123n<br>Constructor: BigInt(123) |

---

## **FUNCTIONS**

| Term | Definition | When to Use | Example | Alternative Syntax |
|------|------------|-------------|---------|-------------------|
| **Function Declaration** | Named function hoisted to top of scope | When you need hoisting; top-level utility functions | function calculateTotal(price, tax) {<br>&nbsp;&nbsp;return price + (price * tax);<br>}<br>calculateTotal(100, 0.08); // 108 | N/A |
| **Function Expression** | Function assigned to variable (not hoisted) | When function is conditional; creating closures | const multiply = function(a, b) {<br>&nbsp;&nbsp;return a * b;<br>};<br>multiply(5, 3); // 15 | Named: const fn = function name() {}<br>Anonymous: const fn = function() {} |
| **Arrow Function** | Concise syntax, lexical this binding | Callbacks, array methods, when you don't need 'this' binding | const square = x => x * x;<br>const add = (a, b) => a + b;<br>const greet = name => \`Hello ${name}\`; | One param: x => x * 2<br>Multiple: (a,b) => a + b<br>Block: (x) => { return x }<br>Object return: x => ({key: x}) |
| **IIFE** | Immediately Invoked Function Expression | Creating private scope; initialization code | (function() {<br>&nbsp;&nbsp;const privateVar = "secret";<br>&nbsp;&nbsp;console.log("I run immediately!");<br>})(); | With parens: (function(){})()<br>Arrow: (() => {})()<br>Unary: !function(){}() |
| **Callback** | Function passed as argument to be executed later | Event handlers, async operations, array methods | [1, 2, 3].forEach(num => {<br>&nbsp;&nbsp;console.log(num * 2);<br>});<br>setTimeout(() => console.log("Done"), 1000); | Named: function cb() {}<br>Anonymous: function() {}<br>Arrow: () => {}<br>Method: obj.method |
| **Higher-Order Function** | Function that accepts/returns functions | Creating utilities, decorators, function composition | function withLogging(fn) {<br>&nbsp;&nbsp;return function(...args) {<br>&nbsp;&nbsp;&nbsp;&nbsp;console.log('Calling:', fn.name);<br>&nbsp;&nbsp;&nbsp;&nbsp;return fn(...args);<br>&nbsp;&nbsp;};<br>} | Arrow HOF: fn => (...args) => fn(...args) |
| **Closure** | Function retains access to outer scope after outer function returns | Data privacy, creating factories, memoization | function counter() {<br>&nbsp;&nbsp;let count = 0;<br>&nbsp;&nbsp;return () => ++count;<br>}<br>const inc = counter();<br>inc(); // 1<br>inc(); // 2 | N/A |
| **Rest Parameters** | Collects indefinite arguments into array | Unknown number of arguments; replacing 'arguments' object | function sum(...numbers) {<br>&nbsp;&nbsp;return numbers.reduce((a, b) => a + b, 0);<br>}<br>sum(1, 2, 3, 4); // 10 | N/A |
| **Default Parameters** | Provides fallback values for missing arguments | Optional parameters; avoiding undefined checks | function greet(name = "Guest", time = "day") {<br>&nbsp;&nbsp;return \`Good ${time}, ${name}!\`;<br>}<br>greet(); // "Good day, Guest!" | Old way: name = name \|\| "Guest" |

---

## **OBJECTS & ARRAYS**

| Term | Definition | When to Use | Example | Alternative Syntax |
|------|------------|-------------|---------|-------------------|
| **Object** | Collection of key-value pairs representing entities | Storing related data; modeling real-world entities | const user = {<br>&nbsp;&nbsp;name: "Alice",<br>&nbsp;&nbsp;age: 30,<br>&nbsp;&nbsp;email: "alice@example.com"<br>}; | Literal: {key: val}<br>Constructor: new Object()<br>Object.create(proto) |
| **Array** | Ordered list of values accessed by numeric index | Lists, collections, ordered data | const colors = ["red", "green", "blue"];<br>colors[0]; // "red"<br>colors.length; // 3 | Literal: [1,2,3]<br>Constructor: new Array(1,2,3)<br>Array.of(1,2,3)<br>Array.from('abc') |
| **Object Literal** | Direct object creation using {} notation | Quick object creation; configuration objects | const book = {<br>&nbsp;&nbsp;title: "1984",<br>&nbsp;&nbsp;author: "Orwell",<br>&nbsp;&nbsp;year: 1949<br>}; | N/A |
| **Array Destructuring** | Extract array values into separate variables | Unpacking values; swapping variables; function returns | const [first, second, ...rest] = [1, 2, 3, 4, 5];<br>// first=1, second=2, rest=[3,4,5] | Skipping: [a, , c] = arr<br>Default: [a = 10] = arr<br>Swap: [x, y] = [y, x] |
| **Object Destructuring** | Extract object properties into variables | Function parameters; extracting API data; imports | const {name, age, city = "NYC"} = user;<br>const {name: userName} = user; // rename | Nested: {a: {b}} = obj<br>Rename: {old: new} = obj<br>Default: {a = 5} = obj |
| **Spread Operator** | Expands iterables or copies objects/arrays | Copying, merging, passing array as arguments | const arr = [1, 2, 3];<br>const copy = [...arr];<br>const merged = [...arr1, ...arr2];<br>const newObj = {...oldObj, updated: true}; | Array: [...arr]<br>Object: {...obj}<br>Function args: fn(...arr) |
| **Property Shorthand** | Concise syntax when key matches variable name | Reducing boilerplate; cleaner object literals | const name = "Bob", age = 25;<br>const person = {name, age};<br>// same as {name: name, age: age} | N/A |
| **Computed Property** | Dynamic property names using [] | Dynamic keys; creating objects programmatically | const propName = "score";<br>const game = {<br>&nbsp;&nbsp;[propName]: 100,<br>&nbsp;&nbsp;[\`level_${2}\`]: "hard"<br>}; | obj[key] = value (after creation)<br>[expression]: value (during creation) |

---

## **ASYNCHRONOUS PROGRAMMING**

| Term | Definition | When to Use | Example | Alternative Syntax |
|------|------------|-------------|---------|-------------------|
| **Promise** | Object representing eventual success/failure of async operation | HTTP requests, file operations, any async task | const fetchData = new Promise((resolve, reject) => {<br>&nbsp;&nbsp;setTimeout(() => resolve("Data!"), 1000);<br>});<br>fetchData.then(data => console.log(data)); | Constructor: new Promise()<br>Promise.resolve(val)<br>Promise.reject(err) |
| **async/await** | Syntactic sugar making promises look synchronous | Making async code readable; when using promises | async function getUser() {<br>&nbsp;&nbsp;const response = await fetch('/api/user');<br>&nbsp;&nbsp;const data = await response.json();<br>&nbsp;&nbsp;return data;<br>} | .then() chaining:<br>fetch().then(r => r.json()).then(data => {}) |
| **setTimeout** | Executes code once after specified delay (ms) | Delays, debouncing, temporary UI states | setTimeout(() => {<br>&nbsp;&nbsp;console.log("Runs after 2 seconds");<br>}, 2000); | Arrow: setTimeout(() => {}, ms)<br>Function ref: setTimeout(fn, ms)<br>With args: setTimeout(fn, ms, arg1, arg2) |
| **setInterval** | Executes code repeatedly at fixed intervals | Polling, animations, timers, auto-refresh | const timer = setInterval(() => {<br>&nbsp;&nbsp;console.log("Every second");<br>}, 1000);<br>clearInterval(timer); // stop | N/A |
| **Callback Hell** | Deeply nested callbacks causing readability issues | Anti-pattern to avoid; refactor to promises/async-await | getData(function(a) {<br>&nbsp;&nbsp;getMoreData(a, function(b) {<br>&nbsp;&nbsp;&nbsp;&nbsp;getEvenMore(b, function(c) {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// pyramid of doom<br>&nbsp;&nbsp;&nbsp;&nbsp;});<br>&nbsp;&nbsp;});<br>}); | Solutions: Promises, async/await, named functions |
| **Promise.all** | Waits for all promises to resolve (fails if any reject) | Parallel requests, loading multiple resources | const [users, posts, comments] = await Promise.all([<br>&nbsp;&nbsp;fetchUsers(),<br>&nbsp;&nbsp;fetchPosts(),<br>&nbsp;&nbsp;fetchComments()<br>]); | N/A |
| **Promise.race** | Resolves/rejects with first promise to settle | Timeouts, racing servers, cancellation | const result = await Promise.race([<br>&nbsp;&nbsp;fetch('/fast-api'),<br>&nbsp;&nbsp;fetch('/slow-api')<br>]); // returns fastest | Promise.any() - first fulfilled (ignores rejections) |
| **Event Loop** | JS runtime mechanism handling async code execution | Understanding async behavior; debugging timing issues | console.log('1');<br>setTimeout(() => console.log('2'), 0);<br>Promise.resolve().then(() => console.log('3'));<br>console.log('4'); // Output: 1,4,3,2 | N/A |

---

## **OOP & CLASSES**

| Term | Definition | When to Use | Example | Alternative Syntax |
|------|------------|-------------|---------|-------------------|
| **Class** | Blueprint for creating objects with shared properties/methods | Creating multiple similar objects; modeling entities | class Car {<br>&nbsp;&nbsp;constructor(brand) {<br>&nbsp;&nbsp;&nbsp;&nbsp;this.brand = brand;<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;drive() { return \`${this.brand} is driving\`; }<br>} | Function constructor:<br>function Car(brand) {<br>&nbsp;&nbsp;this.brand = brand;<br>} |
| **Constructor** | Special method called when creating new instance | Initializing instance properties; setup logic | class User {<br>&nbsp;&nbsp;constructor(name, email) {<br>&nbsp;&nbsp;&nbsp;&nbsp;this.name = name;<br>&nbsp;&nbsp;&nbsp;&nbsp;this.email = email;<br>&nbsp;&nbsp;}<br>}<br>const user = new User("Alice", "a@b.com"); | N/A |
| **this** | Refers to current object instance context | Accessing instance properties/methods | const obj = {<br>&nbsp;&nbsp;name: "Test",<br>&nbsp;&nbsp;greet() {<br>&nbsp;&nbsp;&nbsp;&nbsp;return \`Hello, I'm ${this.name}\`;<br>&nbsp;&nbsp;}<br>}; | Arrow functions inherit 'this'<br>Regular functions have their own 'this' |
| **Inheritance** | Class derives properties/methods from parent class | Code reuse; creating hierarchies; specialization | class Animal {<br>&nbsp;&nbsp;eat() { return "eating"; }<br>}<br>class Dog extends Animal {<br>&nbsp;&nbsp;bark() { return "woof"; }<br>} | Prototypal:<br>Dog.prototype = Object.create(Animal.prototype) |
| **super** | Calls parent class constructor or methods | Extending parent behavior; accessing parent methods | class Employee extends Person {<br>&nbsp;&nbsp;constructor(name, role) {<br>&nbsp;&nbsp;&nbsp;&nbsp;super(name); // call parent constructor<br>&nbsp;&nbsp;&nbsp;&nbsp;this.role = role;<br>&nbsp;&nbsp;}<br>} | N/A |
| **Prototype** | Object template from which other objects inherit | Understanding inheritance; adding methods to built-ins | Array.prototype.last = function() {<br>&nbsp;&nbsp;return this[this.length - 1];<br>};<br>[1,2,3].last(); // 3 | Object.create(proto)<br>Object.setPrototypeOf(obj, proto) |
| **Static Method** | Method belonging to class itself, not instances | Utility functions; factory methods; constants | class MathUtil {<br>&nbsp;&nbsp;static add(a, b) { return a + b; }<br>}<br>MathUtil.add(5, 3); // 8 (no instance needed) | Attach to constructor:<br>MathUtil.add = function() {} |
| **Getter/Setter** | Computed properties with get/set access control | Computed values; validation; encapsulation | class Circle {<br>&nbsp;&nbsp;constructor(radius) { this._radius = radius; }<br>&nbsp;&nbsp;get diameter() { return this._radius * 2; }<br>&nbsp;&nbsp;set diameter(d) { this._radius = d / 2; }<br>} | Object.defineProperty():<br>Object.defineProperty(obj, 'prop', {<br>&nbsp;&nbsp;get() {}, set(v) {}<br>}) |

---

## **OPERATORS**

| Term | Definition | When to Use | Example | Alternative Syntax |
|------|------------|-------------|---------|-------------------|
| **Strict Equality (===)** | Compares value AND type (no coercion) | Always prefer over ==; comparing values safely | 5 === 5; // true<br>5 === "5"; // false<br>null === undefined; // false | Object.is(a, b) - even stricter |
| **Loose Equality (==)** | Compares values with type coercion | Avoid; only when you explicitly want coercion | 5 == "5"; // true<br>null == undefined; // true<br>0 == false; // true | N/A |
| **Ternary Operator** | Inline conditional expression (if-else shorthand) | Simple conditionals; inline assignments | const status = age >= 18 ? "adult" : "minor";<br>const color = isActive ? "green" : "red"; | if-else statement:<br>let status;<br>if (age >= 18) status = "adult";<br>else status = "minor"; |
| **Nullish Coalescing (??)** | Returns right side only if left is null/undefined | Default values; avoiding falsy value issues with \|\| | const name = userName ?? "Anonymous";<br>const count = 0 ?? 10; // 0 (not nullish)<br>const val = null ?? "default"; // "default" | Logical OR (\|\|) - but treats 0, "", false as nullish |
| **Optional Chaining (?.)** | Safely access nested properties without errors | Accessing deep properties; avoiding null checks | const city = user?.address?.city;<br>const result = obj?.method?.();<br>const item = arr?.[0]; | && checks:<br>const city = user && user.address && user.address.city |
| **Logical AND (&&)** | Returns first falsy value or last value | Short-circuit evaluation; conditional execution | const result = true && "yes"; // "yes"<br>const check = null && "never"; // null<br>isLoggedIn && redirect(); | if (isLoggedIn) redirect(); |
| **Logical OR (\|\|)** | Returns first truthy value or last value | Default values (but watch for 0, "") | const name = userName \|\| "Guest";<br>const value = 0 \|\| 100; // 100<br>const final = "" \|\| null \|\| "default"; | ?? (nullish coalescing) - better for 0 and "" |
| **typeof** | Returns string indicating operand type | Type checking; validation | typeof 42; // "number"<br>typeof "hello"; // "string"<br>typeof undefined; // "undefined"<br>typeof null; // "object" (quirk) | instanceof for objects<br>Array.isArray() for arrays |
| **instanceof** | Tests if object is instance of constructor | Checking object types; inheritance chains | [] instanceof Array; // true<br>({}) instanceof Object; // true<br>"text" instanceof String; // false | constructor property:<br>arr.constructor === Array |

---

## **SCOPE & CONTEXT**

| Term | Definition | When to Use | Example | Alternative Syntax |
|------|------------|-------------|---------|-------------------|
| **Global Scope** | Variables accessible from anywhere in code | Avoid when possible; only for truly global data | var globalVar = "accessible everywhere";<br>function test() {<br>&nbsp;&nbsp;console.log(globalVar); // works<br>} | window.globalVar (browser)<br>global.globalVar (Node) |
| **Function Scope** | Variables only accessible within function | Encapsulation; private variables | function myFunc() {<br>&nbsp;&nbsp;var local = "only here";<br>}<br>console.log(local); // ReferenceError | N/A |
| **Block Scope** | Variables limited to {} block (let/const only) | Modern default; loop variables; conditionals | if (true) {<br>&nbsp;&nbsp;let blockVar = "inside";<br>}<br>console.log(blockVar); // ReferenceError | IIFE for older browsers:<br>(function() { var x = 1; })() |
| **Lexical Scope** | Inner functions access outer function variables | Understanding closures; variable resolution | function outer() {<br>&nbsp;&nbsp;const x = 10;<br>&nbsp;&nbsp;function inner() {<br>&nbsp;&nbsp;&nbsp;&nbsp;console.log(x); // 10 (lexical access)<br>&nbsp;&nbsp;}<br>} | N/A |
| **Hoisting** | Variable/function declarations moved to top | Understanding var behavior; interview questions | console.log(x); // undefined (not error)<br>var x = 5;<br>sayHi(); // works!<br>function sayHi() { console.log("Hi"); } | N/A |
| **TDZ** | Temporal Dead Zone - time before let/const initialization | Understanding let/const; avoiding hoisting bugs | console.log(x); // ReferenceError<br>let x = 5; // TDZ ends here<br>const y = 10; // also has TDZ | N/A |
| **call()** | Invokes function with specific this and arguments | Borrowing methods; explicit context setting | function greet(greeting) {<br>&nbsp;&nbsp;return \`${greeting}, ${this.name}\`;<br>}<br>greet.call({name: "Alice"}, "Hello");<br>// "Hello, Alice" | apply() - array args<br>bind() - returns new function |
| **apply()** | Like call() but arguments as array | When args are in array; Math.max with arrays | function sum(a, b, c) { return a + b + c; }<br>sum.apply(null, [1, 2, 3]); // 6 | Spread: sum(...[1,2,3])<br>call: sum.call(null, 1, 2, 3) |
| **bind()** | Creates new function with bound this context | Event handlers; React class methods; partial application | const obj = {name: "Bob"};<br>function greet() { return this.name; }<br>const boundGreet = greet.bind(obj);<br>boundGreet(); // "Bob" | Arrow function:<br>const boundGreet = () => greet.call(obj) |

---

## **ARRAY METHODS**

| Term | Definition | When to Use | Example | Alternative Syntax |
|------|------------|-------------|---------|-------------------|
| **map()** | Transforms each element, returns new array | Transforming data; rendering lists in UI | const nums = [1, 2, 3];<br>const doubled = nums.map(n => n * 2);<br>// [2, 4, 6] | for loop:<br>const doubled = [];<br>for (let n of nums) doubled.push(n * 2); |
| **filter()** | Creates new array with elements passing test | Removing items; searching; conditional display | const nums = [1, 2, 3, 4, 5, 6];<br>const evens = nums.filter(n => n % 2 === 0);<br>// [2, 4, 6] | for loop with if |
| **reduce()** | Reduces array to single value via accumulator | Summing, grouping, transforming to object | const nums = [1, 2, 3, 4];<br>const sum = nums.reduce((acc, n) => acc + n, 0);<br>// 10 | for loop with accumulator |
| **forEach()** | Executes function for each element (no return) | Side effects only; when you don't need return value | const names = ["Alice", "Bob", "Charlie"];<br>names.forEach((name, i) => {<br>&nbsp;&nbsp;console.log(\`${i}: ${name}\`);<br>}); | for...of loop:<br>for (const name of names) {}<br>for loop:<br>for (let i = 0; i < names.length; i++) {} |
| **find()** | Returns first element matching condition | Finding single item; search functionality | const users = [{id:1}, {id:2}, {id:3}];<br>const user = users.find(u => u.id === 2);<br>// {id: 2} | filter()[0] - but less efficient<br>for loop with break |
| **some()** | Tests if at least one element passes test | Validation; checking conditions | const nums = [1, 3, 5, 8];<br>const hasEven = nums.some(n => n % 2 === 0);<br>// true | for loop with return true |
| **every()** | Tests if all elements pass test | Validation; ensuring all items meet criteria | const nums = [2, 4, 6];<br>const allEven = nums.every(n => n % 2 === 0);<br>// true | for loop with return false |
| **slice()** | Extracts section of array (doesn't modify original) | Copying arrays; getting subset; pagination | const arr = [0, 1, 2, 3, 4];<br>const part = arr.slice(1, 4);<br>// [1, 2, 3] | Spread for copy: [...arr]<br>Array.from() for copy |
| **splice()** | Adds/removes elements (modifies original) | Inserting, removing, replacing items in place | const arr = [1, 2, 3, 4];<br>arr.splice(2, 1, 'a', 'b');<br>// arr is now [1, 2, 'a', 'b', 4] | delete arr[i] - leaves undefined<br>arr.length = n - truncate |

---

## **ERROR HANDLING**

| Term | Definition | When to Use | Example | Alternative Syntax |
|------|------------|-------------|---------|-------------------|
| **try/catch** | Catches and handles runtime errors | Parsing JSON, API calls, risky operations | try {<br>&nbsp;&nbsp;const data = JSON.parse(invalidJSON);<br>} catch (error) {<br>&nbsp;&nbsp;console.log("Parse error:", error.message);<br>} | Promise .catch():<br>promise.catch(err => {}) |
| **throw** | Manually throws custom error | Validation, enforcing contracts, custom errors | function divide(a, b) {<br>&nbsp;&nbsp;if (b === 0) throw new Error("Division by zero");<br>&nbsp;&nbsp;return a / b;<br>} | throw "string" (not recommended)<br>throw {custom: "object"}<br>throw new CustomError() |
| **finally** | Always executes after try/catch (cleanup) | Closing connections, hiding loaders, cleanup | try {<br>&nbsp;&nbsp;fetchData();<br>} catch (e) {<br>&nbsp;&nbsp;handleError(e);<br>} finally {<br>&nbsp;&nbsp;hideLoadingSpinner(); // always runs<br>} | Promise .finally():<br>promise.finally(() => {}) |
| **Error Object** | Built-in constructor for error instances | Creating meaningful errors; stack traces | const err = new Error("Something failed");<br>err.name; // "Error"<br>err.message; // "Something failed"<br>err.stack; // stack trace | TypeError, ReferenceError, SyntaxError<br>Custom: class MyError extends Error {} |

---

## **MODULES**

| Term | Definition | When to Use | Example | Alternative Syntax |
|------|------------|-------------|---------|-------------------|
| **import** | Imports exported values from other modules | Organizing code; reusing functions; dependencies | import {add, subtract} from './math.js';<br>import * as utils from './utils.js';<br>import React from 'react'; | Dynamic: import('./mod.js').then()<br>CommonJS: const mod = require('./mod') |
| **export** | Makes values available to other modules | Sharing code between files; building libraries | export const PI = 3.14;<br>export function calculate() { }<br>export {func1, func2}; | CommonJS: module.exports = {}<br>CommonJS: exports.func = () => {} |
| **default export** | Single main export per module | Main class/function from module; React components | // math.js<br>export default function add(a, b) {<br>&nbsp;&nbsp;return a + b;<br>}<br>// app.js<br>import add from './math.js'; | export default class {}<br>export default 42<br>export {add as default} |
| **named export** | Multiple exports from same module | Utilities, helper functions, constants | // utils.js<br>export const format = () => {};<br>export const validate = () => {};<br>// app.js<br>import {format, validate} from './utils.js'; | Re-export: export {a, b} from './mod'<br>Export all: export * from './mod' |

---

## **ADVANCED CONCEPTS**

| Term | Definition | When to Use | Example | Alternative Syntax |
|------|------------|-------------|---------|-------------------|
| **Currying** | Transform function to take args one at a time | Partial application, function composition, reusability | const add = a => b => a + b;<br>const add5 = add(5);<br>add5(3); // 8 | Manual: function add(a) { return function(b) { return a + b; }} |
| **Memoization** | Cache function results for performance | Expensive calculations, recursive functions, optimization | const memoize = (fn) => {<br>&nbsp;&nbsp;const cache = {};<br>&nbsp;&nbsp;return (...args) => {<br>&nbsp;&nbsp;&nbsp;&nbsp;const key = JSON.stringify(args);<br>&nbsp;&nbsp;&nbsp;&nbsp;return cache[key] ?? (cache[key] = fn(...args));<br>&nbsp;&nbsp;};<br>}; | Map-based: const cache = new Map()<br>WeakMap for objects |
| **Debouncing** | Delay function execution until pause | Search input, window resize, form validation | function debounce(fn, delay) {<br>&nbsp;&nbsp;let timer;<br>&nbsp;&nbsp;return (...args) => {<br>&nbsp;&nbsp;&nbsp;&nbsp;clearTimeout(timer);<br>&nbsp;&nbsp;&nbsp;&nbsp;timer = setTimeout(() => fn(...args), delay);<br>&nbsp;&nbsp;};<br>} | Lodash: _.debounce(fn, delay) |
| **Throttling** | Limit function execution rate | Scroll events, mousemove, rate limiting | function throttle(fn, limit) {<br>&nbsp;&nbsp;let inThrottle;<br>&nbsp;&nbsp;return (...args) => {<br>&nbsp;&nbsp;&nbsp;&nbsp;if (!inThrottle) {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fn(...args);<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;inThrottle = true;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;setTimeout(() => inThrottle = false, limit);<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;};<br>} | Lodash: _.throttle(fn, limit)<br>requestAnimationFrame for smoothness |
| **Generator** | Function that can pause and resume | Iterating sequences, async flow control, lazy evaluation | function* numberGen() {<br>&nbsp;&nbsp;yield 1;<br>&nbsp;&nbsp;yield 2;<br>&nbsp;&nbsp;yield 3;<br>}<br>const gen = numberGen();<br>gen.next().value; // 1 | async generator: async function* gen() {}<br>yield* for delegation |
| **Iterator** | Object defining sequence and return value | Custom iteration logic, making objects iterable | const iterable = {<br>&nbsp;&nbsp;[Symbol.iterator]() {<br>&nbsp;&nbsp;&nbsp;&nbsp;let i = 0;<br>&nbsp;&nbsp;&nbsp;&nbsp;return {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;next: () => ({ value: i++, done: i > 3 })<br>&nbsp;&nbsp;&nbsp;&nbsp;};<br>&nbsp;&nbsp;}<br>}; | Generator: function* gen() { yield* arr } |
| **Proxy** | Intercepts operations on objects | Validation, logging, reactive systems, data binding | const handler = {<br>&nbsp;&nbsp;get: (obj, prop) => prop in obj ? obj[prop] : 'N/A'<br>};<br>const proxy = new Proxy({name: 'Alice'}, handler);<br>proxy.age; // 'N/A' | Traps: get, set, has, deleteProperty, apply, construct |
| **Reflect** | Built-in object for interceptable operations | Inside Proxy handlers, safer property access | const obj = {name: 'Bob'};<br>Reflect.get(obj, 'name'); // 'Bob'<br>Reflect.set(obj, 'age', 30);<br>Reflect.has(obj, 'name'); // true | Direct access: obj.name<br>obj['name']<br>Bracket notation |

---

## **COMMON PATTERNS & BEST PRACTICES**

| Pattern | Definition | When to Use | Example | Alternative Syntax |
|---------|------------|-------------|---------|-------------------|
| **Method Chaining** | Return 'this' to allow consecutive method calls | Building fluent APIs, jQuery-style operations | class Calculator {<br>&nbsp;&nbsp;constructor() { this.value = 0; }<br>&nbsp;&nbsp;add(n) { this.value += n; return this; }<br>&nbsp;&nbsp;multiply(n) { this.value *= n; return this; }<br>}<br>new Calculator().add(5).multiply(2); // 10 | N/A |
| **Object.assign()** | Copy properties from sources to target | Shallow cloning, merging objects, default options | const defaults = {theme: 'light', size: 'md'};<br>const config = Object.assign({}, defaults, userSettings); | Spread: {...defaults, ...userSettings} |
| **Object.keys()** | Returns array of object's keys | Iterating object properties, validation | const user = {name: 'Alice', age: 30};<br>Object.keys(user); // ['name', 'age']<br>Object.keys(user).forEach(key => {<br>&nbsp;&nbsp;console.log(key, user[key]);<br>}); | Object.entries() for [key, val] pairs<br>for...in loop<br>Object.getOwnPropertyNames() |
| **Object.values()** | Returns array of object's values | Getting all values, summing object properties | const scores = {math: 90, sci: 85, eng: 88};<br>Object.values(scores); // [90, 85, 88]<br>const avg = Object.values(scores).reduce((a,b) => a+b) / 3; | Object.entries().map(([k,v]) => v) |
| **Object.entries()** | Returns array of [key, value] pairs | Converting to Map, iterating with both key and value | const user = {name: 'Bob', age: 25};<br>Object.entries(user); // [['name','Bob'], ['age',25]]<br>for (const [key, val] of Object.entries(user)) {<br>&nbsp;&nbsp;console.log(\`${key}: ${val}\`);<br>} | Object.keys().map(k => [k, obj[k]])<br>new Map(Object.entries(obj)) |
| **Array.from()** | Creates array from iterable or array-like | Converting NodeList, strings, Sets to arrays | Array.from('hello'); // ['h','e','l','l','o']<br>Array.from(new Set([1,2,2,3])); // [1,2,3]<br>Array.from({length: 3}, (v, i) => i * 2); // [0,2,4] | Spread: [...iterable]<br>slice: [].slice.call(arrayLike) |
| **Template Literals** | String interpolation with embedded expressions | Dynamic strings, multi-line text, HTML templates | const name = 'World';<br>const greeting = \`Hello, ${name}!<br>Welcome to JavaScript.\`;<br>const html = \`<div class="${className}">${content}</div>\`; | Concatenation: 'Hello, ' + name + '!'<br>Tagged templates: styled\`...\` |
| **Short-Circuit Evaluation** | Using && and \|\| for conditional logic | Default values, conditional execution, guards | const displayName = user.name \|\| 'Guest';<br>isLoggedIn && renderDashboard();<br>const result = data && data.user && data.user.email; | if statements<br>ternary operator<br>optional chaining: data?.user?.email |
| **Comma Operator** | Evaluates expressions, returns last | For loops, compact expressions (rare) | let x = (1, 2, 3); // x = 3<br>for (let i = 0, j = 10; i < j; i++, j--) {<br>&nbsp;&nbsp;console.log(i, j);<br>} | Separate statements |
| **Void Operator** | Evaluates expression, returns undefined | Preventing unwanted returns, bookmarklets | button.onclick = () => void doSomething();<br>void function() { console.log('IIFE'); }();<br>javascript:void(0); // href | return undefined;<br>function without return |

---

## **ES6+ FEATURES QUICK REFERENCE**

| Feature | Purpose | When to Use | Example | Alternative (Pre-ES6) |
|---------|---------|-------------|---------|----------------------|
| **let/const** | Block-scoped variables | Always (replace var) | let count = 0;<br>const MAX = 100; | var count = 0;<br>var MAX = 100; |
| **Arrow Functions** | Concise function syntax | Callbacks, short functions, lexical this | const double = x => x * 2;<br>[1,2,3].map(x => x * 2); | function double(x) { return x * 2; }<br>var self = this; |
| **Template Literals** | String interpolation | Dynamic strings, multi-line | \`Hello, ${name}!\` | 'Hello, ' + name + '!' |
| **Destructuring** | Extract values from arrays/objects | Function parameters, unpacking data | const {name, age} = user;<br>const [a, b] = [1, 2]; | var name = user.name;<br>var age = user.age; |
| **Spread/Rest** | Expand/collect elements | Copying, merging, function args | [...arr], {...obj}, ...args | arr.concat(), Object.assign(), arguments |
| **Default Parameters** | Function parameter defaults | Optional parameters | function greet(name = 'Guest') {} | name = name \|\| 'Guest'; |
| **Classes** | Object-oriented syntax | Creating reusable components | class User extends Person {} | function User() {}<br>User.prototype = new Person(); |
| **Promises** | Async operations | HTTP requests, file operations | fetch(url).then().catch() | Callbacks, libraries like Q |
| **async/await** | Synchronous-looking async code | Readable async code | await fetch(url) | promise.then().then() |
| **Modules** | Code organization | Splitting code into files | import/export | require(), AMD, global scope |
| **Map/Set** | Better data structures | Unique values, key-value with any key type | new Map(), new Set() | Objects, arrays with indexOf |
| **Symbol** | Unique identifiers | Unique property keys, well-known symbols | Symbol('id') | String keys only |
| **for...of** | Iterate over values | Arrays, strings, iterables | for (const item of arr) {} | for (let i = 0; i < arr.length; i++) |
| **Object Shorthand** | Concise object syntax | Reducing boilerplate | {name, age} | {name: name, age: age} |
| **Computed Properties** | Dynamic object keys | Creating objects programmatically | {[key]: value} | obj[key] = value; |

---

## **PERFORMANCE & OPTIMIZATION**

| Technique | Purpose | When to Use | Example | Notes |
|-----------|---------|-------------|---------|-------|
| **Memoization** | Cache expensive calculations | Recursive functions, repeated computations | See Advanced section | Trade memory for speed |
| **Debouncing** | Delay execution until activity stops | Search input, resize handlers | See Advanced section | Reduces function calls |
| **Throttling** | Limit execution frequency | Scroll, mousemove, rate limiting | See Advanced section | Ensures regular intervals |
| **Lazy Loading** | Load resources on demand | Images, modules, routes | import('./module.js').then();<br>const LazyComponent = lazy(() => import('./C')); | Improves initial load time |
| **Web Workers** | Run scripts in background thread | Heavy computations, data processing | const worker = new Worker('calc.js');<br>worker.postMessage(data); | Doesn't block UI |
| **requestAnimationFrame** | Schedule visual updates | Animations, smooth scrolling | function animate() {<br>&nbsp;&nbsp;// update<br>&nbsp;&nbsp;requestAnimationFrame(animate);<br>} | Syncs with browser refresh |

---

## **DEBUGGING & TESTING**

| Tool/Method | Purpose | When to Use | Example | Alternative |
|-------------|---------|-------------|---------|-------------|
| **console.log()** | Print values to console | Basic debugging, checking values | console.log('value:', x);<br>console.log({user, posts, comments}); | console.table(), console.dir() |
| **console.table()** | Display arrays/objects as table | Viewing structured data | console.table([{id:1, name:'A'}, {id:2, name:'B'}]); | console.log() |
| **debugger** | Pause execution for debugging | Complex debugging, inspecting state | function calculate() {<br>&nbsp;&nbsp;debugger;<br>&nbsp;&nbsp;return x * y;<br>} | Browser breakpoints |
| **console.assert()** | Log if assertion fails | Validation, testing assumptions | console.assert(x > 0, 'x must be positive'); | if (!x > 0) console.error() |
| **console.trace()** | Show stack trace | Tracking function calls | console.trace('How did we get here?'); | new Error().stack |
| **typeof & instanceof** | Type checking | Validation, defensive programming | if (typeof x === 'string') {}<br>if (arr instanceof Array) {} | Array.isArray(), Object.prototype.toString |
| **try/catch** | Error handling | Managing runtime errors | try { riskyCode(); } catch(e) { handle(e); } | Error checking before execution |

---

**Pro Tip**: Bookmark this enhanced guide for comprehensive JavaScript reference! 🚀

**Legend**:
- **When to Use**: Practical scenarios and best practices
- **Alternative Syntax**: Different ways to achieve the same result
- Choose syntax based on: readability, browser support, team conventions, and specific use case