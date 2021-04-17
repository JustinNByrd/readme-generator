// include the inquirer package and generateMarkdown
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions to pass to inquirer
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Please enter a description of your project.',
        name: 'description'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then( (response) => {
            const generatedMarkdown = generateMarkdown(response);
            console.log(generatedMarkdown);
            }
        );
}

// Function call to initialize app
init();
