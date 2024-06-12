const axios = require('axios');

const axiosFunc = () => {
    const randomID = Math.floor(Math.random() * 50) + 1;


    return axios.get(`https://jsonplaceholder.typicode.com/users/${randomID}`)
        .then((x) => {
            return axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${randomID}`)
                .then((data) => {
                    return {
                        userId: x.data.id,
                        name: x.data.name,
                        posts:
                            data.data.map((post) => ({
                                    postId: post.id,
                                    title: post.title,
                                    body: post.body
                        }))
                    };
                });
        })
        .catch(() => {
            return `Nie znaleziono użytkownika o podanym ID: ${randomID}`;
        });

};

const callback = () => {
    axiosFunc()
        .then((x) => {
            console.log(x);
        });
};

callback();
