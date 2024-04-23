function divider(arg) {
    return arg % 2 === 0 ? [arg/2, arg/2] : [arg/2 - 0.5, arg/2 + 0.5];
}

console.log(divider(-9));