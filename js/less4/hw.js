// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function sPr(a, b) {
    return a * b;
}

let s1 = sPr(2, 5);
console.log(s1);

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function sKolo(r) {
    return 3.14 * r ** 2
}

let sKolo1 = sKolo(5);
console.log(sKolo1);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function sZ(h, r) {
    return 2 * 3.14 * r * h;
}

let sZ1 = sZ(3, 4);
console.log(sZ1);

// - створити функцію яка приймає масив та виводить кожен його елемент

let arr = [1, 2, 3, 4, 5];

function muss() {
    for (const argument of arr) {
        console.log(argument);
    }
}

muss();

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function p(text) {
    document.write(`<p>`)
    document.write(`${text}`)
    document.write(`</p>`)
}

p('some text');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function li(text) {
    document.write(`<ul>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`</ul>`)
}

li('hello');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function li2(text, time) {
    document.write(`<ul>`)
    for (i  = 0; i < time; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}

li2('li', 4);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let all = [1, 'all', true, 4, false];

function list() {
    document.write(`<ol>`)
    for (let allElement of all) {
        document.write(`<li>${allElement}</li>`)
    }
    document.write(`</ul>`)
}

list();

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let people = [
    {id: 1, name: 'Vova', age: '12'},
    {id: 2, name: 'Misha', age: '32'},
    {id: 3, name: 'Dima', age: '25'},
];

function obj() {
    for (let person of people) {
        document.write(`<div>${person.id}. Name - ${person.name}, age - ${person.age}</div>`)
    }
}

obj();