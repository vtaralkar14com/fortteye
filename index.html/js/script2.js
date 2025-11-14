// Simple text animation and header color change on scroll
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = "rgba(255,255,255,0.8)";
            header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
        } else {
            header.style.backgroundColor = "rgba(255,255,255,0.9)";
            header.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
        }
    });

    // Add fade-in animation when page loads
    const mainText = document.querySelector("main p");
    mainText.style.opacity = 0;
    setTimeout(() => {
        mainText.style.transition = "opacity 2s";
        mainText.style.opacity = 1;
    }, 500);
});
