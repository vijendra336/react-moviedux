// 1. Default Module - we can have only one default export per module

// 1.1 way
// import sum from './math';

// const result = sum(5, 10);
// console.log(`The result of the sum is: ${result}`);

// 1.2 way - we have only export default method in math.js so we can use as add

// import add from "./math";
// console.log(`The result of the sum is: ${add(5, 10)}`);

//2. Named Module - we can have multiple named exports per module

// import sum, { multiply } from "./math";
// // sum is default export and multiply is named export

// console.log(`The result of the sum is: ${sum(5, 10)}`);
// console.log(`The result of the multiplication is: ${multiply(5, 10)}`);

//3 instead of default export we can also export named export and import it with the same name

// import { sum, multiply } from "./math";
// console.log(`The result of the sum is: ${sum(5, 10)}`);
// console.log(`The result of the multiplication is: ${multiply(5, 10)}`);

// 4. Importing all named exports as an object

import * as math from "./math";
console.log(`The result of the sum is: ${math.sum(5, 10)}`);
console.log(`The result of the multiplication is: ${math.multiply(5, 10)}`);
