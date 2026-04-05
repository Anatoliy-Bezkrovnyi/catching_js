'use strict';

const a = 5;
const b = 10;

console.log(a+b);

const username = 'Mango';
const age = 41;
const message = `My name is ${username} and I'm ${age} years old`;

console.log(message);

const productName = 'Repair droid';

console.log(productName.length);


function consolePrint() {
    console.log('Training function called');
}

consolePrint();

function multiply(a, b) {
    console.log(a * b);
}

multiply(4, 5);

function makeMessage(username) {
	console.log(`Hello ${username}`);
}

makeMessage("Jacob");
