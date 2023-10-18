{
  // counter.js
  let i = 0;
  function timedCount() {
    i = i + 1;
    postMessage(i);
    setTimeout("timedCount()", 500);
  }
  timedCount();
}

{
  // web_worker_example.js
  if (typeof w == "undefined") {
    w = new Worker("counter.js");
  }

  w.onmessage = function (event) {
    document.getElementById("message").innerHTML = event.data;
  };

  //   w.terminate(); terminating the worker
  //   w = undefined;  Reuse the Web Worker
}
