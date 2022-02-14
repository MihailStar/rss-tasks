/**
 * @tutorial `x(?=y)` - соответствует `x` только если за `x` следует `y`,
 * упреждающее утверждение
 */
 export function maskify(cc: string): string {
  return cc.replace(/.(?=.{4})/g, '#');
}
