const axios = require('axios');

const clientAxios = axios.create({
    baseURL: 'http://localhost:5000/'
});

module.exports = { clientAxios };