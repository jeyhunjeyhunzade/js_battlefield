var Foo = (function () {
  var bar = "baz";
  var baz = function () {
    console.log(bar);
  };
  return { bar: bar, baz: baz };
})();

var Foo = (function () {
  return {
    bar: "baz",
  };
})();
Foo.baz = (function () {
  return {
    qux: function () {
      console.log("baz");
    },
  };
})();
console.log(Foo.bar); // 'baz' Foo.baz.qux(); // 'baz'

{
  var globalBar = "baz";
  var Foo = (function (bar) {
    return {
      bar: bar,
      baz: function () {
        console.log(bar);
      },
    };
  })(globalBar);
  console.log(Foo.bar); // 'baz'
  Foo.baz(); // 'baz'
}

{
  // Augment Foo to add alert method
  var Foo = (function (FooModule) {
    FooModule.baz = function () {
      console.log(FooModule.bar);
    };
    return FooModule;
  })(Foo || {});

  // Augment Foo to add data
  var Foo = (function (FooModule) {
    FooModule.bar = "baz";
    return FooModule;
  })(Foo || {});

  console.log(Foo.bar); // 'baz'
  Foo.baz(); // 'baz'
}
