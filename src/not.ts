import { invert, Signal } from './signal';
import { Wire } from './wire';

export default function* not(initialInput: Signal = 0): Wire {
  let input = initialInput;

  while (true) {
    const nextInput = yield invert(input);
    input = nextInput ?? input;
  }
}
