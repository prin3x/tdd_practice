const {greet} = require('../app/index');

test('Test requirement 1', () => {
  expect(greet('Sonter')).toBe('Hello, Sonter.');
});

test('Test requirement 2', () => {
  expect(greet(null)).toBe('Hello, my friend.');
});

test('Test requirement 3', () => {
  expect(greet('JERRY')).toBe('HELLO, JERRY!');
});

test('Test requirement 4', () => {
  expect(greet(['Jill', 'Jane'])).toBe('Hello, Jill and Jane.');
});

test('Test requirement 5', () => {
  expect(greet(['Amy', 'Brian', 'Charllote'])).toBe(
    'Hello, Amy, Brian, and Charllote.'
  );
});

test('Test requirement 6', () => {
  expect(greet(['Amy', 'BRIAN', 'Charlotte'])).toBe(
    'Hello, Amy and Charlotte. AND HELLO BRIAN!'
  );
});

test('Test requirement 7', () => {
  expect(greet(['Bob', 'Charlie, Dianne'])).toBe(
    'Hello, Bob, Charlie, and Dianne.'
  );
});

test('Test requirement 8', () => {
  expect(greet(['Bob', '"Charlie, Dianne"'])).toBe(
    'Hello, Bob and Charlie, Dianne.'
  );
});
