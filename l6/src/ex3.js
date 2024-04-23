const _ = require('lodash');

const arr = [ { x: 4, y: 2}, { x: 1, y: 8 }, { x: 4, y: 2 } ];

const result = (arr, variable) => {
    const sum = _.reduce(arr, (acc, curr) => {
        acc = (curr[variable] + acc);
        return acc;
    }, 0);
    return sum/arr.length;
};

console.log(result(arr, "x"));