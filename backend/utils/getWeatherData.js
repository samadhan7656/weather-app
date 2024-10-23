const fetch = require('node-fetch');

const API_KEY = process.env.API_KEY;
const BASE_URL = 'http://api.openweathermap.org/data/2.5/';

const getWeatherData = async (infoType, searchParams) => {
  const url = new URL(BASE_URL + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  try {
    const response = await fetch(url);

    // Check if the response status is OK
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return data;
    } 
    catch (error) {
      console.error(`Failed to fetch weather data: ${error.message}`);
      return null;
    }
};

module.exports = getWeatherData;