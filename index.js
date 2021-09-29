const inquirer = require("inquirer");
const fs = require("fs");
// const util = require("util");
// const writeFileAsync = util.promisify(fs.writeFile);
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
      message: "Please enter the contribution guidelines:",
      name: "contribution",
    },
    {
      type: "input",
      message: "Please enter test instructions:",
      name: "test",
    },
    {
      type: "checkbox",
      message: "Plese select a license from the options:",
      name: "license",
      pageSize: 4,
      highlight: true,
      searchable: true,
      choices: [
        "MIT",
        "Apache Licesnse 2.0",
        "GNU General Public License v3.0",
        "BSD 2-Clause 'Simplified' License",
      ],
    },
  ])

  //   .then((response) => JSON.stringify(response, null, "\t"))
  .then((response) => writeNewReadMe(response));

var writeNewReadMe = function (response) {
  console.log(response);
  fs.writeFile("README.md", writeReadMe(response), (err) =>
    err ? console.error(err) : console.log("successfully written README.md!")
  );
};

const writeReadMe = function (response) {
  const readMe = `![GitHub license](https://img.shields.io/badge/license-${response.license}-blue.svg)

  # ${response.title}
  
  
  
  ## Description
  
  ${response.description}
  
  ## Table of Contents
  
  
  ## Installation
  ${response.installation}
  ## Usage
  // ${response.usage}
  
  ## Contributing
  ${response.contribution}
  ## Tests
  ${response.test}
  
  ## Questions`;
  return readMe;
};
