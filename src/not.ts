import makeWire, { Signal, Wire } from './wire';

export default function* not(): Wire {
  const wire = makeWire();
  let value: Signal = 1;

  while (true) {
    value = yield (wire.next(value).value === 0 ? 1 : 0)
  }
}
