
function gray() {
    console.log(img.style);
    img.style.filter = "grayscale(30%)";
}

function blur() {
    console.log(img.style);
    img.style.filter = "blur(5px)";
}
function sepia() {
    console.log(img.style);
    img.style.filter = "sepia(1)";
}

function saturate() {
    console.log(img.style);
    img.style.filter = "saturate(3)";
}


function invert() {
    console.log(img.style);
    img.style.filter = "invert(.8)";
}

function opacity() {
    console.log(img.style);
    img.style.filter = "opacity(.5)";
}

function brightness() {
    console.log(img.style);
    img.style.filter = "brightness(.5)";
}

function contrast() {
    console.log(img.style);
    img.style.filter = "contrast(3)";
}

function shadow() {
    console.log(img.style);
    img.style.filter = "drop-shadow(8px 8px 10px black)";
}


function rotate() {
    console.log(img.style);
    img.style.filter = "hue-rotate(90deg)";
}


function multiple() {
    console.log(img.style);
    img.style.filter = "contrast(1.4) saturate(1.8) sepia(.6)";
}

function tint() {
    console.log(img.style);
    img.style.filter = "sepia(1) hue-rotate(200deg)";
}