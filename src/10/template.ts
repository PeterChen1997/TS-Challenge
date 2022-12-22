// type TupleToUnion<T> = T extends [infer X, ...infer Rest]
//   ? X | TupleToUnion<Rest>
//   : never;
type TupleToUnion<T extends unknown[]> = T[number];

// T[number]
