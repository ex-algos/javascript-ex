// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let totalBirdCount = 0;

  for (let i = 0; i < birdsPerDay.length; i++) {
    totalBirdCount += birdsPerDay[i];
  }

  return totalBirdCount;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let weeks = "";

  // separate weeks by "." symbol

  for (let i = 0; i < birdsPerDay.length; i++) {
    let block = "";

    if ((i + 1) % 7 === 0) {
      block += birdsPerDay[i];
      block += ".";
    } else {
      block += birdsPerDay[i];
    }

    weeks += block;
  }

  let weeksArray = weeks.split(".");
  weeksArray.pop();

  // convert days in string to integers

  let weekDayStrings = [];

  weeksArray.forEach((days) => weekDayStrings.push(days.split("")));

  function convertStringArray(input) {
    let total = [];

    for (let i = 0; i < input.length; i++) {
      total.push(parseInt(input[i]));
    }

    return total;
  }

  // sum selected week's days

  const weekSum = totalBirdCount(convertStringArray(weekDayStrings[week - 1]));

  return weekSum;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  birdsPerDay.forEach((el, index) => {
    if (index === 0 || index % 2 === 0) {
      birdsPerDay[index] = el + 1;
    }
  });

  return birdsPerDay;
}
