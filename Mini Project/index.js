// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули

const getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>{ return response.json()})
        .then(users => {
            createUsers(users);
        })
}

getUsers();

const createUsers = (users) => {

    users.forEach((user) => {
        const userDiv = document.createElement('div');
        userDiv.innerText = `${user.id} - ${user.name}`;

        const userButton = document.createElement('a');
        userButton.href = "user-details/user-details.html";
        userButton.innerText = 'Details';
        userButton.onclick = function () {
            localStorage.setItem('User', JSON.stringify(user));

        }
        userDiv.appendChild(userButton);
        document.body.appendChild(userDiv);
    })


}

const setUser = (user) => {
    debugger;
    console.log(user);
    localStorage.setItem('user', JSON.stringify(user));
}