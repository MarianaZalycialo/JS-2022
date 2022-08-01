//
//
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 8;
let a = 1;
if ( x !== a){
    console.log ('вірно');
}else{
    console.log ('невірно');
}
 a = 0;
if ( x !== a){
    console.log ('вірно');
}else{
    console.log ('невірно');
}
a = -3;
if ( x !== a){
    console.log ('вірно');
}else{
    console.log ('невірно');
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = prompt('Яка четверть години?');
if (time > 0 && time <= 15){
    console.log ('перша частина години');
} else if (time >15 && time <= 30){
    console.log ('друга частина години');
} else if (time >30 && time <= 45){
    console.log ('третя частина години');
} else if (time >45 && time <= 60){
    console.log ('четверта частина години');}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = prompt('Яка половину(декада) місяця?');
if (day > 0 && day <= 10){
    console.log ('перша частина місяця');
} else if (day >10 && day<= 20){
    console.log ('друга частина місяця');
} else if (day >20 && day <= 31){
    console.log ('третя частина місяця');
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let daytheweek = prompt('what is the plan for the day?')
switch (day){
    case 'Monday':
        console.log('do homework with');
        break;
    case 'Tuesday':
        console.log('make a design for the client');
        break;
    case 'Wednesday':
        console.log('do the cleaning');
        break;
    case 'Thursday':
        console.log('go by car');
        break;
    case 'Friday':
        console.log('meet friends');
        break;
    case 'Saturday':
        console.log('attend English classes');
        break;
    case 'Sunday':
        console.log('lie in bed all day');
        break;
}
// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
//
// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)