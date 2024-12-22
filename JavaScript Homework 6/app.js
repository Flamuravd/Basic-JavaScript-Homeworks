console.log("Working!");

// Homework part 1
let mainHeadingEl = document.getElementById("mainHeading");

console.log(mainHeadingEl);

let paragraphs = document.getElementsByClassName("paragraph")[0];

console.log(paragraphs);

let paragraphSecondEl = document.getElementsByClassName("second")[0];

console.log(paragraphSecondEl);

let h1El = document.getElementsByTagName("h1")[1];

console.log(h1El);

let h3El = document.getElementsByTagName("h3")[0];

console.log(h3El);

console.log(mainHeadingEl.innerText);
console.log(paragraphs.innerText);
console.log(paragraphSecondEl.innerText);
console.log(h1El.innerText);
console.log(h3El.innerText);

mainHeadingEl.textContent = "This is now updated";
paragraphs.textContent = "The first paragraph is now updated";
paragraphSecondEl.textContent = "The second paragraph is now updated";
h1El.textContent = "The second h1 is now updated";
h3El.textContent = "The first h3 is now updated";