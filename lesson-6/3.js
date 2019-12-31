/**
 * Задача 3.
 *
 * Вручную создать имплементацию функции `every`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.every использовать запрещено.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода every (thisArg) имплементировать не нужно.
 */

const array = ['a', 1, 2, 3, 4, 5, 6];

// Решение
function validation(arg1, arg2) {
    if (typeof arg1 !== "object") {
        throw new Error("First param isn`t Array");
    } else if (typeof arg2 !== "function") {
        throw new Error('Second param isn`t Function');
    }
}

function every(arr, callback) {
    validation(arr, callback);

    let status = true;

    arr.forEach((element, index, arr) => {
        const el = callback(element, index, arr);
        if (!el) {
            status = false;
        }
    });

    return status;
}

const result = every(array, (element, index, arrayRef) => {
    console.log(`${index}:`, element, arrayRef);

    return typeof element === 'number';
});

console.log(result); // true

exports.every = every;
