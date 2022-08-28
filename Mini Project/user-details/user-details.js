
let user = JSON.parse(localStorage.getItem("User"));
let renderedPosts = false;

const userDiv = document.createElement('div');
userDiv.className = 'user';

const h1 = document.createElement('h1');
h1.innerText = `${user.name}`;
h1.className = 'user-name';
const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = `id: ${user.id}`;
const li2 = document.createElement('li');
li2.innerText = `Phone: ${user.phone}`;
const li3 = document.createElement('li');
li3.innerText = `Email: ${user.email}`;
const li4 = document.createElement('li');
li4.innerText = `Website: ${user.website}`;
const li5 = document.createElement('li');
li5.innerText = `Username: ${user.username}`;
const li6 = document.createElement('li');
li6.innerText = `Address street: ${user.address.street}`;
const li7 = document.createElement('li');
li7.innerText = `Company name: ${user.company.name}`

userDiv.appendChild(h1);
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);
ul.appendChild(li5);
ul.appendChild(li6);
ul.appendChild(li7);
userDiv.appendChild(ul);

const map = document.createElement('div');
map.id = 'map';
userDiv.appendChild(map);

const postButton = document.createElement('a');
postButton.href='#';
postButton.innerText = 'Posts';
postButton.onclick = function () {
    if(!renderedPosts) {
        getPosts();
    }
}
userDiv.appendChild(postButton);
document.getElementById('user').appendChild(userDiv);

const getPosts = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(res => res.json())
        .then(posts => renderPosts(posts));
}

const renderPosts = (posts) => {

    posts.forEach((post) => {
        const postDiv = document.createElement('div');
        postDiv.className = 'post';
        const posth3 = document.createElement('h3');
        posth3.innerText = `${post.title}`;
        postDiv.appendChild(posth3);
        const postButton = document.createElement('a');
        postButton.href = "../post-details/post-details.html";
        postButton.innerText = 'Details';
        postButton.className = 'details';
        postButton.onclick = function () {
            localStorage.setItem('Post', JSON.stringify(post));

        }
        postDiv.appendChild(postButton);
        document.body.appendChild(postDiv);
        document.getElementById('postsList').appendChild(postDiv);
    })

    renderedPosts = true;
}

const renderMap = (address) => {

    // const map = new google.maps.Map(
    //     document.getElementById("map"),
    //     {
    //         zoom: 8,
    //         center: {lat: parseFloat(address.geo.lat), lng: parseFloat(address.geo.lng)},
    //     }
    // );
    //
    // const marker = new google.maps.Marker(
    //     {
    //         position: {lat: address.geo.lat, lng: address.geo.lng},
    //         map: map,
    //         title: 'userCoords'
    //     }
    // );

    navigator.geolocation.getCurrentPosition(position => {
        const map = new google.maps.Map(
            document.getElementById("map"),
            {
                zoom: 8,
                center: {lat: position.coords.latitude, lng: position.coords.longitude},
            }
        );

        const marker = new google.maps.Marker(
            {
                position: {lat: position.coords.latitude, lng: position.coords.longitude},
                map: map,
                title: 'userCoords'
            }
        );
    })
}

renderMap(user.address);