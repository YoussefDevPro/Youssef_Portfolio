document.addEventListener("DOMContentLoaded", () => {
    const projects = document.querySelectorAll(".project-item");
  
    projects.forEach((project, index) => {
      setTimeout(() => {
        project.style.opacity = 1;
        project.style.transform = "translateY(0)"; // Ajoute un léger mouvement vers le haut
      }, index * 500); // Décale chaque projet de 500ms
    });
  });
  