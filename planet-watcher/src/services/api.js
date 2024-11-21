import axios from 'axios';

const API_KEY = process.env.API_KEY;

export const fetchEPICImages = async (date) => {
  const res = await axios.get(`https://api.nasa.gov/EPIC/api/natural/date/${date}?api_key=${API_KEY}`);
  return res.data;
};

export const fetchNeoWsData = async () => {
  const res = await axios.get(`https://api.nasa.gov/neo/rest/v1/feed?api_key=${API_KEY}`);
  return res.data;
};

export const fetchEONETEvents = async () => {
  const res = await axios.get(`https://eonet.gsfc.nasa.gov/api/v3/events`);
  return res.data;
};
