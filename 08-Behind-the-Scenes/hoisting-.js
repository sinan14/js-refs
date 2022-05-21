'use strict';
// Hoisting and TDZ in Practice

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions
console.log(addDecl(2, 3));//FN ITSELF
// console.log(addExpr(2, 3));
console.log(addArrow);//IN TDZ
// console.log(addArrow(2, 3));//UNDEFINED

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);//TRUE ., IT IS BECAUSE OF VARIABLE CREATED WITH VAR WILL CREATE SOME PROPERTY IN GLOBAL WINDOW OBJECT
console.log(y === window.y);
console.log(z === window.z);

///////////////////////////////////////
