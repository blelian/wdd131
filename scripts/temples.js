document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-toggle");
    const nav = document.getElementById("primary-nav");

    menuButton.addEventListener("click", () => {
        nav.classList.toggle("open");
        const isOpen = nav.classList.contains("open");
        menuButton.innerHTML = isOpen ? "&#10005;" : "&#9776;";
    });
});
