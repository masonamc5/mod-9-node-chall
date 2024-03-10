// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return `[License](https://opensource.org/licenses/${license})`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License

This project is licensed under the ${license} license. See the [${license} License](${renderLicenseLink(
      license
    )}) for details.`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  console.log(answers);
  return `# ${answers.Title}

${renderLicenseBadge(answers.License)}

## Description

${answers.Description}

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)

## Installation

${answers.Installation}

## Usage

${answers.Usage}

${renderLicenseSection(answers.License)}

## Contributing

${answers.Contributions}

## Tests

${answers.Tests}

## Questions

For questions about the project, please feel free to contact me via GitHub: [${
    answers.Username
  }](https://github.com/${answers.Username}) or via email at ${answers.Email}.
`;

} 

module.exports = generateMarkdown;
