type promiseLiteral<R> = { then: (cb: (arg: R) => any) => any }
type MyAwaited<T> = T extends Promise<infer R> | promiseLiteral<infer R> ? R extends Promise<unknown> | promiseLiteral<unknown> ? MyAwaited<R> : R : never
