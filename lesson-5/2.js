/**
 * Задача 2.
 *
 * Создайте функцию `f`, которая возвращает сумму всех переданных числовых аргументов.
 *
 * Условия:
 * - Функция должна принимать любое количество аргументов;
 * - Генерировать ошибку, если в качестве любого входного аргумента было предано не число.
 */

// Решение
function validate(param) {
    if (typeof param !== 'number') {
        throw new Error('One param is not a number');
    }
}

function f() {
    let sum = 0;
    for (let item of arguments) {
        validate(item);
        sum += item;
    }

    return sum;
}


console.log(f(1, 1, 1, 2, 1, 1, 1, 1)); // 9
console.log(f(1, "2", 3, 4, 5, 6));
exports.f = f;
