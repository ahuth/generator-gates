import { Gate } from './gate';
import { Signal } from './signal';

export default function* and(initialInputs: [Signal, Signal] = [0, 0]): Gate<[Signal, Signal]> {
  let inputs = initialInputs;

  while (true) {
    const nextInputs = yield logicalAnd(...inputs);
    inputs = nextInputs ?? inputs;
  }
}

function logicalAnd(input1: Signal, input2: Signal): Signal {
  if (input1 === 1) {
    if (input2 === 1) {
      return 1;
    }
  }
  return 0;
}
