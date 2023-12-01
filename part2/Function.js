{
  // function name:
  function foo() {}
  let bar = function () {};
  let baz = () => {};

  console.log(foo.name); // foo
  console.log(bar.name); // bar
  console.log(baz.name); // baz
  console.log((() => {}).name); // (empty string)
  console.log(new Function().name); // anonymous
}

{
  // in js, writing params names is not must
  function sayHi() {
    console.log("Hello " + arguments[0] + ", " + arguments[1]);
  }

  function howManyArgs() {
    console.log(arguments.length);
  }
  howManyArgs("string", 45); // 2
  howManyArgs(); // 0
  howManyArgs(12); // 1
}

{
  function foo() {
    console.log(arguments[0]);
  }
  foo(5); // 5
  let bar = () => {
    console.log(arguments[0]);
  };
  bar(5); // ReferenceError: arguments is not defined
}

{
  function makeKing(name = "Henry") {
    name = "Louis";
    return `King ${arguments[0]}`;
  }
  console.log(makeKing()); // King undefined'
  console.log(makeKing("Louis")); //''King Louis'
}

{
  let romanNumerals = ["I", "II", "III", "IV", "V", "VI"];
  let ordinality = 0;
  function getNumerals() {
    // Increment the ordinality after using it to index into the numerals array
    return romanNumerals[ordinality++];
  }
  function makeKing(name = "Henry", numerals = getNumerals()) {
    return `King ${name} ${numerals}`;
  }
  console.log(makeKing()); // 'King Henry I'
  console.log(makeKing("Louis", "XVI")); // 'King Louis XVI'
  console.log(makeKing()); // 'King Henry II'
  console.log(makeKing()); // 'King Henry III'
}

{
  // OK , function declaration
  console.log(sum(10, 10));
  function sum(num1, num2) {
    return num1 + num2;
  }

  //but
  // Error , function expression
  console.log(sum(10, 10));
  let sum = function (num1, num2) {
    return num1 + num2;
  };

  // Error as well
  // this is not a consequence of using let,
  //  it's difference between function declaration and function expression
  console.log(sum(10, 10));
  var sum = function (num1, num2) {
    return num1 + num2;
  };
}

{
  function createComparisonFunction(propertyName) {
    return function (object1, object2) {
      let value1 = object1[propertyName];
      let value2 = object2[propertyName];

      if (value1 < value2) {
        return -1;
      } else if (value1 > value2) {
        return 1;
      } else {
        return 0;
      }
    };
  }

  let data = [
    { name: "Zachary", age: 28 },
    { name: "Nicholas", age: 29 },
  ];

  data.sort(createComparisonFunction("name"));
  console.log(data[0].name); // Nicholas

  data.sort(createComparisonFunction("age"));
  console.log(data[0].name); // Zachary
}

{
  // callee

  // recursive function
  function factorial(num) {
    if (num <= 1) {
      return 1;
    } else {
      return num * factorial(num - 1);
    }
  }

  // recursive function with callee

  function factorial(num) {
    if (num <= 1) {
      return 1;
    } else {
      return num * arguments.callee(num - 1);
    }
  }
}

{
  // function declaration vs arrow function
  function King() {
    this.royaltyName = "Henry";
    // 'this' will be the King instance
    setTimeout(() => console.log(this.royaltyName), 1000);
  }

  function Queen() {
    this.royaltyName = "Elizabeth";
    // 'this' will be the window object
    setTimeout(function () {
      console.log(this.royaltyName);
    }, 1000);
  }

  new King(); // Henry
  new Queen(); // undefined
}

{
  // new.target
  function King() {
    if (!new.target) {
      throw 'King must be instantiated using "new"';
    }
    console.log('King instantiated using "new"');
  }

  new King(); // King instantiated using "new"
  King(); // Error: King must be instantiated using "new"
}

{
  // call / apply
  window.color = "red";
  let o = {
    color: "blue",
  };
  function sayColor() {
    console.log(this.color);
  }
  sayColor(); // red
  sayColor.call(this); // red
  sayColor.call(window); // red
  sayColor.call(o); // blue
}

{
  // bind

  window.color = "red";
  var o = {
    color: "blue",
  };
  function sayColor() {
    console.log(this.color);
  }
  let objectSayColor = sayColor.bind(o);
  objectSayColor(); // blue
}

{
  // tail call optimization
  function outerFunction() {
    return innerFunction(); // tail call
  }

  // 1. Execution reaches outerFunction body, first stack frame is pushed onto stack.
  // 2. Body of outerFunction executes, return statement is reached. To evaluate the return statement, innerFunction must be evaluated.
  // 3. Engine recognizes that first stack frame can safely be popped off the stack since the return value of innerFunction is also the return value of outerFunction.
  // 4. outerFunction stack frame is popped off the stack.
  // 5. Execution reaches innerFunction body, stack frame is pushed onto stack.
  // 6. Body of innerFunction executes, and its returned value is evaluated.
  // 7. innerFunction stack frame is popped off the stack.
}

{
  // Normal fibonacci function
  function fib(n) {
    if (n < 2) {
      return n;
    }
    return fib(n - 1) + fib(n - 2);
  }
}

{
  // Tail call optimization implementation on fibonacci function
  // prettier-ignore
  "use strict"

  // base case
  function fib(n) {
    return fibImpl(0, 1, n);
  }

  // recursive case
  function fibImpl(a, b, n) {
    if (n === 0) {
      return a;
    }
    return fibImpl(b, a + b, n - 1);
  }
}
