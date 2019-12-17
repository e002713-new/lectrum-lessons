/**
 * Задача 2.
 *
 * Напишите функцию checkSpam(source, example)
 * Функция возвращает true, если строка source содержит подстроку spam. Иначе — false.
 *
 * Условия:
 * - Функция принимает два параметра;
 * - Функция содержит валидацию входных параметров на тип string.
 * - Функция должна быть нечувствительна к регистру:
 */

// Решение

function checkSpam(str, subStr) {
    if (typeof str !== 'string' || typeof subStr !== 'string') {
        throw new Error('upsss');
    }

    if (str.toLowerCase().includes(subStr.toLowerCase())) {
        return true;
    } else {
        return false;
    }
}

console.log(checkSpam('pitterXXX@gmail.com', 'xxx')); // true
console.log(checkSpam('pitterxXx@gmail.com', 'XXX')); // true
console.log(checkSpam('pitterxXx@gmail.com', "1111"));
exports.checkSpam = checkSpam;
