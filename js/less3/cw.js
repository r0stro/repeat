// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:

let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

//     1. перебрати його циклом while

let i = 0;
while (i <= arr.length) {
    console.log(arr[i])
    i++
}

//     2. перебрати його циклом for

for (let i = 0; i < arr.length; i++) {
    const arrElement = arr[i];
    console.log(arrElement);
}

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

let j = 0;
while (j <= arr.length) {
    if (!(j % 2 === 0))
        console.log(arr[j])
    j++;
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

for (let i = 0; i < arr.length; i++) {
    if (!(i % 2 === 0)) {
        console.log(arr[i]);
    }
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення

let o = 0;
while (o <= arr.length) {
    if (arr[o] % 2 === 0) {
        console.log(arr[o]);
    }

    o++;
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
}

// 7. замінити кожне число кратне 3 на слово "okten"

for (let k = 0; k < arr.length; k++) {
    let arrElement = arr[k];
    if (arrElement % 3 === 0) {
        arrElement = 'okten';
    }
    console.log(arrElement);
}

// 8. вивести масив в зворотньому порядку.

for (let i = arr.length - 1; i >= 0; i--) {
    const arrElement = arr[i];
    console.log(arrElement);
}

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)


//     1. перебрати його циклом while

let ri = arr.length - 1;
while (ri >= 0) {
    console.log(arr[ri])
    ri--
}

//     2. перебрати його циклом for

for (let  i = arr.length -1; i >= 0; i--) {
    const arrElement = arr[i];
    console.log(arrElement);
}

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

let ri2 = arr.length - 1;
while (ri2 >= 0) {
    if (!(ri2 % 2 === 0))
        console.log(arr[ri2])
    ri2--;
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

for (let i = arr.length - 1;i >= 0; i--) {
    if (!(i % 2 === 0)) {
        console.log(arr[i]);
    }
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення

let ro = arr.length - 1;
while (ro >= 0) {
    if (arr[ro] % 2 === 0) {
        console.log(arr[ro]);
    }

    ro--;
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення

for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
}

// 7. замінити кожне число кратне 3 на слово "okten"

for (let k = arr.length - 1; k >= 0; k--) {
    let arrElement = arr[k];
    if (arrElement % 3 === 0) {
        arrElement = 'okten';
    }
    console.log(arrElement);
}