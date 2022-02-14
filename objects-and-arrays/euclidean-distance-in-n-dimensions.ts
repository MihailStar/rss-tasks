/** @tutorial https://ru.onlinemschool.com/math/library/analytic_geometry/point_point_length */
export function euclideanDistance<Point extends [number, ...number[]]>(
  pointA: Point,
  pointB: Point
): number {
  if (pointA.length !== pointB.length) throw RangeError();

  return +Math.sqrt(
    pointA.reduce((acc, PointACoordinate, index) => {
      const PointBCoordinate = pointB[index]; /* as number */

      return acc + (PointBCoordinate - PointACoordinate) ** 2;
    }, 0)
  ).toFixed(2);
}
