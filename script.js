window.onload = () => {
    let terminalText = document.getElementById('terminal-text');
    let terminal = document.getElementById('terminal');
    let loadingSection = document.getElementById('loading');
    let mainContent = document.getElementById('main-content');
    
    let terminalMessages = [
        { text: "to skip, press shift ...", delay: 1000 },
        { text: "Booting up ...", delay: 1000 },
        { text: "Loading configuration ...", delay: 1500 },
        { text: "Starting processes ...", delay: 2000 },
        { text: "Welcome to my Portfolio !", delay: 2500 }
    ];
    
    let messageIndex = 0;
    let currentInterval = null;
    let skip = false; // Indicateur pour sauter l'animation

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
                callback();
            }
        }, 100);
    }

    // Masquer immédiatement le terminal
    function skipToMainContent() {
        skip = true;
        terminal.style.display = 'none'; // Masquer immédiatement le terminal
        loadingSection.style.display = 'none'; // Masquer immédiatement le loading
        showMainContent(); // Passer directement au contenu principal
    }

    // Masquer le terminal après l'affichage des messages
    function hideTerminal() {
        if (skip) return; // Éviter d'exécuter cette fonction si on saute
        terminal.style.transition = "opacity 1s ease-in-out";
        terminal.style.opacity = 0;
        setTimeout(() => {
            terminal.style.display = 'none';
            showLoading();
        }, 1000);
    }

    // Afficher les messages du terminal avec délai
    function showTerminalMessages() {
        if (skip) {
            skipToMainContent(); // Sauter directement si nécessaire
            return;
        }
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
        mainContent.classList.remove('hidden');
        mainContent.classList.add('visible');
    }
        
    // Afficher la section de chargement pendant 5 secondes
    function showLoading() {
        if (skip) {
            skipToMainContent(); // Sauter directement si nécessaire
            return;
        }
        loadingSection.classList.remove('hidden');
        setTimeout(() => {
            loadingSection.style.opacity = 1;
        }, 100);

        setTimeout(() => {
            loadingSection.style.opacity = 0;
            setTimeout(() => {
                loadingSection.classList.add('hidden');
                showMainContent();
            }, 1000);
        }, 5000);
    }

    // Capturer l'événement 'keydown' pour détecter la touche Shift
    window.addEventListener('keydown', (event) => {
        if (event.key === 'Shift') {
            skipToMainContent(); // Activer le mode "sauter l'animation"
        }
    });

    // Démarrer l'affichage du terminal
    showTerminalMessages();

    // Fonction pour changer le contenu selon le bouton cliqué
    function changeContent(contentType) {
        let contentContainer = document.getElementById('description');
        let iframeContainer = document.getElementById('iframe-container');

        contentContainer.innerHTML = '';
        if (iframeContainer) iframeContainer.remove();

        if (contentType === 'phone') {
            contentContainer.innerHTML = '<p>I don’t use a phone for contact, or a mail too. But you can always reach me on Discord!</p><p>youssef_developper</p>';
        } else if (contentType === 'about') {
            contentContainer.innerHTML = `
  <p>
    Hi there! I'm a 14-year-old fullstack developer who loves coding, learning, and (occasionally) trolling my friends with fun, nerdy pranks. I work with Python, C#, JavaScript, HTML, and CSS, crafting everything from dynamic websites to playful scripts.
  </p>
  <p>
    On this portfolio, you'll find some of the projects I've created showcased in the Projects section. Each one reflects my passion for problem-solving and creativity.
  </p>
  <p>
    When I’m not coding, I’m hanging out on Discord, experimenting with new tech, or brainstorming clever ways to troll people.
  </p>
`;
        } else if (contentType === 'folder') {
            let iframeSection = document.createElement('div');
            iframeSection.id = 'iframe-container';
            iframeSection.className = "iframe-scroll"
            iframeSection.innerHTML = '<iframe src="projects.html" style="width: 100%; height: 100%; border: none;"></iframe>';
            mainContent.appendChild(iframeSection);
        }
        else if (contentType === 'cmd') {
            let iframeSection = document.createElement('div');
            iframeSection.id = 'iframe-container';
            iframeSection.className = "iframe-scroll"
            iframeSection.innerHTML = '<iframe src="terminal.html" style="width: 100%; height: 100%; border: 4px solid #00ff0088;"></iframe>';
            mainContent.appendChild(iframeSection);
        }
         else {
            contentContainer.innerHTML = `
                <p>🌟👨‍💻 Hey, I'm a Young Fullstack Developer! 👾</p>
                <p>I specialize in Python, C#, JavaScript, HTML, and CSS to create dynamic web apps and software solutions. I’m passionate about solving problems, learning new tech, and trolling people. When I’m not coding, I’m geeking out over the latest trends on Face's discord. 🚀 #NerdForLife 😎👾</p>
            `;
        }
    }

    document.getElementById('phone-button').addEventListener('click', () => changeContent('phone'));
    document.getElementById('about-button').addEventListener('click', () => changeContent('about'));
    document.getElementById('folder-button').addEventListener('click', () => changeContent('folder'));
    document.getElementById('home-button').addEventListener('click', () => changeContent('home'));
    document.getElementById('cmd-button').addEventListener('click', () => changeContent('cmd'));
};
