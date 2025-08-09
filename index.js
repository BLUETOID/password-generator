
const characters = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"
];
const numberChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const rectangle1 = document.getElementById("rect1");
const rectangle2 = document.getElementById("rect2");
const darkModeToggle = document.getElementById("darkModeToggle");

function password() {
    let pwd = "";
    for (let i = 0; i < 12; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        pwd += characters[randomIndex];
    }
    rectangle1.textContent = pwd;
    rectangle2.textContent = pwd;
}

function numberPassword() {
    let pwd = "";
    for (let i = 0; i < 12; i++) {
        const randomIndex = Math.floor(Math.random() * numberChars.length);
        pwd += numberChars[randomIndex];
    }
    rectangle1.textContent = pwd;
    rectangle2.textContent = pwd;
}

// Dark mode toggle
darkModeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if(document.body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = '☀️';
    } else {
        darkModeToggle.textContent = '🌙';
    }
});

// Set initial dark mode icon
if(document.body.classList.contains('dark-mode')) {
    darkModeToggle.textContent = '☀️';
} else {
    darkModeToggle.textContent = '🌙';
}
