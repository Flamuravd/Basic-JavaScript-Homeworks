let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let Listhtml = "";

for(let i = 0; i < newArr.length; i++) {
  Listhtml += `<li> ${newArr[i]} </li>`;
}

Listhtml += `<ol></ol>`;
document.write(Listhtml);

let sum = 0;

for(let i = 0; i < newArr.length; i++) {
  sum += newArr[i];
}

document.write(`<p>Sum: ${sum} </p>`);