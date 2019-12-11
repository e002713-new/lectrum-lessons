const array = [1, 2, 5, 9, 4, 13, 4, 10];

for(let i = 0, j = array.length; i < j; i++) {
  if (array[i] === 4) {
    console.log('Есть!');
    break;
  }
}

