// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Form Validation
document.getElementById("contact-form").addEventListener("submit", function (event) {
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!firstName || !lastName || !email || !message) {
        alert("Please fill out all required fields.");
        event.preventDefault(); // Prevents form from submitting
    }
});
