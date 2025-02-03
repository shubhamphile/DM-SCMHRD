document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const formResponse = document.getElementById("formResponse");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents the page from reloading

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            formResponse.innerHTML = "<span style='color: red;'>All fields are required!</span>";
            return;
        }

        // Simulating a form submission success
        setTimeout(() => {
            formResponse.innerHTML = "<span style='color: green;'>Thank you! Your message has been sent.</span>";
            contactForm.reset(); // Clears the form
        }, 1000);
    });

    // Smooth Scroll for links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});