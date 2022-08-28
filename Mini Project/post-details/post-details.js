let post = JSON.parse(localStorage.getItem("Post"));

const postDiv = document.createElement('div');
postDiv.className = 'post';

const h1 = document.createElement('h1');
h1.innerText = `${post.title}`;
h1.className = 'post-title';
const h3 = document.createElement('h3');
h3.innerText = `${post.body}`;
h3.className = 'post-body';

const span1 = document.createElement('span');
span1.innerText = `id: ${post.id}`;
const span2 = document.createElement('span');
span2.innerText = `userId: ${post.userId}`;

postDiv.appendChild(h1);
postDiv.appendChild(h3);
postDiv.appendChild(span1);
postDiv.appendChild(span2);


document.getElementById('post').appendChild(postDiv);

const getComments = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
        .then(res => res.json())
        .then(comments => renderComments(comments));
}
getComments();

const renderComments = (comments) => {

    comments.forEach((comment) => {
            const commentDiv = document.createElement('div');
            commentDiv.className = 'comment';

            const divName = document.createElement('div');
            divName.innerText = `${comment.name}`;
            divName.className = 'comment-name';
            const divEmail = document.createElement('div');
            divEmail.innerText = `${comment.email}`;
            divEmail.className = 'comment-email';
            const divBody = document.createElement('div');
            divBody.innerText = `${comment.body}`;
            divBody.className = 'comment-body';

            commentDiv.appendChild(divName);
            commentDiv.appendChild(divEmail);
            commentDiv.appendChild(divBody);

            document.getElementById('commentsList').appendChild(commentDiv);
        })
}