function petBalta() {
    document.getElementById("status").innerText = "🐶 Balta mueve la cola felizmente.";
}

function feedBalta() {
    document.getElementById("status").innerText = "🍖 Balta disfruta su comida. ¡Ñam!";
}

function playWithBalta() {
    document.getElementById("status").innerText = "🎾 Balta juega emocionado con la pelota.";
}

function giveWater() {
    document.getElementById("status").innerText = "💦 Balta bebe agua y se siente refrescado.";
}

function putToSleep() {
    document.getElementById("status").innerText = "😴 Balta se acurruca y se duerme plácidamente.";
}

function activateVRMode() {
    let img = document.querySelector(".balta-image");
    img.classList.add("vr-mode");
    document.getElementById("status").innerText = "🕶️ Balta ha entrado en modo realidad virtual...";
    setTimeout(() => {
        img.classList.remove("vr-mode");
        document.getElementById("status").innerText = "Balta ha vuelto a la normalidad.";
    }, 4000);
}

function activateArchitectMode() {
    let img = document.querySelector(".balta-image");
    img.src = "balta_arquitecto.png"; // Nueva imagen
    img.classList.add("architect-mode");
    document.getElementById("status").innerText = "🏗️ Balta está diseñando una nueva ciudad futurista.";
    setTimeout(() => {
        img.src = "pug_black.png"; // Volver a la normalidad
        img.classList.remove("architect-mode");
        document.getElementById("status").innerText = "Balta ha terminado su proyecto de arquitectura.";
    }, 5000);
}
