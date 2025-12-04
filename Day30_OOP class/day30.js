//1. 
// class Book {
//   constructor(title,author,pages)
//   {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//   }
//   describe(){
//     console.log("Title:",this.title);
//     console.log("Author:",this.author);
//     console.log("Pages:",this.pages);
//   }
// }let book1 = new Book("The Subtle  Art of not giving a fuck","Mark Mansion",144);
// let book2 = new Book("Aomic Habits","James Clear",300);

// book1.describe();
// book2.describe();

//2. 2. Use Getters and Setters with a Temperature Class

class Temperature {
  
  fahrenheit;
  constructor(celsius)
  {
    this._celsius = celsius;
  }
  test()
  {
    this.fahrenheit = this._celsius * 1.8 + 32;
    console.log(this.fahrenheit);
  }
  get celsius(){
    return this._celsius;
  }
  set celsius(value)
  {
    this._celsius = value;
  }
}

let tempOne = new Temperature(20);
tempOne.test();

tempOne.celsius = 55;
tempOne.test();

//3. Build a User Class with Public & Private Fields

class User {
  #password = 32;
  name;
  checkPw(pw)
  {
    if (this.#password == pw)
      console.log("Matches");
    else 
      console.log("Didn't Match.");
  }
}
let User1 = new User;
User1.name = "Subit";
User1.checkPw(32);

//console.log(User1.#password);

//4. Inheritance and Vehicle Car

class Vehicle{
  //make , model and start()
  constructor(make,model)
  {
    this.make = make;
    this.model = model;
  }
  start()
  {
    console.log("Boom Boom");
  }
}

class Car extends Vehicle{
  constructor(make,model,fuelType){
    super(make,model);
    this.fuelType = fuelType;
  }
  start()
  {
    console.log(`Starting ${this.fuelType} car: ${this.make} ${this.model}`);
  }
}

let BMW = new Car('BMW','AR2','Petrol');
BMW.start();

//5. Use a static Method

class MathUtils{
  static add(a,b){
    return a+b;
  }
  static sub(a,b){
    return a-b;
    }
    static randomInt(min,max)
    {
      return Math.floor(Math.random()*(max-min+1))+min;
    }
}

console.log(MathUtils.add(4,5));

console.log(MathUtils.sub(7,9));
console.log(MathUtils.randomInt(7,9));


//6. Smart Light Bulb with Access Control.

// Create a SmartLightBulb class:
// Public method: turnOn(), turnOff()
// Private method: #connectToWiFi()
// turnOn() first calls #connectToWiFi() and then logs: "Light is ON"
// Static method: info() — logs "SmartLightBulb v1.0 supports remote control and scheduling."
// Try accessing the private method directly and observe the error.

class SmartLightBulb{
  static info()
  {
    console.log("SmartLightBulb v1.0 supports remote control and scheduling.")
  }
  #connectToWifi(){
    console.log("I am connecting to wifi.");
    console.log("Wifi Network connected.");
  }
  turnOn()
  {
    console.log("Starting:");
    this.#connectToWifi();
  }
  turnOff()
  {
    console.log("Turned Off.");
  }

}

let CFL = new SmartLightBulb;
CFL.turnOn();
CFL.turnOff();
// CFL.#connectToWifi();

//7. Animal Class and Subclasses
class Animal{
    constructor(name,sound)
    {
        this.name= name;
        this.sound = sound;
    }
    makeSound()
    {
        console.log(`The ${this.name} says ${this.sound}`);
    }
    sleep(){
        console.log("I  am sleeping");
    }
}

class Dog extends Animal{
    constructor(name){
        super(name,"bark");
    }
    makeSound(){
        console.log (`The Dog ${this.name} barks!`);
    }

}
class Cat extends Animal{
    constructor(name){
        super(name,"meow");
    }
    makeSound(){
        console.log(`The Cat ${this.name} meows!`);
    }
}

let punte = new Dog("Rex");
console.log(punte);
punte.makeSound();
punte.sleep();

let biralo = new Cat("Biru");
biralo.makeSound();
biralo.sleep();