//nested object nested in  oject , uses is for complixe data structure

class Person {
    constructor(name, age, ...adress) {

        this.name = name
        this.age = age
        this.adress = new Adress(...adress)

    }
}

class Adress {
    constructor(street, city, country) {

        this.street = street
        this.city = city
        this.country = country

    }
}

const person1 = new Person("amine", 30, "123 lahdib", "ouled teima", "morroco")
const person2 = new Person("patric", 22, "123 nona", " chrarda", "korea")

console.log(person1.adress.country)