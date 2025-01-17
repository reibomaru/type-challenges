type Length<T extends readonly unknown[]> = T extends { length: infer R } ? R : never
