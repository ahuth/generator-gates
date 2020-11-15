import { invert, Signal } from './signal';
import makeWire, { Wire } from './wire';

export default function* not(initialInput: Signal = 0): Wire {
  const wire = makeWire(initialInput);
  let value: Signal = 1;

  while (true) {
    value = yield invert(wire.next(value).value);
  }
}
