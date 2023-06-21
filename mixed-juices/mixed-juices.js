// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
    case "Pure Strawberry Joy":
      return 0.5;
      break;
    case "Energizer":
      return 1.5;
      break;
    case "Green Garden":
      return 1.5;
      break;
    case "Tropical Island":
      return 3;
      break;
    case "All or Nothing":
      return 5;
      break;
    default:
      return 2.5;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  const limeWedges = {
    small: 6,
    medium: 8,
    large: 10,
  };

  let wedgesPossible = 0;
  let limesNeeded = 0;

  for (let i = 0; i < limes.length; i++) {
    if (wedgesNeeded > wedgesPossible) {
      wedgesPossible += limeWedges[limes[i]];
      limesNeeded += 1;
    }
  }

  return limesNeeded;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let prepTime = 0;
  let ordersLeft = [...orders];

  for (let i = 0; i < orders.length; i++) {
    prepTime += timeToMixJuice(orders[i]);

    if (timeLeft < prepTime) {
      ordersLeft.shift();
    }
  }

  return ordersLeft;
}
