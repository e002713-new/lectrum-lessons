/**
 * Задача 1.
 *
 * Напишите функцию `inspect`, которая будет принимать массив в качестве аргумента.
 * Возвращаемое значение функции — новый массив.
 * Этот новый массив должен содержать исключительно длины строк, которые были в
 * переданном массиве.
 * Если строк в переданном массиве не было — нужно вернуть пустой массив.
 *
 * Условия:
 * - Обязательно использовать встроенный метод массива filter;
 * - Обязательно использовать встроенный метод массива map.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив.
 */

const array = [
    false,
    'Привет.',
    2,
    'Здравствуй.',
    [],
    'Прощай.',
    {
        name: 'Уолтер',
        surname: 'Уайт',
    },
    'Приветствую.',
];

const array1 = [1, 2, 3];

// Решение

function validate(array) {
    if (!Array.isArray(array)) throw new Error('argument isn`t array');
}

function inspect(array) {
    validate(array);

    const arr = array.filter(function (element) {
        return typeof element === "string";
    });

    return arr.length === 0
        ? []
        : arr.map(function (element) {
            return element.length;
        });
}

const result = inspect(array);
const result1 = inspect(array1);

console.log(result); // [ 7, 11, 7, 12 ]
console.log(result1);
exports.inspect = inspect;
