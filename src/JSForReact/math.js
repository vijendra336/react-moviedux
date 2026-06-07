// function sum(a, b) {
//   return a + b;
// }

// function multiply(a, b) {
//   return a * b;
// }

// export default sum;
//export default sum, multiple;  // not allowed as we have only one default export

// 3 instead of default export we can also export named export and import it with the same name
export function sum(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}
