function ts() {
    var isvalid = true;
    var isvalid2 = true;
    var el1 = document.getElementById('b1');
    //проверяем валидность поля один. Передаем в функцию проверки элемент один
    isvalid = ULTI(el1);
    var el2 = document.getElementById('b2');
    isvalid2 = ULTI(el2);
    if (isvalid == false) {
        return;
    }
    if (isvalid2 == false) {
        return;
    }
    var myel = document.getElementById('itog');
    var ks = document.getElementById('znak').value;
    var b1 = Number(el1.value);
    var b2 = Number(el2.value);
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
            return;
        }
    } else if (ks == 3) {
        ks1 = b1 + b2
    } else {
        ks1 = b1 - b2;
    }



    myel.innerText = ks1;
}

function validate() {
    var isvalid = true;
    var isvalid2 = true;
    var el1 = document.getElementById('b1');
    isvalid = ULTI(el1);
    var el2 = document.getElementById('b2');
    isvalid2 = ULTI(el2);
}

function ULTI(el) {
    //получаем элемент span привязанный к эл-ту инпута. к id инпута прибавляем -s и получаем id соответствующего спана (выбрано по конвенции)
    var bnwv2 = document.getElementById(el.id + '-s');
    var newTest = document.getElementById('b2-s');
    var myel = document.getElementById('itog');
    var ks = document.getElementById('znak').value;
    var isvalid = false;
    var errorMessage = '';
    var Bukv = PNB(el);
    var Del = PND(el);
    var Nol = PNN();
    if (Bukv) {
        errorMessage = ' вводите буквы';
    } else
    if (Del) {
        errorMessage = ' пустая ячейка';
    } else if (Nol && ks == 2 && el.id == 'b2') {
        errorMessage = ' делить на ноль нельзя';
    } else {
        bnwv2.innerText = '';
        el.style.borderColor = 'black';
        el.style.borderWidth = '1px';
        isvalid = true;
    }
    if (!isvalid) {

        bnwv2.innerText = errorMessage;
        el.style.borderColor = 'red';
        myel.innerText = '';
    }


    return isvalid;


}

function PND(el) {
    var b = el.value;
    var qaz;
    if (b.length == 0) {
        qaz = true;
    } else {
        qaz = false;
    }
    return qaz

}

function PNB(el) {
    var b = Number(el.value);
    var qaz;
    if (isNaN(b)) {
        qaz = true;
    } else {
        qaz = false;
    }
    return qaz
}

function PNN() {
    var b2 = Number(document.getElementById('b2').value);
    var qaz;
    if (b2 == 0) {
        qaz = true;
    } else {
        qaz = false;
    }
    return qaz
}