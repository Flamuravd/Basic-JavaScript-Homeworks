const rowsEl = document.getElementById("rows");
const columnsEl =  document.getElementById("columns");
const btnEl = document.getElementById("createTable");
const divEl = document.getElementById("table");

btnEl.addEventListener("click", function() {
  let rows = rowsEl.value;
  let columns = columnsEl.value;

  console.log("Rows: ", rows);
  console.log("Columns: ", columns);

  let table = "<table border='1'>";
  for (let i = 1; i < rows; i++) {
    table += "<tr>";
  for (let j = 1; j < columns; j++) {
    table += "<td>Row " + i + " Column " + j + "</td>";
  }
    table += "</tr>";
  }
  table += "</table>";
  divEl.innerHTML = table;
});
