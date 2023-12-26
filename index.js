'use strict';

const readline = require('node:readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
const axios = require('axios').default;
const generateReadmeMarkdown = require(__dirname + '/lib/readme').generateMarkdown;
const generateNewIssueWorkflow = require(__dirname + '/lib/issue-template').generateNewIssueWorkflow;
const utils = require('./lib/utils');

readline.question(`GitHub user: `, async (user) => {
    console.log(`Loading repos of user: https://github.com/${user}`);

    const repos = await utils.collectRepos(user);
    const repoNames = repos.map(r => r.name.replace('ioBroker.', ''));

    for (let i = 0; i < repoNames.length; i++) {
        console.log(`- ${repoNames[i]} [${i + 1}]`);
    }

    readline.question(`ioBroker adpater (without ioBroker.): `, async (packageName) => {
        readline.close();

        const packageNumer = parseInt(packageName);

        if (!isNaN(packageNumer) && packageNumer > 0 && packageNumer <= repoNames.length) {
            packageName = repoNames[packageNumer - 1];
        }

        if (packageName && repoNames.includes(packageName)) {
            const packageResponse = await axios.get(`https://api.github.com/repos/${user}/iobroker.${packageName}`)

            if (packageResponse.status === 200) {
                console.log(generateReadmeMarkdown(user, packageName, packageResponse.data));
                console.log(generateNewIssueWorkflow(user, packageName, packageResponse.data));
            } else {
                console.error('GitHub request failed')
            }
        } else {
            console.error(`${packageName} is not in the list of public repositories`);
        }
    });
});
