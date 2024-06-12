const axios = require('axios');

// losowanie pomijam
const numbers = [5, 6, 9, 4, 7];

Promise.all(
    [Promise.all(
        numbers.map(number => axios.get(`https://jsonplaceholder.typicode.com/posts/${number}`).then(res => res.data))),
        Promise.all(
            numbers.map(number => axios.get(`https://jsonplaceholder.typicode.com/posts/${number}/comments`).then(res => res.data)))
    ],
).then(values => {
    const [posts, comments] = [values[0], values[1]];
    return posts.reduce((acc, post, currentIndex) => [...acc, {
        entry: {
            title: post.title,
            body: post.body
        },
        comments: comments[currentIndex].map(comment => ({
            name: comment.name,
            email: comment.email,
            body: comment.body
        }))
    }
    ], []);
}).then(allEntries => console.log(JSON.stringify(allEntries, null, 4)));