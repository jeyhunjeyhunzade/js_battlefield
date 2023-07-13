// garbage collection optimization
function createPerson(name) {
  let localPerson = new Object();
  localPerson.name = name;
  return localPerson;
}
let globalPerson = createPerson("Nicholas");
// do something with globalPerson
globalPerson = null; // it will be reclaimed the next time garbage collection occurs.
