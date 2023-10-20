{
  // AND
  let found = true;
  let result = found && someUndeclaredVariable; // error occurs here
  console.log(result); // this line never executes

  let found2 = false;
  let result2 = found2 && someUndeclaredVariable; // no error
  console.log(result2); // works
}

{
  // OR
  let found = true;
  let result = found || someUndeclaredVariable; // no error
  console.log(result); // works

  let found2 = false;
  let result2 = found2 || someUndeclaredVariable; // error occurs here
  console.log(result2); // this line never executes
}
