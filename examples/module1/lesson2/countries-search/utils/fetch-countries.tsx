import type { Country } from '../types/country';

const BASE_URL = 'https://restcountries.com/v3.1';

export const fetchAllCountries = async (): Promise<Country[]> => {
  const response = await fetch(`${BASE_URL}/all`);
  try {
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching all countries:', error);
    throw error;
  }
};

export const fetchCountriesByName = async (
  name: string
): Promise<Country[]> => {
  const response = await fetch(`${BASE_URL}/name/${name}`);
  try {
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching countries by name:', error);
    throw error;
  }
};

export const fetchCountriesByCurrency = async (
  currency: string
): Promise<Country[]> => {
  const response = await fetch(`${BASE_URL}/currency/${currency}`);
  try {
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching countries by currency:', error);
    throw error;
  }
};

export const fetchCountriesByLanguage = async (
  language: string
): Promise<Country[]> => {
  const response = await fetch(`${BASE_URL}/lang/${language}`);
  try {
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching countries by language:', error);
    throw error;
  }
};

export const fetchCountriesByCapital = async (
  capital: string
): Promise<Country[]> => {
  const response = await fetch(`${BASE_URL}/capital/${capital}`);
  try {
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching countries by capital:', error);
    throw error;
  }
};
