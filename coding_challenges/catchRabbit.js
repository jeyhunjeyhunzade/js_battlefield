let pos = 45;
let len = 100;
let found = false;

function step() {
  console.log(`Rabbit started at ${pos}`);
  let prev = pos;

  if (pos === len) {
    pos--;
  } else if (pos === 0) {
    pos++;
  } else {
    if (Math.random > 0.5) {
      pos++;
    } else {
      pos--;
    }
  }

  console.log(`Rabbit jumped from ${prev} to ${pos}`);
}

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

if (!found) {
  console.log("Thought luck :(");
}
