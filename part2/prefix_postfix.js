{
  // prefix
  let age = 29;
  let anotherAge = --age + 2;
  console.log(age); // 28
  console.log(anotherAge); // 30

  let num1 = 2;
  let num2 = 20;
  let num3 = --num1 + num2;
  let num4 = num1 + num2;
  console.log(num3); // 21
  console.log(num4); // 21
}

// ----------------------------------------------------------------

{
  //postfix
  let num1 = 2;
  let num2 = 20;
  let num3 = num1-- + num2;
  let num4 = num1 + num2;
  console.log(num3); // 22
  console.log(num4); // 21
}
