// 1. Arraay.Find method -
// 2. Arraay.Filter method -
// 3. Arraay.Foreach method -
// 4. Arraay.Map method -
// 5. split method -
// 6. join method
// 7. Splice metod -
// 8 .Slice method -

// 1. Arraay.Find method -

// it returns the first element in the array that satisfies the provided testing function.
// If no elements satisfy the testing function, undefined is returned.

const todos = [
  { id: 1, task: "Learn JavaScript", completed: true },
  { id: 2, task: "Learn React", completed: false },
  { id: 3, task: "Build a project", completed: false },
];

const todoBId = todos.find((todo) => todo.id === 2);
console.log(todoBId); // Output: { id: 2, task: "Learn React", completed: false }

const todoByCompleted = todos.find((todo) => todo.completed === false); // first matching element
console.log(todoByCompleted); // Output: { id: 2, task: "Learn React", completed: false }

const todoByTask = todos.find((todo) => todo.task === "Build a project");
console.log(todoByTask); // Output: { id: 3, task: "Build a project", completed: false }

// multi condition
const todoByMultipleCondition = todos.find(
  (todo) => todo.completed === false && todo.task === "Build a project",
);
console.log(todoByMultipleCondition); // Output: { id: 3, task: "Build a project", completed: false }

const todoNotFound = todos.find((todo) => todo.id === 4);
console.log(todoNotFound); // Output: undefined

// 2. Arraay.Filter method -

// it creates a new array with all elements that pass the test implemented by the provided function.

todos.filter((todo) => {
  return todo.completed === true;
});

console.log(todos); // because we haven't store in any variable so it will return the original array

// Output: [{ id: 1, task: "Learn JavaScript", completed: true }
//  { id: 2, task: "Learn React", completed: false },
//   { id: 3, task: "Build a project", completed: false }]

const completedTodos = todos.filter((todo) => todo.completed === true);
console.log(completedTodos); // Output: [{ id: 1, task: "Learn JavaScript", completed: true }]

const incompleteTodos = todos.filter((todo) => todo.completed === false);
console.log(incompleteTodos);
// Output: [
//   { id: 2, task: "Learn React", completed: false },
//   { id: 3, task: "Build a project", completed: false },
// ]

const todosWithReact = todos.filter((todo) => todo.task.includes("React"));
console.log(todosWithReact); // Output: [{ id: 2, task: "Learn React", completed: false }]

// 3. Arraay.Foreach method -

// it executes a provided function once for each array element.
todos.forEach((todo) => {
  todo.completed = true;
});

// Output: [
//   { id: 1, task: "Learn JavaScript", completed: true },
//   { id: 2, task: "Learn React", completed: true },
//   { id: 3, task: "Build a project", completed: true },
// ]

todos.forEach((todo, index) => {
  console.log(`Todo ${index}: ${todo.task}`);
});

// Output:
// Todo 0: Learn JavaScript
// Todo 1: Learn React
// Todo 2: Build a project

//4. Arraay.Map method -

// it creates a new array populated with the results of calling a provided function on every element in the calling array.

const mappedTodos = todos.map((todo) => {
  return {
    id: todo.id,
    desc: todo.task,
  };
});

console.log(mappedTodos);
// Output: [
//   { id: 1, desc: "Learn JavaScript" },
//   { id: 2, desc: "Learn React" },
//   { id: 3, desc: "Build a project" },
// ]

const mappedTodoPriority = todos.map((todo) => {
  return {
    ...todo,
    priority: "High",
  };
});

console.log(mappedTodoPriority);
// Output: [
//   { id: 1, task: "Learn JavaScript", completed: true, priority: "high" },
//   { id: 2, task: "Learn React", completed: false, priority: "high" },
//   { id: 3, task: "Build a project", completed: false, priority: "high" },

// 5. split method - it splits a string into an array of substrings based on a specified separator.

const sentence = "Hello, how are you?";
const words = sentence.split(" ");
console.log(words); // Output: ["Hello,", "how", "are", "you?"]

// 6. join method - it joins all elements of an array into a string, with a specified separator between each element.

const fruits = ["Apple", "Banana", "Cherry"];
const fruitString = fruits.join(", ");
console.log(fruitString); // Output: "Apple, Banana, Cherry"

// 7. Splice metod - it changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

const numbers = [1, 2, 3, 4, 5];
numbers.splice(2, 1); // removes 1 element at index 2
console.log(numbers); // Output: [1, 2, 4, 5]

numbers.splice(1, 0, 10); // adds 10 at index 1 without removing any element
console.log(numbers); // Output: [1, 10, 2, 4, 5]

numbers.splice(2, 2, 20, 30); // replaces 2 elements at index 2 with 20 and 30
console.log(numbers); // Output: [1, 10, 20, 30, 5]

numbers.splice(4, 0, 40, 50); // adds 40 and 50 at index 4 without removing any element
console.log(numbers); // Output: [1, 10, 20, 30, 40, 50, 5]

// 8 . Slice method - it returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array.

const originalArray = [1, 2, 3, 4, 5];
const slicedArray = originalArray.slice(1, 4);

console.log(slicedArray); // Output: [2, 3, 4]
console.log(originalArray); // Output: [1, 2, 3, 4, 5] (original array remains unchanged)

const slicedArrayFromIndex = originalArray.slice(2);
console.log(slicedArrayFromIndex); // Output: [3, 4, 5]
console.log(originalArray); // Output: [1, 2, 3, 4, 5] (original array remains unchanged)
