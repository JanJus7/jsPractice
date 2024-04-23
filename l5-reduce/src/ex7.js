const sl = require('./shoppingList.js').shoppingList;

const resultA = sl.reduce((acc, curr) => {
    const {product, type, ...rest} = curr;
    if (!acc[type]) {
        acc[type] = {};
    }
    acc[type][product] = rest;
    return acc;
}, []);

console.log(resultA);

const sortedSL = sl.sort((a, b) => a.type.localeCompare(b.type));
const resultB = sortedSL.reduce((acc, curr, index) => {
    const { product } = curr;
    if (!acc[curr.type]) {
      acc[curr.type] = [];
    }
    acc[curr.type].push(`${index+1}. ${product}`);
    return acc;
}, []);

let resultC = "";
for (const type in resultB) {
  resultC += `${type}:\n`;
  resultC += `${resultB[type].join("\n")}`;
  resultC += "\n";
}
console.log(resultC);


// it is currently unfinished because I couldn't make the index to reset...