document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();


    let name = document.getElementById("nameInput").value;

    let message = name + " that's a pretty cool interest!";

    document.getElementById("outputMessage").textContent = message;
    
});
