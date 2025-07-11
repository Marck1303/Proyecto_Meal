import axios from "axios";

const API_URL = "https://www.themealdb.com/api/json/v1/1";

const fetchMealData = async (endpoint, param = "") => {
  try {
    const response = await axios.get(`${API_URL}/${endpoint}?${param}`);
    const data = response.data;

    if (data.categories) {
      return data.categories;
    } else if (data.meals) {
      return data.meals;
    } else {
      return [];
    }
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}:`, error);
    return [];
  }
};

export default fetchMealData;
