// ----------Prototypes and Classes

//  Prototypes 


// const obj ={
//     name: "Aman",
//     age:38,
//     greet: function(){
//         console.log("Hello gi");
//     }
// }

// const obj2 = {
//     account : 30
// }

// obj2.__proto__ = obj;
// console.log(obj2.name);



// Classes 


// const obj1 = {
//     name:"Aman",
//     age:30,
//     greet : function(){
//         console.log(`Hello ${this.name}`)
//     }
// }
// const obj2 = {
//     name:"Raj",
//     age:20,
//     greet : function(){
//         console.log(`Hello ${this.name}`)
//     }
// }


class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    sayHi(){
        console.log(`Hi ${this.name}`);
    }
}

// const person1 = new Person("Aman",22);
// const person2 = new Person("Raj",25);
// // console.log(person1.name,person1.age);
// // console.log(person2.name,person2.age);
// console.log(person1.sayHi());


class Customer extends Person{
    constructor(name ,age,account,balance){
        super(name,age); // calls the constructor of person 
        this.account = account;
        this.balance = balance;
    }

    checkBalance(){
        return this.balance;
    }
}

const customer1 = new Customer("Aman",22,123123,3124124412);
console.log(customer1.name,customer1.age,customer1.account,customer1.balance)

console.log(customer1.checkBalance());