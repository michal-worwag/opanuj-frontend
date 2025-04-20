import axios from 'axios';
import type {
  LocationWeather,
  USLocationWeather,
} from '../models/LocationWeather';
import { parseLocation } from './LocationParser';
import type { WeatherRequest } from '../models/WeatherRequest';

async function getWeatherData(
  request: WeatherRequest
): Promise<LocationWeather> {
  const { data } = await axios.get<LocationWeather>(
    `/api/weather?city=${request.city}&country=${request.country}`
  );

  if (request.country === 'US') {
    const { data } = await axios.get<USLocationWeather>(
      `/api/weather?city=${request.city}&country=${request.country}`
    );
    const newData = {
      ...data,
      weatherDetails: data.weatherDetails.Weather.map((day) => ({
        date: day.date,
        type: day.type,
        averageTemperature: day.average_temperature,
      })),
    };
    return newData;
  }

  return data;
}

export async function fetchWeather(
  locationQuery: string
): Promise<LocationWeather | null> {
  const request = parseLocation(locationQuery);

  if (!request) {
    return null;
  }

  try {
    return await getWeatherData({
      city: request.city,
      country: request.country,
    });
  } catch {
    throw new Error(
      `Cannot fetch weather data for provided location: ${request.city}, ${request.country}`
    );
  }
}
