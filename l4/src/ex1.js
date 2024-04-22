const arr = [10, 'a', 21, true, null, undefined, 1, false, 'b', 2];

console.log(arr.some((o) => o === null));
console.log(arr.find((o) => typeof o === 'string'));
console.log(arr.findIndex((o) => o === true));
console.log(arr.filter((o) => typeof o === 'number').sort((a, b) => a - b));