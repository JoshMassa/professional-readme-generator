// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { generateMarkdown, renderLicenseBadge } = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'What is the name of your project?',
        validate: (value) => value ? true : "Please enter a name for your project.",
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Please enter a description for your project: ',
        validate: (value) => value ? true : "Please enter a description for your project.",
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'Please enter installation instructions for your project: ',
        validate: (value) => value ? true : "Please enter installation instructions for your project. If there are none, please enter 'none'.",
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Please enter usage information: ',
        validate: (value) => value ? true : "Please enter usage information for your project.",
    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'Please enter your contribution guidelines: ',
        validate: (value) => value ? true : "Please enter contribution guidelines for your project. If there are none, please enter 'none'.",
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'Please enter any instructions for testing: ',
        validate: (value) => value ? true : "Please enter instructions for testing your project. If there are none, please enter 'none'.",
    },
    {
        type: 'input',
        name: 'Questions',
        message: 'Please enter your GitHub Username: '
    },
    {
        type: 'list',
        name: 'License',
        message: 'Please choose your projects license from the following list: ',
        choices: ['MIT', 'Apache 2.0', 'GPL v3', 'Mozilla 2.0', 'BSD 3-Clause' ]
    }
]

// TODO: Create a function to write README file
const writeReadme = (data) => {
    const readmeContent = generateMarkdown(data);
    renderLicenseBadge(data.License)
        fs.writeFile('README.md', readmeContent, (err) => {
            err ? console.error(err) : console.log('README.md Generated!');
    });
        console.log('Your answers were: ', data);
    };
// TODO: Create a function to initialize app
async function init() {
    try {
        const data = await inquirer.prompt(questions);
        writeReadme(data);
    } catch (err) {
        console.error(err);
    }
}

// Function call to initialize app
init();
