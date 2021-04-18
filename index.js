// include the inquirer and filesystem packages
const inquirer = require('inquirer');
const fs = require('fs');

// include generateMarkdown code
const generateMarkdown = require('./utils/generateMarkdown');

// file to be generated
const outputFile = './output/README.md';

// array of questions to pass to inquirer
const questions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'userName'
    },
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Please enter a description of your project:',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Please enter the installation instructions:',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Please enter the usage instructions:',
        name: 'usage'
    },
    {
        type: "list",
        message: "Choose your license:",
        choices: ["Apache 2.0", "BSD 3-Clause", "GNU General Public 2.0", "GNU General Public 3.0", "ISC", "MIT", "NONE"],
        name: "license"
    },
    {
        type: "input",
        message: "How can others contribute to this project?",
        name: "contribute"
    },
    {
        type: "input",
        message: "How can users test this application?",
        name: "tests"
    },
];

// write generated markdown to file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success! Your README.md file is available in the output directory.')
    );
}

// initialize app
function init() {
    inquirer
        .prompt(questions)
        .then( (response) => {
            const generatedMarkdown = generateMarkdown(response);
            // console.log(generatedMarkdown);
            writeToFile(outputFile, generatedMarkdown);
            }
        );
}

// Function call to initialize app
init();
