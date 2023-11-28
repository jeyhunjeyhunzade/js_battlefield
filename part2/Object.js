{
  let book = {};
  Object.defineProperties(book, {
    year_: { value: 2017 },
    edition: { value: 1 },
    year: {
      get: function () {
        return this.year_;
      },
      set: function (newValue) {
        if (newValue > 2017) {
          this.year_ = newValue;
          this.edition += newValue - 2017;
        }
      },
    },
  });

  let descriptor1 = Object.getOwnPropertyDescriptor(book, "year_");
  console.log(descriptor1.value); // 2017
  console.log(descriptor1.configurable); // false
  console.log(typeof descriptor1.get); // "undefined"
  let descriptor2 = Object.getOwnPropertyDescriptor(book, "year");
  console.log(descriptor2.value); // undefined
  console.log(descriptor2.enumerable); // false
  console.log(typeof descriptor2.get); // "function"

  console.log(Object.getOwnPropertyDescriptors(book));
  //   {
  //     edition: {
  //       configurable: false;
  //       enumerable: false;
  //       value: 1;
  //       writable: false;
  //     }
  //     year: {
  //       configurable: false;
  //       enumerable: false;
  //       get: f();
  //       set: f(newValue);
  //     }
  //     year_: {
  //       configurable: false;
  //       enumerable: false;
  //       value: 2019;
  //       writable: fals;
  //     }
  //   }
}

{
  let person = {
    name: "Matt",
    age: 27,
    job: {
      title: "Software engineer",
    },
  };
  let personCopy = {};

  ({
    name: personCopy.name,
    age: personCopy.age,
    job: personCopy.job,
  } = person);

  // Because an object reference was assigned into personCopy, changing a property
  // inside the person.job object will be propagated to personCopy:
  person.job.title = "Hacker";

  console.log(person);
  // { name: 'Matt', age: 27, job: { title: 'Hacker' } }

  console.log(personCopy);
  // { name: 'Matt', age: 27, job: { title: 'Hacker' } }
}

//----------------------------------------------------------------

// * Object creation patterns:
{
  // The Factory Pattern:

  function createPerson(name, age, job) {
    let o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function () {
      console.log(this.name);
    };
    return o;
  }
  let person1 = createPerson("Nicholas", 29, "Software Engineer");
  let person2 = createPerson("Greg", 27, "Doctor");
}

//----------------------------------------------------------------

{
  // The Function Constructor Pattern

  function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function () {
      console.log(this.name);
    };
  }
  let person1 = new Person("Nicholas", 29, "Software Engineer");
  let person2 = new Person("Greg", 27, "Doctor");
  person1.sayName(); // Nicholas person2.sayName(); // Greg

  console.log(person1.constructor == Person); // true
  console.log(person2.constructor == Person); // true
  console.log(person1 instanceof Object); // true
  console.log(person1 instanceof Person); // true
  console.log(person2 instanceof Object); // true
  console.log(person2 instanceof Person); // true

  // BUT:
  console.log(person1.sayName == person2.sayName); // false
}

//----------------------------------------------------------------

{
  // The Prototype Pattern:

  function Person() {}
  Person.prototype.name = "Nicholas";
  Person.prototype.age = 29;
  Person.prototype.job = "Software Engineer";
  Person.prototype.sayName = function () {
    console.log(this.name);
  };

  let person1 = new Person();
  person1.sayName(); // "Nicholas"
  let person2 = new Person();
  person2.sayName(); // "Nicholas"

  // !!!
  console.log(person1.sayName == person2.sayName); // true

  let Person = function () {}; // Using a function expression is also suitable
}

{
  function Person() {}

  console.log(Person.prototype);
  // {
  //   constructor: f Person();
  //   __proto__: Object
  // }
  console.log(Person.prototype.constructor === Person); // true

  console.log(Person.prototype.__proto__ === Object.prototype); // true
  console.log(Person.prototype.__proto__.constructor === Object); // true
  console.log(Person.prototype.__proto__.__proto__ === null); // true,  The prototype of the Object prototype is null

  console.log(Person.prototype.__proto__);
  // {
  //   constructor: f Object(),
  //   toString: ...
  //   hasOwnProperty: ...
  //   isPrototypeOf: ...
  // }

  let person1 = new Person(),
    person2 = new Person();

  // * An instance has no direct link to the constructor, only through the prototype.
  conosle.log(person1.__proto__.constructor === Person); // true

  /**
   * Two instances created from the same constructor function will share * a prototype object:
   */
  console.log(person1.__proto__ === person2.__proto__); // true
  console.log(Person.prototype.isPrototypeOf(person1)); // true
  console.log(Person.prototype.isPrototypeOf(person2)); // true

  console.log(Object.getPrototypeOf(person1) == Person.prototype); // true
  console.log(Object.getPrototypeOf(person1).name); // "Nicholas"

  let biped = { numLegs: 2 };
  let person = {
    name: "Matt",
  };

  Object.setPrototypeOf(person, biped);

  console.log(person.name); // Matt
  console.log(person.numLegs); // 2
  console.log(Object.getPrototypeOf(person) === biped); // true

  /**
   * Object.create() is recommended way to do it, because
   * the Object.setPrototypeOf() operation will likely cause severe performance slowdowns when used
   */
}

{
  function Person() {}
  Person.prototype.name = "Nicholas";
  Person.prototype.age = 29;
  Person.prototype.job = "Software Engineer";
  Person.prototype.sayName = function () {
    console.log(this.name);
  };
  let person1 = new Person();
  let person2 = new Person();

  console.log(person1.hasOwnProperty("name")); // false
  console.log("name" in person1); // true

  person1.name = "Greg";
  console.log(person1.name); // "Greg" - from instance
  console.log(person1.hasOwnProperty("name")); // true
  console.log("name" in person1); // true

  function hasPrototypeProperty(object, name) {
    return !object.hasOwnProperty(name) && name in object;
  }

  let person = new Person();
  console.log(hasPrototypeProperty(person, "name")); // true

  person.name = "Greg";
  console.log(hasPrototypeProperty(person, "name")); // false
}

//----------------------------------------------------------------
// Prototype Chaining
{
  function SuperType() {
    this.property = true;
  }
  SuperType.prototype.getSuperValue = function () {
    return this.property;
  };
  function SubType() {
    this.subproperty = false;
  }

  // inherit from SuperType
  SubType.prototype = new SuperType();
  SubType.prototype.getSubValue = function () {
    return this.subproperty;
  };

  let instance = new SubType();
  console.log(instance.getSuperValue()); // true

  console.log(instance instanceof Object); // true
  console.log(instance instanceof SuperType); // true
  console.log(instance instanceof SubType); // true

  console.log(Object.prototype.isPrototypeOf(instance)); // true
  console.log(SuperType.prototype.isPrototypeOf(instance)); // true
  console.log(SubType.prototype.isPrototypeOf(instance)); // true
}

// Problems with Prototype Chaining
{
  function SuperType() {
    this.colors = ["red", "blue", "green"];
  }

  function SubType() {}

  // inherit from SuperType
  SubType.prototype = new SuperType();

  let instance1 = new SubType();
  instance1.colors.push("black");
  console.log(instance1.colors); // "red,blue,green,black"

  let instance2 = new SubType();
  console.log(instance2.colors); // "red,blue,green,black" !!!
}

// Fixing it
{
  // Constructor stealing
  function SuperType() {
    this.colors = ["red", "blue", "green"];
  }

  function SubType() {
    // inherit from SuperType
    SuperType.call(this);
  }

  let instance1 = new SubType();
  instance1.colors.push("black");
  console.log(instance1.colors); // red,blue,green,black
  let instance2 = new SubType();
  console.log(instance2.colors); // red,blue,green
}

// Constructor stealing cannot inherit methods
// For inheriting methods too, Combination Inheritance is right way
{
  function SuperType(name) {
    this.name = name;
    this.colors = ["red", "blue", "green"];
  }

  SuperType.prototype.sayName = function () {
    console.log(this.name);
  };

  function SubType(name, age) {
    // inherit properties
    SuperType.call(this, name);
    this.age = age;
  }

  // INHERIT METHODS
  SubType.prototype = new SuperType();

  // SubType own method
  SubType.prototype.sayAge = function () {
    console.log(this.age);
  };

  let instance1 = new SubType("Nicholas", 29);
  instance1.colors.push("black");

  console.log(instance1.colors); // "red,blue,green,black"
  instance1.sayName(); // "Nicholas";
  instance1.sayAge(); // 29

  let instance2 = new SubType("Greg", 27);
  console.log(instance2.colors); // "red,blue,green"
  instance2.sayName(); // "Greg";
  instance2.sayAge(); // 27
}

//----------------------------------------------------------------

{
  let person = {
    name: "Nicholas",
    friends: ["Shelby", "Court", "Van"],
  };

  let anotherPerson = Object.create(person);
  anotherPerson.name = "Greg";
  // or
  let anotherPerson2 = Object.create(person, {
    name: {
      value: "Greg",
    },
  });

  anotherPerson.friends.push("Rob");

  let yetAnotherPerson = Object.create(person);
  yetAnotherPerson.name = "Linda";
  yetAnotherPerson.friends.push("Barbie");

  console.log(person.friends); // "Shelby,Court,Van,Rob,Barbie"
}

//----------------------------------------------------------------

// Class
{
  class Person {
    constructor() {
      // Everything added to 'this' will exist on each individual instance
      this.locate = () => console.log("instance");
    }

    // Everything defined in the class body is defined on the class prototype object
    locate() {
      console.log("prototype");
    }
  }

  let p = new Person();
  p.locate(); // instance
  Person.prototype.locate(); // prototype
}

{
  class Person {
    constructor() {
      // Everything added to 'this' will exist on each individual instance
      this.locate = () => console.log("instance", this);
    }

    // Defined on the class prototype object
    locate() {
      console.log("prototype", this);
    }

    // Defined on the class
    static locate() {
      console.log("class", this);
    }
  }

  let p = new Person();
  p.locate(); // instance, Person {}

  Person.prototype.locate(); // prototype, {constructor: ... }

  Person.locate(); // class, class Person {}
}

{
  // super
  class Vehicle {
    constructor() {
      this.hasEngine = true;
    }
  }

  class Bus extends Vehicle {
    constructor() {
      // Cannot reference 'this' before super(), will throw ReferenceError
      super(); // same as super.constructor()
      console.log(this instanceof Vehicle); // true
      console.log(this); // Bus { hasEngine: true }
    }
  }
}

{
  // super in static methods
  class Vehicle {
    static identify() {
      console.log("vehicle");
    }
  }

  class Bus extends Vehicle {
    static identify() {
      super.identify();
    }
  }

  Bus.identify(); // vehicle
}

{
  // super behaves like a constructor function
  class Vehicle {
    constructor(licensePlate) {
      this.licensePlate = licensePlate;
    }
  }
  class Bus extends Vehicle {
    constructor(licensePlate) {
      super(licensePlate);
    }
  }

  console.log(new Bus("1337H4X")); // Bus { licensePlate: '1337H4X' }
}

{
  /*
  If you decline to define a constructor function, super() will be invoked and all arguments
  passed to the derived class constructor.
  */
  class Vehicle {
    constructor(licensePlate) {
      this.licensePlate = licensePlate;
    }
  }

  class Bus extends Vehicle {}
  console.log(new Bus("1337H4X")); // Bus { licensePlate: '1337H4X' }
}

// Abstract Base Classes
{
  class Vehicle {
    constructor() {
      if (new.target === Vehicle) {
        throw new Error("Vehicle cannot be directly instantiated");
      }
      if (!this.foo) {
        throw new Error("Inheriting class must define foo()");
      }
      console.log("success!");
    }
  }

  // Derived class
  class Bus extends Vehicle {
    foo() {}
  }

  // Derived class
  class Van extends Vehicle {}

  new Bus(); // success!
  new Van(); // Error: Inheriting class must define foo()
}
