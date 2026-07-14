let display = document.getElementById("display");

function addValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {

    try {

        display.value = eval(display.value);

        updateProgrammerValues();

    }

    catch {

        display.value = "Error";

    }

}
function updateProgrammerValues() {

    let number = parseInt(display.value);

    if (isNaN(number)) {
        return;
    }

    document.getElementById("decValue").innerText = number;

    document.getElementById("binValue").innerText = number.toString(2);

    document.getElementById("hexValue").innerText = number.toString(16).toUpperCase();

}
let themeBtn = document.getElementById("themeBtn");

themeBtn.onclick = function () {
    document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
    themeBtn.innerHTML = "☀️";
}
else{
    themeBtn.innerHTML = "🌙";
}
}
let standardBtn = document.getElementById("standardBtn");
let programmerBtn = document.getElementById("programmerBtn");

let panel = document.getElementById("programmerPanel");

standardBtn.onclick = function(){

    panel.style.display = "none";

}

programmerBtn.onclick = function(){

    panel.style.display = "block";

}
function backspace() {
    display.value = display.value.slice(0, -1);
}
document.addEventListener("keydown", function(event){

    let key = event.key;

    if(!isNaN(key) || "+-*/.".includes(key)){
        addValue(key);
    }

    else if(key === "Enter"){
        calculate();
    }

    else if(key === "Backspace"){
        backspace();
    }

    else if(key === "Escape"){
        clearDisplay();
    }

});
function percentage() {
    display.value = display.value / 100;
    updateProgrammerValues();
}