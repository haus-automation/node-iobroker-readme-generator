'use strict';

const axios = require('axios').default;
const generateReadmeMarkdown = require(__dirname + '/lib/readme').generateMarkdown;
const generateNewIssueWorkflow = require(__dirname + '/lib/issue-template').generateNewIssueWorkflow;

const user = 'iobroker';
const packageName = 'node-red';

axios
    .get(`https://api.github.com/repos/${user}/iobroker.${packageName}`)
    .then(response => {
        if (response.status === 200) {
            console.log(generateReadmeMarkdown(user, packageName, response.data));
            console.log(generateNewIssueWorkflow(user, packageName, response.data));
        } else {
            console.error('GitHub request failed')
        }
    });
