
function sendEmail(){
    Email.send({
        Host : "smtp.hotmail.com",
        Username : "ferdinandamukod",
        Password : "Hotmail.com",
        To : 'ferdinandamukod@hotmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body : "Name: " + document.getElementById("name").value
        + "<br> Email: " + document.getElementById("email").value
        + "<br> Phone no: " + document.getElementById("phone").value
        + "<br> Message: " + document.getElementById("message").value
    }).then(
    message => alert('Email Sent Successfully!')
    );
}

document.getElementById("signUp").onclick = function() {
    document.getElementById("SignUPForm").style.display = "none";
}

document.getElementById("show").onclick = function() {
    document.getElementById("signUpForm").style.display = "block";
}


let button = document.querySelector('#button');
let msg = document.querySelector('#contactMessage');

button.addEventListener('click', ()=>{
  msg.classList.toggle('reveal');
})

function hideForm(){
    let submitcontactEmail = document.querySelector('#submitContactEmail')
    submitcontactEmail.addEventListener('submit', ()=>{
        msg.classList.toggle('hide')
    })
}  


// var hideForm = function() {  
//     // to hide 
//     var form = document.getElementById('eventdetail');
//     form.style.display = 'none';
//   };

let popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.remove("open-popup")
}

// fetch voters data from the database
async function loadIntotable(url, table){
    const tableHead = table.querySelector("thead");
    const tableBody = table.querySelector("tbody");
    const response = await fetch(url);
    const { headers, rows } = await response.json();

    //clear the table

    tableHead.innerHTML = "<tr></tr>";
    tableBody.innerHTML = "";

    //populate the headers with data

    for (const headerText of headers){
        const headersElement = document.createElement("th");

        headersElement.textContent = headerText;
        tableHead.querySelector("tr").appendChild(headersElement);
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

loadIntotable("./data.json", document.querySelector("table"));


