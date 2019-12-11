const array = [1, 2, 3, 4, 5, 6];

let sumOdd = 0;
let sumEven = 0;

for(let i = 0, j = array.length; i < j; i++) {
  if (array[i] > 3 && (array[i] % 2 === 0)) {       
    sumOdd += array[i];    
  } else if (array[i] > 3 && !(array[i] % 2 === 0)) {
    sumEven += array[i];
  }
}

console.log('Sum odd ->', sumOdd);
console.log('Sum even ->', sumEven);