// ===== MATRIX BACKGROUND =====
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Characters for hacker code
const letters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()<>?/|[]{}";
const lettersArray = letters.split("");

// Font size and columns
const fontSize = 16;
const columns = Math.floor(canvas.width / fontSize);
const drops = Array(columns).fill(1);

// Draw matrix function
function drawMatrix() {
    // semi-transparent background to create trail effect
    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00ff9c";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        let text = lettersArray[Math.floor(Math.random() * lettersArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop randomly after reaching bottom
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        // Adjust speed here: smaller number = slower
        drops[i] += 0.5; // 0.5 for slow, 1 for normal, 2 for fast
    }
}

// Draw every 60ms (slower than default)
setInterval(drawMatrix, 60);

// Responsive canvas
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// ===== TERMINAL LIVE LOG =====
const terminal = document.getElementById("terminal");

const logs = [
    "Encryption: AES-256",
    "Root Access Granted",
    "System Scanning...",
    "Connection Secured",
    "Firewall Bypassed",
    "Payload Delivered",
    "Scanning Network Ports...",
    "Access Token Validated",
    "Process Complete",
    "Packet Sniffing Active",
    "Intrusion Detection Bypassed",
    "Network Mapping Started",
    "Privilege Escalation Successful",
    "System Uptime 482h",
    "Memory Scan Complete"
];

// Function to add one log line
function addLog() {
    const line = document.createElement("p");
    const text = logs[Math.floor(Math.random() * logs.length)];
    line.textContent = "";
    terminal.appendChild(line);

    let i = 0;
    function type() {
        if (i < text.length) {
            line.textContent += text.charAt(i);
            i++;
            setTimeout(type, Math.random() * 50 + 30); // typing speed
        }
    }
    type();

    // Keep last 10 lines only
    if (terminal.children.length > 10) {
        terminal.removeChild(terminal.children[0]);
    }

    // Scroll terminal to bottom
    terminal.scrollTop = terminal.scrollHeight;
}

// Add a new log every 2 seconds
setInterval(addLog, 2000);
