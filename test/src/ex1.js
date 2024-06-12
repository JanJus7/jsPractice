const grupuj = (funTab1, funTab2, cb) => {
    Promise.all([Promise.all(funTab1), Promise.all(funTab2)]).then((result) => {
        const [left, right] = result;
        const maxLen = Math.max(left.length, right.length);
        const res = [];

        for (let i = 0; i < maxLen; i++) {
            const leftR = left[i] !== undefined ? left[i] : 0;
            const rightR = right[i] !== undefined ? right[i] : 0;
            res.push([leftR, rightR]);
        }

        cb(res);
    });
};

const promise1 = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve(1);
    }, 1000);
});
const promise2 = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve(2);
    }, 2000);
});
const promise3 = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve(3);
    }, 3000);
});
const promise4 = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve(4);
    }, 1500);
});
const promise5 = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve(5);
    }, 5000);
});

const arr1 = [promise1(), promise2(), promise3()];

const arr2 = [promise4(), promise5()];

const callback = (x) => {
    console.log(x);
};

grupuj(arr1, arr2, callback);