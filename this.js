function foo(){
	var a =2 ;
	this.bar();
}

function bar (){
	console.log(this.a);
}

foo();   //undefined

// 1- Default Binding:
var myFunction = function() {
    console.log(this);
 }
 
 myFunction();    // Window


 var myFunction = function() {
    console.log(this.a);
 }
 
 var a = 5 ;
 myFunction();    //5  


 

 // Implicit binding
function foo(){
	console.log(this.a);
}

var obj = {
	a:2,
	foo:foo
};

obj.foo();  // 2 



var john = {
	name: 'John',
	greet: function(person) {
      console.log("Hi " + person +", my name is " + this.name);
	}
}

john.greet("Mark");  // Hi Mark, my name is John

var fx = john.greet;
fx("Mark");   // Hi Mark, my name is



//3- Explicit Binding:
//     call
function greet() {
	console.log(this.name);
}

var person = {
	name:'Alex'
}

greet.call(person, ...args); // Alex

//      bind
function greet() {
	console.log(this.name);
}

var person = {
	name:'Alex'
}

greet.apply(person, [args]); // Alex