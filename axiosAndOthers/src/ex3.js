const porownaj = (fun1, fun2, cb) => {
    let flag = false;
    let counter = 0;

    const arr = [fun1, fun2];

    const arr2 = [];

    arr.forEach((promise) => {
        promise.then((x) => {
            arr2.push(x);
            counter++;
            if (counter === arr.length) {
                if (arr2[0] === arr2[1]) {
                    flag = true;
                }

                cb(flag);
            }
        });
    });
};

const promise1 = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve(1);
    }, 2000);
});

const promise2 = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve(1);
    }, 4000);
});

const callback = (x) => {
    console.log(x);
};

porownaj(promise1(), promise2(), callback);