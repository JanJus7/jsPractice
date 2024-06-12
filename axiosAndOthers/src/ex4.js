const zliczPoKolei = (funTab, threshold, cb) => {
    let index = 0;
    let count = 0;
    const asyncCount = () => {
        if (index === funTab.length) {
            cb(threshold);
        } else {
            funTab[index](() => {
                if (funTab[index] > threshold) {
                    count += 1;
                }
                index++;
                asyncCount(index);
            });
        }
    };
    asyncCount();
};

const promise1 = (cb) => {
    setTimeout(() => {
        console.log('func1');
        cb(3);
    }, 1000);
};

const promise2 = (cb) => {
    setTimeout(() => {
        console.log('func2');
        cb(1);
    }, 1000);
};

const promise3 = (cb) => {
    setTimeout(() => {
        console.log('func3');
        cb(4);
    }, 1000);
};

const arr = [promise1, promise2, promise3];
const threshold = 2;
const callback = (x) => {
    console.log(x);
};

zliczPoKolei(arr, threshold, callback);