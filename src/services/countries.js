import axios from 'axios'

const baseUrl = 'https://restcountries.eu/rest/v2/all';

const getAll = async () => {
    const responce = await axios.get(baseUrl);
    return responce.data;
}

export default {
    getAll
}