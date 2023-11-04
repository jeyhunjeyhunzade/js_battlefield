//From the example above, the carDate, getColor and getModel functions are properties of the Car object
//and instances of the Car object like firstCar can inherit all its properties.

const Car = function (color, model, dateManufactured) {
  this.color = color;
  this.model = model;
  this.dateManufactured = dateManufactured;
};
Car.prototype.getColor = function () {
  return this.color;
};
Car.prototype.getModel = function () {
  return this.model;
};
Car.prototype.carDate = function () {
  return `This ${this.model} was manufactured in the year ${this.dateManufactured}`;
};
let firstCar = new Car("red", "Ferrari", "1985");
console.log(firstCar);
console.log(firstCar.carDate()); // This Ferrari was manufactured in the year 1985.

//The protoRabbit acts as a container for the properties that are shared by all rabbits.
// An individual rabbit object, like the killerRabbit, contains properties that apply only to itself
// in this case its type — and derives shared properties from its prototype.
let protoRabbit = {
  color: "grey",
  speak(line) {
    console.log(`The ${this.type} rabbit says ${line}`);
  },
};

let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "assassin";
killerRabbit.speak("SKREEEE!");
// → The assassin rabbit says SKREEEE!

// inheritance with classes
class CarClass {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return "I have a " + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }

  show() {
    return this.present() + ", it is a " + this.model;
  }
}

let myCar = new Model("Ford", "Mustang");
document.getElementById("demo").innerHTML = myCar.show();
