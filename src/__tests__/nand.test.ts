import makeNand from '../nand';

test('the initial state', () => {
  const nand = makeNand();
  expect(nand.next().value).toEqual(1);
  expect(nand.next().value).toEqual(1);
});

test('0, 0', () => {
  const nand = makeNand();
  expect(nand.next().value).toEqual(1);
  expect(nand.next([0, 0]).value).toEqual(1);
  expect(nand.next().value).toEqual(1);
});

test('1, 0', () => {
  const nand = makeNand();
  expect(nand.next().value).toEqual(1);
  expect(nand.next([1, 0]).value).toEqual(1);
  expect(nand.next().value).toEqual(1);
});

test('0, 1', () => {
  const nand = makeNand();
  expect(nand.next().value).toEqual(1);
  expect(nand.next([0, 1]).value).toEqual(1);
  expect(nand.next().value).toEqual(1);
});

test('1, 1', () => {
  const nand = makeNand();
  expect(nand.next().value).toEqual(1);
  expect(nand.next([1, 1]).value).toEqual(0);
  expect(nand.next().value).toEqual(0);
});
