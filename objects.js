// 1.Creating objects using object literal syntax
const testObj = {
    firstName: 'testFirstName',
    lastName: 'testLastName'
  };
// 2.Creating objects using the ‘new’ keyword

// 2.a  Using the ‘new’ keyword with’ in-built Object constructor function
const person = new Object();
person.firstName = 'testFirstName';
person.lastName = 'testLastName';
// console.log(person)

// 2.b Using ‘new’ with user defined constructor function
function Person1(fname, lname) {
    this.firstName = fname || 'unknown';
    this.lastName = lname;
}
const personOne = new Person1('', 'testLastNameOne');
const personTwo = new Person1('testFirstNameTwo', 'testLastNameTwo');
console.log("personOne", personOne);

// 2.c a module pattern (without using new keyword) to create an object:
function Person2(name, age, male) {
    name = name || 'unknown';
    age = age || 0;
    function get() {
      return ['This person is called ', name,
              (!male ? ', her' : ', his'),' age is ',
              age].join('');
    }
    function setAge(nwage) {
       age = nwage;
    }
    return Object.freeze({get: get, setAge: setAge});
}

const newPerson = Person2("Jane", 16,)
newPerson.setAge(15);
// console.log(newPerson.get());

// 3 Using Object.create() to create new objects
// The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.
const orgObject1 = { company: 'ABC Corp' };

const employee1 = Object.create(orgObject1, { name: { value: 'EmployeeOne' } });

//it keeps data of orgObject in its prototype
console.log(employee1); // { company: "ABC Corp" }
console.log(employee1.name); // "EmployeeOne"

// 4 Using Object.assign() to create new objects
const orgObject2 = { company: 'ABC Corp' }
const carObject = { carName: 'Ford' }
const employee2 = Object.assign({}, orgObject2, carObject); // { carName: "Ford", company: "ABC Corp" }

// 5 Using ES6 classes to create objects
class Person3 {
    constructor(fname, lname) {
      this.firstName = fname;
      this.lastName = lname;
    }
}
  
const personClass = new Person3('testFirstName', 'testLastName');
  
console.log(personClass.firstName); // testFirstName
console.log(personClass.lastName); // testLastName