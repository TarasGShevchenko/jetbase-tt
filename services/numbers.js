function findMissingNumbers(numbers) {
  const n = numbers.length + 2; // sequence length

  // Create an object to track the numbers present
  const presentMap = {};
  numbers.forEach(num => presentMap[num] = true);

  // Looking for two missing numbers
  let missing1, missing2;
  for (let i = 1; i <= n; i++) {
    if (!presentMap[i]) {
      if (missing1 === undefined) {
        missing1 = i;
      } else {
        missing2 = i;
        break;
      }
    }
  }

  return [missing1, missing2];
}

function complexity(numbers) {
  const n = numbers.length;

  if (n === 1) return 'O(n)'

  // If we just go through all the numbers in the array once and add them up, it's O(n)
  // If we sort the array first and then iterate through it, it's O(n log n + n)

  // In this case, if we have an array of numbers, then most often we will go through it once, which gives us O(n) time complexity.

  return 'O(n)';
}

module.exports = {
  findMissingNumbers,
  complexity
};
