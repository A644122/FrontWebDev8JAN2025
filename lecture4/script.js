// console.log("afroz");
// VARIABLE IN JAVASCRIPTS///
// there are 3type of variable in javascript
// var,let,const,
// var i can re-decleard,and re-define,update ,var is aglobal scope
// scope it means u written a curly{} inside called scope//
//let i can not re-decleard,but update easily
//const,dont re-declear,dont update,fixed value
//let a="10" string type value
//let a =10 number type value
//let a=1.234 integer type value
//let a= true or false boolean type value
//let a; undefine value because variable are decleared but not assign value//
//let a=null this is not undefine because null means not null not //
// let a = null;
// console.log(a);
// let b;
// console.log(b);
//block scope {}
// {
//   let a=100;

// }
// let a=100;
// {
//   let a=100
// }
//DATA Type of JS//
// Number,String,Boolean,Integer,Char,ARRAY,Big INT
// primative data type -> Number,null,undefine,string//
//Non-primative data type->Array,Object//
// let a = 100;
// let b = "200";
// console.log(a + b);
// OPERATORS IN JAVASCRIPT//
//Assign operators//
// =,+=,-+,*=,%=, **=
// let a =10->value of a assign 10 it means value right to left
//comparison operators//
//==,===,!=,!==//
// let a = 100;
// let b = "100";
// if (a == b) {
//   console.log("true");
// } else {
//   console.log("false");
// }
// let A = 5;
// let B = "5";
// console.log(A == B);
//true because with the help of implicit convert karta number then match A==B iske baad true result milta hai//
// let a = 100;
// let b = 110;
// if (a === b) {
//   console.log("true");
// } else {
//   console.log("false");
// }
// let a = 100;
// let b = "100";
// if (a !== b) {
//   console.log("true");
// } else {
//   console.log("false");
// }
//Logical Operators//
//&&,
// let a = 200;
// let b = 200;

// if (((a == b) != b) == a) {
//   console.log("Yes ");
// } else {
//   console.log("false");
// }
// conditional statements//
//odd and even//
// let num = 21;
// //2,4,6,8,10,
// if (num % 2 === 0) {
//   console.log("this is odd number");
// } else {
//   console.log("This is a odd number");
// }

// let mode = "purple";
// let color;
// if (mode === "dark") {
//   color = "green";
// } else if (mode === "purple") {
//   color = "pink";
// } else if (mode === "yellow") {
//   color = "blue";
// } else {
//   console.log("hii! Happy");
// }
// // console.log(color);
// // loops and string//
// let sum = 0;

// for (let a = 1; a <= 100; a++) {
//   sum += a;
//   console.log("the counting number 1 to 10 :", a);
// }
// console.log(`the toata number 1 to 100: ${sum}`);
// let a = 3;
// while (a <= 10) {
//   a++;
//   console.log(a);
// }
// special loops //
// for in loop
// let fullName = "afroz";

// console.log(lgt);
// for (let name of fullName) {
//   // console.log(name);
//   let a = name.toUpperCase();
//   console.log(a);
// }
// let fruits = ["apple", "orange"];
// for (let fruit of fruits) {
//   console.log(fruit[0]);
// }

let str = "abc";
console.log(str);
let strNew = str.toUpperCase();
console.log(strNew);
// console.log(str);
// let newstr = str.toUpperCase();
// console.log(newstr);
