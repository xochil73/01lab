'use strict'

const faker = require('faker');
const arithmetic = require('arithmetic');
let randomArray = [faker.random.number(), faker.random.number()];


arithmetic.sum = (array) => {
  return array[0] + array[1];
}

arithmetic.subtract = (array) => {
  return array[0] - array[0];
};

arithmetic.multiply = (array) => {
  return array[0] * array[1];
}

arithmetic.divide = (array) => {
  return array[0] / array[1];
};
