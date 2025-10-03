const posts = [];
const postTitleInputNode = document.querySelector('.js-input-title-post');
const postTextInputNode = document.querySelector('.js-input-text-post');
const newPostBtnNode = document.querySelector('.js-btn-post');
const postsNode = document.querySelector('.js-posts');

const now = new Date();
const time = now.toLocaleString("ru-RU");

newPostBtnNode.addEventListener('click', function() {
    const postFromUser = getPostFromUser();

    addPost(postFromUser);

    renderPosts();
});

function getPostFromUser() {
    const title = postTitleInputNode.value;
    const text = postTextInputNode.value;

    return {
        title: title,
        text: text,
    };
}

function addPost(post) {
    posts.push({
        title: post.title,
        text: post.text,
    });
}

function getPosts() {
    return posts;
}

function renderPosts() {
    const posts = getPosts();

    let postsHTML = '';

    posts.forEach(post => {
        postsHTML +=  `
            <div class='post'>
                <div class='wrapper-time'>
                    <p class='time'>${time}</p>
                </div>
                <div class='wrapper-post-title'>
                    <h1 class='post-title'>${post.title}</h1>
                </div>
                <div class='wrapper-post-text'>
                    <p class='post-text'>${post.text}</p>
                </div>
            </div>
        `
    });

    postsNode.innerHTML = postsHTML;
}