// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  // solution 1
  if (false) {
    const chunked = [];

    for (let item of array) {
      const lastItem = chunked[chunked.length - 1];

      if (!lastItem || lastItem.length === size) {
        chunked.push([item]);
      } else {
        lastItem.push(item);
      }
    }

    return chunked;
  }

  if (true) {
    const chunked = [];
    let index = 0;

    while (index < array.length) {
      chunked.push(array.slice(index, index + size));
      index += size;
    }

    return chunked;
  }
}

module.exports = chunk;
