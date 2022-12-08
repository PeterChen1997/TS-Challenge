type MyExclude<T, U> = T extends U ? never : T;

// 数组 extends 对比，为一一对比，返回值会自动转为数组
