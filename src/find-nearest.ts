/**
 * 
 * @param input 
 * @param values 
 */
export function findNearest(input: number, values: number[] = [3, -20, 1, 8, 7, 4, 11, -3]): number {
  // order array
  const orderedArr = orderArray(values);

  // round number
  if (input < 0) {
    // correctly round negative numbers
    input = -Math.round(-input);
  }
  input = Math.round(input);

  // catch all numbers <= the lowest value in array
  if (input <= orderedArr[0]) {
    return orderedArr[0];
  }

  // catch all numbers greater >= the highest value in array
  if (input >= orderedArr[orderedArr.length - 1]) {
    return orderedArr[orderedArr.length - 1];
  }

  // find closest number to the input value
  for (let i = 0; i < orderedArr.length; i++) {
    if (orderedArr[i] > input) {
      const prev = orderedArr[i - 1];
      const curr = orderedArr[i]
      // Using abs to deal with negative numbers
      return Math.abs(prev - input) < Math.abs(curr - input) ? prev : curr;
    }
  }
}

/**
 * Orders an array of numbers in ascending order.
 * 
 * @param arr 
 */
export function orderArray(arr: number[] = []): number[] {
  let done = false;

  while (!done) {
    done = true;

    for (var i = 1; i < arr.length; i += 1) {
      const curr = arr[i];
      const prev = arr[i - 1];
      if (prev > curr) {
        done = false;
        arr[i - 1] = curr;
        arr[i] = prev;
      }
    }
  }

  return arr;
}