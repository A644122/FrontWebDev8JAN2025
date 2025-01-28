// Most Used Array Methods:
// push(): Adds one or more elements to the end of an array.
// const arr = [1, 2];
// arr.push(3); // [1, 2, 3]
// pop(): Removes the last element from an array.

javascript;
Copy;
// const arr = [1, 2, 3];
// arr.pop(); // [1, 2]
// shift(): Removes the first element from an array.

javascript;
Copy;
const arr = [1, 2, 3];
arr.shift(); // [2, 3]
// unshift(): Adds one or more elements to the beginning of an array.

javascript;
Copy;
// const arr = [2, 3];
// arr.unshift(1); // [1, 2, 3]
// map(): Creates a new array by applying a function to each element.

javascript;
Copy;
// const arr = [1, 2, 3];
// const doubled = arr.map(num => num * 2); // [2, 4, 6]
// filter(): Creates a new array with elements that pass a test.

// const arr = [1, 2, 3, 4];
// const evens = arr.filter(num => num % 2 === 0); // [2, 4]
// reduce(): Reduces an array to a single value by applying a function.

// const arr = [1, 2, 3];
// const sum = arr.reduce((acc, num) => acc + num, 0); // 6
// forEach(): Executes a function for each element in an array.

// const arr = [1, 2, 3];
// arr.forEach(num => console.log(num)); // 1, 2, 3
// find(): Returns the first element that satisfies a condition.

// const arr = [1, 2, 3];
// const found = arr.find(num => num > 1); // 2
// slice(): Returns a shallow copy of a portion of an array.

// const arr = [1, 2, 3, 4];
// const sliced = arr.slice(1, 3); // [2, 3]
// splice(): Adds or removes elements from an array at a specific index.

// const arr = [1, 2, 3];
// arr.splice(1, 1, 4); // [1, 4, 3]
// concat(): Merges two or more arrays.

// const arr1 = [1, 2];
// const arr2 = [3, 4];
// const merged = arr1.concat(arr2); // [1, 2, 3, 4]
// includes(): Checks if an array contains a specific value.

// const arr = [1, 2, 3];
// console.log(arr.includes(2)); // true
// indexOf(): Returns the first index of a specified element.

// const arr = [1, 2, 3];
// console.log(arr.indexOf(2)); // 1
// sort(): Sorts the elements of an array.

// const arr = [3, 1, 2];
// arr.sort(); // [1, 2, 3]
// 2. String Methods
// Strings are another fundamental data type in JavaScript, and there are many methods to manipulate them.

// Most Used String Methods:
// charAt(): Returns the character at a specific index.

// const str = "Hello";
// console.log(str.charAt(1)); // "e"
// concat(): Combines two or more strings.

javascript;
Copy;
const str1 = "Hello";
const str2 = "World";
// console.log(str1.concat(" ", str2)); // "Hello World"
// includes(): Checks if a string contains a specific substring.

// const str = "Hello World";
// console.log(str.includes("World")); // true
// indexOf(): Returns the index of the first occurrence of a substring.

// const str = "Hello World";
// console.log(str.indexOf("World")); // 6
// slice(): Extracts a portion of a string.

// const str = "Hello World";
// console.log(str.slice(0, 5)); // "Hello"
// split(): Splits a string into an array of substrings.

// const str = "Hello World";
// console.log(str.split(" ")); // ["Hello", "World"]
// toLowerCase(): Converts a string to lowercase.

// const str = "Hello";
// console.log(str.toLowerCase()); // "hello"
// toUpperCase(): Converts a string to uppercase.

// const str = "Hello";
// console.log(str.toUpperCase()); // "HELLO"
// trim(): Removes whitespace from both ends of a string.

javascript;
Copy;
const str = "  Hello  ";
console.log(str.trim()); // "Hello"
// replace(): Replaces a substring with another substring.

// const str = "Hello World";
// console.log(str.replace("World", "JavaScript")); // "Hello
// 3. Object Methods
// Objects are key-value pairs, and JavaScript provides methods to work with them.

// Most Used Object Methods:
// Object.keys(): Returns an array of an object's keys.

javascript;
Copy;
const obj = { a: 1, b: 2 };
console.log(Object.keys(obj)); // ["a", "b"]
// Object.values(): Returns an array of an object's values.

// const obj = { a: 1, b: 2 };
console.log(Object.values(obj)); // [1, 2]
// Object.entries(): Returns an array of key-value pairs.

javascript;
Copy;
// const obj = { a: 1, b: 2 };
console.log(Object.entries(obj)); // [["a", 1], ["b", 2]]
// Object.assign(): Copies properties from one object to another.

javascript;
Copy;
const obj1 = { a: 1 };
const obj2 = { b: 2 };
// const merged = Object.assign({}, obj1, obj2); // { a: 1, b: 2 }
// Object.freeze(): Prevents modifications to an object.
// const obj = { a: 1 };
// Object.freeze(obj);
obj.a = 2; // Error (in strict mode)
// 4. Function Methods
// Functions are first-class citizens in JavaScript, and there are methods to work with them.

// Most Used Function Methods:
// call(): Calls a function with a specific this value and arguments.

function greet() {
  console.log(`Hello, ${this.name}`);
}
const person = { name: "John" };
greet.call(person); // "Hello, John"
// apply(): Similar to call(), but arguments are passed as an array.

javascript;
Copy;
function greet(greeting) {
  console.log(`${greeting}, ${this.name}`);
}
// const person = { name: "John" };
greet.apply(person, ["Hello"]); // "Hello, John"
// bind(): Creates a new function with a specific this value.

javascript;
Copy;
function greet() {
  console.log(`Hello, ${this.name}`);
}
// const person = { name: "John" };
// const boundGreet = greet.bind(person);
boundGreet(); // "Hello, John"
// 5. Miscellaneous Methods
// JSON.parse(): Converts a JSON string into an object.

javascript;
Copy;
const json = '{"name": "John"}';
const obj = JSON.parse(json); // { name: "John" }
// JSON.stringify(): Converts an object into a JSON string.

javascript;
Copy;
const obj = { name: "John" };
// const json = JSON.stringify(obj); // '{"name":"John"}'
// setTimeout(): Executes a function after a specified delay.

javascript;
Copy;
setTimeout(() => console.log("Hello"), 1000);
// setInterval(): Repeatedly executes a function at specified intervals.

javascript;
Copy;
setInterval(() => console.log("Hello"), 1000);
