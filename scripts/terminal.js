let currentDir = '/home/user';
let promptText = currentDir +'$ ';  // Texte pré-défini initial du prompt

function scrollToBottom() {
    const output = document.getElementById('output');
    output.scrollTop = output.scrollHeight;
  }
  

document.getElementById('input').addEventListener('keypress', function (event) {
    let cowsayText = ''; // Stocke le texte à afficher
    let cowsayPart = 0; // Suivi de quelle partie est affichée
    
    if (event.key === 'Enter') {
        const inputText = event.target.value.trim();
        const output = document.getElementById('output');
        
        // Ajoute une nouvelle ligne avant la commande
        output.innerHTML += `\n\n<b>${promptText}${inputText}</b>\n`; 
        
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
    gizzy -fr: 🐾 Affiche une image française de Gizzy.
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
    mkdir [name]: 📁 Create a new directory.
    touch [name]: 📝 Create a new empty file.
    rm [name]: 🗑️ Delete a file.
    cp [source] [destination]: 📄 Copy a file.
    mv [source] [destination]: 🚚 Move or rename a file.
    whoami: 🙋 Display the current username.
    uname -a: 🖥️ Display system information.
    id: 🔍 Display user ID information.
    ping [host]: 🌐 Ping a host to test connectivity.
    cowsay [text]: 🐮 Generate a cow saying the given text.
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
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣶⣶⣆⡐⠠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⢿⠿⠿⠿⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⣿⣸⣮⢰⣄⣸⡇⠄⠀⠠⠀⠀⠀⠀⢀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣧⡗⡽⠤⠉⣹⠇⠀⠁⡄⠀⠀⡀⠀⠀⠁⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠄⠀⠀⠀⢴⣫⣝⣉⣽⡁⠀⠀⠀⠇⠀⠈⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠁⣲⡵⢻⣧⡎⡰⢋⣷⣤⣔⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠐⠄⠀⢀⣠⣶⣿⣿⣅⣺⣿⡋⢀⣾⣿⣿⣿⣿⣿⣿⣆⠀⠃⢀⠎⠀⠀⠀
⠀⠀⠀⠀⠀⠐⠀⠈⠂⠀⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆⠀⠈⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢃⠀⠃⢈⣿⣿⣿⣿⣿⣏⢸⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣋⠝⣿⣿⣿⣿⣿⣿⣷⣄⠃⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣭⣽⣘⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⡠⠀⢸⣿⣿⣭⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢿⣿⣿⠿⠟⠀⡀⠀
⠀⠀⢈⠒⡀⠀⠀⠀⠀⠈⢛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠀⠀⠀⠀⢀⠐⡀⠀
⣀⢠⠊⢀⠰⠀⠀⠀⠠⢀⠀⢐⡈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠠⠈⡐⠂⠐⡄⢀       
            `;
        } else if (inputText.startsWith('mkdir ')) {
            const dirName = inputText.split(' ')[1];
            if (dirName) {
                output.innerHTML += `\nCreated directory '${dirName}'`;
            } else {
                output.innerHTML += `\nPlease specify a directory name.`;
            }
        } else if (inputText.startsWith('touch ')) {
            const fileName = inputText.split(' ')[1];
            if (fileName) {
                output.innerHTML += `\nCreated file '${fileName}'`;
            } else {
                output.innerHTML += `\nPlease specify a file name.`;
            }
        } else if (inputText.startsWith('rm ')) {
            const fileName = inputText.split(' ')[1];
            if (fileName) {
                output.innerHTML += `\nDeleted file '${fileName}'`;
            } else {
                output.innerHTML += `\nPlease specify a file name to delete.`;
            }
        } else if (inputText.startsWith('cp ')) {
            const args = inputText.split(' ');
            if (args.length === 3) {
                output.innerHTML += `\nCopied '${args[1]}' to '${args[2]}'`;
            } else {
                output.innerHTML += `\nUsage: cp [source] [destination]`;
            }
        } else if (inputText.startsWith('mv ')) {
            const args = inputText.split(' ');
            if (args.length === 3) {
                output.innerHTML += `\nMoved '${args[1]}' to '${args[2]}'`;
            } else {
                output.innerHTML += `\nUsage: mv [source] [destination]`;
            }
        } else if (inputText === 'whoami') {
            output.innerHTML += '\nuser';
        } else if (inputText === 'uname -a') {
            output.innerHTML += '\nLinux troll-os 5.15.0-56-generic #62~20.04.1-Ubuntu SMP x86_64 GNU/Linux';
        } else if (inputText === 'id') {
            output.innerHTML += '\nuid=1000(user) gid=1000(user) groups=1000(user),27(sudo)';
        } else if (inputText === 'uptime') {
            output.innerHTML += '\n12:15:32 up 2 days, 4:13, 1 user, load average: 0.01, 0.05, 0.10';
        } else if (inputText.startsWith('ping ')) {
            const host = inputText.split(' ')[1];
            if (host) {
                output.innerHTML += `\nPING ${host} (127.0.0.1): 56 data bytes\n64 bytes from 127.0.0.1: icmp_seq=0 ttl=64 time=0.042 ms`;
            } else {
                output.innerHTML += `\nPlease specify a host to ping.`;
            }
        } 
        
        else if (inputText.startsWith('cowsay ')) {
            // Récupère le texte après 'cowsay'
            const message = inputText.slice(7).trim();
            
            // Calcule la longueur du message et ajuste les traits
            const topBottomLine = '-'.repeat(message.length + 2);
            const padding = ' '.repeat(3);
            
            // Construit et affiche la vache avec le texte
            output.innerHTML += `\n
        ${padding} ${'_'.repeat(message.length + 4)}
        ${padding}/ ${' '.repeat(message.length + 2)} \\
        ${padding}| ${message} |
        ${padding}\\ ${'-'.repeat(message.length + 2)} /
        ${padding} ${'-'.repeat(message.length + 4)}
                \\   ^__^
                 \\  (oo)\\_______
                    (__)\\       )\\/\\
                        ||----w |
                        ||     ||
            `;
        }
        
        
         else {
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