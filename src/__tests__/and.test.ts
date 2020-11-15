import makeAnd from '../and';

test('the initial value', () => {
  const and = makeAnd();
  expect(and.next().value).toEqual(0);
  expect(and.next().value).toEqual(0);
});

test('0, 0', () => {
  const and = makeAnd();
  expect(and.next().value).toEqual(0);
  expect(and.next([0, 0]).value).toEqual(0);
  expect(and.next().value).toEqual(0);
});

test('1, 0', () => {
  const and = makeAnd();
  expect(and.next().value).toEqual(0);
  expect(and.next([1, 0]).value).toEqual(0);
  expect(and.next().value).toEqual(0);
});

test('0, 1', () => {
  const and = makeAnd();
  expect(and.next().value).toEqual(0);
  expect(and.next([0, 1]).value).toEqual(0);
  expect(and.next().value).toEqual(0);
});

test('1, 1', () => {
  const and = makeAnd();
  expect(and.next().value).toEqual(0);
  expect(and.next([1, 1]).value).toEqual(1);
  expect(and.next().value).toEqual(1);
});
