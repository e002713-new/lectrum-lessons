/**
 * Задача 3.
 *
 * Напишите функцию `createArray`, которая будет создавать массив с заданными значениями.
 * Первым параметром функция принимает значение, которым заполнять массив.
 * А вторым — количество элементов, которое должно быть в массиве.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента были переданы не число, не строка, не объект и не массив;
 * - В качестве второго аргумента был передан не число.
 */

// Решение
function validate(param1, param2) {
    if (typeof param1 !== 'number' && typeof param1 !== 'string' && typeof param1 !== 'object' && !Array.isArray(param1)) {
        throw new Error('first param have bad type');
    } else if (typeof param2 !== 'number') {
        throw new Error('second argument isn`t number');
    }
}

function createArray(value, arrLen) {
    validate(value, arrLen);

    const array = new Array(arrLen).fill(value);

    return array;
}

const result = createArray('x', 5);
const result1 = createArray(6, 5);
const result2 = createArray({name: 'Dima'}, 5);
const result3 = createArray([1, 3], 5);
const result4 = createArray(null, 5);
//const result5 = createArray(true, 5);
/////////////////////////////////////////////////////////////
console.log(result); // [ x, x, x, x, x ]
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
//console.log(result5);
exports.createArray = createArray;
