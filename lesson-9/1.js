/**
 * Задача 1.
 *
 * Создайте функцию shallowMerge.
 * Функция обладает двумя параметрами, каждый из которых должен быть обычным JavaScript объектом.
 * Функция возвращает новый объект, который в себе объединяет свойства обоих объектов.
 * Свойства необходимо копировать лишь на один уровень каждого их объектов.
 *
 * Из объектов и обеих аргументах копируются только собственные свойства, включая недоступные для перечисления.
 *
 * Условия:
 * - Встроенный метод Object.create() использовать запрещено;
 * - При копировании любого свойства необходимо обязательно сохранить его дескрипторы;
 * - Свойства с одинаковыми именами нужно перезаписывать — приоритетом обладает объект из второго параметра.
 */

// Решение

const user = { firstName: 'Marcus', lastName: 'Kronenberg' };
const userData = { job: 'developer', country: 'Germany', lastName: 'Schmidt' };

Object.defineProperty(user, 'firstName', { writable: false });
Object.defineProperty(userData, 'job', { configurable: false });

function validate(param1, param2) {
    if(typeof param1 !== "object" || typeof param2 !== "object") {
        throw new Error('one of your parameters is`t object');
    }
}

function shallowMerge(obj1, obj2) {
    validate(obj1, obj2);

    const obj = Object.assign({}, obj1, obj2);

    const descriptors1 = Object.getOwnPropertyDescriptors(obj1);
    const descriptors2 = Object.getOwnPropertyDescriptors(obj2);

    const descriptorsObj = Object.assign({}, descriptors1, descriptors2);

    const descrKeys = Object.keys(descriptorsObj);

    for(let key of descrKeys) {
        const writable = descriptorsObj[key].writable;
        const configurable = descriptorsObj[key].configurable;
        const enumerable = descriptorsObj[key].enumerable;

        Object.defineProperty(obj, key, {
           writable: writable,
           configurable: configurable,
           enumerable: enumerable,
        });
    }

    return obj;
}

const result = shallowMerge(user, userData);

console.log(result); // { firstName: 'Marcus', lastName: 'Schmidt', job: 'developer', country: 'Germany' }
console.log(Object.getOwnPropertyDescriptor(result, 'firstName').writable); // false
console.log(Object.getOwnPropertyDescriptor(result, 'job').configurable); // false

exports.shallowMerge = shallowMerge;
