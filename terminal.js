let currentDir = '/home/user';

document.getElementById('input').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        const inputText = event.target.value.trim();
        const output = document.getElementById('output');
        
        // Add a newline before the input command to start it on a new line
        output.innerHTML += `\n> ${inputText}\n`; 
        
        if (inputText === 'gizzy') {
            const img = document.createElement('img');
            img.src = 'static/gizzy.png'; // Replace with your image URL
            img.style.width = '300px';
            img.style.marginTop = '10px';
            output.appendChild(img); // Append the image without removing the previous content
        }
        else if (inputText === 'gizzy -fr') {
            const img = document.createElement('img');
            img.src = 'static/gizzyfr.png'; // Replace with your image URL
            img.style.width = '300px';
            img.style.marginTop = '10px';
            output.appendChild(img); // Append the image without removing the previous content
        }
         else if (inputText === 'kabir') {
            const sound = document.getElementById('kabir-sound');
            sound.play();
            output.innerHTML += '\nKabir sound playing...';
        } else if (inputText === 'cd') {
            output.innerHTML += `\nUsage: cd [directory]`;
        } else if (inputText.startsWith('cd ')) {
            const newDir = inputText.split(' ')[1];
            if (newDir) {
                currentDir = `/home/user/${newDir}`;
                output.innerHTML += `\nChanged directory to ${currentDir}`;
            } else {
                output.innerHTML += `\nPlease specify a directory.`;
            }
        } else if (inputText === 'ls') {
            output.innerHTML += `
Desktop  Documents  Downloads  Music  Pictures  Public  Videos
            `;
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
            output.innerHTML = ''; // Clears the terminal output
        } else if (inputText === 'help') {
            output.innerHTML += `
Available commands:
  grizzy   - Show Grizzy image
  kabir    - Play Kabir sound
  cd       - Change directory
  ls       - List directory contents
  pwd      - Print current directory
  cat /etc/os-release - Show OS info
  man ls   - Show manual for ls command
  date     - Show current date and time
  echo hello - Show a greeting
  sudo     - Show sudo message
  clear    - Clear the terminal screen
  help     - Show available commands
  uptime   - Show system uptime
  df       - Show disk space usage
  neofetch - Show system info (simulated)
  neofetch-real - Run real neofetch (Linux systems only)
  clear    - Clear the terminal output

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
⠛⠛⣿⣿⣿⣿⣿⡷⢶⣦⣶⣶⣤⣤⣤⣀⠀⠀⠀
⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⠀
⠀⠀⠀⠉⠉⠉⠙⠻⣿⣿⠿⠿⠛⠛⠛⠻⣿⣿⣇⠀
⠀⠀⢤⣀⣀⣀⠀⠀⢸⣷⡄⠀ ⣀⣤⣴⣿⣿⣿⣆
⠀⠀⠀⠀⠹⠏⠀⠀⠀⣿⣧⠀⠹⣿⣿⣿⣿⣿⡿⣿
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠛⠿⠇⢀⣼⣿⣿⠛⢯⡿⡟
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠦⠴⢿⢿⣿⡿⠷⠀⣿⠀
⠀⠀⠀⠀⠀⠀⠀⠙⣷⣶⣶⣤⣤⣤⣤⣤⣶⣦⠃⠀
⠀⠀⠀⠀⠀⠀⠀⢐⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠻⢿⣿⣿⣿⣿⠟

OS: Trolix OS v1.0
Kernel: 5.10.0-9-amd64
Uptime: 3 days, 12 hours, 45 minutes
Kernel: 5.x.x
Uptime: 2 hours, 20 minutes
Packages: 200+
Shell: Bash
Resolution: 1920x1080
DE: TROLL
WM: Mutter
CPU: Troll Core T4600 @ 2.00GHz
GPU: TROLL T2000
RAM: 16GB

            `;
        } else if (inputText === 'neofetch -r') {
            // This requires 'neofetch' to be installed on your system
            output.innerHTML += `\n
⡀⠛⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠉⠁⠀⣀⣀⠀⣀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣄⡀⠀⠀⠀
⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⣿⣿⣛⣿⣿⣷⣿⣿⣯⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣏⠉⣿⠉⢹⠟⢉⠉⢻⣿⠉⢻⠋⠙⡏⣿⠋⢻⡏⠉⣿⠉⣉⣻⠀
⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣻⡀⠈⢀⣿⠀⢸⠀⠀⣿⠀⢸⠀⠰⣿⣿⠀⢸⠁⢀⡟⠀⢹⣿⠀
⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⡿⠿⠿⢿⣿⣿⣿⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣧⠀⣼⣿⠀⢸⡀⠀⣏⠀⢸⠀⠀⣿⣿⡄⠘⠀⢸⡇⠀⢰⣾⠀
⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⡿⠋⠀⠀⠀⠀⠀⠈⠉⠉⠁⠀⠀⠈⢻⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣀⣿⣿⣆⡈⢁⣰⣿⣄⠘⢀⣼⣿⣿⣇⣀⣀⣼⣧⣀⣈⣹⡇
⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⣿⣿⣿⣿⣿⣿⠟⠿⢿⣿⠿⠛⠛⠻⠿⠿⠻⠛⠉⠉⠉⠀
⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⠀⠀⢀⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣧⣄⠀⠀⠀⠀⠀⠀⣴⠶⡶⠿⣿⣿⠿⠿⢿⡿⠿⠿⣿⠿⢿⡿⢿⡿⠀⠀⠀⠀⠀⠀⠀
⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠰⣿⣿⠀⠀⢨⣭⣽⣿⡇⠀⢠⣾⣿⣿⣷⣆⠀⠀⢸⣿⠀⠀⠀⠀⠀⠀⣿⠀⢱⡆⠈⣿⠀⢴⣾⡇⠀⣶⣿⠀⠘⡇⠀⡇⠀⠀⠀⠀⠀⠀⠀
⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⠉⠛⠀⠀⠀⠀⠉⠁⠀⠀⠘⡏⠉⠉⠛⠋⠀⣠⣼⣿⠀⠀⠀⠀⠀⠀⣿⠀⢨⡁⠺⣿⠀⣈⣹⡇⠀⣉⣿⠀⡀⠁⠀⡇⠀⠀⠀⠀⠀⠀⠀
⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡀⠀⠀⠀⠀⠀⣀⠀⠀⠀⠀⢹⡄⠀⠀⠀⠀⣿⣿⡿⠀⠀⠀⠀⠀⠀⣿⠀⠸⠇⠀⣿⠀⠹⢿⡇⠀⠿⢿⠀⢸⡀⠀⡇⠀⠀⠀⠀⠀⠀⠀
⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⢷⣄⡀⠀⢠⡾⠋⠀⠛⢶⣶⣾⡇⠀⣠⠄⢰⣿⠟⠀⠀⠀⠀⠀⠀⠀⠻⢶⣶⡶⠚⠓⠶⠶⠾⠷⠶⠶⠾⠶⠾⠳⠾⠟⠀⠀⠀⠀⠀⠀⠀
⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣹⡷⣠⠏⠙⢷⣶⠲⠶⠶⣷⣶⡿⠋⢀⣾⠃⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣹⣧⡀⢀⠀⠀⣀⣀⣀⡀⢀⣀⣀⣀⣀⣀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⠟⣫⣽⠃⠀⠀⠀⠉⠉⠙⠛⠋⠀⠀⢀⣾⡃⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠉⢉⡉⠻⡏⠉⣿⠟⢉⡉⠙⣿⠉⢹⡏⢉⡿⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠛⠁⠀⣼⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⡏⢳⡄⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⠸⠇⣰⡇⠀⣿⠀⢸⣧⣀⣿⠀⠈⠀⣼⠁⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢀⣴⠏⠀⠀⠀⢸⣿⣿⡀⠀⠀⠰⣦⣄⡀⣀⣤⡾⣿⣿⣧⠀⠻⢦⣄⡀⠀⠀⠀⠀⠀⣿⠀⢸⠀⠈⡇⠀⣿⠀⢸⡟⠛⣿⠀⢠⠀⢹⣆⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠘⠁⠀⠀⠀⠀⣾⣿⣿⣷⣄⡀⠀⠙⠿⣿⣏⣽⣿⣿⣿⣿⠄⢸⣧⠈⠙⠶⣤⣀⠀⠀⣿⣀⣸⣄⣠⣷⣀⣿⣦⣀⣁⣠⣿⣀⣸⣧⣀⣿⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⣶⣶⣶⣿⣿⣿⣿⣿⣿⣿⠀⠀⠹⣆⠀⠀⠀⠉⠳⣦⡀⠉⠉⠙⠻⣿⠉⠁⠀⠉⠉⠀⠀⠈⠉⠀⠉⠹⠇⠀⠀⠀⠀⠀⠀
⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠛⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠀⠀⠀⢿⡆⠀⠀⠀⠀⠻⣿⠓⠒⠲⢦⣹⠷⠒⠲⣶⡖⠒⣶⣶⠒⢶⣾⠗⠒⠲⡶⠒⡖⠶⣄
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⡞⣿⠀⠀⠀⠀⠀⢹⠀⢹⡀⢈⡏⠀⣿⠀⢸⡇⠀⣿⡟⠀⢸⣿⠀⢸⣶⡇⠀⢳⠀⢸
⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠁⠀⢀⣰⠃⢹⡆⠀⠀⠀⠀⢸⠀⢠⠀⠛⡇⠀⣿⠀⢸⡇⠀⣿⡇⠀⢸⣿⠀⢠⣬⡇⠀⢸⠀⢸
⠀⠀⠀⠀⠀⠀⠀⠙⠛⠛⠋⠉⠀⠺⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠶⠞⠋⠀⠀⠀⢿⠀⠀⠀⠀⣸⠀⢸⠀⢰⣧⠀⠛⠀⣸⡇⠀⠛⣧⠀⠘⢻⠀⠘⠛⡇⠀⠚⠀⢸
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠆⠀⠀⠀⠿⠓⠛⠓⠛⠉⠙⠒⠚⠉⠛⣛⡚⠛⠛⠛⠛⠛⠓⡚⠛⠛⠓⠛⠉
            `;
            // If using Node.js or server-side, you'd execute the command here
            // For now, we simulate that it's running
        } else if (inputText === 'clear') {
            output.innerHTML = 'Welcome to the terminal. Type a command.'; // Clears the terminal output
        } else {
            output.innerHTML += `\nCommand not found: ${inputText}`;
        }

        // Scroll to the bottom of the terminal for new output
        output.scrollTop = output.scrollHeight;
        
        // Clear the input field for the next command
        event.target.value = '';
    }
});
