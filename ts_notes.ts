// Interfaces are basically a way to describe data shapes, for example, an object.

// Type is a definition of a type of data, for example, a union, primitive, intersection, tuple, or any other type.


// Declaration merging
interface Song {
  artistName: string;
};

interface Song {
  songName: string;
};

const song: Song = {
  artistName: "Freddie",
  songName: "The Chain"
};


//Extends and implements
class Car {
  printCar = () => {
    console.log("this is my car")
  }
};

interface NewCar extends Car {
  name: string;
};

class NewestCar implements NewCar {
  name: "Car";
  constructor(engine:string) {
    this.name = name
  }
  printCar = () => {
    console.log("this is my car")
  }
};


// Intersection of types
type Name = {
  name: “string”
};

type Age = {
  age: number
};

type Person = Name & Age;

//The nice thing here is that we can create a new intersection type combining two interfaces, for example, 
//but not the other way around. We cannot create an interface combining two types, because it doesn’t work:
interface Name {
  name: “string”
};

interface Age {
  age: number
};

type Person = Name & Age;



// Unions of types 
type Man = {
  name: “string”
};

type Woman = {
  name: “string”
};

type Person = Man | Woman;

//Similar to intersections, we can create a new union type combining two interfaces, for example, but not the other way around:
interface Man {
  name: "string"
};

interface Woman {
  name: "string"
};

type Person = Man | Woman;



__
//Tuples 
type Reponse = [string, number]

//There’s no way we can declare a tuple in TypeScript using an interface, but you still are able to use a tuple inside an interface, like this:
interface Response {
  value: [string, number]
}
