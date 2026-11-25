
document.getElementById("resumeForm").addEventListener("submit", function(e) {

    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    let message = document.getElementById("message");

    if (name == "" || email == "") {

        message.innerHTML = "Please fill all fields!";
        message.style.color = "red";

    }
    else {

        message.innerHTML = "Form submitted successfully!";
        message.style.color = "green";

    }

});
