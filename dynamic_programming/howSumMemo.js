const howSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const targetRemainder = howSum(remainder, numbers, memo);
    if (targetRemainder !== null) {
      memo[targetSum] = [...targetRemainder, num];
      return memo[targetSum];
    }
  }
  memo[targetSum] = null;
  return null;
};

console.log(howSum(7, [3, 2])); // [2, 2, 3]
console.log(howSum(7, [5, 3, 4, 7])); // [4, 3]
console.log(howSum(7, [2, 4])); // null
console.log(howSum(8, [3, 2, 5])); // [2, 3, 3]
console.log(howSum(8, [2, 3, 5])); // [2, 2, 2, 2]
console.log(howSum(8, [5, 3, 2])); // [3, 5]
console.log(howSum(300, [7, 14])); // null
console.log(howSum(600, [7, 14])); // null
