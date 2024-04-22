const arr = [1, 1, 3, 4, 5, 4, 3, 2, 1];

function isPalindrome(arr) {
    let flag = true;
    const length = arr.length/2;
    for (let i=0; i < length; i++) {
        // console.log(arr.length);
        if (arr.length % 2 === 0) {
            if (arr[0] === arr[arr.length-1]) {
                // console.log(arr);
                arr.pop();
                arr.shift();
            } else {
                console.log(arr);
                flag = false;
                // console.log("nie palindrom");
                break;
            }
        } else {
            arr.splice(arr.length/2-0.5, 1);
        }
    }

    if (flag === true) {
        console.log("This array is a palindrome!");
    } else {
        console.log("THis array is not a palidrome...");
    }
}

isPalindrome(arr);
