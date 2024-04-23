const numbers = [4, 3, 5, 1, 3, 2, 21, 1, 65, -43, 9];
const noDuplicates = [];

for (let i = 0; i <= numbers.length; i++) {
    let isUnique = true;
    for (let j = 0; j < noDuplicates.length; j++) {
        if (numbers[i] === noDuplicates[j]) {
            isUnique = false;
        }
    }
    if (isUnique) {
        noDuplicates[noDuplicates.length] = numbers[i];
    }
}

console.log(noDuplicates);

