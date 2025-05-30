// Elementos de la interfaz
const roloImage = document.querySelector(".rolo-image");
const statusText = document.getElementById("status");

// Estado de Rolo
let stats = {
    hungry: 2,
    thirsty: 2,
    playful: 3,
    sleepy: 2,
    happy: 5
};

// Función para actualizar el estado visual de Rolo
function updateRoloState() {
    if (stats.hungry >= 4) {
        roloImage.classList.add("hungry");
        statusText.innerText = "Rolo tiene mucha hambre... ¡Necesita comida!";
    } else {
        roloImage.classList.remove("hungry");
    }

    if (stats.playful >= 4) {
        roloImage.classList.add("playing");
        statusText.innerText = "¡Rolo está lleno de energía!";
        setTimeout(() => roloImage.classList.remove("playing"), 1000);
    }

    if (stats.happy >= 5) {
        roloImage.classList.add("happy");
    } else {
        roloImage.classList.remove("happy");
    }

    if (stats.sleepy >= 4) {
        roloImage.classList.add("sleeping");
        statusText.innerText = "Rolo está muy cansado... Zzz...";
    } else {
        roloImage.classList.remove("sleeping");
    }
}

// Función para acariciar a Rolo
function petRolo() {
    stats.happy = Math.min(stats.happy + 1, 5);
    statusText.innerText = "Rolo mueve la cola felizmente. ¡Le encantan las caricias!";
    updateRoloState();
}

// Función para alimentar a Rolo
function feedRolo() {
    stats.hungry = Math.max(stats.hungry - 2, 1);
    statusText.innerText = "¡Ñam ñam! Rolo está disfrutando su comida.";
    updateRoloState();
}

// Función para jugar con Rolo
function playWithRolo() {
    stats.playful = Math.max(stats.playful - 2, 1);
    stats.hungry++;
    stats.thirsty++;
    roloImage.classList.add("playing");
    statusText.innerText = "¡Rolo salta de emoción y juega contigo!";
    setTimeout(() => roloImage.classList.remove("playing"), 1000);
    updateRoloState();
}

// Función para darle agua
function giveWater() {
    stats.thirsty = Math.max(stats.thirsty - 2, 1);
    statusText.innerText = "💦 Glup glup... Rolo bebe agua y se siente mejor.";
    updateRoloState();
}

// Función para dormir
function putToSleep() {
    stats.sleepy = Math.max(stats.sleepy - 3, 1);
    statusText.innerText = "😴 Zzz... Rolo se duerme plácidamente.";
    roloImage.classList.add("sleeping");
    setTimeout(() => roloImage.classList.remove("sleeping"), 3000);
    updateRoloState();
}

// Función para activar el modo realidad virtual
function activateVRMode() {
    roloImage.classList.add("vr-mode");
    statusText.innerText = "🔵 Rolo ha entrado en modo realidad virtual... ¡Bienvenido al futuro!";
    setTimeout(() => roloImage.classList.remove("vr-mode"), 3000);
}