import makeWire from './wire';

test('the initial value', () => {
  const wire = makeWire();
  expect(wire.next().value).toEqual(0);
  expect(wire.next().value).toEqual(0);
});

test('setting a value', () => {
  const wire = makeWire();
  expect(wire.next().value).toEqual(0);
  expect(wire.next(1).value).toEqual(1);
  expect(wire.next().value).toEqual(1);
});

test('setting a value back', () => {
  const wire = makeWire();
  expect(wire.next().value).toEqual(0);
  expect(wire.next(1).value).toEqual(1);
  expect(wire.next().value).toEqual(1);
  expect(wire.next(0).value).toEqual(0);
  expect(wire.next().value).toEqual(0);
})
