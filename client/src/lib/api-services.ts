export interface WeatherData {
  current: {
    temp: number;
    condition: string;
    icon: string;
  };
  forecast: Array<{
    name: string;
    temp: number;
    icon: string;
  }>;
}

export interface PrayerTime {
  name: string;
  time: string;
}

export interface NewsArticle {
  title: string;
  url: string;
}

export interface NewsData {
  international: NewsArticle[];
  us: NewsArticle[];
  business: NewsArticle[];
}

const API_BASE_URL = '/api';

export async function fetchWeather(location: string = 'Vienna,VA,US'): Promise<WeatherData> {
  const response = await fetch(`${API_BASE_URL}/weather?location=${encodeURIComponent(location)}`);
  if (!response.ok) {
    throw new Error('Failed to fetch weather data');
  }
  return response.json();
}

export async function fetchPrayerTimes(location: string = 'Vienna,VA,US'): Promise<PrayerTime[]> {
  const response = await fetch(`${API_BASE_URL}/prayer-times?location=${encodeURIComponent(location)}`);
  if (!response.ok) {
    throw new Error('Failed to fetch prayer times');
  }
  return response.json();
}

export async function fetchNews(): Promise<NewsData> {
  const response = await fetch(`${API_BASE_URL}/news`);
  if (!response.ok) {
    throw new Error('Failed to fetch news');
  }
  return response.json();
}
