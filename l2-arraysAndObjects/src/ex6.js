const cat = {
    name: 'Filemon',
    age: 6
};

cat.description = `Cat's name is ${cat.name} and he has ${cat.age} years`;

console.log(cat.description);

cat.breed = `mainecoon`;
cat.color = `white`;

cat.description += `. It's a ${cat.breed} and he is ${cat.color}.`;

console.log(cat.description);
