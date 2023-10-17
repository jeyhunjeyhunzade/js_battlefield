//Closures are frequently used in JavaScript for object data privacy, in event handlers and callback functions,
// and in partial applications, currying, and other functional programming patterns.

// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state
// (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function.

//In JavaScript, closures are created every time a function is created, at function creation time.

// closures are the primary mechanism used to enable data privacy

//two common uses for closure

//Application: The process of applying a function to its arguments in order to produce a return value.
//Partial Application: The process of applying a function to some of its arguments:

const partialApply = (fn, ...fixedArgs) => {
  return function (...remainingArgs) {
    return fn.apply(this, fixedArgs.concat(remainingArgs));
  };
};

const add = (a, b) => a + b;
const add10 = partialApply(add, 10); //`10` becomes a fixed parameter remembered inside the `add10()` closure scope.
add10(5); //15
