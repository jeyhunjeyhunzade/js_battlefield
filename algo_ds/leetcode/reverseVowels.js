function reverseVowels(s) {
  const vowels = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"];
  const arrayedFormat = [...s];
  let leftPointer = 0;
  let rightPointer = arrayedFormat.length - 1;

  while (leftPointer < rightPointer) {
    if (!vowels.includes(arrayedFormat[leftPointer])) {
      leftPointer++;
    }
    if (!vowels.includes(arrayedFormat[rightPointer])) {
      rightPointer--;
    }
    if (
      vowels.includes(arrayedFormat[leftPointer]) &&
      vowels.includes(arrayedFormat[rightPointer])
    ) {
      [arrayedFormat[leftPointer], arrayedFormat[rightPointer]] = [
        arrayedFormat[rightPointer],
        arrayedFormat[leftPointer],
      ];
      leftPointer++;
      rightPointer--;
    }
  }

  return arrayedFormat.join("");
}
