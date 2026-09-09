// super = keyword is used in classes to call the constructor or access the properties and the method of a parent (superclass)
// this = this object 
// super = the parent 

class animal {
    constructor(name, age){
this.name=name;
this.age=age;
    }

    move(speed) {
console.log(`The ${this.name} moves at a speed of ${speed}mph`);
}

}

class rabbit extends animal{
    constructor(name,age,runspeed){
        super();  
this.name=name;
this.age=age;
this.runspeed=runspeed;
    }
    run(){
        console.log(`this ${this.name} can run`);
        super.move(this.runspeed);
    }
}

class fish extends animal{
    constructor(name,age,swimspeed){
this.name=name;
this.age=age;
this.swimspeed=swimspeed;
    }
    swim(){
        console.log(`this ${this.name} can swim`);
                super.move(this.swimspeed);

    }
}

const rabbit = new rabbit("rabbit",1,25);
const fish = new fish("fish",1,25);

console.log(fish.name);
console.log(fish.age);
console.log(fish.swimspeed);


console.lof(rabbit.name);
console.lof(rabbit.age);
console.lof(rabbit.runspeed);


rabbit.run();
false.swim();