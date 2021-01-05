const axios = require('axios');

async function getRepositories() {
    const info = await axios.get(`https://api.github.com/users/takenet/repos`)
    .then( resp => {
        return(resp.data);
    })
    return info;
}

module.exports = { getRepositories };