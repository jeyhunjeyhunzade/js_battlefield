{
  let colors = ["red", "green", "blue", "yellow", "purple"];
  let colors2 = colors.slice(1);
  let colors3 = colors.slice(1, 4);
  alert(colors2); // green,blue,yellow,purple
  alert(colors3); // green,blue,yellow
}

{
  //Deletation:
  let colors = ["red", "green", "blue"];
  let removed = colors.splice(0, 1); // remove the first item
  alert(colors); // green,blue
  alert(removed); // red - one item array

  // Insertation:
  removed = colors.splice(1, 0, "yellow", "orange"); // insert two items at position 1
  alert(colors); // green,yellow,orange,blue
  alert(removed); // empty array

  // Replacement:
  removed = colors.splice(1, 1, "red", "purple"); // insert two values, remove one
  alert(colors); // green,red,purple,orange,blue
  alert(removed); // yellow - one item array
}
