import { invert, Signal } from './signal';
import makeWire, { Wire } from './wire';

export default function* not(): Wire {
  const input = makeWire();
  let value: Signal = 1;

  while (true) {
    value = yield invert(input.next(value).value);
  }
}
