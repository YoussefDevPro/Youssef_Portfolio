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

    if (window.innerWidth <= 768) {
        terminalMessages = terminalMessages.map(message => ({
            text: message.text,
            delay: 400  // Mettre les délais à 0 pour les téléphones
        }));
    }

    let messageIndex = 0;
    let currentInterval = null;
    let skip = false;

    // Détection mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

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
        }, 50);
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
        }, 500);
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
            }, 500);
        }, 3000);
    }

    window.addEventListener('keydown', (event) => {
        if (event.key === 'Shift') {
            skipToMainContent();
        }
    });

    // Saut vers le contenu principal si sur mobile
    if (isMobile) {
        showLoading();
    } else {
        showTerminalMessages();
    }

    // Changer le contenu en fonction du type
    function changeContent(contentType) {
        let contentContainer = document.getElementById('description');
        let iframeContainer = document.getElementById('iframe-container');

        contentContainer.innerHTML = '';
        if (iframeContainer) iframeContainer.remove();

        if (contentType === 'phone') {
            contentContainer.innerHTML = `
                <p>I don't use a phone or email for contact, but you can always hit me up on <img src="https://img.shields.io/badge/Discord-5865F2?logo=discord&logoColor=white&style=flat-square" alt="Discord">! 😎</p>
<p>
    <strong>youssef_developper</strong> 
</p>
`;
        } else if (contentType === 'about') {
            contentContainer.innerHTML = `
                <p>Hey! I'm a 14yo fullstack dev who loves coding, learning, and pulling fun nerdy pranks. 😏
    I work with 
    <img src="https://img.shields.io/badge/-Python-3776AB?logo=python&logoColor=white&style=flat-square" alt="Python" class="python">
    <img src="https://img.shields.io/badge/-C%23-239120?logo=c-sharp&logoColor=white&style=flat-square" alt="C#" class="cs">
    <img src="https://img.shields.io/badge/-JS-F7DF1E?logo=javascript&logoColor=black&style=flat-square" alt="JavaScript" class="js">
    <img src="https://img.shields.io/badge/-HTML-E34F26?logo=html5&logoColor=white&style=flat-square" alt="HTML" class="html">
    <img src="https://img.shields.io/badge/-CSS-1572B6?logo=css3&logoColor=white&style=flat-square" alt="CSS" class="css">
    and actually learning 
    <img src="https://img.shields.io/badge/-Go-00ADD8?logo=go&logoColor=white&style=flat-square" alt="Go" class="go">
    <img src="https://img.shields.io/badge/-Rust-000000?logo=rust&logoColor=white&style=flat-square" alt="Rust" class="rust">
    to build cool sites, apps, and random scripts. 🛠️  
    When I'm not coding, I'm chilling on Discord, trying out new tech, or dreaming up my next prank. 👾
</p>
<p>I also use these tools like
    <img src="https://img.shields.io/badge/-VS%20Code-007ACC?logo=visual-studio-code&logoColor=white&style=flat-square" alt="VS Code">
    <img src="https://img.shields.io/badge/-PyCharm-000000?logo=pycharm&logoColor=white&style=flat-square" alt="PyCharm">
    <img src="https://img.shields.io/badge/-Rider-000000?logo=rider&logoColor=white&style=flat-square" alt="Rider">
    <img src="https://img.shields.io/badge/-RustRover-000000?logo=rust&logoColor=white&style=flat-square" alt="RustRover">
    <img src="https://img.shields.io/badge/-Git-F05032?logo=git&logoColor=white&style=flat-square" alt="Git">
    <img src="https://img.shields.io/badge/-Arch-1793D1?logo=arch-linux&logoColor=white&style=flat-square" alt="Arch Linux">
    <img src="https://img.shields.io/badge/-Hyprland-0A1318?logo=linux&logoColor=white&style=flat-square" alt="Hyprland">
    for coding and managing my projects! 🔧
</p>
`;
        } else if (contentType === 'folder') {
            let iframeSection = document.createElement('div');
            iframeSection.id = 'iframe-container';
            iframeSection.className = "iframe-scroll";
            iframeSection.innerHTML = `
                <iframe src="projects.html" style="width: 100%; height: 100%; border: none;" allow="fullscreen"></iframe>`;
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
                <div id="description">
            <p>🌟👨‍💻 Yo, I'm a young fullstack dev! 👾</p>
            <p>I work with 
                <img src="https://img.shields.io/badge/-Python-3776AB?logo=python&logoColor=white&style=flat-square" alt="Python">
                <img src="https://img.shields.io/badge/-C%23-239120?logo=c-sharp&logoColor=white&style=flat-square" alt="C#">
                <img src="https://img.shields.io/badge/-JS-F7DF1E?logo=javascript&logoColor=black&style=flat-square" alt="JavaScript">
                <img src="https://img.shields.io/badge/-HTML-E34F26?logo=html5&logoColor=white&style=flat-square" alt="HTML">
                <img src="https://img.shields.io/badge/-CSS-1572B6?logo=css3&logoColor=white&style=flat-square" alt="CSS">
                to build cool stuff. Love solving probs, learning new tech, and trolling for fun. 😏 When I'm not coding, I'm geeking out on Discord (Face's server is 🔥). 🚀 #Nerd4Life 😎👾
            </p>
        </div>`;
        }
    }

    // Gestion des boutons
    document.getElementById('phone-button').addEventListener('click', () => changeContent('phone'));
    document.getElementById('about-button').addEventListener('click', () => changeContent('about'));
    document.getElementById('folder-button').addEventListener('click', () => changeContent('folder'));
    document.getElementById('home-button').addEventListener('click', () => changeContent('home'));
    document.getElementById('cmd-button').addEventListener('click', () => changeContent('cmd'));
};
