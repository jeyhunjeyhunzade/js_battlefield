/* Server-sent events (SSE) is a server push technology enabling a browser to 
receive automatic updates from a server via HTTP connection without resorting to polling */

if (typeof EventSource !== "undefined") {
  var source = new EventSource("sse_generator.js");
  source.onmessage = function (event) {
    document.getElementById("output").innerHTML += event.data + "<br>";
  };
}
