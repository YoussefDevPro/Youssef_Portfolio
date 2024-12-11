let currentDir = '/home/user';
let promptText = currentDir +'$ ';  // Texte pré-défini initial du prompt

function scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight); // Déplace de 100 pixels vers le bas à chaque appel
  }



document.getElementById('input').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        const inputText = event.target.value.trim();
        const output = document.getElementById('output');
        
        // Ajoute une nouvelle ligne avant la commande
        output.innerHTML += `\n\n${promptText}${inputText}\n`; 
        
        if (inputText === 'gizzy') {
            const img = document.createElement('img');
            img.src = 'static/gizzy.png'; // Remplace par ton image
            img.style.width = '300px';
            img.style.marginTop = '10px';
            output.appendChild(img); // Ajoute l'image sans supprimer le contenu précédent
        } else if (inputText === 'gizzy -fr') {
            const img = document.createElement('img');
            img.src = 'static/gizzyfr.png'; // Remplace par ton image
            img.style.width = '300px';
            img.style.marginTop = '10px';
            output.appendChild(img); // Ajoute l'image sans supprimer le contenu précédent
        } else if (inputText === 'kabir') {
            const sound = document.getElementById('kabir-sound');
            sound.play();
            output.innerHTML += '\nKabir sound playing...';
        } else if (inputText === 'cd') {
            output.innerHTML += `\nUsage: cd [directory]`;
        } else if (inputText.startsWith('cd ')) {
            const newDir = inputText.split(' ')[1];
            if (newDir) {
                currentDir = `/home/user/${newDir}`;
                promptText = `${currentDir} $ `; // Mettre à jour le prompt pour afficher le nouveau répertoire
                document.getElementById('input').setAttribute('placeholder', promptText); // Met à jour le texte pré-défini dans l'input
                output.innerHTML += `\nChanged directory to ${currentDir}`;
            } else {
                output.innerHTML += `\nPlease specify a directory.`;
            }
        } else if (inputText === 'ls') {
            output.innerHTML += `\nDesktop  Documents  Downloads  Music  Pictures  Public  Videos`;
        } else if (inputText === 'pwd') {
            output.innerHTML += `\n${currentDir}`;
        } else if (inputText === 'cat /etc/os-release') {
            output.innerHTML += `
NAME="Troll Face OS"
VERSION="1.0"
ID=trollface
PRETTY_NAME="Troll Face OS v1.0"
            `;
        } else if (inputText === 'man ls') {
            output.innerHTML += `
LS(1)                   User Commands                   LS(1)

NAME
       ls - list directory contents

SYNOPSIS
       ls [OPTION]... [FILE]...

DESCRIPTION
       List information about the FILEs (the current directory by default).
       ...
            `;
        } else if (inputText === 'date') {
            const date = new Date().toLocaleString();
            output.innerHTML += `\n${date}`;
        } else if (inputText === 'echo hello') {
            output.innerHTML += `\nHello, user! 👋`;
        } else if (inputText === 'sudo') {
            output.innerHTML += `\nSudo command requires superuser privileges. Try running as root.`;
        } else if (inputText === 'clear') {
            output.innerHTML = ''; // Effacer le terminal
        } else if (inputText === 'help') {
            output.innerHTML += `
Available Commands:

    gizzy: 🐾 Show a cute Gizzy image.
    kabir: 🎵 Play the Kabir sound for some fun vibes!
    cd: 📂 Change the current directory.
    ls: 📜 List the contents of the current directory.
    pwd: 🗺️ Print the current directory path.
    cat /etc/os-release: 🖥️ Display information about the operating system.
    man ls: 📘 Open the manual for the ls command.
    date: 🕰️ Display the current date and time.
    echo hello: 👋 Output a friendly greeting.
    sudo: 🚨 Display a sudo message.
    clear: 🧹 Clean up and clear the terminal screen.
    help: 🤔 Show all available commands (yes, this one too!).
    uptime: ⏳ Display how long the system has been running.
    df: 💾 Show disk space usage.
    neofetch: 💻 Display simulated system info in style.
    neofetch -r: 🛠️ Run the real neofetch (Linux systems only).
            `;
        } else if (inputText === 'uptime') {
            output.innerHTML += `\nUp for 3 days, 12 hours, 45 minutes`;
        } else if (inputText === 'df') {
            output.innerHTML += `
Filesystem     1K-blocks    Used Available Use% Mounted on
/dev/sda1      20480000 10240000 10240000  50% /
/dev/sdb1      10240000  5120000  5120000  50% /home
            `;
        } else if (inputText === 'neofetch') {
            output.innerHTML += `
OS: Trolix OS v1.0                   ⠛⠛⣿⣿⣿⣿⣿⡷⢶⣦⣶⣶⣤⣤⣤⣀⠀⠀⠀
Kernel: 5.10.0-9-amd64               ⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⠀
Uptime: 3 days, 12 hours, 45 minutes ⠀⠀⠀⠉⠉⠉⠙⠻⣿⣿⠿⠿⠛⠛⠛⠻⣿⣿⣇⠀
Packages: 200+                       ⠀⠀⢤⣀⣀⣀⠀⠀⢸⣷⡄⠀ ⣀⣤⣴⣿⣿⣿⣆
Shell: Bash                          ⠀⠀⠀⠀⠹⠏⠀⠀⠀⣿⣧⠀⠹⣿⣿⣿⣿⣿⡿⣿
Resolution: 1920x1080                ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠛⠿⠇⢀⣼⣿⣿⠛⢯⡿⡟
DE: TROLL                            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠦⠴⢿⢿⣿⡿⠷⠀⣿⠀
WM: Mutter                           ⠀⠀⠀⠀⠀⠀⠀⠙⣷⣶⣶⣤⣤⣤⣤⣤⣶⣦⠃⠀
CPU: Troll Core T4600 @ 2.00GHz      ⠀⠀⠀⠀⠀⠀⠀⢐⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀
GPU: TROLL T2000                     ⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀
RAM: 16GB                            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠻⢿⣿⣿⣿⣿⠟                           
            `;
        } else if (inputText === 'neofetch -r') {
            output.innerHTML += `
⣿⣿⣿⠿⡿⠀⠀⠈⠙⣿⣿⡿⠁⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣷⣼⡇⢸⣟⣿⣿⣿⣿⣿⣿⣟⣵⣦⡀⠏⣿⡄⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢺
⣿⣿⣇⣤⡇⠀⠀⠀⣴⣿⠿⠃⠀⣭⣿⣿⣿⣿⣿⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋⠉⢸⣿⡟⣇⣾⡗⠀⠀⠀⠨⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸
⣿⣿⡏⡏⡅⠀⢀⣴⣿⣿⣿⣿⠶⢿⣽⣿⣿⣿⣿⣿⣿⣿⡿⠿⠟⠋⠉⠉⠉⠉⠉⠉⠙⠛⠋⠳⣼⣽⣇⢿⡇⣿⡆⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⣿⣿⣷⣅⣷⠀⣼⣿⣿⣿⡿⣿⣯⣽⣿⣿⣿⣿⣿⠟⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢻⣿⣾⣿⣿⣧⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠀⠀⢿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠀⣿⡿⣿⡄⣻⣧⠠⠴⡇⢸⣿⡗⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⣿⣿⣿⣿⣿⣿⣿⡿⠀⠀⠀⠀⠸⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠘⣧⠹⣿⣿⡄⠀⠀⡇⢸⡛⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⣿⣿⣿⣿⣿⣿⡿⠟⠋⠀⠀⠀⠀⠀⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⡀⠀⠀⠀⠀⠸⠂⠘⣇⡀⠙⢿⡗⠀⠀⡷⢸⢱⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⣿⣿⣿⡿⣿⠏⠁⠀⠀⠀⠀⠀⠀⠀⢻⣿⣿⠇⢀⣤⡶⠶⢿⡿⠿⠿⢦⡀⠸⣾⣿⣿⡿⠿⠷⢶⣤⣄⠀⢻⣧⠀⡾⠁⠀⠀⡇⢸⢄⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠
⣿⣿⡟⠇⠿⠉⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⠀⡟⠀⣡⣴⣶⣶⣧⠈⠁⠀⠀⠈⠙⠿⠾⠷⠶⣦⣄⣹⡆⠀⣿⣾⠇⠀⠀⠀⡟⢸⢀⠟⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣀⣀⣀⠀⠿
⣿⣿⡇⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⠀⠁⠀⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⡇⠀⣧⣟⣀⡀⠀⠀⣷⣀⣘⣧⣤⣤⣶⣶⣶⣿⣿⣿⣿⣿⡉⠉⠀⠀⠀
⣿⣿⡇⠅⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡼⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠐⠀⠀⠐⣆⡀⠀⠀⠀⠀⠀⠀⠇⠀⣿⠙⢿⣽⣟⠋⠛⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠿⠿⠚⠉⠀
⣿⣿⡇⠆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡟⠙⣷⠀⠀⠀⠀⠀⠀⠀⣠⡶⣶⣦⣷⣭⣿⡄⠀⠀⠀⠀⠀⡎⠀⢿⣇⢸⣷⡿⠶⢶⡶⢾⠛⠋⠙⠋⠉⣨⣿⣦⣽⢧⡀⠀⠀⠀⠀⠀
⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣧⣼⠏⠀⠀⠀⠀⠀⠀⠀⠉⠛⠛⠋⠉⠁⠀⠙⠀⠀⠀⠀⠀⢿⠀⣨⠿⣿⠁⠀⣀⡞⠀⠘⣆⣠⠞⢀⣴⣿⣿⣿⣿⣿⣝⣇⠀⠀⠀⠀
⣿⣿⡇⠋⠀⠀⣀⣀⣤⠤⠄⠀⠀⠀⠀⣿⢇⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⣽⡁⢀⡿⠀⠀⠈⢷⠀⢀⡟⠀⢀⣾⣿⣿⣿⠟⠻⣿⣿⣿⠳⣄⣀⢀
⣿⣿⠇⣼⣿⣿⡿⣿⡻⣲⢶⠄⠀⠀⠀⣿⣿⣆⡠⠀⠀⠀⠀⠀⣴⣿⣿⣭⣭⣭⣿⣷⡦⠀⠀⠀⠀⠀⢠⢿⣿⣿⣦⣥⣄⡀⢸⣀⣤⣀⣴⣿⣿⣿⡟⠃⠀⠀⠈⠻⣿⣷⣈⠉⠉
⣿⣿⠰⡇⠐⠈⠀⠋⣩⡽⣿⠀⠠⣄⠰⣿⣟⣿⠟⢧⠀⠀⠀⠀⠛⢿⣿⣿⣿⣿⡿⠋⠀⠀⠀⠀⠀⢠⡾⡏⠀⠟⣿⣿⣿⣿⠛⢻⣿⣿⣿⡿⢻⠏⠀⠀⠀⠀⠀⠈⣿⣿⣿⣆⠀
⣿⣿⢸⠇⠀⢴⣾⣿⣖⡯⣿⡇⠀⢮⠉⣿⣎⣋⣠⣾⡁⠀⠀⠀⠀⠀⠻⢤⣤⠞⡁⠀⠀⠀⠀⠀⢠⠿⣼⢿⡛⡄⢸⣿⣿⡿⠀⣿⣿⣿⣿⣿⣷⣶⠴⢶⣄⣀⣤⠌⠿⠛⠛⢻⡄
⣿⡿⢸⠀⠀⠉⣻⣿⢵⣻⣿⠀⠀⣟⠷⣿⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀⠲⣶⣶⡞⠃⠀⠀⠀⠀⠀⠀⠀⢻⡊⢳⣶⡛⠿⠿⣷⡤⣾⣿⣿⣿⠏⠉⠉⠠⣤⡌⠉⠀⠀⠀⠀⠀⠀⠱
⣿⡇⣿⠀⠰⣿⣿⣿⡽⣾⣿⠀⠰⢯⣠⣿⣿⣿⣿⣿⣿⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡇⢸⣿⣿⣦⣄⠈⣧⢘⣿⣿⡇⠀⢀⣀⣤⣤⡤⠀⠀⠀⠀⠀⠀⠀⠀
⣿⣿⣿⠀⢈⣺⣿⣿⣯⣿⡇⠀⢘⠳⣿⣿⣿⣿⣿⠿⠍⠿⣿⠀⠘⠲⣤⣄⣀⣀⣀⣀⣠⠾⠃⠀⠀⢀⡞⠀⣾⣿⣿⣿⣿⣷⣝⣃⡿⢿⠇⠀⠈⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⣿⣿⣿⠀⣸⣿⣿⣿⣺⢽⠇⠀⢨⣹⣿⣿⣿⣿⣯⣠⣤⣴⢛⡇⠀⠀⠈⠙⢿⣿⠟⠉⠀⠀⠀⠀⣠⠟⠀⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣶⣶⣶⣤⣤⣤⣀⣀⠀⠀⠀
⣿⣿⣿⠁⣽⢟⣿⡟⠋⠛⠀⠀⠓⢬⣿⣿⣿⣿⡏⠀⡼⠁⣼⡇⠀⠀⠀⠀⠀⢶⡄⠀⠀⠀⢀⡴⠃⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶
⣿⣿⣿⠁⣤⣿⣿⣷⡶⣶⣤⣄⣀⣸⣾⣿⣿⣿⡇⢸⠇⠀⣿⡇⠀⠀⠀⠀⠀⠙⠟⠀⢀⡴⠋⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⡖⠸⢿⡍⣼⣹⡟⡉⠹⡍⠁⢸⣿⣿⣿⣷⣿⠀⠀⢿⣷⠀⠀⠀⠀⠀⠀⢈⣷⠟⠁⠀⠀⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⡇⠁⠈⡟⠿⢻⠘⠶⠄⡇⠀⢸⣿⣿⣿⣿⣿⠀⠀⠀⡻⣦⠀⠀⠀⢀⣴⠿⠋⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿            
            `;
        } else {
            output.innerHTML += `\nCommand not found: ${inputText}`;
        }

        // Faire défiler vers le bas à chaque nouvelle ligne
        scrollToBottom()
        
        
        // Réinitialiser l'entrée après la commande
        event.target.value = '';
        scrollToBottom()
    }
});

// Initialiser le texte pré-défini de l'input
document.getElementById('input').setAttribute('placeholder', promptText);