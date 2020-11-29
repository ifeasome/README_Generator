// array of questions for user
const fs = require("fs");
const inquirer = require("inquirer");
const { generate } = require("rxjs");
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
      message: "What steps are needed to install application?",
    },
    {
      type: "input",
      name: "Usage",
      meesage: "How do you use the application?",
    },
    {
      type: "input",
      name: "Tests",
      message: "What are the steps needed to test your application?",
    },
    {
      type: "input",
      name: "Contributors",
      message: "Enter the name(s) of the all contributors to this application",
    },
    {
      type: "list",
      name: "License",
      message: "Select the license",
      choices: ["MIT", "APACHE 2.0", "ISC", "Public Domain", "GPL", "BSD"],
    },
    {
      type: "input",
      name: "userName",
      message: "What is your Github username",
    },
    {
      type: "input",
      name: "contactInfo",
      message: "What is your email address?",
    },
  ]);
  
// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            throw err;
        }
    });
}

// function to initialize program
function init() {
    questions.then(answers => {
        const response = generateMarkdown(answers);
        fs.writeFile("./README.md", response);
    })
}

// function call to initialize program
init();
