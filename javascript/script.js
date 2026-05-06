document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();


    let hobby = document.getElementById("nameInput").value;

    let message = hobby + ", that's pretty cool!";

    document.getElementById("outputMessage").textContent = message;
    
});
