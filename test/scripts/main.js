document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".link");
    const sections = document.querySelectorAll(".section");

    links.forEach(link => {
        link.addEventListener("click", () => {
            const target = link.getAttribute("data-target");

            sections.forEach(section => {
                section.classList.remove("active");
            });

            document.getElementById(target).classList.add("active");
        });
    });
});
