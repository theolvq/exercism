//helper functions for easier reading and keeping code DRY
const removeNonLetters = string => [...string.replace(/[^a-z]/gi, '')];
const removeNonDigits = string => [...string.replace(/[^0-9]/gi, '')];
const removeSpaces = string => string.replace(/\s/gi, '');
const checkForAllCaps = array => array.every(letter => /[A-Z]/g.test(letter));
const checkForDigits = array => array.some(char => /\d/.test(char));
const isQuestion = string => /\?$/.test(string);

export const hey = message => {
  //helper constants for easier reading and keeping code DRY
  const letters = removeNonLetters(message);
  const digits = removeNonDigits(message);
  const noSpace = removeSpaces(message);

  if (isQuestion(noSpace))
    if (
      checkForAllCaps(letters) &&
      !checkForDigits(digits) &&
      letters.length > 0
    )
      return "Calm down, I know what I'm doing!";
    else return 'Sure.';
  else if (checkForAllCaps(letters) && letters.length > 0)
    return 'Whoa, chill out!';
  else if (noSpace.length === 0) return 'Fine. Be that way!';

  return 'Whatever.';
};
