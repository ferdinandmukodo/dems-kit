fetch(`${url}/headers`,{
    method:"POST",
    headers:{
      "Content-Type": "application/json",
       Accept: "application/json",
    },
    body:JSON.stringify(loan)
}).then(response=>response.json);
fetch(`${url}/rows`,{
    method:"POST",
    headers:{
      "Content-Type": "application/json",
       Accept: "application/json",
    },
    body:JSON.stringify(member)
}).then(response=>response.json);




function sendEmail(){
    e.preventDefaut()
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


function displayDate() {
    var x = new Date()
    var ampm = x.getHours( ) >= 12 ? ' PM' : ' AM';
    
    var x1=x.getMonth() + 1+ "/" + x.getDate() + "/" + x.getFullYear(); 
    x1 = x1 + " - " +  x.getHours( )+ ":" +  x.getMinutes() + ":" +  x.getSeconds() + ":" + ampm;
    document.getElementById('timer').innerHTML = x1;
    displayTime();
     }
     function displayTime(){
    var refresh=1000; // Refresh rate in milli seconds
    mytime=setTimeout('displayDate()',refresh)
    }
    displayTime()

