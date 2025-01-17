type DeepReadonly<T> = T extends Function ? T : T extends Object ? {
    readonly [P in keyof T]: DeepReadonly<T[P]>
} : T

// type DeepReadonly<T> = keyof T extends never
//   ? T
//   : { readonly [k in keyof T]: DeepReadonly<T[k]> };
