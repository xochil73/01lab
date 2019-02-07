'use strict';


const greet = require('./lib/greet');
const arithmetic = require('arithmetic');
const faker = require('faker');

let randomArray = [faker.random.number(), faker.random.number()];


console.log(greet.sayHello(faker.name.firstName()));