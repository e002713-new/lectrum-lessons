/**
 * Задача 1.
 *
 * Вручную создать имплементацию функции `forEach`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.forEach использовать запрещено.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода forEach (thisArg) имплементировать не нужно.
 */

const array = [1, 2, 3, 4];

// Решение

function validation(arg1, arg2) {
    if (typeof arg1 !== "object") {
        throw new Error("First param isn`t Array");
    } else if (typeof arg2 !== "function") {
        throw new Error('Second param isn`t Function');
    }
}

function forEach(arr, callback) {
    validation(arr, callback);

    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}

const result = forEach(array, (element, index, arrayRef) => {
    console.log(`${index}:`, element, arrayRef);
});

// array.forEach(function (element, index, arrRef) {
//     console.log(`${index}:`, element, arrRef);
// });

console.log(result); // undefined

exports.forEach = forEach;

