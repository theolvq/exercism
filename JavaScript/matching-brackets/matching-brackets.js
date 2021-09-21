export const isPaired = input => {
  const cleanedInput = input.replace(/[\w\s+*-.\\'^/&]/gi, '');
  const bracketStr = '[]{}()';
  const stack = [];

  for (const bracket of cleanedInput) {
    const bracketIndex = bracketStr.indexOf(bracket);
    if (bracketIndex % 2 === 0) stack.push(bracketIndex + 1);
    else if (stack.pop() !== bracketIndex) return false;
  }
  return stack.length === 0;
};
