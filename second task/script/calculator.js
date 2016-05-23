function ts() {
    var myel = document.getElementById('itog')
    var ks = document.getElementById('znak').value;
    var b1 = Number(document.getElementById('b1').value)
    var b2 = Number(document.getElementById('b2').value)
    var ks1
    if (isNaN(b1) || isNaN(b2)) {
        alert('Вы вводите буквы')
    } else {
        if (ks == 1) {
            ks1 = b1 * b2;
        } else if (ks == 2) {
            if (b2 !== 0) {
                ks1 = b1 / b2
            } else {
                alert('деление на ноль!')
            }
        } else if (ks == 3) {
            ks1 = b1 + b2
        } else {
            ks1 = b1 - b2;
        }
        myel.innerText = ks1;
    }
}