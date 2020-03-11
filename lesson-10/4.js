/**
 * Задача 4.
 *
 * Напишите функции compose(), которая в качестве аргументов принимает неограниченное количество функций.
 *
 * При запуске compose() последовательно запускает коллбек-функции из аргументов.
 *
 * Важно: compose() выполняет коллбек-функции из аргументов НАЧИНАЯ С КОНЦА.
 *
 * Каждая коллбек-функция из цепочки в качестве своего аргумента принимает то, что возвращает предыдущая коллбек-функция.
 * То есть возвращаемое значение каждой коллбек-функции из цепочки
 * становится доступным из параметра следующей коллбек-функции в цепочке.
 *
 * Функция compose() возвращает ещё одну функцию с одним параметром.
 * Значение, переданное этой функции в качестве аргумента должно стать
 * параметром первой коллбек-функции в цепочке выполнения функции compose().
 *
 * Итого, подпись функции compose: `compose(f, g)(x) = f(g(x))`.
 *
 * Генерировать ошибки если:
 * - Любой из аргументов не является функцией;
 * - Любая функция из аргументов не вернула значение.
 *
 * Заметка:
 * Если функции, которая является возвращаемым значением compose()
 * не передать в качестве аргумента какое-либо значение, генерировать ошибку не нужно.
 */

// Решение
function validate(params) {
  for (let param of params) {
    if (typeof param !== 'function') {
      throw new Error(`argument isn't function`);
    }

    if (typeof param() === undefined) {
      throw new Error(`function don't return result`);
    }
  }
}

function compose(...rest) {
  validate(rest);

  let result = '';

  return (val) => {
    const arr = rest.reverse();

    if (typeof val === 'undefined') {
      val = '';
    }

    for (let arg of arr) {
      result = arg(result);
    }

    return val + result;
  }
}




const result1 = compose(
  prevResult => prevResult + 'o',
  prevResult => prevResult + 'l',
  prevResult => prevResult + 'l',
  prevResult => prevResult + 'e',
)('h');


const result2 = compose(
  prevResult => prevResult + 'o',
  prevResult => prevResult + 'l',
  prevResult => prevResult + 'l',
  prevResult => prevResult + 'e',
  () => 'h',
)();

console.log(result1); // 'hello'
console.log(result2); // 'hello'

exports.compose = compose;
