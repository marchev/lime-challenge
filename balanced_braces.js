const MATCHING_BRACES = {
  ']':'[',
  "}":"{",
  ")":"("
};
const YES = "YES";
const NO = "NO";

exports.checkForBalancedBraces = (arr) => {
  validateInput(arr);

  let results = [];
  for (currentInput of arr) {
  	const currentResult =  checkBraces(currentInput);
    results.push(currentResult);
  }

  return results;
}

validateInput = (arr) => {
  if (!Array.isArray(arr)) {
    throw "invalid input";
  }
}

checkBraces = (input) => {
  let openingBraces = [];
  for (currentChar of input) {
  	if (isOpeningBrace(currentChar)) {
      openingBraces.push(currentChar);
  	} else {
      const lastOpeningBrace = openingBraces.pop();
      if (lastOpeningBrace != getMatchingOpeningBrace(currentChar)) {
      	return NO;
      }
  	}
  }	

  return !openingBraces.length ? YES : NO;
}

getMatchingOpeningBrace = (closingBrace) => MATCHING_BRACES[closingBrace];

isOpeningBrace = (input) => Object.values(MATCHING_BRACES).includes(input);