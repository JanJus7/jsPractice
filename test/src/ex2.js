function razem(promisesTab, callback) {
    const arr2 = [];
    let counter = 0;
    promisesTab.forEach((promise) => {
        promise.then((x) => {
            arr2.push(x);
            counter++;

            if (counter === promisesTab.length) {
                callback(arr2);
            }
        });
    });

}

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

const arr1 = [promise1(), promise2(), promise3(), promise4(), promise5()];

const callback = (x) => {
    console.log(x);
};

razem(arr1, callback);