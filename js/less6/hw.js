// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str1 = `hello world`;
console.log(str1.length);

let str2 = `lorem ipsum`;
console.log(str2.length);

let str3 = `javascript is cool`;
console.log(str3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let up1 = str1.toUpperCase();
console.log(up1);

let up2 = str2.toUpperCase();
console.log(up2);

let up3 = str3.toUpperCase();
console.log(up3);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log(up1.toLowerCase());
console.log(up2.toLowerCase());
console.log(up3.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let strDirty = ' dirty string   ';
console.log(strDirty.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
let strArr = 'Каждый охотник желает знать';
let stringToarray = (str) => console.log(str.split(' '));
stringToarray(strArr);

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
let strDel = 'Каждый охотник желает знать';
let delete_characters = (str, length) => strDel.substring(0, length);
console.log(delete_characters(strDel, 10));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
let strDash = "HTML JavaScript PHP";
let insertDash = (str) => console.log(str.toUpperCase().replaceAll(' ', '-'));
insertDash(strDash);

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
let firstUp = (str) => console.log(str[0].toUpperCase() + str.slice(1));
firstUp(str1);