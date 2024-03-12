// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');




// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'Description',
        message: 'Enter the description of your project?',
      },
      {
        type: 'input',
        name: 'Installation',
        message: 'What is the the installation process for your project?',
      },
      {
        type: 'input',
        name: 'Usage',
        message: 'What is the usage of your project?',
      },
      {
        type: 'input',
        name: 'Contributions',
        message: 'Who are the contributors to this project?',
      },
      {
        type: 'input',
        name: 'License',
        message: 'What is the license for this project?',
      },
      {
        type: 'input',
        name: 'Tests',
        message: 'What are the tests for this project?',
      },
      {
        type: 'input',
        name: 'Questions',
        message: 'What are the questions for this project?',
      },
      {
        type: 'input',
        name: 'Username',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'Email',
        message: 'What is your email address?',
      }
      
];

// TODO: Create a function to write README file
function writeToFile(fileName, readmeContent) {
  try {
    fs.writeFileSync(fileName, readmeContent, 'utf8');
    console.log('README file generated successfully!');
  } catch (err) {
    console.error('Error writing README file:', err);
  }
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
      console.log(answers)
        
      const readmeContent = generateMarkdown(answers);
      console.log(readmeContent)
    
      writeToFile('README.md', readmeContent);
    })
    .catch((error) => {
      console.error('An error occurred:', error);
    });
}

// Function call to initialize app
init();
