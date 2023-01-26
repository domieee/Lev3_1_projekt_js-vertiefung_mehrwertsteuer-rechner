const whip = document.querySelector('#whip');
const peel = document.querySelector('#peel');
const nineteen = document.querySelector('#nineteen');
const seven = document.querySelector('#seven');
const netAmount = document.querySelector('#netAmount');
const vatAmount = document.querySelector('#vatAmount');
const grossAmount = document.querySelector('#grossAmount');

function calcAmounts() {

    let percentage;

    if (nineteen.checked) {
        percentage = 19;
    } else if (seven.checked) {
        percentage = 7;
    } else {
        alert('Please select a percentage')
        return
    }

    vatAmount.innerHTML = ((netAmount.value * percentage) / 100).toFixed(2);

    if (whip.checked) {
        grossAmount.innerHTML = (parseFloat(vatAmount.innerHTML) + parseFloat(netAmount.value)).toFixed(2);
        return
    } else if (peel.checked) {
        grossAmount.innerHTML = (parseFloat(netAmount.value) - parseFloat(vatAmount.innerHTML)).toFixed(2);
    } else {
        alert('Whip or peel?')
        return
    }
}

document.querySelector('#submit').addEventListener('click', calcAmounts);