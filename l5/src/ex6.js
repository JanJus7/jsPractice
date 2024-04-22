const games = require('./games.js').games;

const result = games.reduce((acc, curr) => {
    if (acc.length < 4 && curr.imageUrl !== '') {
        acc.push(curr.imageUrl);
    }
    return acc;
}, []);

console.log(result);
