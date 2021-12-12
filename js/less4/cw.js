// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

function min(a, b, c) {
    if (a < b && a < c) {
        document.write(`${a}`)
    } else if (b < a && b < c) {
        document.write(`${b}`)
    } else {
        document.write(`${c}`)
    }
}

min(9, 2, 3);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

function max(a, b, c) {
    if (a > b && a > c) {
        document.write(`${a}`)
    } else if (b > a && b > c) {
        document.write(`${b}`)
    } else {
        document.write(`${c}`)
    }
}

max(7, 6, 4);

// - створити функцію яка повертає найбільше число з масиву

let arr = [30, 10, 70, 40, 50];

function arrMax(number) {
    let max = number[0];
    for (const num of number) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}

console.log(arrMax(arr));

// - створити функцію яка повертає найменьше число з масиву

function arrMin(number) {
    let min = number[0];
    for (const num of number) {
        if (num < min) {
            min = num;
        }
    }
    return min;
}

console.log(arrMin(arr));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

function summ(num) {
    let res = 0;
    for (let arrElement of arr) {
        res = res + arrElement;
    }
    return res;
}

console.log(summ(arr));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

function ars(num) {
    let res = 0;
    for (let arrElement of arr) {
        res = res + arrElement;
    }
    let ar = res / num.length;
    return ar;
}

console.log(ars(arr));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

function minandMax(nums) {
    let min = nums[0];
    let max = nums[0];
    for (let num of nums) {
        if (num < min) {
            min = num
        }

        if (num > max) {
            max = num
        }
    }
    console.log(max);
    return min
}

minandMax(arr)

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

function rand() {
    let arrs = [];
    for (let i = 0; i < 10; i++) {
        arrs[i] = Math.round(Math.random() * 100);
    }
    console.log(arrs);
}

rand()

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

function randLim(limit) {
    let arrs = [];
    for (let i = 0; i < 10; i++) {
        arrs[i] = Math.round(Math.random() * limit);
    }
    console.log(arrs);
}

randLim(121)

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
function rearr(arr) {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        const arrElement = arr[i];
        newArr.push(arrElement)
    }
    console.log(newArr);
}

rearr(arr)