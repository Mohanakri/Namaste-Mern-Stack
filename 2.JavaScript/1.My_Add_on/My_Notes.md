## My topics



* Primitive values
Simple, immutable data types like numbers, strings, and booleans. Their value cannot be changed, only replaced. ex: string,int,boolen,null etc.,


* First-class citizens
An entity in a programming language that can be treated like any other value, meaning it can be assigned to variables, passed as arguments, and returned from functions. 


* Why functions are called first-class citizens
In JavaScript, functions are a type of object, giving them the same capabilities as other values. This flexibility allows them to be used in powerful ways, such as callbacks and closures, which is a core concept in functional programming.

* Functions are considered first-class citizens in JavaScript because they can be treated like any other value. This means a function can be:

Assigned to a variable

Stored in data structures (like arrays and objects)

Passed as an argument to another function

Returned as a value from another function 


* A higher-order function is a function that either accepts another function as an argument or returns a function as its result, or both.
* Function is an Object: Yes, a function is a special type of object. This means it can have properties and methods, just like any other object, in addition to being callable.
```
  // A function is defined
function greet(name) {
  console.log(`Hello, ${name}!`);
}

// You can add properties to the function object    //Remember it comes in promise concept
greet.language = 'English';    //console.dir(greet);   give all function as object and its properties;

// The function's properties can be accessed and modified
console.log(greet.language); // Output: English
```
-----------------------------------------
* prototype 
* promises
* Async/wait   both comes in detailed.
