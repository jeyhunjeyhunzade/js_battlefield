//Debouncing and throttling are techniques in javascript to optimise the application and browser performance.

// debounce function
function debounce(callback, limit) {
  let timeout;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback();
    }, limit);
  };
}
// main function
async function queryGoogle(e) {
  // use your own API key in production
  const api = `https://www.googleapis.com/customsearch/v1?key=AIzaSyDDafor7FhfUGTvGpjVdE7Tomnt1Yg6XGg&cx=017576662512468239146:omuauf_lfve&q=${searchInput.value}`;

  const response = await fetch(api);

  // parse the body text as JSON
  const data = await response.json();

  // process the data
  console.log(data);
}
// pass our main function to the debounce function
// the second parameter defines the delay in milliseconds
const debouncedKeyPress = debounce(queryGoogle, 300);
const searchInput = document.getElementById("searchInput");
// call the debounced function when a key is released
searchInput.addEventListener("keyup", debouncedKeyPress);
