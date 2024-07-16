const inquirer = require('inquirer');

const promptUser = () => {
  return inquirer.prompt ([
    {
      type :'input',
      name: 'text',
      message: 'Enter text (up to 3 characters)'
    },
    {
      type :'input',
      name: 'textColor',
      message: 'Entere text color (keyword or hexadeciamal)'
    },
    {
      type :'list',
      name: 'shape',
      message: 'Choose a shape',
      choices: ['Circle','Square','Triangle']
    },
    {
      type :'input',
      name: 'shapeColor',
      message: 'Enter shape color (keyword or hexadecimal)'
    },
  ])
}

module.exports = { promptUser } 