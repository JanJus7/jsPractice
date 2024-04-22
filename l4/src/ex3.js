function sumOfNums(num) {
    if (num === 0) {
        return num;
    } else {
        return num + sumOfNums(num-1);
    }
}

console.log(sumOfNums(4));