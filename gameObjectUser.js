let shots = [];
let overheated = false;

document.getElementById("shootButton").addEventListener("click", shoot);

function shoot() {
    if (overheated) return;

    let now = Date.now();

    shots = shots.filter(time => now - time < 5000);

    shots.push(now);

    document.getElementById("shots").innerText =
        "Shots: " + shots.length + " / 10";

    if (shots.length >= 10) {
        overheat();
    }
}

function overheat() {
    overheated = true;

    document.getElementById("shootButton").disabled = true;
    document.getElementById("status").innerText = "OVERHEATED!";

    setTimeout(() => {
        overheated = false;
        shots = [];

        document.getElementById("shootButton").disabled = false;
        document.getElementById("status").innerText = "Weapon Ready";
        document.getElementById("shots").innerText = "Shots: 0 / 10";

    }, 5000);
}