/**
 * Задача 2.
 *
 * Создайте объект `person` у которого будет 2 свойства: `rate` и `salary`.
 *
 * Свойство `rate` можно менять, но нельзя удалять.
 * Также это свойство не должно участвовать в перечислении всех свойств при переборе.
 *
 * Свойство `salary` нельзя удалять.
 * Также это свойство не должно участвовать в перечислении всех свойств при переборе.
 * При чтении свойства `salary` возвращает результат умножения поля `rate` на текущее число в месяце.
 *
 * Если rate не установлен — возвращаем число 0.
 *
 * Условия:
 * - Свойство salary обязательно должно быть геттером.
 */

// Решение
'use strict';

const person = {
    rate: null,
    get salary() {
        const date = new Date();

        return this.rate ? date.getDate() * this.rate : 0;
    },

};

Object.defineProperties(person, {
    'rate': {
        writable: true,
        enumerable: false,
    },
    'salary': {
        enumerable: false,
    }
});

Object.seal(person);

person.rate = 30;

// Предположим что сегодня 10 января, в этом случае это свойство возвращает число 300

console.log(person);
console.log(person.salary);
console.log(Object.getOwnPropertyDescriptors(person));

exports.person = person;
