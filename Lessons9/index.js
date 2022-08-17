// Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id,name,surname,email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.surname = email;
    this.phone = phone;
}
let users = [
    new User(1,"Dima","Demydov","dama888@gmail.com",'0972394515'),
    new User(2,"Mariana","Zalyciailo","daba888@gmail.com",'0975394515'),
    new User(3,"Yura","Tyk","dama888@gmail.com",'0972394515'),
    new User(4,"Max","Vashyn","dama888@gmail.com",'0972394515'),
    new User(5,"Marko","Ulkiv","dama888@gmail.com",'0972394515'),
    new User(6,"Roman","Rost","dama888@gmail.com",'0972394515'),
    new User(7,"Misha","Tramp","dama888@gmail.com",'0972394515'),
    new User(8,"Bodya","Drod","dama888@gmail.com",'0972394515'),
    new User(9,"Oleg","Tersiv","dama888@gmail.com",'0972394515'),
    new User(10,"Vasya","Koval","dama888@gmail.com",'0972394515'),
]
console.log(users);

//Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filteredUsers = users.filter(user => user.id % 2 === 0);
console.log(filteredUsers);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort);
users.sort(function(a, b) {
    return b.id - a.id;
});
console.log(users);
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id,name,surname,email, phone,order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.surname = email;
        this.phone = phone;
        this.order = order;
    };
}
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let clients = [
    new Client(1,"Dima","Demydov","dama888@gmail.com",'0972394515',4),
    new Client(2,"Mariana","Zalyciailo","daba888@gmail.com",'0975394515',5),
    new Client(3,"Yura","Tyk","dama888@gmail.com",'0972394515',8),
    new Client(4,"Max","Vashyn","dama888@gmail.com",'0972394515',7),
    new Client(5,"Marko","Ulkiv","dama888@gmail.com",'0972394515',9),
    new Client(6,"Roman","Rost","dama888@gmail.com",'0972394515',23),
    new Client(7,"Misha","Tramp","dama888@gmail.com",'0972394515',6),
    new Client(8,"Bodya","Drod","dama888@gmail.com",'0972394515',3),
    new Client(9,"Oleg","Tersiv","dama888@gmail.com",'0972394515',10),
    new Client(10,"Vasya","Koval","dama888@gmail.com",'0972394515',12),
]
clients.sort(function(a, b) {
    return b.order - a.order;
});
console.log(clients);
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car



// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку