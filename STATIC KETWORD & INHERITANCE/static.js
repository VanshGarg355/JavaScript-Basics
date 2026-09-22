// static keyword that define properties or method that belong to a class itself rather then the objects created from that class(class owns anything static, not the objects)

class MathUtil{
    static pi =3.14159;

    static getDiameter(radius){
        return radius*2;
    }

     static getCIrcumference(radius){
        return 2*p1*radius;
    }
}

console.log(MathUtil.pi);
console.log(MathUtil.getCIrcumference);
console.log(MathUtil.getDiameter);


class User {
    static userCount = 0;

    constructor(username) {
        this.username = username;
        User.userCount++;
    }

    static getUserCount() {
        console.log(`There are ${User.userCount} users online`);
    }

    sayHello() {
        console.log(`Hello, my username is ${this.username}`);
    }
}

const user1 = new User("Mayank");
const user2 = new User("sexa");
const user3 = new User("rana");

console.log(user1.username);
console.log(user2.username);
console.log(user3.username);

User.getUserCount();

user1.sayHello();