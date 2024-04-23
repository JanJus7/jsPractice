const arr = [ 1, 3, 6, 2, 9 ];

function reducer(arr) {
    return arr.reduce((acc, curr, index) => {
        acc.push(`${index}: ${curr}`);
        return acc;
    }, []);
}

console.log(reducer(arr));