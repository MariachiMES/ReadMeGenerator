const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "what is the name of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "Please enter a description of your project:",
      name: "description",
    },
    {
      type: "input",
      message: "Please enter the installation instructions:",
      name: "installation",
    },
    {
      type: "input",
      message: "Please enter the credits:",
      name: "credits",
    },
    {
      type: "input",
      message: "Please enter usage information:",
      name: "usage",
    },
    {
      type: "input",
      message: "Please enter test instructions:",
      name: "test",
    },
    {
      type: "input",
      message: "Please enter the contribution guidelines:",
      name: "contribution",
    },
    {
      type: "input",
      message: "List features here:",
      name: "features",
    },
    {
      type: "input",
      message: "Enter your gitHub username:",
      name: "github",
    },
    {
      type: "input",
      message: "Enter your email address:",
      name: "email",
    },
    {
      type: "checkbox",
      message: "Plese select a license from the options:",
      name: "license",
      pageSize: 4,
      highlight: true,
      searchable: true,
      choices: ["MIT", "Apache", "GNU", "BSD"],
    },
  ])

  .then((response) => writeNewReadMe(response));

var writeNewReadMe = function (response) {
  fs.writeFile("README.md", writeReadMe(response), (err) =>
    err ? console.error(err) : console.log("successfully written README.md!")
  );
};

const writeReadMe = function (response) {
  const readMe = `![GitHub license](https://img.shields.io/badge/license-${response.license}-blue.svg)

  # ${response.title}
  
  
  
  # Description
  
  ${response.description}
  
  ## Table of Contents

*  [Installation](#installation)

*  [Usage](#usage)

*  [Tests](#tests)

*  [Contributions](#contributions)

*  [Features](#features)

*  [Questions](#questions)


## Installation
  ${response.installation}
## Usage
  ${response.usage}
  
## Credits
  ${response.credits}
## Tests
  ${response.test}

## Contributions
  ${response.contribution}
  
## Features
  ${response.features}
  
## Questions

  [GitHub](https://github.com/${response.github})

  Additional questions: [E-Mail](mailto:${response.email})`;
  return readMe;
};
