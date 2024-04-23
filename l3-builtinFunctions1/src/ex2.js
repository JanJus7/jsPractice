function toArray(elem1, elem2) {
    if (typeof elem1 !== "object" && typeof elem2 !== 'object') {
        return [elem1, elem2];
    } else if (typeof elem1 === 'object') {
        return [...elem1, elem2];
    } else {
        return [elem1, ...elem2];
    }
}

console.log(toArray(1, 2));
console.log(toArray(1, "tekst"));
console.log(toArray("aa", [1, 2]));
console.log(toArray([1], null));