(d => {

// Variables
let colRed = d.getElementById('red');
let colGreen = d.getElementById('green');
let colBlue = d.getElementById('blue');
let picker = d.getElementById('picker');

let currentRed = colRed.value;
let currentGreen = colGreen.value;
let currentBlue = colBlue.value;

picker.style.backgroundColor = `rgb(${currentRed}, ${currentGreen}, ${currentBlue})`;

// function
let colFunction = () => {
    picker.style.backgroundColor = `rgb(${currentRed}, ${currentGreen}, ${currentBlue})`;
}

colRed.addEventListener('input', (event) => {
    currentRed = event.target.value;
    colFunction();
})

colGreen.addEventListener('input', (event) => {
    currentGreen = event.target.value;
    colFunction();
})

colBlue.addEventListener('input', (event) => {
    currentBlue = event.target.value;
    colFunction();
})

})(document);