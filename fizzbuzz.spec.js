const { fizzBuzz } = require('./fizzbuzz');

global.console = {
  log: jest.fn()
}

test('fizzBuzz sequence with upper bound of 15 is correct', () => {
  fizzBuzz(15);
  expect(console.log).toHaveBeenCalledWith(1);
  expect(console.log).toHaveBeenCalledWith(2);
  expect(console.log).toHaveBeenCalledWith("Fizz");
  expect(console.log).toHaveBeenCalledWith(4);
  expect(console.log).toHaveBeenCalledWith("Buzz");
  expect(console.log).toHaveBeenCalledWith("Fizz");
  expect(console.log).toHaveBeenCalledWith(7);
  expect(console.log).toHaveBeenCalledWith(8);
  expect(console.log).toHaveBeenCalledWith("Fizz");
  expect(console.log).toHaveBeenCalledWith("Buzz");
  expect(console.log).toHaveBeenCalledWith(11);
  expect(console.log).toHaveBeenCalledWith("Fizz");
  expect(console.log).toHaveBeenCalledWith(13);
  expect(console.log).toHaveBeenCalledWith(14);
  expect(console.log).toHaveBeenCalledWith("FizzBuzz");
});