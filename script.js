// ===== MATRIX BACKGROUND =====
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()<>?/|[]{}";
const lettersArray = letters.split("");

const fontSize = 16;
const columns = canvas.width / fontSize;

const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix(){
ctx.fillStyle = "rgba(0,0,0,0.05)";
ctx.fillRect(0,0,canvas.width, canvas.height);

ctx.fillStyle = "#00ff9c";
ctx.font = fontSize + "px monospace";

for(let i=0;i<drops.length;i++){
let text = lettersArray[Math.floor(Math.random()*lettersArray.length)];
ctx.fillText(text, i*fontSize, drops[i]*fontSize);

if(drops[i]*fontSize > canvas.height && Math.random() > 0.975){
drops[i] = 0;
}

drops[i]++;
}
}

setInterval(drawMatrix, 35);

window.addEventListener("resize", ()=>{
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
});


// ===== TERMINAL TYPING EFFECT =====
const terminalLines = document.querySelectorAll(".terminal p");
terminalLines.forEach((line)=>{
const text = line.textContent;
line.textContent = "";
let i = 0;
function type(){
if(i<text.length){
line.textContent += text.charAt(i);
i++;
setTimeout(type, Math.random()*80 + 20);
}
}
type();
}); 
