export function renameFiles(names: string[]): string[] {
  const nameToCounter: { [name: string]: number } = {};

  return names.map((name) => {
    if (name in nameToCounter) {
      const newName = `${name}(${nameToCounter[name]})`;

      nameToCounter[name] += 1;
      nameToCounter[newName] = 1;

      return newName;
    }

    nameToCounter[name] = 1;

    return name;
  });
}
