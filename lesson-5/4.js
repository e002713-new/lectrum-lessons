/**
 * Задача 4.
 *
 * Сделайте функцию `f`, которая принимает число от 1 до 7 в качестве аргумента.
 * Функция возвращает соответствующий день недели на русском языке в следующем формате:
 *
 * 1 — Воскресенье
 * 2 — Понедельник
 * 3 — Вторник
 * 4 — Среда
 * 5 — Четверг
 * 6 — Пятница
 * 7 — Суббота
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 * - Генерировать ошибку, если в качестве входного аргумента было предано число вне промежутка 1-7.
 */

// Решение

function validate(param) {
    if (typeof param !== 'number') {
        throw new Error('Param is not a number');
    } else if (param < 1 || param > 7) {
        throw new Error('Error number must be >= 1 and <=7');
    }
}

function f(dayNum) {
    validate(dayNum);

    switch (dayNum) {
        case 1:
            return "Воскресенье";
            break;
        case 2:
            return "Понедельник";
            break;
        case 3:
            return "Вторник";
            break;
        case 4:
            return "Среда";
            break;
        case 5:
            return "Четверг";
            break;
        case 6:
            return "Пятница";
            break;
        case 7:
            return "Cyббота";
            break;
    }
}

console.log(f(1)) // Воскресенье
console.log(f(7)); // Среда
console.log(f(8));
exports.f = f;
