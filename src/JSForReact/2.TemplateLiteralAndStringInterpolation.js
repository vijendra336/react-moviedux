// 1. Template Literals simple
const firstName = "John";

const greeting = `Hello, ${firstName}!`; // This is a template literal using backticks and string interpolation with ${}
console.log(greeting); // Output: Hello, John!

const a = 5;
const b = 10;

// 2. we can do mathamatical operations as well using string literals
const desc = `The sum of ${a} and ${b} is ${a + b}.`; // Using template literals to create a string with embedded expressions
console.log(desc); // Output: The sum of 5 and 10 is 15.

//3 . Multi line string using template literals

const user = {
  name: "Alice",
  age: 30,
  city: "New York",
};

const userInfomation = `User Information:
Name: ${user.name}
Age: ${user.age}
City: ${user.city}`;
console.log(userInfomation);
