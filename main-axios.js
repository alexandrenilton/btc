axios.get('https://api.github.com/users/alexandrenilton')
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.warn(error);
    })