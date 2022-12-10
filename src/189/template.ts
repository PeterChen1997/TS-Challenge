type MyAwaited<T extends PromiseLike<any>> = T extends PromiseLike<infer X>
  ? X extends PromiseLike<any>
    ? MyAwaited<X>
    : X
  : never;

// infer V => get Promise return value
// use PromiseLike to replace Promise
// use extends to strict input type
