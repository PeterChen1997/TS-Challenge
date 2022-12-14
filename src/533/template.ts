type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U];

// spread in TS

// type First<T extends unknown[]> = T extends [infer X, ...infer Rest]
//   ? X
//   : never;
// type Tail<T extends unknown[]> = T extends [...infer Rest, infer Last]
//   ? Last
//   : never;

// type A = First<[1, 2, 3]>;
// type B = Tail<[1, 2, 3]>;
