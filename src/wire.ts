import { Signal } from './signal';

export type Wire = Generator<Signal, Signal, Signal>;

/**
 * Generator representing a wire that propagates a signal.
 *
 * Takes an optional initial input value. Subsequent input values can be passed to the generator's
 * `next` function.
 *
 * @example
 *
 * const generator = wire();
 * generator.next();  // => 0
 * generator.next(1); // => 1
 * generator.next();  // => 1
 * generator.next(0); // => 0
 */
export default function* wire(value: Signal = 0): Wire {
  while (true) {
    value = (yield value) ?? value;
  }
}
