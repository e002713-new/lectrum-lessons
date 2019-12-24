/**
 * Задача 1.
 *
 * Создайте функцию `f`, которая возвращает куб числа, переданного в качестве аргумента.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве аргумента был передан не числовой тип.
 */

// Решение

function validate(param) {
    if (typeof param !== 'number') {
        throw new Error('Param is not a number');
    }
}


function f(num) {
    validate(num);

    const res = Math.pow(num, 3);

    return res;
}

console.log(f(2)); // 8
console.log(f(3));
console.log(f(4));
console.log(f("Dima"));

console.log(f(null));
exports.f = f;
