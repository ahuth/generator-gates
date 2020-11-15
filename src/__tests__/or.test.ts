import makeOr from '../or';

test('the initial value', () => {
  const or = makeOr();
  expect(or.next().value).toEqual(0);
  expect(or.next().value).toEqual(0);
});

test('setting a single input', () => {
  const or = makeOr();
  expect(or.next().value).toEqual(0);
  expect(or.next([1, 0]).value).toEqual(1);
  expect(or.next().value).toEqual(1);
  expect(or.next([0, 1]).value).toEqual(1);
  expect(or.next().value).toEqual(1);
});

test('setting both inputs', () => {
  const or = makeOr();
  expect(or.next().value).toEqual(0);
  expect(or.next([1, 1]).value).toEqual(1);
  expect(or.next().value).toEqual(1);
});

test('setting both inputs and then back to a single one', () => {
  const or = makeOr();
  expect(or.next().value).toEqual(0);
  expect(or.next([1, 1]).value).toEqual(1);
  expect(or.next().value).toEqual(1);
  expect(or.next([1, 0]).value).toEqual(1);
  expect(or.next().value).toEqual(1);
  expect(or.next([0, 0]).value).toEqual(0);
  expect(or.next().value).toEqual(0);
});
