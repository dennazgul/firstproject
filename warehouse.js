function formatNumber(myNumber) {
    if (myNumber <= 9) {
        myNumber = '0' + myNumber;
    }
    return myNumber;
}

function ts() {
    var myel = document.getElementById('myData')
    var dd = new Date();


    myel.innerText = formatNumber(dd.getDate()) + '.' + formatNumber(dd.getMonth() + 1) + '.' +
        dd.getFullYear() + ' ' + formatNumber(dd.getHours()) + ':' + formatNumber(dd.getMinutes());
}