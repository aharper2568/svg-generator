const { Circle, Triangle, Square } = require('./shapes');

test('Circle renders correctly', () => {
  const shape = new Circle('red');
  expect(shape.render()).toBe('<circle cx="150" cy="100" r="80" fill="red" />');
});

test('Triangle renders correctly', () => {
  const shape = new Triangle('blue');
  expect(shape.render()).toBe('<polygon points="150,10 250,190 50,190" fill="blue" />');
});

test('Square renders correctly', () => {
  const shape = new Square('green');
  expect(shape.render()).toBe('<rect x="50" y="50" width="200" height="200" fill="green" />');
});