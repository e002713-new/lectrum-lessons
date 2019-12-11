const array = [1, 2, 3, 4];

let sumOdd = 0;
let sumEven = 0;

for(let i = 0, j = array.length; i < j; i++) {
  if (array[i] % 2 === 0) {
    sumEven += array[i];
  } else {
    sumOdd += array[i];
  }
}

console.log('Sum odd ->', sumOdd);
console.log('Sum even ->', sumEven);