//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (colorInputs) => {
  let numberString = "";

  for (let colIndex = 0; colIndex < 2; colIndex++) {
    for (let i = 0; i < COLORS.length; i++) {
      if (COLORS[i] === colorInputs[colIndex]) {
        numberString += i;
      }
    }
  }

  const output = parseInt(numberString);
  return output;
};

const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
];
