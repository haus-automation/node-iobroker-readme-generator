'use strict';

const axios = require('axios').default;

async function collectRepos(user, adapterList, page) {
    if (!adapterList) {
        adapterList = [];
    }

    if (!page) {
        page = 1;
    }

    const repoResponse = await axios.get(`https://api.github.com/users/${user}/repos?sort=full_name&per_page=100&page=${page}`, { responseType: 'json', timeout: 5000 });

    if (repoResponse.status === 200 && repoResponse.data.length > 0) {
        const repoJSON = repoResponse.data;

        for (const adapter of repoJSON) {
            if (adapter.name.startsWith('ioBroker.') && !adapter.archived) {
                adapterList.push(adapter);
            }
        }

        return (await collectRepos(user, adapterList, ++page));
    } else {
        return adapterList;
    }
}

module.exports = {
    collectRepos: collectRepos,
};
