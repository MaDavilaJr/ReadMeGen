// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = licenseArr => {
  licenseArr = licenseArr.map(badge => {
    if(badge !== 'NONE') {
      return `![License](https://img.shields.io/static/v1?label=License&message=${badge}&color=BLUE)`;
    }
  })
  return licenseArr.join(' ');
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== 'NONE') {
    return `* [License](#license)`
  }

  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenseArr) {
  if(licenseArr !== 'NONE') {
    return `## License
  This project is licensed under the
   ${licenseArr.map(licenseItem => {
    `* ${licenseItem}`
  })}`
  }
  return '';

}
// ${renderLicenseBadge(data.license)} 
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `
# ${data.title}

## Table of Contents

* [Installation](#installation)

${renderLicenseLink(data.license)}

## Installation
${data.installation}

${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
