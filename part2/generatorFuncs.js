{
  function* generatorFn() {
    yield "foo";
    yield "bar";
    return "baz";
  }
  let generatorObject = generatorFn();
  console.log(generatorObject.next()); // { done: false, value: 'foo' }
  console.log(generatorObject.next()); // { done: false, value: 'bar' }
  console.log(generatorObject.next()); // { done: true, value: 'baz' }
}

{
  let generatorObject1 = generatorFn();
  let generatorObject2 = generatorFn();
  console.log(generatorObject1.next()); // { done: false, value: 'foo' }
  console.log(generatorObject2.next()); // { done: false, value: 'foo' }
  console.log(generatorObject2.next()); // { done: false, value: 'bar' }
  console.log(generatorObject1.next()); // { done: false, value: 'bar' }
}

{
  // valid
  function* validGeneratorFn() {
    yield;
  }
  // invalid
  function* invalidGeneratorFnA() {
    function a() {
      yield;
    }
  }
  // invalid
  function* invalidGeneratorFnB() {
    const b = () => {
      yield;
    };
  }
  // invalid
  function* invalidGeneratorFnC() {
    (() => {
      yield;
    })();
  }
}

{
  function* generatorFn() {
    yield 1;
    yield 2;
    yield 3;
  }
  for (const x of generatorFn()) {
    console.log(x);
  }
  // 1 // 2 // 3
}

{
  function* generatorFn(initial) {
    console.log(initial);
    console.log(yield);
    console.log(yield);
  }
  let generatorObject = generatorFn("foo");
  generatorObject.next("bar"); // foo
  generatorObject.next("baz"); // baz
  generatorObject.next("qux"); // qux
}

{
  function* generatorFn() {
    return yield "foo";
  }
  let generatorObject = generatorFn();
  console.log(generatorObject.next());
  console.log(generatorObject.next("bar")); // { done: true, value: 'bar' }
}

{
  function* generatorFn() {
    yield* [1, 2, 3];
  }
  let generatorObject = generatorFn();
  for (const x of generatorFn()) {
    console.log(x);
  }
  // 1 // 2 // 3
}

{
  function* generatorFn() {
    yield* [1, 2];
    yield* [3, 4];
    yield* [5, 6];
  }
  for (const x of generatorFn()) {
    console.log(x);
  }
  // 1 // 2 // 3 // 4 // 5 // 6
}

{
  function* nTimes(n) {
    if (n > 0) {
      yield* nTimes(n - 1);
      yield n - 1;
    }
  }
  for (const x of nTimes(3)) {
    console.log(x);
  }
  // 0 // 1 // 2
}

{
  function* generatorFn() {
    for (const x of [1, 2, 3]) {
      yield x;
    }
  }

  const g = generatorFn();
  console.log(g.next()); // { done: false, value: 1 }
  console.log(g.return(4)); // { done: true, value: 4 }
  console.log(g.next()); // { done: true, value: undefined }
  console.log(g.next()); // { done: true, value: undefined }
  console.log(g.next()); // { done: true, value: undefined }
}

{
  function* generatorFn() {
    for (const x of [1, 2, 3]) {
      yield x;
    }
  }
  const g = generatorFn();
  console.log(g); // generatorFn {<suspended>}
  try {
    g.throw("foo");
  } catch (e) {
    console.log(e); // foo }
  }
  console.log(g); // generatorFn {<closed>}
}

{
  function* generatorFn() {
    for (const x of [1, 2, 3]) {
      try {
        yield x;
      } catch (e) {}
    }
  }
  const g = generatorFn();
  console.log(g.next()); // { done: false, value: 1}
  g.throw("foo");
  console.log(g.next()); // { done: false, value: 3}
}
