const fs = require('fs'); // file sys module reads and writes files
const path = require('path'); // allows platform-independant path handling
const { Circle, Triangle, Square } = require('./lib/shapes'); //import shape classes
const { promptUser } = require('./lib/prompts'); 

const generateSVG = ( text, textColor, shape, shapeColor ) => { // generate svg code based on user input
  let shapeInstance;
// if else if statements to create new shape instance based on input
  if (shape === 'Circle') {
    shapeInstance = new Circle(shapeColor);
  } else if (shape === 'Triangle') {
    shapeInstance = new Triangle(shapeColor);
  } else if (shape === 'Square') {
    shapeInstance = new Square(shapeColor);
  } else {
    throw new Error('Invalid shape');
  }
  // svg content template  literal string
  const svgContent = `
  <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapeInstance.render()}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
  </svg>
`;

return svgContent;
};
 //init function to start the application
const init = () => {
  promptUser()
  .then (answers => {
    const {text,textColor,shape,shapeColor} = answers
    const svgContent = generateSVG(text,textColor,shape,shapeColor);
    fs.writeFileSync(path.join(__dirname,'examples','logo.svg'), svgContent);
    console.log('Generated logo.svg');
  })
  .catch(error => {
    console.error('Error generating SVG:', error);
  })
}
// start application
init();