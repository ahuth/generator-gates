import makeAnd from './and';
import makeNot from './not';
import { Gate } from './gate';
import { Signal } from './signal';

export default function* nand(initialInputs: [Signal, Signal] = [0, 0]): Gate<[Signal, Signal]> {
  let inputs = initialInputs;
  const and = makeAnd(initialInputs);
  const not = makeNot(and.next().value);

  while (true) {
    const nextInputs = yield not.next(and.next(inputs).value).value;
    inputs = nextInputs ?? inputs;
  }
}
