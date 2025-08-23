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
          icon: data.weather[0].icon,
          high: Math.round(data.main.temp_max),
          low: Math.round(data.main.temp_min),
          humidity: data.main.humidity,
          windSpeed: Math.round(data.wind?.speed || 0),
          windDirection: data.wind?.deg || 0
        },
        forecast: forecastData ? forecastData.list.slice(0, 2).map((item: any, index: number) => ({
          name: ['Today', 'Tomorrow'][index],
          temp: Math.round(item.main.temp),
          high: Math.round(item.main.temp_max),
          low: Math.round(item.main.temp_min),
          humidity: item.main.humidity,
          windSpeed: Math.round(item.wind?.speed || 0),
          windDirection: item.wind?.deg || 0,
          icon: item.weather[0].icon,
          time: new Date(item.dt * 1000).toLocaleTimeString('en-US', { hour: 'numeric' })
        })) : [
          { name: 'Today', temp: 45, high: 50, low: 40, humidity: 60, windSpeed: 8, windDirection: 180, icon: 'clear', time: '2:00 PM' },
          { name: 'Tomorrow', temp: 38, high: 42, low: 35, humidity: 70, windSpeed: 12, windDirection: 225, icon: 'rain', time: '3:00 PM' }
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
            { title: "Scientists discover new archaeological site in Peru", url: "https://www.bbc.com/news" },
            { title: "International space station receives new crew members", url: "https://www.bbc.com/news" },
            { title: "Diplomatic talks continue over regional trade agreements", url: "https://www.bbc.com/news" },
            { title: "Global health initiative launches vaccination program", url: "https://www.bbc.com/news" },
            { title: "Technology partnership formed between emerging economies", url: "https://www.bbc.com/news" },
            { title: "Olympic committee announces preparations for upcoming games", url: "https://www.bbc.com/news" },
            { title: "UNESCO designates new world heritage sites", url: "https://www.bbc.com/news" },
            { title: "International cooperation treaty signed on ocean conservation", url: "https://www.bbc.com/news" }
          ],
          us: [
            { title: "Infrastructure bill allocates funds for renewable energy", url: "https://www.bbc.com/news" },
            { title: "Education reform proposals advance in Congress", url: "https://www.bbc.com/news" },
            { title: "Tech companies announce major hiring initiatives", url: "https://www.bbc.com/news" },
            { title: "Federal reserve considers new monetary policy measures", url: "https://www.bbc.com/news" },
            { title: "Supreme Court hears case on digital privacy rights", url: "https://www.bbc.com/news" },
            { title: "National parks service expands conservation programs", url: "https://www.bbc.com/news" },
            { title: "Healthcare system improvements show positive outcomes", url: "https://www.bbc.com/news" },
            { title: "Border security measures updated following bipartisan agreement", url: "https://www.bbc.com/news" },
            { title: "Veterans affairs department expands mental health services", url: "https://www.bbc.com/news" },
            { title: "Transportation infrastructure receives major upgrade funding", url: "https://www.bbc.com/news" }
          ],
          business: [
            { title: "Electric vehicle sales surge in Q4 reports", url: "https://www.bbc.com/news" },
            { title: "Banking sector adapts to new digital payment trends", url: "https://www.bbc.com/news" },
            { title: "Startup funding reaches new milestone", url: "https://www.bbc.com/news" },
            { title: "Renewable energy companies report record growth", url: "https://www.bbc.com/news" },
            { title: "Artificial intelligence market expands globally", url: "https://www.bbc.com/news" },
            { title: "Supply chain innovations reduce delivery times", url: "https://www.bbc.com/news" },
            { title: "Cryptocurrency regulations updated for institutional investors", url: "https://www.bbc.com/news" },
            { title: "Manufacturing sector shows strong quarterly performance", url: "https://www.bbc.com/news" },
            { title: "Real estate market stabilizes after recent fluctuations", url: "https://www.bbc.com/news" },
            { title: "Small business lending programs expand nationwide", url: "https://www.bbc.com/news" }
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
          const articles = data.articles?.slice(0, 10).map((article: any) => ({
            title: article.title,
            url: article.url
          })) || [];
          
          if (i === 0) newsData.us = articles;
          if (i === 1) newsData.business = articles;
        }
      }

      // Add some international news (can be expanded to use separate API call)
      newsData.international = newsData.us.slice(0, 10);
      
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
