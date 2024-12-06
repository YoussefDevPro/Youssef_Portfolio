window.onload = () => {
    let terminalText = document.getElementById('terminal-text');
    let terminal = document.getElementById('terminal');
    let loadingSection = document.getElementById('loading');
    let mainContent = document.getElementById('main-content');
    
    let terminalMessages = [
        "Booting up...",
        "Loading configuration...",
        "Starting processes...",
        "Welcome to my Portfolio !"
    ];
    
    let messageIndex = 0;

    // Fonction pour simuler l'effet de frappe dans le terminal
    function typeMessage(message, index, callback) {
        let i = 0;
        let interval = setInterval(() => {
            terminalText.textContent += message[i];
            i++;
            if (i >= message.length) {
                clearInterval(interval);
                callback();  // Appel de la fonction callback une fois le message complet
            }
        }, 100);  // Vitesse de frappe par caractère
    }

    // Simuler l'affichage des messages dans le terminal
    function showTerminalMessages() {
        if (messageIndex < terminalMessages.length) {
            terminalText.textContent = '';  // Effacer le texte actuel
            typeMessage(terminalMessages[messageIndex], 0, () => {
                messageIndex++;
                setTimeout(showTerminalMessages, 1000);  // Afficher le message suivant après un délai
            });
        } else {
            // Une fois tous les messages affichés, on cache le terminal et affiche le loading
            terminal.style.transition = "opacity 1s ease-in-out";
            setTimeout(() => {
                terminal.style.display = 'none';  // Masquer le terminal
                showLoading();  // Afficher la section de chargement
            }, 1000);
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

