import SearchField from '../components/SearchField';
import useCountries from '../hooks/useCountries';
import CountryCard from '../components/CountryCard';
import { sortCountries } from '../utils/sort-countries';

const CountriesSearchContainer = () => {
  const { countries } = useCountries();

  const sortedCountries = sortCountries(countries, 'name', 'asc');
  return (
    <main className="mx-auto p-4 text-black flex flex-col gap-4">
      <SearchField />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4">
        {sortedCountries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </main>
  );
};

export default CountriesSearchContainer;
