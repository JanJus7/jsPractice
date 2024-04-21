function unequal(arg1, arg2, arg3) {
    if (arg1 !== arg2 && arg1 !== arg3 && arg2 !== arg3) {
        return true;
    } else {
        return false;
    }
}

console.log(unequal(1, 2, 3));
console.log(unequal(1, 1, 3));
