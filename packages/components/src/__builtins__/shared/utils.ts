export function composeExport<T extends object, U>(
  s0: T,
  s1: U,
): T & U {
  return Object.assign(s0, s1)
}
