var minhaPromise = function () {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', `https://api.coindesk.com/v1/bpi/currentprice/BRL.json`);
        xhr.send(null);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Erro na requisição');
                }
            }
        }
    });
}
function execPromiseBTC() {
    var resultado = minhaPromise();
    minhaPromise()
        .then((response) => {
            const value = response.bpi.BRL.rate;
            console.log(`Valor bitcoin.: $ ${value}`);
        })
        .catch((error) => {
            console.log(error);
        })
}
setInterval(execPromiseBTC, 10000);






