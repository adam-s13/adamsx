document.addEventListener("DOMContentLoaded", () => {
    const welcomeMessage = document.getElementById("welcome-message");
    setTimeout(() => {
        welcomeMessage.style.display = "none";
    }, 4000);
});