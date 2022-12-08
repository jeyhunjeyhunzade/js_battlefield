// Use function in the global scope and for Object.prototype properties.
// Use class for object constructors.
// Use => everywhere else.

// So this in arrow function will always take his value from the outside (Lexical scope), not where it called!!

//Arrow functions in ES6 have at least two limitations: 
    // Don't work with new and cannot be used when creating prototype
    // Fixed this bound to scope at initialisation


//Scope safety: When arrow functions are used consistently, everything is guaranteed to use the same thisObject as the root
//Compactness: Arrow functions are easier to read and write

// Clarity: When almost everything is an arrow function, any regular function immediately sticks out for defining the scope. 
// A developer can always look up the next-higher function statement to see what the thisObject is.

//Why always use regular functions on the global scope or module scope?
    // To indicate a function that should not access the thisObject.
    // Function declarations are hoisted
    // The window object (global scope) is best addressed explicitly.

    // Many Object.prototype definitions live in the global scope (think String.prototype.truncate, etc.) and 
    // those generally have to be of type function anyway. Consistently using function on the global scope helps avoid errors.