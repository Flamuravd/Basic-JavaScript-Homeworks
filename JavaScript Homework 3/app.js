// Homework part 1

function checkType(dataTypes) {
  let type = typeof dataTypes;
  console.log(`Check typeof ${type}`);

  return type;
}

checkType(null);
checkType(true);
checkType(10);
checkType('Hello G7');
checkType(undefined);

// Homework part 2

function calculateAge(humanYears, toDogYears = true) {
  if(toDogYears) {
    return `Your age in dog year is: ${humanYears * 7}`;
  } else {
    return `Your age in human year is: ${humanYears / 7}`;
  }
}

console.log(calculateAge(10, true));
console.log(calculateAge(35, false));

// Homework part 3

function atm() {

  let accBalance = 1000;
  
  let withdrawalAmount =  parseFloat(prompt("Enter the amount you want to withdraw:"));

  if(isNaN(withdrawalAmount) || withdrawalAmount <= 0) {
    alert("Invalid amount entered. Please enter a positive number");
    return;
  }

  if(withdrawalAmount > accBalance) {
    alert("Not enough money in the account!");
    console.log("Not enough money in the account!");
  } else {
    accBalance -= withdrawalAmount;
    alert(`Transaction succesful. You withdrew $${withdrawalAmount}. Remaining balance $${accBalance}`);
    console.log(`Transaction succesful. You withdrew $${withdrawalAmount}. Remaining balance $${accBalance}`);
    
  }
}

atm();