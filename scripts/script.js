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

    // Langages les plus utilisés
    const languagesCtx = document.getElementById('languagesChart').getContext('2d');
    new Chart(languagesCtx, {
        type: 'doughnut',
        data: {
            labels: ['Python', 'C#', 'JavaScript', 'HTML', 'CSS'],
            datasets: [{
                data: [40, 20, 20, 10, 10],
                backgroundColor: ['#f1e05a', '#3572A5', '#f34b7d', '#563d7c', '#264de4'],
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom',
                }
            }
        }
    });

    // Commits au fil du temps
    const commitsCtx = document.getElementById('commitsChart').getContext('2d');
    new Chart(commitsCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Commits',
                data: [10, 15, 25, 35, 45, 60],
                borderColor: '#4CAF50',
                fill: false,
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });