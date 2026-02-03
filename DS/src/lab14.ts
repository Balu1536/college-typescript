class Student{
    readonly id:number;
    constructor(id:number){
        this.id=55;
    }
}
const student1=new Student(101);
console.log(student1.id);

class Animal{
    name:string="dog";
    makeSound():void{
        console.log("bow");
}
}

class Dog extends Animal{
    breed:string="kjkj";
    makeSound(): void {
        console.log("Woof! Woof!");
    }
}

let ob=new Dog();
console.log(ob.name);
console.log(ob.breed);
ob.makeSound();