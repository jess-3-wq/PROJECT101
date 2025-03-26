document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const responseMessage = document.getElementById("responseMessage");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            responseMessage.style.color = "red";
            responseMessage.textContent = "All fields are required!";
            return;
        }

       
        responseMessage.style.color = "green";
        responseMessage.textContent = "Form submitted successfully!";

        
        form.reset();
    });
});
