window.onload = () => {
    let terminalText = document.getElementById('terminal-text');
    let terminal = document.getElementById('terminal');
    let loadingSection = document.getElementById('loading');
    let mainContent = document.getElementById('main-content');
    
    let terminalMessages = [
        { text: "Booting up...", delay: 1000 },
        { text: "Loading configuration...", delay: 1500 },
        { text: "Starting processes...", delay: 2000 },
        { text: "Welcome to my Portfolio !", delay: 2500 }
    ];
    
    let messageIndex = 0; // Initialisation de l'index des messages
    let currentInterval = null;

    // Fonction de typewriting pour les messages du terminal
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

    // Masquer le terminal après l'affichage des messages
    function hideTerminal() {
        terminal.style.transition = "opacity 1s ease-in-out";
        terminal.style.opacity = 0; // Disparition progressive du terminal
        setTimeout(() => {
            terminal.style.display = 'none'; // Cacher complètement le terminal
            showLoading(); // Passer à la section de chargement
        }, 1000);
    }

    // Afficher les messages du terminal avec délai
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

    // Fonction pour changer le contenu selon le bouton cliqué
    function changeContent(contentType) {
        let contentContainer = document.getElementById('description');
        let iframeContainer = document.getElementById('iframe-container');

        // Réinitialisation du contenu
        contentContainer.innerHTML = '';
        if (iframeContainer) iframeContainer.remove();

        if (contentType === 'phone') {
            contentContainer.innerHTML = '<p>📱 Here’s the phone section!</p>';
        } else if (contentType === 'about') {
            contentContainer.innerHTML = '<p>💼 Welcome to the About section!</p>';
        } else if (contentType === 'folder') {
            let iframeSection = document.createElement('div');
            iframeSection.id = 'iframe-container';
            iframeSection.innerHTML = '<iframe src="https://example.com"></iframe>';
            mainContent.appendChild(iframeSection);
        } else {
            // Contenu par défaut (description)
            contentContainer.innerHTML = `
                <p>🌟👨‍💻 Hey, I'm a Young Fullstack Developer! 👾</p>
                <p>I specialize in Python, C#, JavaScript, HTML, and CSS to create dynamic web apps and software solutions. I’m passionate about solving problems, learning new tech, and trolling people. When I’m not coding, I’m geeking out over the latest trends on Face's discord. 🚀 #NerdForLife 😎👾</p>
            `;
        }
    }

    // Ajout des événements aux boutons du dock
    document.getElementById('phone-button').addEventListener('click', () => changeContent('phone'));
    document.getElementById('about-button').addEventListener('click', () => changeContent('about'));
    document.getElementById('folder-button').addEventListener('click', () => changeContent('folder'));
    document.getElementById('home-button').addEventListener('click', () => changeContent('home'));
};
