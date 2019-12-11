const array = [1, 2, 3, 4, 5, 6];

let newArray = [];

for(let i = array.length - 1, j = 0, k = array.length; i >= 0, j < k; i--, j++) {  
  newArray[j] = array[i];   
}

console.log(newArray);