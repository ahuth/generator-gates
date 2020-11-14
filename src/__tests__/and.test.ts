import makeAnd from '../and';

test('the initial value', () => {
  const and = makeAnd();
  expect(and.next().value).toEqual(0);
  expect(and.next().value).toEqual(0);
});

test('setting a single input', () => {
  const and = makeAnd();
  expect(and.next().value).toEqual(0);
  expect(and.next([1, 0]).value).toEqual(0);
  expect(and.next([0, 1]).value).toEqual(0);
  expect(and.next().value).toEqual(0);
});

test('setting both inputs', () => {
  const and = makeAnd();
  expect(and.next().value).toEqual(0);
  expect(and.next([1, 1]).value).toEqual(1);
  expect(and.next().value).toEqual(1);
});

test('setting both inputs and then back to a single one', () => {
  const and = makeAnd();
  expect(and.next().value).toEqual(0);
  expect(and.next([1, 1]).value).toEqual(1);
  expect(and.next().value).toEqual(1);
  expect(and.next([1, 0]).value).toEqual(0);
  expect(and.next().value).toEqual(0);
});
