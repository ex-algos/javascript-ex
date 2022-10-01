/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the front door.
 *
 * @param {string} line
 * @returns {string}
 */
export function frontDoorResponse(line) {
    return line[0];
}

/**
 * Collect string input and capitalize full text.
 *
 * @param {string} word
 * @returns {string}
 */
function capitalizer(word) {
    let lowerWord = word.toLowerCase();
    let firstLetter = lowerWord.slice(0, 1).toUpperCase();
    let restOfWord = lowerWord.slice(1, lowerWord.length);

    let fullWord = firstLetter + restOfWord;
    return fullWord;
}

/**
 * Format the password for the front-door, given the response
 * letters.
 *
 * @param {string} word the letters you responded with before
 * @returns {string} the front door password
 */
export function frontDoorPassword(word) {
    return capitalizer(word);
}

/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the back door.
 *
 * @param {string} line
 * @returns {string}
 */
export function backDoorResponse(line) {
    line = line.trim();
    return line[line.length - 1];
}

/**
 * Format the password for the back door, given the response
 * letters.
 *
 * @param {string} word the letters you responded with before
 * @returns {string} the back door password
 */
export function backDoorPassword(word) {
    return `${capitalizer(word)}, please`;
}
