import type { Country } from '../types/country';

type SortOrder = 'asc' | 'desc';

export const sortCountries = (
  countries: Country[],
  sortBy: string,
  sortOrder: SortOrder
) => {
  return countries.sort((a, b) => {
    if (sortBy === 'name') {
      const nameA = a.name.common.toLowerCase();
      const nameB = b.name.common.toLowerCase();
      return sortOrder === 'asc'
        ? nameA.localeCompare(nameB)
        : nameB.localeCompare(nameA);
    }
    return 0;
  });
};
