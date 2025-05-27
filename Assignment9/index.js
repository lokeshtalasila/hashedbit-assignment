// 1. Declare variables using let, const, and var. What is the difference in scope for each?
function demonstrateScope() {
    var x = 10;     // function-scoped
    let y = 20;     // block-scoped
    const z = 30;   // block-scoped and constant

    if (true) {
        var x = 100;  // overrides outer x
        let y = 200;  // new block-scoped y
        const z = 300; // new block-scoped z
        console.log("Inside block:", x, y, z);
    }

    console.log("Outside block:", x, y, z);
}

// 2. Create an array called fruits and write a function that returns the second fruit in the array.
const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

function getSecondFruit() {
    return fruits[1]; // Banana
}

// 3. Write a function that takes an array, adds an element with push(), then removes it with pop().
function pushAndPop(array) {
    array.push("NewElement");
    array.pop();
    return array;
}

// 4. Create an array of numbers and write a function that uses map() to square each number.
const numbers = [1, 2, 3, 4, 5];

function squareNumbers(arr) {
    return arr.map(num => num * num);
}

// 5. Write a function that filters out even numbers and returns only odd numbers using filter().
function filterOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
}

// 6. Create a person object and write a function that logs a greeting using its properties.
const person = {
    name: "Alice",
    age: 30,
    occupation: "Engineer"
};

function greetPerson(p) {
    console.log(`Hello, my name is ${p.name}. I am a ${p.age}-year-old ${p.occupation}.`);
}

// 7. Write a function that takes an object with width and height and returns the area.
function getRectangleArea(rect) {
    return rect.width * rect.height;
}

// 8. Write a function that returns an array of the object's keys using Object.keys().
function getObjectKeys(obj) {
    return Object.keys(obj);
}

// 9. Write a function that merges two objects using Object.assign() and returns the result.
function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}

// 10. Create an array of numbers and use reduce() to calculate the sum.
function sumArray(arr) {
    return arr.reduce((acc, val) => acc + val, 0);
}

// demonstrateScope();
// console.log(getSecondFruit());
// console.log(pushAndPop([1, 2, 3]));
// console.log(squareNumbers(numbers));
// console.log(filterOddNumbers(numbers));
// greetPerson(person);
// console.log(getRectangleArea({ width: 5, height: 10 }));
// console.log(getObjectKeys(person));
// console.log(mergeObjects({ a: 1 }, { b: 2 }));
// console.log(sumArray(numbers));
