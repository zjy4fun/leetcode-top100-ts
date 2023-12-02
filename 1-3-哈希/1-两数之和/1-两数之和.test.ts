import {describe, expect, test} from '@jest/globals';
import { twoSum } from './1-两数之和'
describe('1-两数之和', () => {
  // 正常情况，有解
  test('Example 1', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  // 正常情况，有解
  test('Example 2', () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });

  // 正常情况，有解
  test('Example 3', () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });

  // 正常情况，无解
  test('No solution', () => {
    expect(twoSum([1, 2, 3, 4], 10)).toEqual([-1, -1]);
  });

  // 正常情况，负数
  test('Negative numbers', () => {
    expect(twoSum([-1, -2, -3, -4, -5], -8)).toEqual([2, 4]);
  });

  // 边缘情况，空数组
  test('Empty array', () => {
    expect(twoSum([], 10)).toEqual([-1, -1]);
  });

  // 边缘情况，只有一个元素
  test('Single element array', () => {
    expect(twoSum([1], 1)).toEqual([-1, -1]);
  });

  // 边缘情况，两个相同的元素
  test('Two identical elements', () => {
    expect(twoSum([1, 1], 2)).toEqual([0, 1]);
  });

  // 边缘情况，target为0
  test('Target is 0', () => {
    expect(twoSum([-1, 2, 3, 4, -2], 0)).toEqual([1, 4]);
  });
});