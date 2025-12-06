//1. Create a Simple Prototype Chain
const Animal = {
    eat(){
        console.log('I love to eat my food.');
    }
}
let Dog = Object.create(Animal);
Dog.eat();

//2. Build a Custom Constructor Function

function Book (title,author){
    this.title = title;
    this.author = author;
}
Book.prototype.getDetails = function ()
{
    console.log("I have got no details at the moment.");
}
let science = new Book('Science','Helen');
let maths = new Book ('Maths','Hukum');
console.log(Book);
console.log(science);
science.getDetails();
maths.getDetails();

//3. Compare object creation patterns:

//a. Object literals 
const writers = {
    Mark: "The subtle art of not giving a f",
    'Bob Dylan':'Times are changing',
    getDetails: function(name){
        return this[name];
    }
}
console.log(writers["Bob Dylan"]);
console.log(writers.getDetails("Mark"));

//b. Using constructor function

function phone (name,model,color){
    this.name= name;
    this.model = model;
    this.color = color;
}
phone.prototype.showInfo = function(){
    return `${this.name}${this.model} is ${this.color}`
}
let Iphone = new phone ('Iphone',"X",'black');
console.log(Iphone);

Iphone.showInfo();

//c. Using object.create

const phoneProto = {
    getInfo: function ()
    {
        return `${this.name} is ${this.color}`;
    }
}

let Redmi = Object.create(phoneProto);
Redmi.name = "Redmi";
Redmi.color = "black";
console.log(Redmi.getInfo());



//4. Stimulate a real life inheritance chain;

//5. Constructor vs class vs object.create
function User(name, email) {
    this.name = name;
    this.email = email;
}


User.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name}`);
};


const user1 = new User("Alice", "alice@example.com");
user1.sayHello(); 


class UserClass {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    
    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    }
}


const user2 = new UserClass("Bob", "bob@example.com");
user2.sayHello(); 



const userProto = {
    sayHello: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};


const user3 = Object.create(userProto);
user3.name = "Charlie";
user3.email = "charlie@example.com";

user3.sayHello(); 
