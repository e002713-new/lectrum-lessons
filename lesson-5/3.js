/**
 * Задача 3.
 *
 * Создайте функцию `f`, которая отнимает от первого параметра второй и делит на третий.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве любого входного аргумента было предано не число.
 */

// Решение

function validate(param) {
    if (typeof param !== 'number') {
        throw new Error('One param is not a number');
    }
}

function f(num1, num2, num3) {
    validate(num1);
    validate(num2);
    validate(num3);

    const res = (num1 - num2) / num3;

    return res;
}

console.log(f(9, 3, 2)); // 3
console.log(f(12, 2, "5"));
exports.f = f;
