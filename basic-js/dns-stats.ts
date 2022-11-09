export function getDNSStats(domains: string[]): { [key: string]: number } {
  const stats: { [key: string]: number } = {};

  for (let i = domains.length - 1, statsKey = ''; i >= 0; i -= 1) {
    const splittedDomain = domains[i].split('.');

    for (let j = splittedDomain.length - 1; j >= 0; j -= 1) {
      const partOfDomain = splittedDomain[j];

      statsKey += `.${partOfDomain}`;
      stats[statsKey] = statsKey in stats ? stats[statsKey] + 1 : 1;
    }

    statsKey = '';
  }

  return stats;
}
