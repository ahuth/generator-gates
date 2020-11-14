type Low = 0;
type High = 1;
export type Signal = Low | High;

export function invert(signal: Signal): Signal {
  return signal === 0 ? 1 : 0;
}
