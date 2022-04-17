
const algoVaAPasar = () => {
    return new Promise((resolve, reject) => {
        if(true){ // si es true, se ejecuta el resolve
            resolve('Todo salio bien');
        }else{
            reject('Algo salio mal');
        }
    });
}

const algoVaAPasar3 = () => {
    return new Promise((resolve, reject) => {
        true ? resolve('Todo salio bien') : reject('Algo salio mal');
        
    });
}

/*algoVaAPasar()
    .then(response => console.log(response))
    .catch(error => console.log(error));*/

const algoVaAPasar2 = () => {
    return new Promise((resolve, reject) => {
        if(true){
            setTimeout(() => {
                resolve('Todo salio bien dos');
            },3000);
        }else{
            // permite obtener la traza de error
            const error = new Error('Algo salio mal dos');
            reject(error);
        }
    });
}

/*algoVaAPasar2()
    .then(response => console.log(response))
    .catch(error => console.log(error));*/

// Ejecutar varias promesas a la vez
Promise.all([algoVaAPasar(), algoVaAPasar2(), algoVaAPasar3()])
    .then(response => {
        console.log('Arreglo de resultados =>',response)
    })
    .catch(error => {
        console.log(error)
    });