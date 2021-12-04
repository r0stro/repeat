// --створити масив з:
// з 5 числових значень

let num = [11, 22, 33, 44, 55];
console.log(num);

// - з 5 стічкових значень

let string = ['uno', 'duo', 'tre', 'quattro', 'cinque'];
console.log(string);

// - з 5 значень стрічкового, числового та булевого типу

let all = [14, 'name', true, false, 'yes'];
console.log(all);

// - та вивести його в консоль

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let arr = [];

arr[0] = 'owu';
arr[1] = 1;
arr[2] = true;
arr[3] = 'while';
arr[4] = false;
console.log(arr);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i = 0; i < 10; i++) {
    document.write('<div>Lorem ipsum dolor sit amet.</div>')
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 1; i <= 10; i++) {
    document.write(`<div>Lorem ipsum dolor sit amet with #${i}</div>`);
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let i = 0;
while (i < 20) {
    document.write('<h1>Lorem ipsum dolor.</h1>')
    i++;
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let iu = 1;
while (iu <= 20) {
    document.write(`<h1>Lorem ipsum dolor. #${iu}</h1>`)
    iu++;
}

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
for (const num1 of nums) {
    console.log(num1)
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let strings = ['vova', 'vasya', 'petya', 'kolya', 'voctor', 'oleg', 'igor', 'taras', 'nikita', 'ros'];
for (const string1 of strings) {
    console.log(string1)
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let elems = [14, 'name', true, false, 'yes', 46, 'no', 466, 13, 'try']
for (const elem of elems) {
    console.log(elem);
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

for (let i = 0; i < elems.length; i++) {
    let elem = elems[i];
    {
        if (typeof elem === `boolean`) {
            console.log(`${elems[i]}`)
        }
    }

}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

for (let i = 0; i < elems.length; i++) {
    let elem = elems[i];
    {
        if (typeof elem === 'number') {
            console.log(`${elems[i]}`)
        }
    }

}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

for (let i = 0; i < elems.length; i++) {
    let elem = elems[i];
    {
        if (typeof elem === 'string') {
            console.log(`${elems[i]}`)
        }
    }

}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

let arrs = [];

arrs[1] = 1;
arrs[0] = 'owu';
arrs[2] = true;
arrs[3] = 'while';
arrs[4] = false;

for (const arrElement of arrs) {
    console.log(arrElement);
}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 1; i <= 10; i++) {
    console.log(`${i}`)
    document.write(`<div>${i}</div>`);
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write


for (let i = 1; i <= 100; i++) {
    console.log(`${i}`)
    document.write(`<div>${i}</div>`);
}

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

for (let i = 1; i <= 100; i += 2) {
    console.log(`${i}`)
    document.write(`<div>${i}</div>`);
}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(`${i}`)
        document.write(`<div>${i}</div>`);
    }
}

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for (let i = 1; i <= 100; i++) {
    if (!(i % 2 === 0)) {
        console.log(`${i}`)
        document.write(`<div>${i}</div>`);
    }
}