const arr = [1, 2, 3, 4, 5, 6, 7, -1, -2, -3, -4, -5];

for (let i = 0; i <= arr.length; i++) {
    console.log(arr[i]);
}

const lowestVal = [arr[0]];
const highestVal =[arr[0]];

for (let i = 0; i <= arr.length; i++) {
    if (lowestVal[0] > arr[i]) {
        lowestVal.pop(0);
        lowestVal.push(arr[i]);
    }

    if (highestVal[0] < arr[i]) {
        highestVal.pop(0);
        highestVal.push(arr[i]);
    }
}

console.log(lowestVal);
console.log(highestVal);


const reverserdArray = [];
for (let i = arr.length; i >= 0; i--) {
    reverserdArray.push(arr[i]);
}

console.log(reverserdArray);