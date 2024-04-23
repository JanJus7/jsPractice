class Animal {
    name = "";

    constructor(name) {
        this.name = name;
    }

    printName() {
        console.log(this.name);
    }
}

class Mammal extends Animal {
    age = 0;

    constructor(name, age) {
        super(name);
        this.age = age;
    }

    getAge() {
        return this.age;
    }
}

class Fish extends Animal {
    weight = 0;

    constructor(name, weight) {
        super(name);
        this.weight = weight;
    }

    increaseWeight() {
        this.weight += 5;
        console.log(`${this.name} got fat. It weights ${this.weight}kg now!`);
    }
}

class Dog extends Mammal {
    breed = '';

    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }

    getAge() {
        const age = super.getAge();
        return age*4;
    }
}

class Salmon extends Fish {
    constructor(name, weight) {
        super(name, weight);
    }

    catch() {
        return `You have caught a ${this.name}!`;
    }
}

const mammal1 = new Mammal("Mammal Name", 4);
const fish1 = new Fish("Carp", 3);
const dog1 = new Dog("Rex", 2, "Border Collie");
const salmon = new Salmon("Canadian Salmon", 4);

mammal1.getAge();
mammal1.printName();
console.log('_____________');
fish1.printName();
fish1.increaseWeight();
fish1.increaseWeight();
console.log('_____________');
console.log(dog1.getAge());
console.log(salmon.catch());

