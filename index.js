// array of questions for user
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

const questions = () =>
  inquirer.prompt([
    {
      type: "input",
      name: "appName",
      message: "What is the name of your application?",
    },
    {
      type: "input",
      name: "Description",
      message: "Please give a precise description of application above",
    },
    {
      type: "input",
      name: "Installation",
      message: "What steps are needed to install your application?",
    },
    {
      type: "input",
      name: "Usage",
      message: "Provide instructions and examples for use.",
    },
    {
      type: "input",
      name: "Credits",
      message: "List your collaborators/third-party assets used/tutorials. Include links as needed.",

    },
    {
      type: "input",
      name: "Tests",
      message: "Describe how to run tests on your application",
    },
    {
      type: "confirm",
      name: "Contributors",
      message: "Do you want any developers to contribute to this application?",
    },
    {
      type: "list",
      name: "License",
      message: "Select the license",
      choices: ["MIT", "APACHE", "ISC", "Public Domain", "GPL", "BSD"],
    },
    {
      type: "input",
      name: "projectYear",
      message: "Type in the current numerical year",
    },
    {
      type: "input",
      name: "developerName",
      message: "Full name of developer",
    },
    {
      type: "input",
      name: "userName",
      message: "What is your Github username",
    },
    {
      type: "input",
      name: "eMail",
      message: "What is your email address?",
    },
  ]);
  
// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            throw err;
        } else {
          console.log("README created!!! Check current repo for created file")
        }
    });
}

// function to initialize program
function init() {
    questions() 
    .then((answers) => {
      writeToFile("./README.MD", generateMarkdown(answers));
    }
        
    )
}

// function call to initialize program
init();
