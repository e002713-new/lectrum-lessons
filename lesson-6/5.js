/**
 * Задача 5.
 *
 * Вручную создать имплементацию функции `reduce`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенные методы Array.prototype.reduce и Array.prototype.reduceRight использовать запрещено;
 * - Третий аргумент функции reduce является не обязательным;
 * - Если третий аргумент передан — он станет начальным значением аккумулятора;
 * - Если третий аргумент не передан — начальным значением аккумулятора станет первый элемент обрабатываемого массива.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция;
 */

const array = [1, 2, 3, 4, 5];
const INITIAL_ACCUMULATOR = 6;

// Решение


function validation(arg1, arg2) {
    if (typeof arg1 !== "object") {
        throw new Error("First param isn`t Array");
    } else if (typeof arg2 !== "function") {
        throw new Error('Second param isn`t Function');
    }
}

function reduce(arr, callback, acc) {
    validation(arr, callback);
    if (!acc) {
        acc = arr[0];
    }

    arr.forEach((element, index, arr) => {
        callback(acc, element, index, arr);
        acc += element;
    });

    return acc;
}

const result = reduce(
    array,
    (accumulator, element, index, arrayRef) => {
        console.log(`${index}:`, accumulator, element, arrayRef);
        console.log(accumulator, element);
        return accumulator + element;
    }, INITIAL_ACCUMULATOR,
);

console.log(result); // 21

exports.reduce = reduce;
