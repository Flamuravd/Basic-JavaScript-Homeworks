console.log("working");

function createTable() {
    let tableHTML = "<table border='1'>";
    tableHTML += "<tr><th>Row 1 Column 1</th><th>Row 1 Column 2</th><th>Row 1 Column 3</th></tr>";
    tableHTML += "<tr><td>Row 2 Column 1</td><td>Row 2 Column 2</td><td>Row 2 Column 3</td></tr>";
    tableHTML += "<tr><td>Row 3 Column 1</td><td>Row 3 Column 2</td><td>Row 3 Column 3</td></tr>";
    tableHTML += "<tr><td>Row 4 Column 1</td><td>Row 4 Column 2</td><td>Row 4 Column 3</td></tr>";
    tableHTML += "</table>";
    document.getElementById("table").innerHTML = tableHTML;
}

createTable();