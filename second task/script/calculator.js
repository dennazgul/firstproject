/*function ts() {
    var myel = document.getElementById('itog')
    var ks = document.getElementById('znak').value
    var b1 = Number(document.getElementById('b1').value)
    var b2 = Number(document.getElementById('b2').value)
    if (ks == 1) {
        ks = b1 * b2
    } else if (ks == 2) {
        ks = b1 / b2
    } else if (ks == 3) {
        ks = b1 + b2
    } else {
        ks = b1 - b2
    }
    myel.innerText = ks;
}*/
function formatNumber(myNumber) {
    if (myNumber == 0) {
        alert('В делителе ноль. Недопустимое значение');
    }
    return myNumber; //тут ты всегда вернешь значение, даже, если оно не правильное...
}

function format(mygNumber) {
    if (mygNumber == 'NaN') { //использовать isNaN()
        alert('введено недопустимое значение');
    }
    return mygNumber; //всегда будет возвращаться значение, даже если была ошибка
}


function ts() {
    var myel = document.getElementById('itog');
    var ks = document.getElementById('znak').value;
    var b1 = Number(document.getElementById('b1').value);
    var b2 = Number(document.getElementById('b2').value);
    if (ks == 1) {
        ks = b1 * b2;
    } else if (ks == 2) {
        ks = b1 / formatNumber(b2); // всегда есть вероятность появления 0 в знаменателе. Пересмотри логику и порядок вызова функции formatNumber
    } else if (ks == 3) {
        ks = b1 + b2;
    } else {
        ks = b1 - b2;
    }
    myel.innerText = format(ks); /* проверка должна быть на на момент вывода результата, а сразу при получении значения из поля ( строка 35, 36). 
                                    Вы должны понять, что пользователь ввел еще до того как начнете обрабатывать*/
}