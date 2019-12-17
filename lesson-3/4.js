/**
 * Задача 4.
 *
 * Дана стоимость в виде строки: `"$120"`.
 * Первый символ — валюта, затем – число.
 * Создайте функцию `extractCurrencyValue(source)`, которая будет из такой строки выделять число-значение, в данном случае 120.
 * Обратите внимание что нужно возвращать не строку 120 а именно число 120.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Если в качестве первого параметра передана не строка — нужно вернуть null.
 */

const PRICE = '$120';
const PRICE1 = '€120';
const PRICE2 = 1234;

// Решение

function extractCurrencyValue(val) {
    if (typeof val !== "string") {
        return null;
    }
    return +val.slice(1);
}

console.log(extractCurrencyValue(PRICE)); // 120
console.log(extractCurrencyValue(PRICE1));
console.log(extractCurrencyValue(PRICE2));
exports.extractCurrencyValue = extractCurrencyValue;