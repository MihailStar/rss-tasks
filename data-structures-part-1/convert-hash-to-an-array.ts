export function convertHashToArray(h: Record<string, unknown>): [string, unknown][] {
  return Object.entries(h).sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0));
}
