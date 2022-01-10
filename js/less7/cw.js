// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Cars(model, brand, year, maxSpeed, power) {
    this.model = model;
    this.brand = brand;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.power = power;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
    }
    this.info = function () {
        console.log(`Модель - ${model}, марка - ${brand}, рік випуску - ${year}, максимальна швидкість - ${maxSpeed} км/год, об'єм - ${power} л.`)
    }
    this.increaseMaxSpeed = function (newSpeed) {
        console.log(this.maxSpeed = this.maxSpeed + newSpeed);
    }
    this.changeYear = function (newValue) {
        console.log(this.year = newValue);
    }
    this.addDriver = function (driver) {
        console.log(this.driver = driver);
    }
}

let car = new Cars(`x5`, `bmw`, 2010, 200, `3.0`);
console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(20);
car.changeYear(2005);
car.addDriver(`ivan`);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Cars2 {
    constructor(model, brand, year, maxSpeed, power) {
        this.model = model;
        this.brand = brand;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.power = power;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }

    info() {
        console.log(`Модель - ${this.model}, марка - ${this.brand}, рік випуску - ${this.year}, максимальна швидкість - ${this.maxSpeed} км/год, об'єм - ${this.power} л.`)
    }

    increaseMaxSpeed(newSpeed) {
        console.log(this.maxSpeed = this.maxSpeed + newSpeed);
    }

    changeYear(newValue) {
        console.log(this.year = newValue);
    }

    addDriver(driver) {
        console.log(this.driver = driver);
    }
}

let car1 = new Cars2(`100`, `audi`, 1990, 180, `1.8`);
console.log(car1);
car1.drive();
car1.info();
car1.increaseMaxSpeed(15);
car1.changeYear(1980);
car1.addDriver(`rostyk`)

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Popelyshka {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let girls = [
    new Popelyshka(`vika`, 21, 43),
    new Popelyshka(`ira`, 20, 26),
    new Popelyshka(`marta`, 42, 54),
    new Popelyshka(`tanya`, 56, 14),
    new Popelyshka(`chrystynka`, 23, 38),
    new Popelyshka(`nina`, 29, 34),
    new Popelyshka(`katya`, 25, 24),
    new Popelyshka(`jana`, 14, 47),
    new Popelyshka(`nastya`, 41, 34),
    new Popelyshka(`vita`, 12, 20),
]

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
class Prinz {
    constructor(name, age, findShoe) {
        this.name = name;
        this.age = age;
        this.findShoe = findShoe;
    }
}

let prinz = new Prinz(`ros`, 24, 38);

function who() {
    for (let girl of girls) {
        if (girl.footSize === prinz.findShoe) {
            console.log(`${girl.name} must be with ${prinz.name}`)
        }
    }
}

who();

// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

console.log(girls.find(girl => girl.footSize === prinz.findShoe));