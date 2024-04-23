const arr = [1, 5, 6, 5, 5, 1, 5];

const arr2 = [];
arr.forEach((elem) => {
    arr2[elem] = (arr2[elem] || 0) + 1;
});

for (const j in arr2) {
    console.log(`${j} can be found in an array ${arr2[j]} times`);
}

