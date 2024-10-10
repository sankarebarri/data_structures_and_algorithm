const countConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return 1;
  let count = 0;
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const numberOfWaysRemaining = countConstruct(
        target.slice(word.length),
        wordBank,
        memo
      );
      count += numberOfWaysRemaining;
    }
  }
  memo[target] = count;
  return memo[target];
};

console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // 1
console.log(countConstruct("skateboard", ["bo", "rd", "ate", "te", "ska"])); // 0
console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"])); // 2
console.log(
  countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
); // 4
console.log(
  countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ])
); // 0
