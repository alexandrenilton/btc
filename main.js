var minhaPromise = function () {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/users/alexandrenilton');
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

var resultado = minhaPromise();
// problably will be "pending"
// console.log(resultado);
minhaPromise()
  .then( (response) => {
    console.log('resolvida..');
    console.log(response);
  })
  .catch( (error) => {
    console.log(error);
  })

