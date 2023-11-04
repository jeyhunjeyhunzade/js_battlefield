//With the bind() method, an object can borrow a method from another object.
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const member = {
  firstName: "Hege",
  lastName: "Nilsen",
};

let fullName = person.fullName.bind(member);
console.log("fullName", fullName());

// ----------------------------------------------------------------
var Button = function (content) {
  this.content = content;
};
Button.prototype.click = function () {
  console.log(this.content + " clicked");
};

var myButton = new Button("OK");
myButton.click(); // OK clicked

var looseClick = myButton.click;
looseClick(); // not bound, 'this' is not myButton - it is the global object: // undefined clicked

var boundClick = myButton.click.bind(myButton);
boundClick(); // bound, 'this' is myButton: // OK clicked
