const fs = require('fs');
const path = require('path');
const { Circle, Triangle, Square } = require('./lib/shapes');
const { promptUser } = require('./lib/prompts');

const generateSVG = ( text, textColor, shape, shapeColor ) => {
  let shapeInstance;

  if (shape === 'Circle') {
    shapeInstance = new Circle(shapeColor);
  } else if (shape === 'Triangle') {
    shapeInstance = new Triangle(shapeColor);
  } else if (shape === 'Square') {
    shapeInstance = new Square(shapeColor);
  } else {
    throw new Error('Invalid shape');
  }
  const svgContent = `
  <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapeInstance.render()}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
  </svg>
`;

return svgContent;
};