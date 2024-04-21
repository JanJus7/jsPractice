const arr = [1, 2, null, [4, undefined, 11, 10], 6, [7, null, 0], null, 9];
const arr2 = [];
for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === null || typeof arr[i] !== "object") {
        arr2.push(arr[i]);
    } else {
        arr2.push(...arr[i]);
    }
}

console.log(arr2);