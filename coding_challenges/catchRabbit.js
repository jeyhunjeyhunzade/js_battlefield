let pos = 89;
let len = 100;
let found = false;

console.log(`Rabbit started at ${pos}`);
function step() {
  let prev = pos;

  if (pos === len) {
    pos--;
  } else if (pos === 0) {
    pos++;
  } else {
    if (Math.random() > 0.5) {
      pos++;
    } else {
      pos--;
    }
  }

  console.log(`Rabbit jumped from ${prev} to ${pos}`);
}

// if you have only one chance to checking the hole every time:
if (false) {
  for (let i = 0; i < len; i++) {
    let attempt = i;

    if (attempt === pos) {
      found = true;
      console.log(`Found the rabbit at ${pos}`);
      break;
    }
    step();
  }

  if (!found) {
    for (let i = 1; i < len; i++) {
      let attempt = i;

      if (attempt === pos) {
        found = true;
        console.log(`Found the rabbit at ${pos}`);
        break;
      }
      step();
    }
  }
}

// if you have multiple chances to checking the holes every time:
if (true) {
  for (let i = 0; i < len; i++) {
    let attempt = i;

    if (attempt === pos) {
      found = true;
      console.log(`Found the rabbit at ${pos}`);
      break;
    } else if (attempt - 1 === pos || attempt + 1 === pos) {
      found = true;
      console.log(`Found the rabbit at ${pos}`);
      break;
    }
    step();
  }
}

if (!found) {
  console.log("Thought luck :(");
}
