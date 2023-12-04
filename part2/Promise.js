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

//----------------------------------------------------------------

// Cancelling a promise
{
  <>
    <button id="start">Start</button>
    <button id="cancel">Cancel</button>
  </>;

  class CancelToken {
    constructor(cancelFn) {
      this.promise = new Promise((resolve, reject) => {
        cancelFn(() => {
          setTimeout(console.log, 0, "delay cancelled");
          resolve();
        });
      });
    }
  }

  const startButton = document.querySelector("#start");
  const cancelButton = document.querySelector("#cancel");

  function cancellableDelayedResolve(delay) {
    setTimeout(console.log, 0, "set delay");
    return new Promise((resolve, reject) => {
      const id = setTimeout(() => {
        setTimeout(console.log, 0, "delayed resolve");
        resolve();
      }, delay);
      const cancelToken = new CancelToken((cancelCallback) =>
        cancelButton.addEventListener("click", cancelCallback)
      );
      cancelToken.promise.then(() => clearTimeout(id));
    });
  }

  startButton.addEventListener("click", () => cancellableDelayedResolve(1000));
}

// Promise Progress Notifications
{
  class TrackablePromise extends Promise {
    constructor(executor) {
      const notifyHandlers = [];
      super((resolve, reject) => {
        return executor(resolve, reject, (status) => {
          notifyHandlers.map((handler) => handler(status));
        });
      });
      this.notifyHandlers = notifyHandlers;
    }
    notify(notifyHandler) {
      this.notifyHandlers.push(notifyHandler);
      return this;
    }
  }

  let p = new TrackablePromise((resolve, reject, notify) => {
    function countdown(x) {
      if (x > 0) {
        notify(`${20 * x}% remaining`);
        setTimeout(() => countdown(x - 1), 1000);
      } else {
        resolve();
      }
    }
    countdown(5);
  });

  p.notify((x) => setTimeout(console.log, 0, "progress:", x));
  p.then(() => setTimeout(console.log, 0, "completed"));

  // (after 1s) 80% remaining
  // (after 2s) 60% remaining
  // (after 3s) 40% remaining
  // (after 4s) 20% remaining
  // (after 5s) completed
}

{
  // An async function will always return a promise object

  async function foo() {
    console.log(1);
    return 3;
  }
  foo().then(console.log);

  console.log(2);

  // 1 // 2 // 3
}

{
  async function foo() {
    let p = new Promise((resolve, reject) => setTimeout(resolve, 1000, 3));
    console.log(await p);
  }
  foo(); // 3
}

{
  // Asynchronously print "baz" after 1000ms
  async function baz() {
    await new Promise((resolve, reject) => setTimeout(resolve, 1000));
    console.log("baz");
  }
  baz();
  // baz <after 1000ms>
}

{
  // Implementing Sleep()

  async function sleep(delay) {
    return new Promise((resolve) => setTimeout(resolve, delay));
  }

  async function foo() {
    const t0 = Date.now();
    await sleep(1500); // sleep for ~1500ms
    console.log(Date.now() - t0);
  }
  foo(); // 1502
}

// Maximizing Parallelization
{
  async function randomDelay(id) {
    // Delay between 0 and 1000 ms
    const delay = Math.random() * 1000;
    return new Promise((resolve) =>
      setTimeout(() => {
        console.log(`${id} finished`);
        resolve();
      }, delay)
    );
  }

  // not paralel
  async function foo() {
    const t0 = Date.now();
    await randomDelay(0);
    await randomDelay(1);
    await randomDelay(2);
    await randomDelay(3);
    await randomDelay(4);
    console.log(`${Date.now() - t0}ms elapsed`);
  }
  foo();
  // 0 finished
  // 1 finished
  // 2 finished
  // 3 finished
  // 4 finished
  // 2219ms elapsed

  // paralel
  async function fooParalel() {
    const t0 = Date.now();
    const p0 = randomDelay(0);
    const p1 = randomDelay(1);
    const p2 = randomDelay(2);
    const p3 = randomDelay(3);
    const p4 = randomDelay(4);

    await p0;
    await p1;
    await p2;
    await p3;
    await p4;

    setTimeout(console.log, 0, `${Date.now() - t0}ms elapsed`);
  }

  fooParalel();
  // 1 finished
  // 4 finished
  // 3 finished
  // 0 finished
  // 2 finished
  // 2219ms elapsed

  async function fooParalelMoreOptimized() {
    const t0 = Date.now();
    const promises = Array(5)
      .fill(null)
      .map((_, i) => randomDelay(i));
    for (const p of promises) {
      await p;
    }

    console.log(`${Date.now() - t0}ms elapsed`);
  }

  fooParalelMoreOptimized();
  // 4 finished
  // 2 finished
  // 1 finished
  // 0 finished
  // 3 finished
  // 877ms elapsed
}
