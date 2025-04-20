import type { D } from 'vitest/dist/chunks/reporters.QZ837uWx.js';

export enum WeatherType {
  Sunny = 'sunny',
  Cloudy = 'cloudy',
  Rainy = 'rainy',
  Snowy = 'snowy',
}

export interface DailyWeather {
  date: string;
  type: WeatherType;
  averageTemperature: number;
}
export interface USDailyWeather {
  date: string;
  type: WeatherType;
  average_temperature: number;
}

export interface LocationWeather {
  city: string;
  country: string;
  weatherDetails: DailyWeather[];
}

export type USWeatherDetails = {
  Weather: USDailyWeather[];
};
export interface USLocationWeather {
  city: string;
  country: string;
  weatherDetails: USWeatherDetails;
}
