const array = [ 4, 2, 'a', 'b', 3, 'aa', 'ww', 2, 'ab', -2];

const result = [];

for (let i = 0; i <= array.length; i++) {
    if (typeof array[i] === 'number') {
        result.push(array[i]);
    }
}

for (let j = 0; j<= array.length; j++) {
    if (typeof array[j] !== 'number') {
        result.push(array[j]);
    }
}

console.log(result);