type Chainable<T = {}> = {
  option<Key extends string, Value>(
    key: Key extends keyof T ? never : Key,
    value: Value
  ): Chainable<Omit<T, Key> & { [P in Key]: Value }>;
  get(): T;
};

// double extends
// P in Key is useful in params
