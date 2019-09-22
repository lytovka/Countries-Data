import axios from 'axios'

const baseUrl = 'https://restcountries.eu/rest/v2/all';
const baseUrlSingleCountry = 'https://restcountries.eu/rest/v2/name/';
const baseUrlForHolidays = `https://holidayapi.com/v1/holidays?pretty&key=${process.env.REACT_APP_HOLIDAY_API_TOKEN}`;
// console.log(process.env.HOLIDAY_API_TOKEN)

const getAll = async () => {
    const responce = await axios.get(baseUrl);
    return responce.data;
}

const getOne = async (countryName) => {
    const responce = await axios.get(`${baseUrlSingleCountry}/${countryName}?fullText=true`);
    return responce.data;
}

const getCountryHolidays = async (countryCode) => {
    const responce = await axios.get(`${baseUrlForHolidays}&country=${countryCode}&year=2018`);
    return responce.data
}

export default {
    getAll,
    getCountryHolidays
}