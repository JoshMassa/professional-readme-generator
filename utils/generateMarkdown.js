// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    
    case 'Apache 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  
    case 'GPL v3':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';

    case 'Mozilla 2.0':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    
    case 'BSD 3-Clause':
      return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';

    case 'None':
      return '';

    default:
      return 'Error, please choose an option from the list';
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
This project is covered by ${'&nbsp;'.repeat(2)}${renderLicenseBadge(license)}`;
  } else {
      return "";
  }
}

function renderLicenseToContents(license) {
  if (license !== 'None') {
    return `- [License](#license)`
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const createEmailLink = (emailAddress) => {return `mailto:${emailAddress}`;}
  const emailLink = createEmailLink(data.Email);
  const createGithubLink = (userName) => {return `https://www.github.com/${userName}`}
  const githubLink = createGithubLink(data.GitHubUsername)
  return `# ${data.Title} ${renderLicenseBadge(data.License)}
## Description
${data.Description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [Credits](#credits)
${renderLicenseToContents(`${data.License}`)}
## Installation
${data.Installation}
## Usage
${data.Usage}
## Contributing
${data.Contributing}
## Tests
${data.Tests}
## Questions
You can find my GitHub profile [here](${githubLink}). \n
If you have any questions, you can email me by clicking [here](${emailLink}).
## Credits
${data.Credits}
${renderLicenseSection(`${data.License}`)}
`
}

module.exports = generateMarkdown;
