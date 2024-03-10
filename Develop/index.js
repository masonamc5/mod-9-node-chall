// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter the description of your project?'
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What is the the installation process for your project?'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What is the usage of your project?'
      },
      {
        type: 'input',
        name: 'credits',
        message: 'Who are the contributors to this project?'
      },
      {
        type: 'input',
        name: 'license',
        message: 'What is the license for this project?'
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('README file generated successfully!')
  );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        
      const readmeContent = generateREADME(answers);

    
      writeToFile('README.md', readmeContent);
    })
    .catch((error) => {
      console.error('An error occurred:', error);
    });
}

// Function call to initialize app
init();
