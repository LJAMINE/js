//class

class Product {
    constructor(nameA, price) {
        this.nameA = nameA;
        this.price = price;
    }
    dispplayProduct() {
        console.log(`product:${this.nameA}`);
        console.log(`price:$${this.price}`);
    }

    calculateTot(sales) {
        return this.price + (this.price * sales)
    }
}

const sales = 0.05

const product1 = new Product("shirt", 20);
product1.dispplayProduct();

const total = product1.calculateTot(sales)
console.log(`total:$${total}`);
