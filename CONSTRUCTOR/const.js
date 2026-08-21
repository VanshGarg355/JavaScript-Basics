// constructor = special method for defining the properties and methods of objects

function Car(make,modal,year,color){
    this.make=make,
    this.modal=modal,
    this.year=year,
    this.color=color,
    this.drive = function(){console.log(`you drive the ${this.modal}`)}
}

const car1= new Car("ford","mustang","2023","red");
const car2= new Car("Tata","punch","2029","black");
const car3= new Car("Dodge","charger","2026","white");

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);

console.log(car3.make);
console.log(car3.model);
console.log(car3.year);
console.log(car3.color);


car1.drive();
car2.drive();
car3.drive();