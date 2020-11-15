import makeOr from '../or';

test('the initial value', () => {
  const or = makeOr();
  expect(or.next().value).toEqual(0);
  expect(or.next().value).toEqual(0);
});

test('0, 0', () => {
  const or = makeOr();
  expect(or.next().value).toEqual(0);
  expect(or.next([0, 0]).value).toEqual(0);
  expect(or.next().value).toEqual(0);
});

test('1, 0', () => {
  const or = makeOr();
  expect(or.next().value).toEqual(0);
  expect(or.next([1, 0]).value).toEqual(1);
  expect(or.next().value).toEqual(1);
});

test('0, 1', () => {
  const or = makeOr();
  expect(or.next().value).toEqual(0);
  expect(or.next([0, 1]).value).toEqual(1);
  expect(or.next().value).toEqual(1);
});

test('1, 1', () => {
  const or = makeOr();
  expect(or.next().value).toEqual(0);
  expect(or.next([1, 1]).value).toEqual(1);
  expect(or.next().value).toEqual(1);
});
