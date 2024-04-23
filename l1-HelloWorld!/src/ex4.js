const arr = [6, 3, 4];

const sortedArr = arr.sort((a, b) => a - b);

if (sortedArr[0] + sortedArr[1] > sortedArr[2]) {
    console.log("You can make a triangle out of that");
} else {
    console.log("Making a triangle out of those lengths is impossible...");
}