<script lang="ts">
  import type { DailyWeather } from '../models/LocationWeather';
  import WeatherIcon from './WeatherIcon.svelte';

  interface Props {
    dailyWeather: DailyWeather;
  }

  let { dailyWeather }: Props = $props();

  function formatDate(date: string) {
  const newDate = new Date(date);
  const day = String(newDate.getDate()).padStart(2, '0');
  const month = String(newDate.getMonth() + 1).padStart(2, '0'); // Miesiące są indeksowane od 0
  const year = newDate.getFullYear();

  return `${day}-${month}-${year}`;

}
</script>

<div class="bg-white rounded-xl p-4 shadow-lg">
  <h2 class="flex flex-row items-center space-x-2">
    <WeatherIcon type={dailyWeather.type} />
    <span>{formatDate(dailyWeather.date)}</span>
  </h2>
  <p class="text-xl font-bold mt-4">{dailyWeather.averageTemperature} *(C)</p>
</div>
