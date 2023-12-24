// Requests made from foo.com/bar/baz
console.log(window.location.href); // https://foo.com/bar/baz
fetch("qux").then((response) => console.log(response.url));
// https://foo.com/bar/qux

fetch("/qux").then((response) => console.log(response.url));
// https://foo.com/qux

fetch("//qux.com").then((response) => console.log(response.url));
// https://qux.com

fetch("https://qux.com").then((response) => console.log(response.url));
// https://qux.com
