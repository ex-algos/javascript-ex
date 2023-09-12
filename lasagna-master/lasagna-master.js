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

export function quantities(layers) {
  let noodlesCount = 0;
  let sauceCount = 0;

  for (const layer in layers) {
    if (layers[layer] === 'noodles') {
      noodlesCount += 1;
    }

    if (layers[layer] === 'sauce') {
      sauceCount += 1;
    }
  }

  return {
    noodles: 50 * noodlesCount,
    sauce: 0.2 * sauceCount,
  };
}
