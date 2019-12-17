/**
 * Задача 1.
 *
 * Напишите функцию upperCaseFirst(string).
 * Функция преобразовывает первый символ переданной строки в заглавный и возвращает новую строку.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит валидацию входного параметра на тип string.
 */

// Решение


function upperCaseFirst(str) {
    if (typeof str !== "string") {
        throw new Error('upssss');
    }

    if (str.length === 0) {
        return '';
    }

    return str[0].toUpperCase().concat(str.slice(1));
}

console.log(upperCaseFirst('pitter')); // Pitter
console.log(upperCaseFirst('')); // ''
console.log(upperCaseFirst('dima'));
//console.log(upperCaseFirst(34567));
//console.log(upperCaseFirst(true));
