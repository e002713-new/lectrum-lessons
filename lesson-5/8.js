/**
 * Задача 7.
 *
 * Создайте функцию `f`, которая принимает массив в качестве параметра.
 * Функция возвращает undefined, и последовательно выводит в консоль (с помощью console.log) элементы массива,
 * переданного в качестве аргумента.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не массив;
 * - Генерировать ошибку, если в качестве входного аргумента был передан пустой массив;
 * - Обязательно использовать рекурсию;
 * - Использовать циклы запрещено.
 *
 * Заметки:
 * - Возможно вам понадобится метод splice → https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 */

// Решение
function validate(param) {
    if (typeof param !== 'object') {
        throw new Error('Param is not an array');
    } else if (!param.length) {
        throw new Error('Array is empty');
    }
}


function f(arr) {
    validate(arr);

    const res = arr.splice(0, 1);

    console.log(res[0]);

    if (arr.length) {
        f(arr);
    }

}

//f([]);
//f("adfs")
f([1, 2, 3]);
// 1
// 2
// 3

exports.f = f;
