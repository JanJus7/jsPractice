const people = [
    { name: 'Jan', age: 22 },
    { name: 'Grzegorz', age: 19 },
    { name: 'Halina', age: null },
    { name: 'Agata', age: 24 },
    { name: 'Krzysztof', age: 40 },
    { name: 'Adam', age: 29 }
];

function personAge(arr) {
    console.log(arr.filter((o) => o.age === 24));
    const sortedArr = arr.filter((o) => o.age !== null).sort((a, b) => a.age - b.age);
    const result = [];
    sortedArr.forEach((elem) => {
        result.push(elem.name);
    });
    console.log(result);
}
personAge(people);