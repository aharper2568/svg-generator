
// class to be inherited by specified shapes
class Shape {
  constructor(color) {
    this.color = color; //sets color
  }

  setColor(color) {
    this.color = color; // allows color to be changed
  }
}

class Circle extends Shape {
  render() { //method to generate circle
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}

class Triangle extends Shape {
  render() { //method to generate triangle
    return `<polygon points="150,10 250,190 50,190" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  render() { // method to generate square
    return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
  }
}

module.exports = { Circle, Triangle, Square };
