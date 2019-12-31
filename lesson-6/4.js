/**
 * Задача 4.
 *
 * Вручную создать имплементацию функции `some`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.some использовать запрещено.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода some (thisArg) имплементировать не нужно.
 */

const array = [1, 2, 'Добро пожаловать.', 4, 5, 6];

// Решение

function validation(arg1, arg2) {
    if (typeof arg1 !== "object") {
        throw new Error("First param isn`t Array");
    } else if (typeof arg2 !== "function") {
        throw new Error('Second param isn`t Function');
    }
}

function some(arr, callback) {
    validation(arr, callback);

    let status = false;

    arr.forEach((element, index, arr) => {
        const el = callback(element, index, arr);
        if (el) {
            status = true;
        }
    });

    return status;
}

const result = some(array, (element, index, arrayRef) => {
    console.log(`${index}:`, element, arrayRef);

    return typeof element === 'string';
    //return element === 10;
    //return element === 6;
});

console.log(result); // true

exports.some = some;
