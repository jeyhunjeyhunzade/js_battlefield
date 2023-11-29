{
  const target = { id: "target" };
  const handler = {};
  const proxy = new Proxy(target, handler);

  // The 'id' property will access the same value
  console.log(target.id); // target
  console.log(proxy.id); // target

  // Assignment to a target property changes both since
  // both are accessing the same value.
  target.id = "foo";
  console.log(target.id); // foo
  console.log(proxy.id); // foo

  // Assignment to a proxy property changes both since
  // this assignment is conferred to the target object.
  console.log(target.id); // bar
  console.log(proxy.id); // bar

  // The hasOwnProperty() method is effectively applied
  // to the target in both cases.
  console.log(target.hasOwnProperty("id")); // false
  console.log(proxy.hasOwnProperty("id")); // false

  // The instanceof operator is effectively applied
  // to the target in both cases.
  console.log(target instanceof Proxy); // false
  console.log(proxy instanceof Proxy); // false

  // Strict object equality can still be used to
  // differentiate proxy from target.
  console.log(target === proxy); // false
}

//--------------------------------------------------------------------------

// Trap
{
  const target = { foo: "bar" };

  const handler = {
    // Traps are keyed by method name inside the handler object
    get() {
      return "handler override";
    },
  };

  const proxy = new Proxy(target, handler);
  console.log(target.foo); // bar
  console.log(proxy.foo); // handler override
}

{
  const target = { foo: "bar" };
  const handler = {
    get(trapTarget, property, receiver) {
      console.log(trapTarget === target);
      console.log(property);
      console.log(receiver === proxy);
      return trapTarget[property]; // returns bar
    },
  };

  const proxy = new Proxy(target, handler);

  proxy.foo;
  // true
  // foo
  // true
}

//--------------------------------------------------------------------------

// Reflect API
{
  const target = { foo: "bar" };
  const handler = {
    get() {
      return Reflect.get(...arguments);
    },

    // succint version
    // get: Reflect.get
  };

  const proxy = new Proxy(target, handler);
  console.log(proxy.foo); // bar
  console.log(target.foo); // bar
}

/*
    If you wish to create a true passthrough proxy that traps every available method and forwards 
    each one to its corresponding Reflect API function, 
    defining an explicit handler object is not required:
*/
{
  const target = { foo: "bar" };

  const proxy = new Proxy(target, Reflect);

  console.log(proxy.foo); // bar
  console.log(target.foo); // bar
}

{
  const target = { foo: "bar", baz: "qux" };

  const handler = {
    get(trapTarget, property, receiver) {
      let decoration = "";
      if (property === "foo") {
        decoration = "!!!";
      }
      return Reflect.get(...arguments) + decoration;
    },
  };

  const proxy = new Proxy(target, handler);

  console.log(proxy.foo); // bar!!!
  console.log(target.foo); // bar
  console.log(proxy.baz); // qux
  console.log(target.baz); // qux
}

{
  // Revoke
  const target = { foo: "bar" };
  const handler = {
    get() {
      return "intercepted";
    },
  };

  const { proxy, revoke } = Proxy.revocable(target, handler);

  console.log(proxy.foo); // intercepted
  console.log(target.foo); // bar
  revoke();
  console.log(proxy.foo); // TypeError
}
