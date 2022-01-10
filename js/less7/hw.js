// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)
let users = [
    new User(2, `vasya`, `pupkin`, `asd@mail.com`, 49323),
    new User(5, `kolya`, `kokos`, `kjo@mail.com`, 73073),
    new User(4, `vika`, `juise`, `wep@mail.com`, 42443),
    new User(3, `ira`, `power`, `odc@mail.com`, 53553),
    new User(9, `vanya`, `punk`, `jdc@mail.com`, 23480),
    new User(10, `lesya`, `over`, `zvc@mail.com`, 22432),
    new User(8, `kostya`, `kill`, `hfg@mail.com`, 27032),
    new User(1, `katya`, `loud`, `asf@mail.com`, 42354),
    new User(7, `nikita`, `orange`, `fdg@mail.com`, 14856),
    new User(6, `vitya`, `main`, `qew@mail.com`, 85453),
]

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filter = () => console.log(users.filter(value => value.id % 2 === 0))
filter(users);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sort = () => console.log(users.sort((a, b) => a.id - b.id));
sort();

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client
let clients = [
    new Client(2, `vasya`, `pupkin`, `asd@mail.com`, 49323, [`milk`]),
    new Client(5, `kolya`, `kokos`, `kjo@mail.com`, 73073, [`milk`, `salt`]),
    new Client(4, `vika`, `juise`, `wep@mail.com`, 42443, [`milk`, `salt`]),
    new Client(3, `ira`, `power`, `odc@mail.com`, 53553, [`milk`]),
    new Client(9, `vanya`, `punk`, `jdc@mail.com`, 23480, [`milk`, `salt`, `tea`]),
    new Client(10, `lesya`, `over`, `zvc@mail.com`, 22432, [`milk`]),
    new Client(8, `kostya`, `kill`, `hfg@mail.com`, 27032, [`milk`, `salt`, `tea`, `coffee`]),
    new Client(1, `katya`, `loud`, `asf@mail.com`, 42354, [`milk`, `salt`]),
    new Client(7, `nikita`, `orange`, `fdg@mail.com`, 14856, [`milk`]),
    new Client(6, `vitya`, `main`, `qew@mail.com`, 85453, [`milk`, `salt`]),
]

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortClient = () => console.log(clients.sort((a, b) => a.order.length - b.order.length));
sortClient();