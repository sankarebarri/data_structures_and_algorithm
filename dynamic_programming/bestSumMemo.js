const bestSumMemo = (targetSum, numbers, memo = {}) => {
  //
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let largestCombination = null;
  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderCombination = bestSumMemo(remainder, numbers, memo);
    if (remainderCombination !== null) {
      const combination = [...remainderCombination, num];
      if (
        largestCombination === null ||
        combination.length < largestCombination.length
      ) {
        largestCombination = combination;
      }
    }
  }
  memo[targetSum] = largestCombination;
  return largestCombination;
};

console.log(bestSumMemo(7, [5, 3, 4, 7])); // 7
console.log(bestSumMemo(7, [2, 4])); // null
console.log(bestSumMemo(8, [1, 4, 5])); // [4, 4]
console.log(bestSumMemo(8, [2, 3, 5])); // [3, 5]
console.log(bestSumMemo(100, [1, 2, 5, 25])); // [25, 25, 25, 25]
