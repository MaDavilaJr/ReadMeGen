// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'What kind of license does this project have?',
        choices: ["MIT", "APACHE-2.0", "GPL 3.0", "NONE"]
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command will run tests on this project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What should a user know about using this project?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What should a user know about contributing to this project?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    

];
// inquirer.prompt(questions)

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
}

// Function call to initialize app
init()
.then(data=> {
    
    writeToFile('README.md', generateMarkdown({ ...data }))
});
