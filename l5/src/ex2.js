const arr = [ -5, 4, -2, 6, -5 ];

const result = arr.reduce((acc, curr) => {
    curr < 0 ? acc.push(curr ** 2) : acc.push(curr);
    return acc;
}, []);

console.log(result);