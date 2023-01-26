let whip = document.querySelector('#whip');
let peel = document.querySelector('#peel');
let nineteen = document.querySelector('#nineteen');
let seven = document.querySelector('#seven');
let netAmount = document.querySelector('#netAmount');
let vatAmount = document.querySelector('#vatAmount');
let grossAmount = document.querySelector('#grossAmount');

function calcAmounts() {

    let percentage;

    if (nineteen.checked) {
        percentage = 19;
    } else if (seven.checked) {
        percentage = 7;
    }

    vatAmount.innerHTML = ((netAmount.value * percentage) / 100).toFixed(2);

    if (whip.checked) {
        grossAmount.innerHTML = (parseFloat(vatAmount.innerHTML) + parseFloat(netAmount.value)).toFixed(2);
    } else if (peel.checked) {
        grossAmount.innerHTML = (parseFloat(netAmount.value) - parseFloat(vatAmount.innerHTML)).toFixed(2);
    }
}

document.querySelector('#submit').addEventListener('click', calcAmounts);