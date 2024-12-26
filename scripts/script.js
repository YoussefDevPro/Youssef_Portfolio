const dockItems = document.querySelectorAll('.dock-item');
const sections = document.querySelectorAll('.content-section');

dockItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        // Remove 'clicked' class from all dock items
        dockItems.forEach(i => i.classList.remove('clicked'));
        item.classList.add('clicked');

        // Remove 'active' class from all sections and add to the clicked one
        sections.forEach(section => section.classList.remove('active'));
        sections[index].classList.add('active');
    });
});