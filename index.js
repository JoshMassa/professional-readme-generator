// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        type: 'input',
        name: 'Title',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Please enter a description for your project: '
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'Please enter installation instructions for your project: '
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Please enter usage information: '
    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'Please enter your contribution guidelines: '
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'Please enter any instructions for testing: '
    }
]).then((answers) => {
    fs.writeFile('temp.doc', JSON.stringify(answers, null, '\t'), (err) => {
        err ? console.error(err) : console.log('temp.doc Generated!')
    });
    console.log('Your answers were: ', answers);
});

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
