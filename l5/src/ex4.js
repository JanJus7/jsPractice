const arr = [
    { id: 'a', name: 'Ala' },
    { id: 'b', name: 'Tomek' },
    { id: 'c', name: 'Jan' }
];

const result = arr.reduce((acc, curr) => {
    acc[curr.id] = curr;
    return acc;
}, []);

console.log(result);