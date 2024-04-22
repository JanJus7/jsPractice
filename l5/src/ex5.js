const wishlist = [
    { name: 'Czajnik', netto: 100 },
    { name: 'Lodówka', netto: 2730 },
    { name: 'Mikrofalówka', netto: 940 },
    { name: 'Mikser', netto: 120 },
    { name: 'Piekarnik', netto: 3100 },
    { name: 'Zmywarka', netto: 2400 },
    { name: 'Toster', netto: 260 }
];

const resultA = wishlist.reduce((acc, curr) => {
    acc.push(curr.netto);
    return acc;
}, []);
console.log(resultA);

const resultB = wishlist.reduce((acc, curr) => {
    acc.push(`${curr.name}: ${curr.netto}`);
    return acc;
}, []);

console.log(resultB);

const funct = (x) => x.netto < 500;
const newArray = (wishlist, funct) => {
    return wishlist.reduce((acc, curr) => {
        if (funct(curr)) {
            acc.push(curr);
        }
        return acc;

    }, []);
};
console.log(newArray(wishlist, funct));