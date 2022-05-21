// TODO The reduce Method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// accumulator -> SNOWBALL

const balance = movements.reduce(function (total, currentValue, i, arr) {
  console.log(`Iteration ${i}: ${total}`);
  return total + currentValue;
}, 0);
// const balance = movements.reduce((TOTAL, currentValue) => TOTAL + currentValue, 0);
console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// Maximum value
const max = movements.reduce((maximum, currentValue, i) => {
  console.log(`Iteration ${i}: ${maximum}`);
  if (maximum > currentValue) return maximum;
  else return currentValue;
}, movements[0]);
console.log(max);
////TODO The Magic of Chaining Methods

////TODO PIPELINE
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    // console.log(arr);
    return mov * eurToUsd;
  })
  // .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);
