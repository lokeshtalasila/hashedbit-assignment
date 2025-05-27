// Q1  Create an array of states in india.
// Remove all the names starting with vowels from the list. Use array.filter.
let states = ["Uttar Pradesh", "Andhra Pradesh", "Odisha", "Bihar", "Maharashtra", "Tamil Nadu", "Kerala", "Assam", "Punjab", "Gujarat"];
let filteredStates = states.filter(state => !/^[aeiou]/i.test(state));
console.log("Q1:", filteredStates);

// Q2 let str = 'I love my India'
// output expected = 'India my love I'
// Write code for this.
let str = 'I love my India';
let reversedWords = str.split(' ').reverse().join(' ');
console.log("Q2:", reversedWords);

// Q3let string = 'INDIA'
// output = 'INDONESIA'
// Use array.splice
let stringArr = 'INDIA'.split('');
stringArr.splice(3, 0, 'O', 'N', 'E', 'S');
let output = stringArr.join('');
console.log("Q3:", output);

// Q4 Take any string with minimum 20 characters. Count number of consonant and vowel in the string.

let inputStr = "JavaScript is a fun and powerful language.";
let vowels = inputStr.match(/[aeiou]/gi)?.length || 0;
let consonants = inputStr.match(/[bcdfghjklmnpqrstvwxyz]/gi)?.length || 0;
console.log("Q4: Vowels:", vowels, "Consonants:", consonants);

// Q5  Write a function to replace wrong word with correct word in any sentance.
// Like this - correctfn(string, wrong, correct)
// Use string.replace in function.
function correctfn(string, wrong, correct) {
  return string.replace(wrong, correct);
}
console.log("Q5:", correctfn("I love my country", "country", "India"));

// Q6  inputArr = [1,2,3,9,10,7,5,4,3]
// answer = [9, 10, 7]
// User array.filter and return numbers greater than 5.
let inputArr = [1,2,3,9,10,7,5,4,3];
let greaterThanFive = inputArr.filter(num => num > 5);
console.log("Q6:", greaterThanFive);

// Q7 const students = [
// { name: "Ram", scores: [80, 70, 60] },
// { name: "Mohan", scores: [80, 70, 90] },
// { name: "Sai", scores: [60, 70, 80] },
// { name: "Hemang", scores: [90, 90, 80, 80] },
// ];
// Output = [
// { name: "Ram", average: 70 },
// { name: "Mohan", average: 80 },
// { name: "Sai", average: 70 },
// { name: "Hemang", average: 85 },
// ];
// Use array.map and array.reduce.
const students = [
  { name: "Ram", scores: [80, 70, 60] },
  { name: "Mohan", scores: [80, 70, 90] },
  { name: "Sai", scores: [60, 70, 80] },
  { name: "Hemang", scores: [90, 90, 80, 80] },
];
let studentAverages = students.map(s => {
  let sum = s.scores.reduce((acc, val) => acc + val, 0);
  let avg = sum / s.scores.length;
  return { name: s.name, average: avg };
});
console.log("Q7:", studentAverages);

// Q8 Write a function to find repeated sum of digits until there is only a single digit in the number.
// Example - 456 - 4+5+6 = 15 - 1+5 = 6.
function repeatedDigitSum(num) {
  while (num >= 10) {
    num = num.toString().split('').reduce((sum, digit) => sum + Number(digit), 0);
  }
  return num;
}
console.log("Q8:", repeatedDigitSum(456)); // Output: 6

// Q9  Write a function to count the number of words in a paragraph.
function wordCount(paragraph) {
  return paragraph.trim().split(/\s+/).length;
}
console.log("Q9:", wordCount("This is a simple paragraph with exactly ten words total now."));

// Q10 Write a function to reverse a string.
// Input - Hello
// Outpur - olleH
function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log("Q10:", reverseString("Hello"));

// Q11
// Input

// [
//     student1: {
//         subject1: 44,
//         subject2: 56,
//         subject3: 87,
//         subject4: 97,
//         subject5: 37
//     },
//     student2: {
//         subject1: 44,
//         subject2: 56,
//         subject3: 87,
//         subject4: 97,
//         subject5: 37
//     },
//     student3: {
//         subject1: 44,
//         subject2: 56,
//         subject3: 87,
//         subject4: 97,
//         subject5: 37
//     }
// ]
    
// Output: -
// [
//     student1: {
//         average: 44
//     },
//     student2: {
//         average: 44
//     },
//     student3: {
//         average: 44
//     }
// ]
// Write code to find average as mentioned above. Use array and object methods.

let studentsData = [
  {
    student1: {
      subject1: 44,
      subject2: 56,
      subject3: 87,
      subject4: 97,
      subject5: 37
    }
  },
  {
    student2: {
      subject1: 44,
      subject2: 56,
      subject3: 87,
      subject4: 97,
      subject5: 37
    }
  },
  {
    student3: {
      subject1: 44,
      subject2: 56,
      subject3: 87,
      subject4: 97,
      subject5: 37
    }
  }
];

let result = studentsData.map(student => {
  let key = Object.keys(student)[0];
  let subjects = Object.values(student[key]);
  let avg = subjects.reduce((a, b) => a + b, 0) / subjects.length;
  return { [key]: { average: avg } };
});
console.log("Q11:", result);
