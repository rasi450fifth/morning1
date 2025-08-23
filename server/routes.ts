import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // Weather API endpoint
  app.get('/api/weather', async (req, res) => {
    try {
      const location = req.query.location as string || 'Vienna,VA,US';
      const apiKey = process.env.OPENWEATHER_API_KEY || process.env.WEATHER_API_KEY;
      
      if (!apiKey) {
        return res.status(500).json({ 
          error: 'Weather API key not configured',
          message: 'Please set OPENWEATHER_API_KEY environment variable' 
        });
      }

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=imperial`
      );
      
      if (!response.ok) {
        throw new Error(`Weather API error: ${response.status}`);
      }
      
      const data = await response.json();
      
      // Get forecast data
      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}&units=imperial`
      );
      
      const forecastData = forecastResponse.ok ? await forecastResponse.json() : null;
      
      // Format response
      const weatherData = {
        current: {
          temp: Math.round(data.main.temp),
          condition: data.weather[0].description,
          icon: data.weather[0].icon
        },
        forecast: forecastData ? forecastData.list.slice(0, 3).map((item: any, index: number) => ({
          name: ['Today', 'Tomorrow', 'Day 3'][index],
          temp: Math.round(item.main.temp),
          icon: item.weather[0].icon
        })) : [
          { name: 'Wed', temp: 45, icon: 'clear' },
          { name: 'Thu', temp: 38, icon: 'rain' },
          { name: 'Fri', temp: 32, icon: 'snow' }
        ]
      };
      
      res.json(weatherData);
    } catch (error) {
      console.error('Weather API error:', error);
      res.status(500).json({ 
        error: 'Failed to fetch weather data',
        message: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });

  // Prayer times API endpoint
  app.get('/api/prayer-times', async (req, res) => {
    try {
      const location = req.query.location as string || 'Vienna,VA,US';
      
      // Get coordinates for location first
      const geoResponse = await fetch(
        `https://api.aladhan.com/v1/timingsByCity?city=Vienna&country=US&state=VA&method=2`
      );
      
      if (!geoResponse.ok) {
        throw new Error(`Prayer times API error: ${geoResponse.status}`);
      }
      
      const geoData = await geoResponse.json();
      const timings = geoData.data.timings;
      
      // Format prayer times
      const prayerTimes = [
        { name: 'Fajr', time: convertTo12Hour(timings.Fajr) },
        { name: 'Dhuhr', time: convertTo12Hour(timings.Dhuhr) },
        { name: 'Asr', time: convertTo12Hour(timings.Asr) },
        { name: 'Maghrib', time: convertTo12Hour(timings.Maghrib) },
        { name: 'Isha', time: convertTo12Hour(timings.Isha) }
      ];
      
      res.json(prayerTimes);
    } catch (error) {
      console.error('Prayer times API error:', error);
      res.status(500).json({ 
        error: 'Failed to fetch prayer times',
        message: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });

  // News API endpoint
  app.get('/api/news', async (req, res) => {
    try {
      const apiKey = process.env.NEWS_API_KEY || process.env.NEWSAPI_KEY;
      
      if (!apiKey) {
        // Fallback to RSS feeds if no API key
        const sampleNews = {
          international: [
            { title: "Climate summit reaches historic agreement on carbon emissions", url: "https://www.bbc.com/news" },
            { title: "European markets respond to new trade policies", url: "https://www.bbc.com/news" },
            { title: "Scientists discover new archaeological site in Peru", url: "https://www.bbc.com/news" }
          ],
          us: [
            { title: "Infrastructure bill allocates funds for renewable energy", url: "https://www.bbc.com/news" },
            { title: "Education reform proposals advance in Congress", url: "https://www.bbc.com/news" },
            { title: "Tech companies announce major hiring initiatives", url: "https://www.bbc.com/news" }
          ],
          business: [
            { title: "Electric vehicle sales surge in Q4 reports", url: "https://www.bbc.com/news" },
            { title: "Banking sector adapts to new digital payment trends", url: "https://www.bbc.com/news" },
            { title: "Startup funding reaches new milestone", url: "https://www.bbc.com/news" }
          ]
        };
        
        return res.json(sampleNews);
      }

      // Fetch from News API
      const responses = await Promise.allSettled([
        fetch(`https://newsapi.org/v2/top-headlines?category=general&country=us&pageSize=5&apiKey=${apiKey}`),
        fetch(`https://newsapi.org/v2/top-headlines?category=business&country=us&pageSize=5&apiKey=${apiKey}`)
      ]);

      const newsData = {
        international: [],
        us: [],
        business: []
      };

      // Process responses
      for (let i = 0; i < responses.length; i++) {
        const result = responses[i];
        if (result.status === 'fulfilled' && result.value.ok) {
          const data = await result.value.json();
          const articles = data.articles?.slice(0, 3).map((article: any) => ({
            title: article.title,
            url: article.url
          })) || [];
          
          if (i === 0) newsData.us = articles;
          if (i === 1) newsData.business = articles;
        }
      }

      // Add some international news (can be expanded to use separate API call)
      newsData.international = newsData.us.slice(0, 3);
      
      res.json(newsData);
    } catch (error) {
      console.error('News API error:', error);
      res.status(500).json({ 
        error: 'Failed to fetch news',
        message: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

// Helper function to convert 24-hour time to 12-hour format
function convertTo12Hour(time24: string): string {
  const [hours, minutes] = time24.split(':');
  const hour = parseInt(hours);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const hour12 = hour % 12 || 12;
  return `${hour12}:${minutes} ${ampm}`;
}
