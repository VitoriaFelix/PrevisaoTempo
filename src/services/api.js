import axios from 'axios';
//https://api.hgbrasil.com/weather?key=94eda58d&lat=-23.682&lon=-46.875
export const key = '94eda58d';
const api = axios.create({
    baseURL:'https://api.hgbrasil.com/'
});

export default api;