//Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
const fruit = ['apple', 'banana', 'melone','grape','pear','strawberry','blackberry','peach','currant','watermelon'];
console.log(fruit[0]);
console.log(fruit[1]);
console.log(fruit[2]);
console.log(fruit[3]);
console.log(fruit[4]);
console.log(fruit[5]);
console.log(fruit[6]);
console.log(fruit[7]);
console.log(fruit[8]);
console.log(fruit[9]);
// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
const book1 = {
        title: 'MyBook',
        pageCount: 30,
        genre: 'drama'
}
const book2 = {
        title: 'MyBook2',
        pageCount:40,
        genre: 'horror'
    }
const book3 = {
        title: 'MyBook3',
        pageCount: 60,
        genre: 'comedy'
    }

// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
const book4 = {
    title: 'MyBook',
    pageCount: 30,
    genre: 'drama',
    authors: [{name:'Robert', age:55},{name:'Artur',age:25}]
}
const book5 = {
    title: 'MyBook2',
    pageCount:40,
    genre: 'horror',
    authors: [{name:'Alla', age:65},{name:'Marko',age:41}]

}
const book6 = {
        title: 'MyBook3',
        pageCount: 60,
        genre: 'comedy',
        authors: [{name:'Dima', age:35},{name:'Denys',age:48}]
    }
//Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let user = [
    {name: 'Mariana',username:'Masia1',password:'masia35'},
    {name: 'Solomia',username:'Masia2',password:'masia353'},
    {name: 'Alla',username:'Masia3',password:0972134115},
    {name: 'Bodia',username:'Masia4',password:'1111'},
    {name: 'Luba',username:'Masia5',password:'dima88'},
    {name: 'Andrii',username:'Masia6',password:'books4'},
    {name: 'Masha',username:'Masia7',password:'1234'},
    {name: 'Serhii',username:'Masia8',password:'mariana555'},
    {name: 'Vlad',username:'Masia9',password:'zalyciailo'},
    {name: 'Marko',username:'Masia10',password:'bohdan1994'},

]
console.log(user[0].password);
console.log(user[1].password);
console.log(user[2].password);
console.log(user[3].password);
console.log(user[4].password);
console.log(user[5].password);
console.log(user[6].password);
console.log(user[7].password);
console.log(user[8].password);
console.log(user[9].password);

