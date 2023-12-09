{
  /*
        If the node passed into appendChild() is already part of the document, 
        it is removed from its previous location and placed at the new location.
    */
  let returnedNode = someNode.appendChild(someNode.firstChild);
  alert(returnedNode == someNode.firstChild); // false
  alert(returnedNode == someNode.lastChild); // true
}
