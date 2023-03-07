1)
//как называется функция 
function showMessage(параметры) {
    //код
}

//obichniy

2)
//как называется функция 
let showMessage = function (параметры) {
    //код
}

//функциональное вырожение
3)
//как называется функция 
let showMessage = (параметры) => {
    //код
}

//strelochnaya

4)
//создайте функцию которая выводит в консоли текст 'Запуск' и вызовите функцию

function showMessage() {
    console.log('Запуск');
}

showMessage()

5)
//создайте функцию которая в качестве пареметров принимает 'a' и 'b' и возвращает сумму полученных параметров

function showMessage(a, b) {
    return a + b
}

showMessage()

6)
//конвертируйте функцию ниже в функциональное вырожение
let sum = function (text = 'text', age = 24) {
    return `${text} ${age}`;
}

7)
//создайте функцию с помощбю конструктора которая в качестве параметра принимает 'a', 'b' и возвращает сумму полученных параметров 

function showMessage(a, b) {
    return a + b
}

let a = new showMessage(20, 33)

8)
//можно ли вызвать функцию до ее обьявления?

//net

9)
//создайте самовызывающуюся функцию которая выводит в консоли слово 'Запуск'

(function () {
    console.log('Запуск')
}());

10)
//что такое arguments в функциях?
function sum(text, age) {
    console.log(arguments);
}

sum('text', 24);

// это подобный массиву объект, который содержит аргументы, переданные в функцию.

11)
//выведите в консоли обьект с параметрами из функции
function sum(text, age) {
    console.log(text, age);
}

sum('text', 24);

12)
//задайте параметру text значение 'some text' по умолчанию
function sum(text = 'some text', age) {
    //код
}

sum('text', 24);

13)
//вызовите функцию ниже
function sum(text, age, job) {
    //код
}

sum("john", "23", "programmer")

14)
//вызовите и передайте параметры второго обьекта в функцию внутри первого обьекта с помощью call()
const person = {
    firstFunc: function () {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

const person1 = {
    firstName: 'Samuil',
    lastName: 'Farzaliyev'
}

person.firstFunc.call(person1)

15)
//вызовите и передайте параметры второго обьекта в функцию внутри первого обьекта с помощью apply()
const person = {
    firstFunc: function () {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

const person1 = {
    firstName: 'Samuil',
    lastName: 'Farzaliyev'
}


person.firstFunc.apply(person1)

16)
//какой из методов может принять массив параметров
call()
apply()

//call()

17)
//с помощью какого метода можно вывести максимально большое число из списка
//1, 2, 3

//math.Max

18)
//с помощью какого метода можно вывести максимально большое число из массива
//[1, 2, 4]

//math.Max

19)
//с помощью какого метода можно вывести самое маленькое число из списка
//1, 2, 3

//math.Min

20)
//с помощью какого метода можно вывести маленькое число из массива
//[1, 2, 4]

//math.Min