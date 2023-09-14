'use strict';

function generateMarkdown(user, packageName, githubData) {
return `
![Logo](admin/${packageName}.png)

# ioBroker.${packageName}

[![NPM version](https://img.shields.io/npm/v/iobroker.${packageName}?style=flat-square)](https://www.npmjs.com/package/iobroker.${packageName})
[![Downloads](https://img.shields.io/npm/dm/iobroker.${packageName}?label=npm%20downloads&style=flat-square)](https://www.npmjs.com/package/iobroker.${packageName})
![node-lts](https://img.shields.io/node/v-lts/iobroker.${packageName}?style=flat-square)
![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/iobroker.${packageName}?label=npm%20dependencies&style=flat-square)

![GitHub](https://img.shields.io/github/license/${user}/iobroker.${packageName}?style=flat-square)
![GitHub repo size](https://img.shields.io/github/repo-size/${user}/iobroker.${packageName}?logo=github&style=flat-square)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/${user}/iobroker.${packageName}?logo=github&style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/${user}/iobroker.${packageName}?logo=github&style=flat-square)
![GitHub issues](https://img.shields.io/github/issues/${user}/iobroker.${packageName}?logo=github&style=flat-square)
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/${user}/iobroker.${packageName}/test-and-release.yml?branch=${githubData.default_branch}&logo=github&style=flat-square)

## Versions

![Beta](https://img.shields.io/npm/v/iobroker.${packageName}.svg?color=red&label=beta)
![Stable](http://iobroker.live/badges/${packageName}-stable.svg)
![Installed](http://iobroker.live/badges/${packageName}-installed.svg)

${githubData.description}

## Sponsored by

[![ioBroker Master Kurs](https://haus-automatisierung.com/images/ads/ioBroker-Kurs.png)](https://haus-automatisierung.com/iobroker-kurs/?refid=iobroker-${packageName})

## Documentation

[🇺🇸 Documentation](./docs/en/README.md)

[🇩🇪 Dokumentation](./docs/de/README.md)

## Changelog
<!--
    Placeholder for the next version (at the beginning of the line):
    ### **WORK IN PROGRESS**
-->
### **WORK IN PROGRESS**

* (klein0r) First release
`;
}

module.exports = {
    generateMarkdown: generateMarkdown,
};
