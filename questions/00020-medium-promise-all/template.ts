type myAwaited<T> = T extends Promise<infer R> ? R extends Promise<unknown> ? MyAwaited<R> : R : T

declare function PromiseAll<T extends any[]>(values: readonly [...T]): Promise<{
    [P in keyof T]: myAwaited<T[P]>
}>