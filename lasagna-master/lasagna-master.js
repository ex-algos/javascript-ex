/// <reference path="./global.d.ts" />
// @ts-check

export function cookingStatus(remainingTime) {
  const invalid = null || typeof remainingTime !== 'number';

  if (remainingTime === undefined) {
    return 'You forgot to set the timer.';
  } else {
    if (remainingTime === invalid) {
      return 'Timer input is invalid.';
    } else {
      if (remainingTime === 0) {
        return 'Lasagna is done.';
      } else {
        return 'Not done, please wait.';
      }
    }
  }
}

export function preparationTime(layers, timePerLayer = 2) {
  return layers.length * timePerLayer;
}
