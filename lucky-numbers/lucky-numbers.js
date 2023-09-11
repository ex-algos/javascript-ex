// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  const string1 = array1.join('');
  const string2 = array2.join('');

  return Number(string1) + Number(string2);
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const input = String(value);
  const palindrome = input.split('').reverse().join('');

  if (input === palindrome) {
    return true;
  } else {
    return false;
  }
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  let output = '';

  if (input === '' || input === null || input === undefined) {
    output = 'Required field';
  } else if (Number.isNaN(Number(input)) || Number(input) === 0) {
    output = 'Must be a number besides 0';
  }

  return output;
}
