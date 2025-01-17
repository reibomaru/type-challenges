type Last<T extends any[]> = T["length"] extends 0 ? never : T extends [...any[], infer L ] ?  L: never
