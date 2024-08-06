// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let str1 = array1.join('');
  let str2 = array2.join('');

  return Number(str1) + Number(str2);
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const valueString = String(value);
  const valueArray = valueString.split('');
  const valueReverse = Number(valueArray.reverse().join(''));

  return value === valueReverse ? true : false;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (!isNaN(Number(input)) && Number(input) !== 0) {
    return '';
  } else {
    if (input === '' || input === null || input === undefined) {
      return 'Required field';
    } else {
      return 'Must be a number besides 0';
    }
  }
}
