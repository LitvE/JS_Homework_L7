/*
Level 2 *
1. Отфильтруйте массив, удалив все нули. Преобразуйте результат в строку.
2. Создайте карту map для списка пользователей. Каждый пользователь представляет собой отдельный объект со свойствами id, name, surname. В качестве ключа выбрать id  
3. Напишите функцию перевода строки в верблюжий регистр
4. Проверьте является ли слово палиндромом (например "abcddcba")
5. Создайте и опишите объект worker. добавьте в него следующие функции(встроенные методы) : вывести ФИО, начислять доплату 5% если выслуга лет больше 5 лет и 10% если выслуга лет больше 8 лет
6. Перепишите предыдущее задание5 на класс
*/

//Task 1

function filteredArrayToString (arr){
    return arr.filter(x => x != 0).toString();
}

const myArray = [0, 1, 2, 3, 0, 4, 5, 6,0];

console.log(filteredArrayToString(myArray));


//Task 2

const task2Map = new Map();
task2Map.set(1, {id: 1, name: 'Ivan', surname: 'Ivanov'});
task2Map.set(2, {id: 2, name: 'Petr', surname: 'Petrov'});
task2Map.set(3, {id: 3, name: 'Sidor', surname: 'Sidorov'});

console.log(task2Map);


//Task 3

function stringToCamelCase(str){
    let newString = '';
    const words = str.split(' ');
    words.forEach(word => {
        newString += word.toString().charAt(0).toUpperCase() + word.slice(1);
    });

    return newString;
}

let myString = 'hello world with upper letters';
console.log(stringToCamelCase(myString));


//Task 4

function palindromCheck (str){
    const part1 = str.slice(0, ((str.length/2)));
    const part2 = str.slice((str.length/2)).split('').reverse().join('');

    if(part1.localeCompare(part2) == 0){
        console.log('Строка является палиндромом!');
    } else {
        console.log('Строка не является палиндромом!');
    } 
}

const tesrString1 = 'abccba';
palindromCheck(tesrString1);

const tesrString2 = 'abcdefgh';
palindromCheck(tesrString2);


//Task 5

const woker1 = {
    firstName: 'Ivan',
    secondName: 'Ivanovych',
    surname: 'Ivanov',
    printFullName: function(fname, sname, surn){
        fname = this.firstName;
        sname = this.secondName;
        surn = this.surname;
        console.log(fname + ' ' + sname + ' ' + surn);
    },
    workingAge: 11,
    salary: 10000,
    salaryCount: function(age, num){
        age = this.workingAge;
        num = this.salary;
        if(age > 5 && age < 8){
            console.log('Ваша зарплата: ', num * 1.05);
        } else if(age >= 8){
            return console.log('Ваша зарплата: ', num * 1.08);
        } else {console.log('Ваша зарплата: ', num);}
    },
};

woker1.printFullName();
woker1.salaryCount();

//Task 6
class Woker{
    constructor (firstName, secondName, surname, workingAge, baseSalary){
        this.firstName = firstName;
        this.secondName = secondName;
        this.surname = surname;
        this.workingAge = workingAge;
        this.baseSalary = baseSalary;
    }

    printFullName(){
        console.log(this.firstName + ' ' + this.secondName + ' ' + this.surname);
    }

    countSalary(){
        if(this.workingAge > 5 && this.workingAge < 8){
            console.log('Ваша зарплата: ', Math.floor(this.baseSalary * 1.05));
        } else if(this.workingAge >= 8){
            return console.log('Ваша зарплата: ', Math.floor(this.baseSalary * 1.08));;
        } else {console.log('Ваша зарплата: ', this.baseSalary);}
    }

}

const woker2 = new Woker('Petr', 'Petrovich', 'Petrov', 15, 15000);

woker2.printFullName();

woker2.countSalary();
