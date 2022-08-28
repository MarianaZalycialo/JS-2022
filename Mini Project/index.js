// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули


const getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>{ return response.json()})
        .then(users => {
            console.log(users);
            createUsers(users);
        })
}

getUsers();

const createUsers = (users) => {

    users.forEach((user) => {
        const userDiv = document.createElement('div');
        userDiv.className = 'user';
        const h1 = document.createElement('h1');
        h1.innerText = `${user.name}`;
        h1.className = 'user-name';
        const span = document.createElement('span');
        span.innerText = `id: ${user.id}`;

        userDiv.appendChild(h1);
        userDiv.appendChild(span);
        const userButton = document.createElement('a');
        userButton.href = "user-details/user-details.html";
        userButton.innerText = 'Details';
        userButton.onclick = function () {
            localStorage.setItem('User', JSON.stringify(user));

        }
        userDiv.appendChild(userButton);
        document.getElementById('main').appendChild(userDiv);
    })


}

const setUser = (user) => {
    console.log(user);
    localStorage.setItem('user', JSON.stringify(user));
}