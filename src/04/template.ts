type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

// P in K
// T[P]
// extends
// keyof
