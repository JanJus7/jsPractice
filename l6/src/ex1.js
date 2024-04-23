const _ = require('lodash');
const lp3 = require('./toplist.js').lp3;

const result1 = _.filter(lp3, (o) => o.author === "Queen");

const result2 = _.reduce(lp3, (acc, curr) => {
    if (curr.author === 'Pink Floyd' && curr.change >= 10) {
        acc.push(curr);
    }
    return acc;
}, []);

const result3 = _.chain(lp3).sort((a, b) => a.change - b.change).take(3).value();

const result4 = _.reduce(lp3, (acc, curr) => {
    const { author, song, place } = curr;
    if (place === 1) {
        acc[author] = song;
    }
    return acc;
}, {});

const arr = [1, 4, 5];
const result5 = (arr) => {
    const flag = _.every(arr, (elem) => {
        return _.isFinite(elem);
    });

    if (flag) {
        return _.filter(lp3, (o) => {
           return _.some(arr, (elem) => elem === o.place);
        });
    }
};

const result6 = (n, min, max) => {
    const randomSong = _.filter(lp3, (o) => {
    return o.place === _.random(min, max);
});
    return _.times(n, () => randomSong);
};

// const result8 = _.filter(lp3, (elem) => elem.change < 0);
const result8 = _.reduce(lp3, (acc, curr) => {
    if (curr.change < 0) {
        acc.push(curr);
    }
    return acc;
}, []);
// both answers are working well :)

const result9 = _.reduce(lp3, (acc, curr) => {
    const {song, ...rest} = curr;
    acc[song] = rest;
    return acc;
}, {});

const result10 = _.reduce(lp3, (acc, curr) => {
    const {author, change, ...rest} = curr;
    if (!acc[author]) {
        acc[author] = [];
    }

    acc[author].push(rest);
    return acc;
}, []);

const result11 = _.countBy(lp3, (elem) => elem.author);

const result12Drop = _.reduce(lp3, (acc, curr) => {
    if (curr.change < acc) {
        acc = curr.change;
    }
    return acc;
}, []);

const result12Rise = _.reduce(lp3, (acc, curr) => {
    if (curr.change > acc) {
        acc = curr.change;
    }
    return acc;
}, []);


// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result4);
// console.log(result5(arr));
// console.log(result6(3, 2, 7));

// console.log(result8);
// console.log(result9);
// console.log(result10);
// console.log(result11);
// console.log(result12Drop);
// console.log(result12Rise);
