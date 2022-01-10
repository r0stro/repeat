// - Дано список імен.
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
let normalName = (name) => console.log(name.replaceAll('..', ' ').replaceAll('---', ' ').replaceAll('__', ' '))
normalName(n1);
normalName(n2);
normalName(n3);

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let random = (size) => {
    let arrRand = [];
    for (let i = 0; i < size; i++) {
        arrRand.push(Math.round(Math.random() * 100))
    }
    return arrRand;
}
console.log(random(5));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
arrSort = random(7);
console.log(arrSort.sort((a, b) => a - b));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
arrFilter = random(7);
console.log(arrFilter.filter(value => value % 2 === 0));

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
arrFilter = random(7);
console.log(arrFilter.map(value => value + ''));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
arrSome = [30, 40, 10, 50, 20];
let sortNums = (direction) => {
    if (direction === 'ascending') {
        console.log(arrSome.sort((a, b) => a - b));
    } else if (direction === 'descending') {
        console.log(arrSome.sort((a, b) => b - a));
    }
};
sortNums(`descending`);

// let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// -- відсортувати його за спаданням за monthDuration
let sortMass = () => console.log(coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration))
sortMass();

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filtrMass = () => console.log(coursesAndDurationArray.filter(course => course.monthDuration > 5));
filtrMass();