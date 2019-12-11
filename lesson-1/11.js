const array = [2, -1, -3, 15, 0, 4];

let sum = 0;

for(let i = 0, j = array.length; i < j; i++) {
  if (array[i] > 0) {
    sum += array[i];
  }
}

console.log(sum);