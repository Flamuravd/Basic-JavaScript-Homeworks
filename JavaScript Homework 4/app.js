// Homework 1
function tellStory(arr) {
  let name = arr[0];
  let mood = arr[1];
  let activity = arr[2];

  let story = `This is ${name}. ${name} is a nice person. Today they are ${mood}. They are ${activity} all day. The end.`;

  return story;
}

console.log(tellStory(["Flamur", "happy", "coding"]));

// Homework 2

function sumOfFiveNumbers(arr) {
  let sum = arr[0] + arr[1] + arr[2] + arr[3] + arr[4];
  return sum;
}

console.log(sumOfFiveNumbers([10, 15, 22, 6, 98]));

// Homework 3

function arrayOfStrings() {
  let arr = ["Hello " + "there " + "students " + "of " + "SEDC" + "!"];
  return arr;
}

console.log(arrayOfStrings());

// Homework 4

for (let i = 1; i < 21; i++) {
  if (i % 2 === 0) {
    console.log(i + "\n");
    } else {
      console.log(i + " ");
    }
}

// Homework 5

function sumOfMaxAndMin(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let sum = max + min;
  return `Max: ${max}, Min: ${min}, Sum: ${sum}`;
}

console.log(sumOfMaxAndMin([3, 5, 6, 8, 11]));

// Homework 6

function studentFullName() {
  let firstName = ["Bob ", "Jill "];
  let lastName = ["Gregory ", "Wurtz"];
  let fullNames = "";
  for (let i = 0; i < firstName.length; i++) {
    fullNames += `${firstName[i]} ${lastName[i]}`;
    if(i < firstName.length - 1) {
      fullNames += ", ";
    }
  }
  return fullNames;
}

console.log(studentFullName());