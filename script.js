window.onload = () => {
    let terminalText = document.getElementById('terminal-text');
    let terminal = document.getElementById('terminal');
    let loadingSection = document.getElementById('loading');
    let mainContent = document.getElementById('main-content');
    
    let terminalMessages = [
        { text: "Booting up...", delay: 1000 },
        { text: "Loading configuration...", delay: 1500 },
        { text: "Starting processes...", delay: 2000 },
        { text: "Welcome to my Portfolio!", delay: 2500 }
    ];
    
    let messageIndex = 0; // Initialisation de l'index des messages
    let currentInterval = null;

    function typeMessage(message, index, callback) {
        let i = 0;
        if (currentInterval) clearInterval(currentInterval);
        currentInterval = setInterval(() => {
            terminalText.textContent += message[i];
            i++;
            if (i >= message.length) {
                clearInterval(currentInterval);
                currentInterval = null;
                callback(); // Appeler la fonction une fois terminé
            }
        }, 100);
    }

    function hideTerminal() {
        terminal.style.transition = "opacity 1s ease-in-out";
        terminal.style.opacity = 0; // Disparition progressive du terminal
        setTimeout(() => {
            terminal.style.display = 'none'; // Cacher complètement le terminal
            showLoading(); // Passer à la section de chargement
        }, 1000);
    }

    // Simuler l'affichage des messages dans le terminal
    function showTerminalMessages() {
        if (messageIndex < terminalMessages.length) {
            terminalText.textContent = '';
            typeMessage(terminalMessages[messageIndex].text, 0, () => {
                setTimeout(showTerminalMessages, terminalMessages[messageIndex].delay);
                messageIndex++;
            });
        } else {
            hideTerminal();
        }
    }

    // Afficher la page principale après disparition du loading
    function showMainContent() {
        mainContent.classList.remove('hidden');  // Retirer la classe "hidden"
        setTimeout(() => {
            mainContent.classList.add('visible'); // Afficher le contenu principal avec une animation
        }, 200);  // Délais pour s'assurer que l'élément soit visible avant l'animation
    }
        
    // Afficher la section de chargement pendant 5 secondes
    function showLoading() {
        loadingSection.classList.remove('hidden');  // Afficher la section de chargement
        setTimeout(() => {
            loadingSection.style.opacity = 1;  // L'animation de l'opacité du loading
        }, 100);

        setTimeout(() => {
            loadingSection.style.opacity = 0;  // Effet de disparition du loading
            setTimeout(() => {
                loadingSection.classList.add('hidden');  // Cacher la section de chargement
                showMainContent();  // Afficher le contenu principal
            }, 1000);
        }, 5000);
    }

    // Démarrer l'affichage du terminal
    showTerminalMessages();
};
