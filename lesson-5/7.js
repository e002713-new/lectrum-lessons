/**
 * Задача 7.
 *
 * Создайте функцию `getDivisors`, которая принимает число в качестве аргумента.
 * Функция возвращает массив его делителей (чисел, на которое делится данное число начиная от 1 и заканчивая самим собой).
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 * - Генерировать ошибку, если в качестве входного аргумента был передано число меньшее, чем 1.
 */

// Решение

function validate(param) {
    if (typeof param !== 'number') {
        throw new Error('Param is not a number');
    } else if (param < 1) {
        throw new Error('Param mast be >=1');
    }
}

function getDivisors(num) {
    validate(num);

    let arr = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            arr.push(i);
        }
    }
    return arr;
}

console.log(getDivisors(12)); // [1, 2, 3, 4, 6, 12]
console.log(getDivisors(16));
//console.log(getDivisors(0));
console.log(getDivisors("12"));
exports.getDivisors = getDivisors;
