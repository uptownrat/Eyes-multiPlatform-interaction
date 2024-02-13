var eyeCounter = 0;

// helper for makeEye, didn't know if i was going to reuse this code block anywhere so it's its own function
function idMaker() {
    eyeCounter++;
    return eyeCounter;
}

// rng to make things short
function rand(min, max) {
    return ((Math.random() * max) + min);
}

function makeEye() {
    const scene = document.querySelector("a-scene");
    const eye = document.createElement("a-entity");
    eye.setAttribute("id", eyeCounter);
    eye.setAttribute("position", String(rand(-14, 28) + " " + rand(0, 10) + " " + rand(-14, 28))); //randomize position
    eye.setAttribute("rotation", String(rand(0, 180) + " " + rand(0, 180) + " " + rand(0, 180))); //
    eye.setAttribute("scale", String(rand(0.5, 2) + " " + rand(0.5, 2) + " " + rand(0.5, 2))); //randomize w/n 0.5-1.5 or 2
    eye.setAttribute("gltf-model", "#eye_model");
    scene.appendChild(eye);
}

document.querySelector("#red_button").querySelector(".button").addEventListener("click", makeEye());
