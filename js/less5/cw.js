// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

let min = (a, b, c) => {
    if (a < b && a < c) {
        document.write(`${a}`)
    } else if (b < a && b < c) {
        document.write(`${b}`)
    } else {
        document.write(`${c}`)
    }
}
min(1, 2, 3);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

let max = (aa, bb, cc) => {
    if (aa > bb && aa > cc) {
        document.write(`${aa}`)
    } else if (bb > aa && bb > cc) {
        document.write(`${bb}`)
    } else {
        document.write(`${cc}`)
    }
}
max(1, 3, 5);

// - створити функцію яка повертає найбільше число з масиву

let arr = [30, 10, 70, 40, 50];

let maxArr = (number) => {
    let max = number[0];
    for (const num of number) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}
console.log(maxArr(arr));

// - створити функцію яка повертає найменьше число з масиву


let minArr = (number) => {
    let min = number[0];
    for (let num of number) {
        if (num < min) {
            min = num;
        }
    }
    return min;
}

console.log(minArr(arr));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let fnSum = () => {
    let zero = 0;
    for (let number of arr) {
        zero = zero + number;
    }
    return zero;
}
console.log(fnSum());

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

let fnMid = (num) => {
    let none = 0;
    for (let number of arr) {
        none = none + number;
    }
    all = none / num.length;
    return all;
}

console.log(fnMid(arr));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);


// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.


let rand = () => {
    let mass = [];
    for (let i = 0; i < 5; i++) {
        mass[i] = Math.round(Math.random() * 100);
    }
    console.log(mass);
}
rand();

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

let rand2 = (limit) => {
    let mass = [];
    for (let i = 0; i < 10; i++) {
        mass[i] = Math.round(Math.random() * limit);
    }
    console.log(mass);
}
rand2(30);

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

let back = (some) => {
    let newM = [];
    for (let i = some.length - 1; i >= 0; i--) {
        let arrElement = arr[i];
        newM.push(arrElement);
    }
    console.log(newM);
}
back(arr);