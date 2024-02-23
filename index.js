// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'What is the name of your project?',
        validate: (value) => value ? true : `\x1b[31mPlease enter a name for your project.\x1b[0m`,
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Please enter a description for your project: ',
        validate: (value) => value ? true : `\x1b[31mPlease enter a description for your project.\x1b[0m`,
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'Please enter installation instructions for your project: ',
        validate: (value) => value ? true : `\x1b[31mPlease enter installation instructions for your project. If there are none, please enter 'none'.\x1b[0m`,
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Please enter usage information: ',
        validate: (value) => value ? true : `\x1b[31mPlease enter usage information for your project.\x1b[0m`,
    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'Please enter your contribution guidelines: ',
        validate: (value) => value ? true : `\x1b[31mPlease enter contribution guidelines for your project. If there are none, please enter 'none'.\x1b[0m`,
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'Please enter any instructions for testing: ',
        validate: (value) => value ? true : `\x1b[31mPlease enter instructions for testing your project. If there are none, please enter 'none'.\x1b[0m`,
    },
    {
        type: 'input',
        name: 'Questions',
        message: 'Please enter your Email address: ',
        validate: (value) => value ? true : `\x1b[31mPlease enter a valid email address to ensure users can reach out to you with any questions. If you prefer not to add your email, enter 'N/A'.\x1b[0m`,
    },
    {
        type: 'input',
        name: 'Credits',
        message: 'Please list any collaborators, third-party assets, and tutorials - followed by links to the source materials included. Please add "\\n" after each credit to ensure they render on separate lines.',
        filter: (value) => value.replace(/\\n/g, '  \n')
    },
    {
        type: 'list',
        name: 'License',
        message: 'Please choose your projects license from the following list: ',
        choices: ['MIT', 'Apache 2.0', 'GPL v3', 'Mozilla 2.0', 'BSD 3-Clause', 'None']
    }
]

// TODO: Create a function to write README file
const writeReadme = (data) => {
    const readmeContent = generateMarkdown(data);
        fs.writeFile('README.md', readmeContent, (err) => {
            err ? console.error(err) : console.log(`\x1b[36m${'Your README.md file has been created successfully!'}\x1b[0m`);
    });
        console.log(`\x1b[35m${'Your answers were: '}\x1b[0m`, data);
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
