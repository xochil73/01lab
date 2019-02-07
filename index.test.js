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
    })
};

