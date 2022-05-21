'use strict';
// The this Keyword in Practice
console.log(this);//windo object

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);//undefined
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);//window object
};
calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);//jonas object
    console.log(2037 - this.year);//46
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;//assingning jonas's calcAge property to matilda
matilda.calcAge();

const f = jonas.calcAge;
f();//this will give us error because in this also (this keyword is undefined since we try to access .year of undefined it produces error)


///////////////////////////////////////
