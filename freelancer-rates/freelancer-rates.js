/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
export function dayRate(ratePerHour) {
    return ratePerHour * 8;
}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */
export function daysInBudget(budget, ratePerHour) {
    return Math.floor(budget / dayRate(ratePerHour));
}

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
    function discounter() {
        return 1 - discount;
    }

    const BILLABLE_DAYS_IN_MONTH = 22;

    let price;

    if (numDays % BILLABLE_DAYS_IN_MONTH === 0) {
        price = dayRate(ratePerHour) * numDays * discounter();
    } else {
        let daysLeft = numDays % BILLABLE_DAYS_IN_MONTH;
        let fullDayPrice = dayRate(ratePerHour) * daysLeft;
        let discountedMonths = 0;

        for (
            let i = BILLABLE_DAYS_IN_MONTH;
            i < numDays;
            i += BILLABLE_DAYS_IN_MONTH
        ) {
            discountedMonths +=
                dayRate(ratePerHour) * BILLABLE_DAYS_IN_MONTH * discounter();
        }

        price = fullDayPrice + discountedMonths;
    }

    return Math.ceil(price);
}
