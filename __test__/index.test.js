'use strict';

const greet = require('../lib/greet');
const faker = require('faker');
const arithmetic = require('../lib/arithmetic');

describe('#index.test.js', () => {
  test('Should return null if input is not a string.', () => {
    const returnNull = greet.sayHello(faker.random.number());
    expect(returnNull).toBeNull();
  });
  test('Should return Hello World.', () => {
    const returnWorld = greet.sayHello('World');
    expect(returnWorld).toEqual('Hello World!');
  });

/////////// arithmetic /////////////////////////
  let randomArray = [faker.random.number(), faker.random.number()];
  test('Should sum an array of numbers', () => {
    const sum = arithmetic.sum(randomArray);
    expect(sum).toEqual(randomArray[0] + randomArray[1]);
  });


  test('Should subtract an array of numbers.', () => {
    const difference = arithmetic.subtract(randomArray);
    expect(difference).toEqual(randomArray[0] - randomArray[1]);
  });
  test('Should mulitply an array of numbers.', () => {
    const product = arithmetic.multiply(randomArray);
    expect(product).toEqual(randomArray[0] * randomArray[1]);
  });
  test('Should divide an array of numbers.', () => {
    const quotient = arithmetic.divide(randomArray);
    expect(quotient).toEqual(randomArray[0] / randomArray[1]);
  });
});
