window.onload = () => {
    let terminalText = document.getElementById('terminal-text');
    let terminal = document.getElementById('terminal');
    let loadingSection = document.getElementById('loading');
    let mainContent = document.getElementById('main-content');
    
    let terminalMessages = [
        { text: "to skip, press shift ...", delay: 400 },
        { text: "Booting up ...", delay: 500 },
        { text: "Loading configuration ...", delay: 800 },
        { text: "Starting processes ...", delay: 1000 },
        { text: "Welcome to my Portfolio !", delay: 1200 }
    ];
    
    let messageIndex = 0;
    let currentInterval = null;
    let skip = false;

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
        }, 50); // Réduit à 50ms
    }

    function skipToMainContent() {
        skip = true;
        terminal.style.display = 'none';
        loadingSection.style.display = 'none';
        showMainContent();
    }

    function hideTerminal() {
        if (skip) return;
        terminal.style.transition = "opacity 0.5s ease-in-out";
        terminal.style.opacity = 0;
        setTimeout(() => {
            terminal.style.display = 'none';
            showLoading();
        }, 500); // Transition plus courte
    }

    function showTerminalMessages() {
        if (skip) {
            skipToMainContent();
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

    function showMainContent() {
        mainContent.classList.remove('hidden');
        mainContent.classList.add('visible');
    }
        
    function showLoading() {
        if (skip) {
            skipToMainContent();
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
            }, 500); // Plus rapide
        }, 3000); // Durée réduite à 3 secondes
    }

    window.addEventListener('keydown', (event) => {
        if (event.key === 'Shift') {
            skipToMainContent();
        }
    });

    showTerminalMessages();
    
    function changeContent(contentType) {
        let contentContainer = document.getElementById('description');
        let iframeContainer = document.getElementById('iframe-container');

        contentContainer.innerHTML = '';
        if (iframeContainer) iframeContainer.remove();

        if (contentType === 'phone') {
            contentContainer.innerHTML = `
                <p>I don’t use a phone or email for contact, but you can always hit me up on Discord! 😎</p>
                <p><strong>youssef_developper</strong></p>`;
        } else if (contentType === 'about') {
            contentContainer.innerHTML = `
                <p>Hey! I’m a 14yo fullstack dev who loves coding, learning, and pulling fun nerdy pranks. 😏</p>
                <p>I work with Python, C#, JS, HTML & CSS to build cool sites, apps, and random scripts. 🛠️</p>
                <p>When I’m not coding, I’m chilling on Discord, trying out new tech, or dreaming up my next prank. 👾</p>`;
        } else if (contentType === 'folder') {
            let iframeSection = document.createElement('div');
            iframeSection.id = 'iframe-container';
            iframeSection.className = "iframe-scroll";
            iframeSection.innerHTML = `
                <iframe src="projects.html" style="width: 100%; height: 100%; border: none;"></iframe>`;
            mainContent.appendChild(iframeSection);
        } else if (contentType === 'cmd') {
            let iframeSection = document.createElement('div');
            iframeSection.id = 'iframe-container';
            iframeSection.className = "iframe-scroll";
            iframeSection.innerHTML = `
                <iframe src="terminal.html" style="width: 100%; height: 100%; border: 4px solid #333;"></iframe>`;
            mainContent.appendChild(iframeSection);
        } else {
            contentContainer.innerHTML = `
                <p>🌟👨‍💻 Yo, I’m a young fullstack dev! 👾</p>
                <p>I work with Python, C#, JS, HTML & CSS to create fun, dynamic web apps and scripts. I love solving probs, learning new stuff, and trolling for laughs. 😏</p>
                <p>When I’m not coding, I’m geeking out on Discord (Face’s server is 🔥). 🚀 #Nerd4Life 😎👾</p>`;
        }
        
    }

    document.getElementById('phone-button').addEventListener('click', () => changeContent('phone'));
    document.getElementById('about-button').addEventListener('click', () => changeContent('about'));
    document.getElementById('folder-button').addEventListener('click', () => changeContent('folder'));
    document.getElementById('home-button').addEventListener('click', () => changeContent('home'));
    document.getElementById('cmd-button').addEventListener('click', () => changeContent('cmd'));
};
