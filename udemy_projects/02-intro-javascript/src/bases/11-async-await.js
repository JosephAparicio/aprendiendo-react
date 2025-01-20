

const getImagen = async() => {

    try {
        const api_key = 'bgMGq43SPbfHBBr4pwHo4vJkEUkuSubN';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`);
        const { data } = await resp.json();
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.appendChild(img);
    } catch (error) {
        console.error(error);
    }

    
}

getImagen();



// peticion
//     .then((resp) => resp.json())
//     .then(({data}) => {
//         const {url} = data.images.original;
//         const img = document.createElement('img');
//         img.src = url;
//         document.body.append(img);
//     })
// .catch( console.warn);