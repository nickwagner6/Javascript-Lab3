"use strict";

const submissions = [
  {
    name: "Jane",
    score: 95,
    date: "2020-01-24",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "2020-01-24",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "2020-01-24",
    passed: true,
  },
  {
    name: "Jill",
    score: 99,
    date: "2020-01-24",
    passed: true,
  },
];

// Question 2
const addSubmission = (array, newName, newScore, newDate) => {
  const newSubmission = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60,
  };
  array.push(newSubmission);
};
// Question 3
const deleteSubmissionByIndex = (array, index) => {
  //delete(splice) 1 at the index
  array.splice(index, 1);
};
// Question 4
const deleteSubmissionByName = (array, name) => {
  let index = array.findIndex((item) => {
    return item.name === name;
  });
  array.splice(name, 1);
};
// Question 5
const editSubmission = (array, index, score) => {
  //this line is targeting the entire array above. Then its targetting the score by using the . after the []
  //just array and [index] are targetting the objects
  array[index].score = score;
  array[index].passed = score >= 60;
};
// This line is targetting the 2nd array and changing the score to 95
// editSubmission(submissions, 2, 95);
// console.log(submissions);

// Question 6
const findSubmissionByName = (array, name) => {
  //the find method will only give you back the first object in an array
  return array.find((item) => {
    return item.name === name;
  });
};
// console.log(findLowestScore(submissions, "Jill"));

// // Question 7
// const findLowestScore = (array) => {
//   let currentLowest = array[0];
//   array.forEach((item) => {
//     if (item.score < currentLowest.score) {
//       currentLowest = item;
//     }
//   });
//   return currentLowest;
// };

//Another EX to Question 7
const findLowestScore = (array) => {
  // need to look at each objects score property to determine if that score is lower than the current lowest
  //might need a variable to hold onto the current lowest score
  //return the lowest
  let currentLowest = array[0];
  array.forEach((item) => {
    if (item.score < currentLowest) {
      currentLowest = item;
    }
  });
  return currentLowest;
};

// //This is the reduced function and a ternary operator
// const findLowestScore = (array) => {
//   return array.reduce((acc, cv) => {
//     //this line is a ternary operator
//     return cv.score < acc.score ? cv : acc;
//   });
// };

console.log(findLowestScore(submissions));

// Question 8 Were going to use the Reduce array to find the sum
const findAverageScore = (array) => {
  return (
    array.reduce((acc, cs) => {
      return acc + cv.score;
    }, 0) / array.length
  );
};

// // Or another way to do Question 8
// const findAverageScore = (array) => {
//   let sum = 0;
//   for (let element of array) {
//     sum += element.score;
//   }
//   return sum / array.length;
// };

const findAverageScore = (array) => {
  let sum = 0;
  array.forEach((item) => {
    sum = sum + item.score;
    //This line is the same as the one above it / Shorthand
    //sum += item.score
  });
};

// Question 9
const filterPassing = (array) => {
  return array.filter((submission) => {
    return submission.passed === true;
  });
};

console.log(filterPassing(submissions));

const filter90AndAbove = (array) => {
  return array.filter((item) => {
    //the condition is the item.score with a score = to or above 90
    return item.score >= 90;
  });
};

console.log(filter90AndAbove(submissions));

//practice
const filterByNameLength = (array, length) => {
  return array.filter((item) => {
    return item.name.length === length;
  });
};

console.log(filterByNameLength(submissions, 4));
