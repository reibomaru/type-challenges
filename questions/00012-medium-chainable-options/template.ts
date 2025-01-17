type Chainable<T = {}> = {
  option<K extends string, V>(key: K extends keyof T ? never : K, value: V):
    K extends keyof T ? Chainable<Omit<T, K> & Record<K, V>> : Chainable<T & Record<K, V>>
  get(): T
}
