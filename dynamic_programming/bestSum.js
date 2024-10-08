const bestSum = (targetSum, numbers) => {
  //
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let largestCombination = null;
  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderCombination = bestSum(remainder, numbers);
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
  return largestCombination;
};

console.log(bestSum(7, [5, 3, 4, 7])); // 7
console.log(bestSum(8, [1, 4, 5])); // [4, 4]
console.log(bestSum(8, [2, 3, 5])); // [3, 5]
