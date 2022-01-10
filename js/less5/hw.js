// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка обчислює та повертає площу прямокутника висотою

let s = (a, b) => {return a * b};
console.log(s(10, 20));

// - створити функцію яка обчислює та повертає площу кола

let sKolo = (r) => {return 3.14 * r ** 2};
console.log(sKolo(10));

// - створити функцію яка обчислює та повертає площу циліндру

let sZylindr = (r, h) => {return 2 * r * h * 3.14};
console.log(sZylindr(10, 20));

// - створити функцію яка приймає масив та виводить кожен його елемент

let arr = [1, 2, 3, 4, 5];

let muss = () => {
    for (let number of arr) {
        console.log(number);
    }
}
muss();

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

let fn = (text) => document.write(`<p>${text}</p>`);
fn(`some text`)

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let foo = (bar) => document.write(`<ul><li>${bar}</li><li>${bar}</li><li>${bar}</li></ul>`)
foo(`barbarbar`)

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let liFew = (foo, bar) => {
    document.write(`<ul>`)
    for (i = 0; i < bar; i++) {
        document.write(`<li>${foo}</li>`)
    }
    document.write(`</ul>`)
}

liFew(`some data`, 10);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let all = [1, 'all', true, 4, false];

let fnElem = () => {
    document.write(`<ol>`)
    for (let allElement of all) {
        document.write(`<li>${allElement}</li>`)
    }
    document.write(`</ol>`)
}

fnElem()

// - створити функцію яка приймає масив об'єктів з наступними полями id, name, age, та виводить їх в документ. Для кожного об'єкту окремий блок.

let people = [
    {id: 1, name: 'Vova', age: '12'},
    {id: 2, name: 'Misha', age: '32'},
    {id: 3, name: 'Dima', age: '25'},
];

let fnObj = () => {
    for (let person of people) {
        document.write(`<div><p>${person.id}. ${person.name}, age - ${person.age}.</p></div>`)
    }
}

fnObj()