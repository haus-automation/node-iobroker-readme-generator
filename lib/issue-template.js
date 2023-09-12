'use strict';

function generateNewIssueTemplate(user, packageName, githubData) {
return `
name: New issue

on:
  issues:
    types: [opened]

jobs:
  issueCreated:
    runs-on: ubuntu-latest
    if: \${{ !github.event.issue.pull_request }}
    permissions:
      issues: write
    steps:
      - name: Create comment
        uses: peter-evans/create-or-update-comment@v3
        with:
          issue-number: \${{ github.event.issue.number }}
          body: |
            Thanks for reporting @\${{ github.actor }}!
            1. Check if this topic is not covered in the [documentation](https://github.com/${user}/ioBroker.${packageName}/blob/master/docs/en/README.md)
            2. Ensure that you use the latest beta version: [![NPM version](https://img.shields.io/npm/v/iobroker.${packageName}?style=flat-square)](https://www.npmjs.com/package/iobroker.${packageName})
            3. Attach all necessary log files **in debug mode**, screenshots and other information to reproduce this issue
            4. [Search for the issue topic](https://github.com/${user}/ioBroker.${packageName}/issues?q=is%3Aissue) in other/closed issues to avoid duplicates!
`;
}

module.exports = {
    generateNewIssueTemplate: generateNewIssueTemplate,
};
