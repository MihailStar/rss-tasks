type People = { age: number; name: string };

export function OrderPeople(people: People[]): People[] {
  return [...people].sort((a, b) => a.age - b.age);
}
