// fetch voters data from the database
var json = require('./data.json'); //(with path)
async function loadIntoTable(url, table){
    const tableHead = table.querySelector("thead");
    const tableBody = table.querySelector("tbody");
    const response = await fetch(url);
    const { headers, rows } = await response.json();


    //clear the table

    tableHead.innerHTML = "<tr></tr>";
    tableBody.innerHTML = "";

    //populate the headers with data

    for (const headerText of headers){
        const headerElement = document.createElement("th");

        headerElement.textContent = headerText;
        tableHead.querySelector("tr").appendChild(headerElement);
    }

    //populate the rows

    for ( const row of rows){
        const rowElement = document.createElement("tr");

        for( const cellText of row){
            const cellElement = document.createElement("td");
            cellElement.textContent = cellText;
            rowElement.appendChild(cellElement);

        }

        tableBody.appendChild(rowElement);
    }

}

loadIntoTable("./data.json", document.querySelector("table"));