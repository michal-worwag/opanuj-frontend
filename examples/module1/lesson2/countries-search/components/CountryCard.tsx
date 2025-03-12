import type { Country } from '../types/country';

const CountryCard = ({ country }: { country: Country }) => {
  return (
    <div className="shadow-md rounded-lg p-4 flex flex-col gap-4 w-full max-w-sm">
      <h2 className="text-lg font-bold text-black" data-testid="country-name">
        {country.name.common}
      </h2>
      <img
        src={country.flags?.png}
        alt={`${country.name.common} flag`}
        className="w-full h-full max-h-40 object-contain"
      />
      <p className="text-sm text-black" data-testid="country-population">
        Population: {country.population}
      </p>
    </div>
  );
};

export default CountryCard;
