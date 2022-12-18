type MyOmit<T, K extends keyof T> = {
  [K1 in keyof T as K1 extends K ? never : K1]: T[K1];
};

// as
// never in key
