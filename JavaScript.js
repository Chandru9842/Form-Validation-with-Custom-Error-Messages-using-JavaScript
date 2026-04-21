document.getElementById("myForm").addEventListener("submit", function(e) {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let error = "";

    if (name === "") {
        error = "Name is required!";
    } else if (!email.includes("@")) {
        error = "Enter a valid email!";
    }

    if (error !== "") {
        e.preventDefault();
        document.getElementById("error").innerText = error;
    }
});