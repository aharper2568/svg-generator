const inquirer = require('inquirer');
// inquirer function
const promptUser = () => {
  return inquirer.prompt ([
    {
      type :'input',
      name: 'text',
      message: 'Enter text (up to 3 characters)' //needs validation
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
// export function for use in index.js
module.exports = { promptUser } 