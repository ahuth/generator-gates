import { Gate } from './gate';
import { Signal } from './signal';

export default function* and(): Gate<[Signal, Signal]> {
  let value: Signal = 0;
  let inputs: [Signal, Signal] = [0, 0];

  while (true) {
    inputs = (yield value) ?? inputs;

    if (inputs[0] === 1) {
      if (inputs[1] === 1) {
        value = 1;
        continue;
      }
    }

    value = 0;
  }
}
