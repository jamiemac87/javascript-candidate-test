import { findNearest } from '../src/find-nearest';

describe('findNearest()', () => {
  it('should find -20 if given -25', () => {
    // [3, -20, 1, 8, 7, 4, 11, -3]
    const result = findNearest(-25);
    expect(result).toEqual(-20);
  });

  it('should return -20 if given -11.5', () => {
    const result = findNearest(-11.5);
    expect(result).toEqual(-20);
  });

  it('should return -3 if given -11.4', () => {
    const result = findNearest(-11.4);
    expect(result).toEqual(-3);
  });

  it('should return 11 if given 15', () => {
    const result = findNearest(15);
    expect(result).toEqual(11);
  });

  it('should return 8 if given 7.5', () => {
    const result = findNearest(7.5);
    expect(result).toEqual(8);
  });

  it('should return 7 if given 7.4', () => {
    const result = findNearest(7.4);
    expect(result).toEqual(7);
  });
});