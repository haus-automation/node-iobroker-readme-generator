'use strict';

const axios = require('axios').default;
const generateReadmeMarkdown = require(__dirname + '/lib/readme').generateMarkdown;

const user = 'iobroker-community-adapters';
const packageName = 'shelly';

axios
    .get(`https://api.github.com/repos/${user}/iobroker.${packageName}`)
    .then(response => {
        if (response.status === 200) {
            console.log(JSON.stringify(response.data, null, 2));

            generateReadmeMarkdown(user, packageName, response.data);
        } else {
            console.error('GitHub request failed')
        }
    });
