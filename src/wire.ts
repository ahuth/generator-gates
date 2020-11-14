type Signal = 0 | 1;
type Wire = Generator<Signal, Signal, Signal>;

export default function* wire(): Wire {
  let value: Signal = 0;

  while (true) {
    value = (yield value) ?? value;
  }
}
