{
  // they are same
  let p1 = new Promise((resolve, reject) => resolve());
  let p2 = Promise.resolve();
}

{
  // they are same
  let p1 = new Promise((resolve, reject) => reject());
  let p2 = Promise.reject();
}

{
  try {
    throw new Error("foo");
  } catch (e) {
    console.log(e); // Error: foo
  }

  try {
    Promise.reject(new Error("bar"));
  } catch (e) {
    console.log(e); // Uncaught (in promise) Error: bar
  }
}

{
  // These are equivalent
  let p3 = p1.then(() => undefined);
  let p4 = p1.then(() => {});
  let p5 = p1.then(() => Promise.resolve());

  setTimeout(console.log, 0, p3); // Promise <resolved>: undefined
  setTimeout(console.log, 0, p4); // Promise <resolved>: undefined
  setTimeout(console.log, 0, p5); // Promise <resolved>: undefined
}

{
  // These are equivalent:
  let p6 = p1.then(() => "bar");
  let p7 = p1.then(() => Promise.resolve("bar"));

  setTimeout(console.log, 0, p6); // Promise <resolved>: bar
  setTimeout(console.log, 0, p7); // Promise <resolved>: bar
}

{
  let p11 = p1.then(() => Error("qux"));
  setTimeout(console.log, 0, p11); // Promise <resolved>: Error: qux

  let p10 = p1.then(() => {
    throw "baz";
  }); // Uncaught (in promise) baz
  setTimeout(console.log, 0, p10); // Promise <rejected> baz
}

{
  // These are equivalent
  let p3 = p1.then(null, () => undefined);
  let p4 = p1.then(null, () => {});
  let p5 = p1.then(null, () => Promise.resolve());

  // Promise <resolved>: undefined

  // These are equivalent
  let p6 = p1.then(null, () => "bar");
  let p7 = p1.then(null, () => Promise.resolve("bar"));
  // Promise <resolved>: bar
}

{
  let p = Promise.reject();
  let onRejected = function (e) {
    setTimeout(console.log, 0, "rejected");
  };
  // These two reject handlers behave identically:
  p.then(null, onRejected); // rejected
  p.catch(onRejected); // rejected
}

{
  let p1 = Promise.resolve("foo");
  // These all act as a passthrough

  let p2 = p1.finally();
  let p3 = p1.finally(() => undefined);
  let p4 = p1.finally(() => {});
  let p5 = p1.finally(() => Promise.resolve());
  let p6 = p1.finally(() => "bar");
  let p7 = p1.finally(() => Promise.resolve("bar"));
  let p8 = p1.finally(() => Error("qux"));
  // and console Promise <resolved>: foo
  setTimeout(console.log, 0, p2); // Promise <resolved>: foo
  setTimeout(console.log, 0, p3); // Promise <resolved>: foo
  setTimeout(console.log, 0, p4); // Promise <resolved>: foo
  setTimeout(console.log, 0, p5); // Promise <resolved>: foo
  setTimeout(console.log, 0, p6); // Promise <resolved>: foo ...

  // Promise.resolve() preserves the returned promise
  let p9 = p1.finally(() => new Promise(() => {}));

  // Uncaught (in promise): undefined
  let p10 = p1.finally(() => Promise.reject());

  setTimeout(console.log, 0, p9); // Promise <pending>
  setTimeout(console.log, 0, p10); // Promise <rejected>: undefined
}

{
  let synchronousResolve;

  // Create a promise and capture the resolve function in a local variable
  let p = new Promise((resolve) => {
    synchronousResolve = function () {
      console.log("1: invoking resolve()");
      resolve();
      console.log("2: resolve() returns");
    };
  });

  p.then(() => console.log("4: then() handler executes"));

  synchronousResolve();
  console.log("3: synchronousResolve() returns");

  // Actual output:
  // 1: invoking resolve()
  // 2: resolve() returns
  // 3: synchronousResolve() returns
  // 4: then() handler executes
}

//----------------------------------------------------------------

// Parallel Promise Composition with Promise.all() and Promise.race()

/*
    Promise.all() static method creates an all-or-nothing promise 
    that resolves only once every promise in a collection of promises resolves.
*/

{
  // Single rejection causes rejection of composed promise let p2 = Promise.all([
  let p2 = Promise.all([
    Promise.resolve(),
    Promise.reject(),
    Promise.resolve(),
  ]);
  setTimeout(console.log, 0, p2); // Promise <rejected>
  // Uncaught (in promise) undefined
}

{
  let p = Promise.all([
    Promise.resolve(3),
    Promise.resolve(),
    Promise.resolve(4),
  ]);
  p.then((values) => setTimeout(console.log, 0, values)); // [3, undefined, 4]
}

/*
    The Promise.race() static method creates a promise that will mirror whichever 
    promise inside a collection of promises reaches a resolved or rejected state first
*/

{
  let p1 = Promise.race([
    Promise.resolve(3),
    new Promise((resolve, reject) => setTimeout(reject, 1000)),
  ]);
  setTimeout(console.log, 0, p1); // Promise <resolved>: 3
}

{
  let p1 = Promise.race([
    Promise.reject(4),
    new Promise((resolve, reject) => setTimeout(reject, 1000)),
  ]);
  setTimeout(console.log, 0, p1); // Promise <rejected>: 4
}

//----------------------------------------------------------------

{
  // Funtion composition without Promise

  function addTwo(x) {
    return x + 2;
  }
  function addThree(x) {
    return x + 3;
  }
  function addFive(x) {
    return x + 5;
  }

  function addTen(x) {
    return addFive(addTwo(addThree(x)));
  }
  console.log(addTen(7)); // 17
}

{
  // Funtion composition with Promise
  function addTwo(x) {
    return x + 2;
  }
  function addThree(x) {
    return x + 3;
  }
  function addFive(x) {
    return x + 5;
  }

  function addTen(x) {
    return Promise.resolve(x).then(addTwo).then(addThree).then(addFive);
  }

  // or with Array.reduce
  function addTenWithReduce(x) {
    return [addTwo, addThree, addFive].reduce(
      (promise, fn) => promise.then(fn),
      Promise.resolve(x)
    );
  }

  // generalized version of composition function with Promise
  function compose(...fns) {
    return (x) =>
      fns.reduce((promise, fn) => promise.then(fn), Promise.resolve(x));
  }
}

{
  // Function composition with async/await
  async function addTwo(x) {
    return x + 2;
  }

  async function addThree(x) {
    return x + 3;
  }

  async function addFive(x) {
    return x + 5;
  }

  async function addTen(x) {
    try {
      const resultAfterAddTwo = await addTwo(x);
      const resultAfterAddThree = await addThree(resultAfterAddTwo);
      const finalResult = await addFive(resultAfterAddThree);
      return finalResult;
    } catch (error) {
      // Handle errors if necessary
      console.error(error);
      throw error;
    }
  }
}
