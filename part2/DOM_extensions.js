// Focus management
{
  let button = document.getElementById("myButton");
  button.focus();
  console.log(document.activeElement === button); // true
}

{
  let button = document.getElementById("myButton");
  button.focus();
  console.log(document.hasFocus()); // true
}
