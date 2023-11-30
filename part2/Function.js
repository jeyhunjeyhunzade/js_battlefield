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
