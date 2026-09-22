// class = provide a more structure and cleaner way to work with objects compared to traditional constructor function.

class Product{
    constructor(name, price){
        this.name=name;
        this.price=price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
                console.log(`Price: $${this.price}`);

    }

    calTotal(salesTax){
     return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05;

const product1 = new Product("shirt",1999);
const product2 = new Product("pants",1500);


product1.displayProduct();
product2.displayProduct();

const total1 = product1.calTotal(salesTax);
console.log(`Total price (with tax): $${total1.toFixed(2)} `);

const total2 = product2.calTotal(salesTax);
console.log(`Total price (with tax): $${total2.toFixed(2)} `);
