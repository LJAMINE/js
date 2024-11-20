class Animal {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    move(speed) {
        console.log(`the ${this.name} moves at speed of ${speed}mph`)
    }
}

class Rabbit extends Animal {

    constructor(name, age, runSpeed) {
        super(name, age);

        this.runSpeed = runSpeed

    }
    run(){
        console.log(`the ${this.name}  can run`)

    }
}

class Fish extends Animal {
    constructor(name, age, swimSpeed) {
        super(name, age);


        this.swimSpeed = swimSpeed

    }
}

const rabbit = new Rabbit("rabbit", 12, 230)
const fish = new Fish("fish", 1, 50)

// console.log(rabbit.name)
// console.log(rabbit.age)
// console.log(rabbit.runSpeed)

rabbit.run()