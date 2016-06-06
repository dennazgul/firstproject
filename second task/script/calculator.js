function ts() {
    var myel = document.getElementById('itog');
    var ks = document.getElementById('znak').value;
    var b1 = Number(document.getElementById('b1').value);
    var b2 = Number(document.getElementById('b2').value);
    var bnwv2 = document.getElementById('bnw2');
    var ks1;
    /*if (isNaN(b1) || isNaN(b2)) {
        myel.innerText = '';
    } else { временно закомментил т.к. хотел чтобы этот кусок выполнялся отдельной функцией через onchange*/
    if (ks == 1) {
        ks1 = b1 * b2;
    } else if (ks == 2) {
        if (b2 !== 0) {
            ks1 = b1 / b2
        } else {
            bnwv2.innerText = ' знаминатель не может быть равен нулю 0';
        }
    } else if (ks == 3) {
        ks1 = b1 + b2
    } else {
        ks1 = b1 - b2;
    }



    myel.innerText = ks1;
}


function ULTI2() {
    var bnwv2 = document.getElementById('bnw2');
    var myel = document.getElementById('itog');
    var ks = document.getElementById('znak').value;
    var b2 = document.getElementById('b2')
    if (ks == 2) {
        if (PNB() < 229) {
            bnwv2.innerText = ' вводите буквы';
            b2.style.borderColor = 'red';
        } else if (PND2() < 229) {
            bnwv2.innerText = ' пустая ячейка';
            b2.style.borderColor = 'red';
        } else if (PNN() < 229) {
            bnwv2.innerText = ' делить на ноль нельзя';
            b2.style.borderColor = 'red';
            myel.innerText = ''
        } else {
            bnwv2.innerText = '';
            b2.style.borderColor = 'black';
            b2.style.borderWidth = '1px';
        }

    } else {
        if (PNB() < 229) {
            bnwv2.innerText = ' вводите буквы';
            b2.style.borderColor = 'red';
        } else if (PND2() < 229) {
            bnwv2.innerText = ' пустая ячейка';
            b2.style.borderColor = 'red';
        } else {

            bnwv2.innerText = '';
            b2.style.borderColor = 'black';
            b2.style.borderWidth = '1px';
        }
    }
}

function PND2() {
    var b2 = document.getElementById('b2').value;
    var qaz
    if (b2.length == 0) {
        qaz = 228;
    } else {
        qaz = 229;
    }
    return qaz

}

function PNB() {
    var b2 = Number(document.getElementById('b2').value);
    var qaz
    if (isNaN(b2)) {
        qaz = 228;
    } else {
        qaz = 229;
    }
    return qaz
}

function PNN() {
    var b2 = Number(document.getElementById('b2').value);
    var ks = document.getElementById('znak').value;
    var qaz
    if (ks == 2) {
        if (b2 == 0) {
            qaz = 228;
        } else {
            qaz = 229;
        }
    }
    return qaz
}


function ULTI1() {
    var bnwv1 = document.getElementById('bnw1');
    var b1 = document.getElementById('b1')
    if (PNB1() < 229) {
        bnwv1.innerText = ' вводите буквы';
        b1.style.borderColor = 'red';
    } else if (PND1() < 229) {
        bnwv1.innerText = ' пустая ячейка';
        b1.style.borderColor = 'red';

    } else {
        bnwv1.innerText = ''
        b1.style.borderColor = 'black';
        b1.style.borderWidth = '1px';
    }
}

function PND1() {
    var b1 = document.getElementById('b1').value;
    var qaz
    if (b1.length == 0) {
        qaz = 228;
    } else {
        qaz = 229;
    }
    return qaz

}

function PNB1() {
    var b1 = Number(document.getElementById('b1').value);
    var qaz
    if (isNaN(b1)) {
        qaz = 228;
    } else {
        qaz = 229;
    }
    return qaz
}