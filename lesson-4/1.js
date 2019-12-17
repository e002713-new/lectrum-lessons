/**
 * Задача 1.
 *
 * Создайте объект `person` c одним свойством `salary`.
 * При чтении этого свойства должна возвращаться строка с текстом.
 * Если до конца месяца осталось больше чем 20 дней — возвращается строка `good salary`, а если нет — `bad salary`
 *
 * Условия:
 * - Свойство salary обязательно должно быть геттером.
 */


// Решение

const person = {
    get salary() {
        const date = new Date(); // actual date
        const actualMonth = date.getMonth(); // текущий месяц
        const actualDate = date.getDate(); //текущее число
        const dateInc = date.setMonth(actualMonth, actualDate)
            - date.setMonth(actualMonth + 1, 1); //разница в миллисекундах текущей даты, до 1 числа сл.месяца

        const days = Math.abs(dateInc / 3600 / 24 / 1000); // разница в днях

        return days > 20 ? 'good salary' : 'bad salary';
    }
};
//console.log(person);
console.log(person.salary); // good salary

exports.person = person;
