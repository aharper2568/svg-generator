const { Circle, Triangle, Square } = require('./shapes');

test('Circle renders correctly', () => {
  const shape = new Circle('red');
  expect(shape.render()).toBe('<circle cx="150" cy="100" r="80" fill="red" />');
});