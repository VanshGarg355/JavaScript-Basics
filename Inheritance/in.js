// inheritance = allows a new class to inherit pr0perties and methods from an existing class (parent -> child) helps with code reuseablity.

 class animal {
    alive =true ;
    eat(){
        console.log(`this ${this.name} is eating`)
    }
    sleep(){
                console.log(`this ${this.name} is sleeping`)

    }
 }


 class rabbit extends animal{
    name="rabbit";

    run(){
        console.log(`this ${this.name} is running`)
    }
 }

 class fish extends animal{
    name="fish";
swim(){
        console.log(`this ${this.name} is swiming`)
    }

 }


 const rabbit = new rabbit();
  const fish = new fish();


  rabbit.alive=false;
  console.log(rabbit.alive);


  rabbit.eat();
rabbit.sleep();
rabbit.run();
fish.swim();
