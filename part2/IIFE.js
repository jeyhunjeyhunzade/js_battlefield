/* The primary reason to use an IIFE is to obtain data privacy because any variables declared within the 
IIFE cannot be accessed by the outside world */
(function () {
  var message = "IIFE";
  console.log(message);
})();
console.log(message); //Error: message is not defined
