import { Signal } from './signal';

export type Gate<Inputs extends Signal[]> = Generator<Signal, Signal, Inputs>;
