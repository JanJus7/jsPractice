function getCounter(min, max) {
    let counter = min;
    return function() {
        if (counter <= max) {
            return counter++;
        } else {
            return undefined;
        }
    };
}


const result = getCounter(5, 7);

console.log(result());
console.log(result());
console.log(result());
console.log(result());


