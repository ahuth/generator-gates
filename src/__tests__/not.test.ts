import makeNot from '../not';

test('the initial value', () => {
  const not = makeNot();
  expect(not.next().value).toEqual(1);
  expect(not.next().value).toEqual(1);
})

test('setting its input', () => {
  const not = makeNot();
  expect(not.next().value).toEqual(1);

  expect(not.next(1).value).toEqual(0);
  expect(not.next().value).toEqual(0);

  expect(not.next(0).value).toEqual(1);
  expect(not.next().value).toEqual(1);
});
