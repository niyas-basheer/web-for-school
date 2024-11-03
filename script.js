$(document).ready(function () {
    $(window).scroll(function () {
        let scrollPos = $(window).scrollTop();
        $('.box').each(function () {
            let boxPos = $(this).offset().top;
            if (scrollPos + $(window).height() > boxPos) {
                $(this).addClass('animate');
            }
        });
    });
});
// Initialize EmailJS (replace with your actual user ID from EmailJS)
emailjs.init("YOUR_USER_ID");

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Collect form data
    const templateParams = {
        comment: document.getElementById("comment").value,
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
    };

    // Send email
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
        .then((response) => {
            alert("Message sent successfully!");
            document.getElementById("contactForm").reset();
        })
        .catch((error) => {
            alert("Failed to send message, please try again later.");
            console.error("EmailJS error:", error);
        });
});
