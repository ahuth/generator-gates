import { invert, Signal } from './signal';
import makeWire, { Wire } from './wire';

export default function* not(): Wire {
  const wire = makeWire();
  let value: Signal = 1;

  while (true) {
    value = yield invert(wire.next(value).value);
  }
}
