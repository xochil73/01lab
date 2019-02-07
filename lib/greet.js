'use strict';

const greet = module.exports = {};

greet.sayHello = (name) => {
  if (typeof name === 'string') return `Hello ${name}!`;
  else return null;
};