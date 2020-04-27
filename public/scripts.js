document.addEventListener("DOMContentLoaded", function () {
    if (window.document.location == `http://localhost:3000/results`) {
        const settings = {
            method: 'GET'
        };
        console.log("hit");
        fetch('/api', settings) 
            .then(response => response.json())
            .then(data => console.log(data));
    }
});


function handleSubmit () {
    let first = document.getElementById('firstName').value;
    let last = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let attendees = {
        firstName: first, 
        lastName: last,
        email: email
    }
    const settings = {
        method: 'POST',
        headers: {'Content-Type':'application/json',},
        body: JSON.stringify(attendees)
    }   

    fetch('/api', settings) 
    .then((response) => {console.log(response)});

    const form = document.getElementById("myForm");
    form.reset();
}