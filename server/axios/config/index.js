const axios = require('axios');

const clientAxios = axios.create({
    baseURL: 'http://localhost:4000/api/'
});

module.exports = { clientAxios };