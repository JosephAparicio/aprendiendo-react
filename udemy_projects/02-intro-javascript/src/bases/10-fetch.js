
const api_key = 'bgMGq43SPbfHBBr4pwHo4vJkEUkuSubN';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`);

peticion
    .then((resp) => resp.json())
    .then(({data}) => {
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    })
.catch( console.warn);