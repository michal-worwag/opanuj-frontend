import { useEffect, useState } from 'react';
import { fetchAllCountries } from '../utils/fetch-countries';
import type { Country } from '../types/country';

const useCountries = () => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    fetchAllCountries().then((data) => setCountries(data));
  }, []);

  return { countries };
};

export default useCountries;
