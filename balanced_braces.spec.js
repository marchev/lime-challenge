const { checkForBalancedBraces } = require('./balanced_braces');

test('invalid input results in error', () => {
  expect(() => {
    checkForBalancedBraces(-1);
  }).toThrow(/invalid input/);
});

test('checkForBalancedBraces works correctly with balanced and unbalanced braces', () => {
  const result = checkForBalancedBraces(["{}[]()", "{[}]}", "[{()}"]);
  expect(result).toEqual(["YES", "NO", "NO"]);
});
