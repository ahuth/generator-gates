import { invert } from '../signal';

test('invert', () => {
  expect(invert(0)).toEqual(1);
  expect(invert(1)).toEqual(0);
  expect(invert(invert(0))).toEqual(0);
});
