type MyPick<T, K extends keyof T> = { [a in K]: T[a] }
