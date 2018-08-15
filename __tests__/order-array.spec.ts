import { orderArray } from "../src/find-nearest";

describe('order array', () => {
  it('should order an array of numbers lowest to highest', () => {
    const arr = [3, -20, 1, 8, 7, 4, 11, -3];
    const result = orderArray(arr);
    expect(result).toEqual([-20, -3, 1, 3, 4, 7, 8, 11]);
  });
});