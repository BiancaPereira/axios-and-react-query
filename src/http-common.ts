import axios from "axios";

export default axios.create({
  // URL base
  baseURL: "https://free-to-play-games-database.p.rapidapi.com/api/",
  headers: {
    "Content-type": "application/json",

    // Authentication (API key)
    'X-RapidAPI-Key': '98be16107emshd9514a9079c18a1p178f75jsn9042203fdf2b',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }
});
