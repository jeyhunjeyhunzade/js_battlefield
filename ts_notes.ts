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



//Tuples 
type Reponse = [string, number]

//There’s no way we can declare a tuple in TypeScript using an interface, but you still are able to use a tuple inside an interface, like this:
interface Response {
  value: [string, number]
}


// Generics  (for reusable components)
// without generics:
function identity(arg: any): any {
  return arg;
}

// with generics:
function identity<T>(arg: T): T {
  return arg;
} // identity function is generic now, because we can use it with whatever type we want

// Array of Type
function loggingIdentity<Type>(arg: Type[]): Type[] {
  console.log(arg.length);
  return arg;
}

// Awaited<Type>
type A = Awaited<Promise<string>>;
// type A = string
 
type B = Awaited<Promise<Promise<number>>>;
// type B = number
 
type C = Awaited<boolean | Promise<number>>;
// type C = number | boolean


//Partial<Type>
interface Todo {
  title: string;
  description: string;
}
 
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}
 
const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};
 
const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});


//Omit<Type, Keys>
interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}
 
type TodoPreview = Omit<Todo, "description">;
 
const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
  createdAt: 1615544252770,
};
 
type TodoInfo = Omit<Todo, "completed" | "createdAt">;
 
const todoInfo: TodoInfo = {
  title: "Pick up kids",
  description: "Kindergarten closes at 5pm",
};
