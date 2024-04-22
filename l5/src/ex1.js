const arr = [ 'Ala', 'Janusz', 'kot', 'pies'];
// const arr = [ 1, 112, 13, 18 ];
const result = arr.reduce((acc, curr) => {

    if (String(acc).length < String(curr).length) {
        acc = curr;
    }
    return acc;
}, []);

console.log(result);