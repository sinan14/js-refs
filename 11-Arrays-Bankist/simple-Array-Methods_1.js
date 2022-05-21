const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// TODO Simple Array Methods
let arra1 = ['a', 'b', 'c', 'd', 'e'];

// SLICE
console.log(arra1.slice(2));
console.log(arra1.slice(2, 4));
console.log(arra1.slice(-2));
console.log(arra1.slice(-1));
console.log(arra1.slice(1, -2));
console.log(arra1.slice());
console.log([...arra1]);

////TODO SPLICE
// console.log(arra1.splice(2));
arra1.splice(-1);
console.log(arra1);
arra1.splice(1, 2);
console.log(arra1);

////TODO REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

////TODO CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

////TODO JOIN
console.log(letters.join(' - '));

////TODO The find Method

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

////TODO some and every
console.log(movements);

////TODO EQUALITY

console.log(movements.includes(-130));

////TODO SOME: CONDITION

console.log(movements.some(mov => mov === -130));

const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

////TODO EVERY
console.log(movements.every(mov => mov > 0));

////TODO Separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

///////////////////////////////////////
////TODO flat and flatMap
const arr22 = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr22.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));
