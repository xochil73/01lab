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
    expect(sum).toEqual(randomArray);
  });


  test('Should subtract an array of numbers.', () => {
    const difference = arithmetic.difference(randomArray);
    expect(difference).toEqual(randomArray.reduce);
  });
  test('Should mulitply an array of numbers.', () => {
    const product = arithmetic.product(randomArray);
    expect(product).toEqual(randomArray);
  });
  test('Should divide an array of numbers.', () => {
    const quotient = arithmetic.quotient(randomArray);
    expect(quotient).toEqual(randomArray);
  });
});
