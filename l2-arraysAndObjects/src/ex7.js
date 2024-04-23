const person1 = {
    name: "Josh",
    age: 11
};

const person2 = {
    name: "Beth",
    age: 40
};

const person3 = {
    name: "Joe",
    age: 25
};

const person4 = {
    name: "Joanne",
    age: 16
};

const arr = [person1, person2, person3, person4];

let totalAge = 0;
for (let i = 0; i < arr.length; i++) {
    totalAge += arr[i].age;
}

const avgAge = totalAge/arr.length;
console.log(totalAge);
console.log(avgAge);

const belowAvg = [];
const aboveAvg = [];

for (let i = 0; i < arr.length; i++) {
    arr[i].age < avgAge ? belowAvg.push(arr[i]) : aboveAvg.push(arr[i]);
}

console.log(belowAvg);
console.log(aboveAvg);
