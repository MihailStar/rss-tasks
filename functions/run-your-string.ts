export function runYourString(
  arg: unknown,
  { param, func }: { param: string; func: string }
): unknown {
  return new Function(param, func)(arg);
}
