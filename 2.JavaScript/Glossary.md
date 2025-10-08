# JavaScript Glossary - Complete Reference Guide

---

## **VARIABLES & DATA TYPES**

| Term | Definition | Example |
|------|------------|---------|
| **var** | Function-scoped variable declaration (legacy, can be redeclared) | var age = 25;<br>var age = 30; // allowed |
| **let** | Block-scoped variable declaration (ES6+, cannot be redeclared) | let count = 0;<br>count = 1; // allowed<br>let count = 2; // error |
| **const** | Block-scoped constant (cannot be reassigned) | const API_KEY = 'abc123';<br>API_KEY = 'xyz'; // error |
| **String** | Textual data enclosed in quotes | const greeting = "Hello World";<br>const name = 'Alice';<br>const msg = \`Hi ${name}\`; |
| **Number** | Numeric data (integers, decimals, scientific notation) | const age = 30;<br>const price = 19.99;<br>const scientific = 5e3; // 5000 |
| **Boolean** | Logical true/false values | const isActive = true;<br>const hasAccess = false;<br>const isValid = 5 > 3; // true |
| **Undefined** | Variable declared but not assigned a value | let user;<br>console.log(user); // undefined<br>console.log(obj.missing); // undefined |
| **Null** | Intentional absence of value (programmer-assigned) | let selectedItem = null;<br>const response = data ?? null; |
| **Symbol** | Unique, immutable identifier (useful for object keys) | const id = Symbol('userId');<br>const obj = { [id]: 12345 }; |
| **BigInt** | Arbitrarily large integers beyond Number.MAX_SAFE_INTEGER | const huge = 9007199254740991n;<br>const big = BigInt(123456789); |

---

## **FUNCTIONS**

| Term | Definition | Example |
|------|------------|---------|
| **Function Declaration** | Named function hoisted to top of scope | function calculateTotal(price, tax) {<br>&nbsp;&nbsp;return price + (price * tax);<br>}<br>calculateTotal(100, 0.08); // 108 |
| **Function Expression** | Function assigned to variable (not hoisted) | const multiply = function(a, b) {<br>&nbsp;&nbsp;return a * b;<br>};<br>multiply(5, 3); // 15 |
| **Arrow Function** | Concise syntax, lexical this binding | const square = x => x * x;<br>const add = (a, b) => a + b;<br>const greet = name => \`Hello ${name}\`; |
| **IIFE** | Immediately Invoked Function Expression | (function() {<br>&nbsp;&nbsp;const privateVar = "secret";<br>&nbsp;&nbsp;console.log("I run immediately!");<br>})(); |
| **Callback** | Function passed as argument to be executed later | [1, 2, 3].forEach(num => {<br>&nbsp;&nbsp;console.log(num * 2);<br>});<br>setTimeout(() => console.log("Done"), 1000); |
| **Higher-Order Function** | Function that accepts/returns functions | function withLogging(fn) {<br>&nbsp;&nbsp;return function(...args) {<br>&nbsp;&nbsp;&nbsp;&nbsp;console.log('Calling:', fn.name);<br>&nbsp;&nbsp;&nbsp;&nbsp;return fn(...args);<br>&nbsp;&nbsp;};<br>} |
| **Closure** | Function retains access to outer scope after outer function returns | function counter() {<br>&nbsp;&nbsp;let count = 0;<br>&nbsp;&nbsp;return () => ++count;<br>}<br>const inc = counter();<br>inc(); // 1<br>inc(); // 2 |
| **Rest Parameters** | Collects indefinite arguments into array | function sum(...numbers) {<br>&nbsp;&nbsp;return numbers.reduce((a, b) => a + b, 0);<br>}<br>sum(1, 2, 3, 4); // 10 |
| **Default Parameters** | Provides fallback values for missing arguments | function greet(name = "Guest", time = "day") {<br>&nbsp;&nbsp;return \`Good ${time}, ${name}!\`;<br>}<br>greet(); // "Good day, Guest!" |

---

## **OBJECTS & ARRAYS**

| Term | Definition | Example |
|------|------------|---------|
| **Object** | Collection of key-value pairs representing entities | const user = {<br>&nbsp;&nbsp;name: "Alice",<br>&nbsp;&nbsp;age: 30,<br>&nbsp;&nbsp;email: "alice@example.com"<br>}; |
| **Array** | Ordered list of values accessed by numeric index | const colors = ["red", "green", "blue"];<br>colors[0]; // "red"<br>colors.length; // 3 |
| **Object Literal** | Direct object creation using {} notation | const book = {<br>&nbsp;&nbsp;title: "1984",<br>&nbsp;&nbsp;author: "Orwell",<br>&nbsp;&nbsp;year: 1949<br>}; |
| **Array Destructuring** | Extract array values into separate variables | const [first, second, ...rest] = [1, 2, 3, 4, 5];<br>// first=1, second=2, rest=[3,4,5] |
| **Object Destructuring** | Extract object properties into variables | const {name, age, city = "NYC"} = user;<br>const {name: userName} = user; // rename |
| **Spread Operator** | Expands iterables or copies objects/arrays | const arr = [1, 2, 3];<br>const copy = [...arr];<br>const merged = [...arr1, ...arr2];<br>const newObj = {...oldObj, updated: true}; |
| **Property Shorthand** | Concise syntax when key matches variable name | const name = "Bob", age = 25;<br>const person = {name, age};<br>// same as {name: name, age: age} |
| **Computed Property** | Dynamic property names using [] | const propName = "score";<br>const game = {<br>&nbsp;&nbsp;[propName]: 100,<br>&nbsp;&nbsp;[\`level_${2}\`]: "hard"<br>}; |

---

## **ASYNCHRONOUS PROGRAMMING**

| Term | Definition | Example |
|------|------------|---------|
| **Promise** | Object representing eventual success/failure of async operation | const fetchData = new Promise((resolve, reject) => {<br>&nbsp;&nbsp;setTimeout(() => resolve("Data!"), 1000);<br>});<br>fetchData.then(data => console.log(data)); |
| **async/await** | Syntactic sugar making promises look synchronous | async function getUser() {<br>&nbsp;&nbsp;const response = await fetch('/api/user');<br>&nbsp;&nbsp;const data = await response.json();<br>&nbsp;&nbsp;return data;<br>} |
| **setTimeout** | Executes code once after specified delay (ms) | setTimeout(() => {<br>&nbsp;&nbsp;console.log("Runs after 2 seconds");<br>}, 2000); |
| **setInterval** | Executes code repeatedly at fixed intervals | const timer = setInterval(() => {<br>&nbsp;&nbsp;console.log("Every second");<br>}, 1000);<br>clearInterval(timer); // stop |
| **Callback Hell** | Deeply nested callbacks causing readability issues | getData(function(a) {<br>&nbsp;&nbsp;getMoreData(a, function(b) {<br>&nbsp;&nbsp;&nbsp;&nbsp;getEvenMore(b, function(c) {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// pyramid of doom<br>&nbsp;&nbsp;&nbsp;&nbsp;});<br>&nbsp;&nbsp;});<br>}); |
| **Promise.all** | Waits for all promises to resolve (fails if any reject) | const [users, posts, comments] = await Promise.all([<br>&nbsp;&nbsp;fetchUsers(),<br>&nbsp;&nbsp;fetchPosts(),<br>&nbsp;&nbsp;fetchComments()<br>]); |
| **Promise.race** | Resolves/rejects with first promise to settle | const result = await Promise.race([<br>&nbsp;&nbsp;fetch('/fast-api'),<br>&nbsp;&nbsp;fetch('/slow-api')<br>]); // returns fastest |
| **Event Loop** | JS runtime mechanism handling async code execution | console.log('1');<br>setTimeout(() => console.log('2'), 0);<br>Promise.resolve().then(() => console.log('3'));<br>console.log('4'); // Output: 1,4,3,2 |

---

## **OOP & CLASSES**

| Term | Definition | Example |
|------|------------|---------|
| **Class** | Blueprint for creating objects with shared properties/methods | class Car {<br>&nbsp;&nbsp;constructor(brand) {<br>&nbsp;&nbsp;&nbsp;&nbsp;this.brand = brand;<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;drive() { return \`${this.brand} is driving\`; }<br>} |
| **Constructor** | Special method called when creating new instance | class User {<br>&nbsp;&nbsp;constructor(name, email) {<br>&nbsp;&nbsp;&nbsp;&nbsp;this.name = name;<br>&nbsp;&nbsp;&nbsp;&nbsp;this.email = email;<br>&nbsp;&nbsp;}<br>}<br>const user = new User("Alice", "a@b.com"); |
| **this** | Refers to current object instance context | const obj = {<br>&nbsp;&nbsp;name: "Test",<br>&nbsp;&nbsp;greet() {<br>&nbsp;&nbsp;&nbsp;&nbsp;return \`Hello, I'm ${this.name}\`;<br>&nbsp;&nbsp;}<br>}; |
| **Inheritance** | Class derives properties/methods from parent class | class Animal {<br>&nbsp;&nbsp;eat() { return "eating"; }<br>}<br>class Dog extends Animal {<br>&nbsp;&nbsp;bark() { return "woof"; }<br>} |
| **super** | Calls parent class constructor or methods | class Employee extends Person {<br>&nbsp;&nbsp;constructor(name, role) {<br>&nbsp;&nbsp;&nbsp;&nbsp;super(name); // call parent constructor<br>&nbsp;&nbsp;&nbsp;&nbsp;this.role = role;<br>&nbsp;&nbsp;}<br>} |
| **Prototype** | Object template from which other objects inherit | Array.prototype.last = function() {<br>&nbsp;&nbsp;return this[this.length - 1];<br>};<br>[1,2,3].last(); // 3 |
| **Static Method** | Method belonging to class itself, not instances | class MathUtil {<br>&nbsp;&nbsp;static add(a, b) { return a + b; }<br>}<br>MathUtil.add(5, 3); // 8 (no instance needed) |
| **Getter/Setter** | Computed properties with get/set access control | class Circle {<br>&nbsp;&nbsp;constructor(radius) { this._radius = radius; }<br>&nbsp;&nbsp;get diameter() { return this._radius * 2; }<br>&nbsp;&nbsp;set diameter(d) { this._radius = d / 2; }<br>} |

---

## **OPERATORS**

| Term | Definition | Example |
|------|------------|---------|
| **Strict Equality (===)** | Compares value AND type (no coercion) | 5 === 5; // true<br>5 === "5"; // false<br>null === undefined; // false |
| **Loose Equality (==)** | Compares values with type coercion | 5 == "5"; // true<br>null == undefined; // true<br>0 == false; // true |
| **Ternary Operator** | Inline conditional expression (if-else shorthand) | const status = age >= 18 ? "adult" : "minor";<br>const color = isActive ? "green" : "red"; |
| **Nullish Coalescing (??)** | Returns right side only if left is null/undefined | const name = userName ?? "Anonymous";<br>const count = 0 ?? 10; // 0 (not nullish)<br>const val = null ?? "default"; // "default" |
| **Optional Chaining (?.)** | Safely access nested properties without errors | const city = user?.address?.city;<br>const result = obj?.method?.();<br>const item = arr?.[0]; |
| **Logical AND (&&)** | Returns first falsy value or last value | const result = true && "yes"; // "yes"<br>const check = null && "never"; // null<br>isLoggedIn && redirect(); |
| **Logical OR (\|\|)** | Returns first truthy value or last value | const name = userName \|\| "Guest";<br>const value = 0 \|\| 100; // 100<br>const final = "" \|\| null \|\| "default"; |
| **typeof** | Returns string indicating operand type | typeof 42; // "number"<br>typeof "hello"; // "string"<br>typeof undefined; // "undefined"<br>typeof null; // "object" (quirk) |
| **instanceof** | Tests if object is instance of constructor | [] instanceof Array; // true<br>({}) instanceof Object; // true<br>"text" instanceof String; // false |

---

## **SCOPE & CONTEXT**

| Term | Definition | Example |
|------|------------|---------|
| **Global Scope** | Variables accessible from anywhere in code | var globalVar = "accessible everywhere";<br>function test() {<br>&nbsp;&nbsp;console.log(globalVar); // works<br>} |
| **Function Scope** | Variables only accessible within function | function myFunc() {<br>&nbsp;&nbsp;var local = "only here";<br>}<br>console.log(local); // ReferenceError |
| **Block Scope** | Variables limited to {} block (let/const only) | if (true) {<br>&nbsp;&nbsp;let blockVar = "inside";<br>}<br>console.log(blockVar); // ReferenceError |
| **Lexical Scope** | Inner functions access outer function variables | function outer() {<br>&nbsp;&nbsp;const x = 10;<br>&nbsp;&nbsp;function inner() {<br>&nbsp;&nbsp;&nbsp;&nbsp;console.log(x); // 10 (lexical access)<br>&nbsp;&nbsp;}<br>} |
| **Hoisting** | Variable/function declarations moved to top | console.log(x); // undefined (not error)<br>var x = 5;<br>sayHi(); // works!<br>function sayHi() { console.log("Hi"); } |
| **TDZ** | Temporal Dead Zone - time before let/const initialization | console.log(x); // ReferenceError<br>let x = 5; // TDZ ends here<br>const y = 10; // also has TDZ |
| **call()** | Invokes function with specific this and arguments | function greet(greeting) {<br>&nbsp;&nbsp;return \`${greeting}, ${this.name}\`;<br>}<br>greet.call({name: "Alice"}, "Hello");<br>// "Hello, Alice" |
| **apply()** | Like call() but arguments as array | function sum(a, b, c) { return a + b + c; }<br>sum.apply(null, [1, 2, 3]); // 6 |
| **bind()** | Creates new function with bound this context | const obj = {name: "Bob"};<br>function greet() { return this.name; }<br>const boundGreet = greet.bind(obj);<br>boundGreet(); // "Bob" |

---

## **ARRAY METHODS**

| Term | Definition | Example |
|------|------------|---------|
| **map()** | Transforms each element, returns new array | const nums = [1, 2, 3];<br>const doubled = nums.map(n => n * 2);<br>// [2, 4, 6] |
| **filter()** | Creates new array with elements passing test | const nums = [1, 2, 3, 4, 5, 6];<br>const evens = nums.filter(n => n % 2 === 0);<br>// [2, 4, 6] |
| **reduce()** | Reduces array to single value via accumulator | const nums = [1, 2, 3, 4];<br>const sum = nums.reduce((acc, n) => acc + n, 0);<br>// 10 |
| **forEach()** | Executes function for each element (no return) | const names = ["Alice", "Bob", "Charlie"];<br>names.forEach((name, i) => {<br>&nbsp;&nbsp;console.log(\`${i}: ${name}\`);<br>}); |
| **find()** | Returns first element matching condition | const users = [{id:1}, {id:2}, {id:3}];<br>const user = users.find(u => u.id === 2);<br>// {id: 2} |
| **some()** | Tests if at least one element passes test | const nums = [1, 3, 5, 8];<br>const hasEven = nums.some(n => n % 2 === 0);<br>// true |
| **every()** | Tests if all elements pass test | const nums = [2, 4, 6];<br>const allEven = nums.every(n => n % 2 === 0);<br>// true |
| **slice()** | Extracts section of array (doesn't modify original) | const arr = [0, 1, 2, 3, 4];<br>const part = arr.slice(1, 4);<br>// [1, 2, 3] |
| **splice()** | Adds/removes elements (modifies original) | const arr = [1, 2, 3, 4];<br>arr.splice(2, 1, 'a', 'b');<br>// arr is now [1, 2, 'a', 'b', 4] |

---

## **ERROR HANDLING**

| Term | Definition | Example |
|------|------------|---------|
| **try/catch** | Catches and handles runtime errors | try {<br>&nbsp;&nbsp;const data = JSON.parse(invalidJSON);<br>} catch (error) {<br>&nbsp;&nbsp;console.log("Parse error:", error.message);<br>} |
| **throw** | Manually throws custom error | function divide(a, b) {<br>&nbsp;&nbsp;if (b === 0) throw new Error("Division by zero");<br>&nbsp;&nbsp;return a / b;<br>} |
| **finally** | Always executes after try/catch (cleanup) | try {<br>&nbsp;&nbsp;fetchData();<br>} catch (e) {<br>&nbsp;&nbsp;handleError(e);<br>} finally {<br>&nbsp;&nbsp;hideLoadingSpinner(); // always runs<br>} |
| **Error Object** | Built-in constructor for error instances | const err = new Error("Something failed");<br>err.name; // "Error"<br>err.message; // "Something failed"<br>err.stack; // stack trace |

---

## **MODULES**

| Term | Definition | Example |
|------|------------|---------|
| **import** | Imports exported values from other modules | import {add, subtract} from './math.js';<br>import * as utils from './utils.js';<br>import React from 'react'; |
| **export** | Makes values available to other modules | export const PI = 3.14;<br>export function calculate() { }<br>export {func1, func2}; |
| **default export** | Single main export per module | // math.js<br>export default function add(a, b) {<br>&nbsp;&nbsp;return a + b;<br>}<br>// app.js<br>import add from './math.js'; |
| **named export** | Multiple exports from same module | // utils.js<br>export const format = () => {};<br>export const validate = () => {};<br>// app.js<br>import {format, validate} from './utils.js'; |

---

## **ADVANCED CONCEPTS**

| Term | Definition | Example |
|------|------------|---------|
| **Currying** | Transform function to take args one at a time | const add = a => b => a + b;<br>const add5 = add(5);<br>add5(3); // 8 |
| **Memoization** | Cache function results for performance | const memoize = (fn) => {<br>&nbsp;&nbsp;const cache = {};<br>&nbsp;&nbsp;return (...args) => {<br>&nbsp;&nbsp;&nbsp;&nbsp;const key = JSON.stringify(args);<br>&nbsp;&nbsp;&nbsp;&nbsp;return cache[key] ?? (cache[key] = fn(...args));<br>&nbsp;&nbsp;};<br>}; |
| **Debouncing** | Delay function execution until pause | function debounce(fn, delay) {<br>&nbsp;&nbsp;let timer;<br>&nbsp;&nbsp;return (...args) => {<br>&nbsp;&nbsp;&nbsp;&nbsp;clearTimeout(timer);<br>&nbsp;&nbsp;&nbsp;&nbsp;timer = setTimeout(() => fn(...args), delay);<br>&nbsp;&nbsp;};<br>} |
| **Throttling** | Limit function execution rate | function throttle(fn, limit) {<br>&nbsp;&nbsp;let inThrottle;<br>&nbsp;&nbsp;return (...args) => {<br>&nbsp;&nbsp;&nbsp;&nbsp;if (!inThrottle) {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fn(...args);<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;inThrottle = true;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;setTimeout(() => inThrottle = false, limit);<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;};<br>} |
| **Generator** | Function that can pause and resume | function* numberGen() {<br>&nbsp;&nbsp;yield 1;<br>&nbsp;&nbsp;yield 2;<br>&nbsp;&nbsp;yield 3;<br>}<br>const gen = numberGen();<br>gen.next().value; // 1 |
| **Iterator** | Object defining sequence and return value | const iterable = {<br>&nbsp;&nbsp;[Symbol.iterator]() {<br>&nbsp;&nbsp;&nbsp;&nbsp;let i = 0;<br>&nbsp;&nbsp;&nbsp;&nbsp;return {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;next: () => ({ value: i++, done: i > 3 })<br>&nbsp;&nbsp;&nbsp;&nbsp;};<br>&nbsp;&nbsp;}<br>}; |
| **Proxy** | Intercepts operations on objects | const handler = {<br>&nbsp;&nbsp;get: (obj, prop) => prop in obj ? obj[prop] : 'N/A'<br>};<br>const proxy = new Proxy({name: 'Alice'}, handler);<br>proxy.age; // 'N/A' |
| **Reflect** | Built-in object for interceptable operations | const obj = {name: 'Bob'};<br>Reflect.get(obj, 'name'); // 'Bob'<br>Reflect.set(obj, 'age', 30);<br>Reflect.has(obj, 'name'); // true |

---

**Pro Tip**: Bookmark this guide for quick reference while coding! 🚀
