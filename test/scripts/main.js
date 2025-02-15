document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".link");
    const sections = document.querySelectorAll(".section");

    links.forEach(link => {
        link.addEventListener("click", () => {
            const target = link.getAttribute("data-target");

            sections.forEach(section => {
                section.classList.remove("active", "active-home"); // On enlève les deux classes possibles
            });

            const targetSection = document.getElementById(target);
            if (target === "home") {
                targetSection.classList.add("active-home");
            } else {
                targetSection.classList.add("active");
            }
        });
    });
});
