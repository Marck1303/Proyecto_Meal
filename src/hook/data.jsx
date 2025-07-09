import axios from 'axios';

const API_URL = 'https://www.themealdb.com/api/json/v1/1';

const fetchMealData = async (endpoint, param = '') => {

  try {
    const response = await axios.get(`${API_URL}/${endpoint}?${param}`);
    return response.data.meals || response.data.categories || [];
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}:`, error);
    return [];
  }
};
export default fetchMealData;

