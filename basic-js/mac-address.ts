export function isMAC48Address(n: string): boolean {
  const d = '[0-9A-F]';

  return new RegExp(
    `^${d}${d}-${d}${d}-${d}${d}-${d}${d}-${d}${d}-${d}${d}$`
  ).test(n);
}
