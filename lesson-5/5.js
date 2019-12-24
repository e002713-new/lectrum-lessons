/**
 * Задача 5.
 *
 * Создайте функцию `isPositive`, которая принимает число качестве аргумента.
 * Функция возвращает булевое значение.
 * Если число, переданное в аргументе положительное — возвращается true.
 * Если число, переданное в аргументе отрицательное — возвращается false.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 */

// Решение


function validate(param) {
    if (typeof param !== 'number') {
        throw new Error('Param is not a number');
    }
}

function isPositive(num) {
    validate(num);
    if (num >= 0) {
        return true;
    } else return false;
}

console.log(isPositive(-3)); // false
console.log(isPositive(3)); // true
console.log(isPositive("a"));
exports.isPositive = isPositive;
