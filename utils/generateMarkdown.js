// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license.toLowerCase()) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    
    case 'apache 2.0':
    return '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  
    default:
      return '';
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const createGitHubLink = (username) => {return `https://github.com/${username}`;}
  const githubProfileLink = createGitHubLink(data.Questions);
  const licenseBadge = renderLicenseBadge(data.License);
  return `# ${data.Title}
${licenseBadge}
## Description
${data.Description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation
${data.Installation}
## Usage
${data.Usage}
## Contributing
${data.Contributing}
## Tests
${data.Tests}
## Questions
If you have any questions, you can find my GitHub profile [here](${githubProfileLink}).
`;
}

module.exports = { generateMarkdown, renderLicenseBadge };
