/*function ts() {
    var myel = document.getElementById('itog')
    var ks = document.getElementById('znak').value;
    var b1 = document.getElementById('b1').value
    var b2 = document.getElementById('b2').value
    if (ks == 1) {
        ks = b1 * b2;
    } else if (ks == 2) {
        ks = b1 / b2;
    } else if (ks == 3) {
        ks = b1 + b2
    } else {
        ks = b1 - b2;
    }
    myel.innerText = ks;
}*/
function formatNumber(myNumber) {
    if (myNumber == 0) {
        alert('В делителе ноль. Недопустимое значение');
    }
    return myNumber;
}

function ts() {
    var myel = document.getElementById('itog')
    var ks = document.getElementById('znak').value;
    var b1 = document.getElementById('b1').value
    var b2 = document.getElementById('b2').value
    if (ks == 1) {
        ks = b1 * b2;
    } else if (ks == 2) {
        ks = b1 / formatNumber(b2);
    } else if (ks == 3) {
        ks = b1 + b2
    } else {
        ks = b1 - b2;
    }
    myel.innerText = ks;
}