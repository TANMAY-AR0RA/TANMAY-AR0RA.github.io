// JavaScript file for interactivity and functionality
document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll functionality
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = event.target.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Resume modal functionality
    const resumeImage = document.getElementById("resume-image");
    const modal = document.getElementById("resume-modal");
    const modalContent = document.getElementById("modal-resume");
    const closeModal = document.getElementsByClassName("close")[0];

    resumeImage.addEventListener("click", function () {
        modal.style.display = "block";
        modalContent.src = this.src;
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
