const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true) ?
        setTimeout(() => { resolve('Hola Mundo')}, 3000)
        : reject(new Error('Algo salio mal'));
    });
}

const doSomething = async () => {
    const holaMundo = await doSomethingAsync();
    console.log(holaMundo);
}

console.log('Inicio');
doSomething();
console.log('Fin');

const anotherFunction = async () => {
    try {
        const something = await doSomethingAsync();
        console.log(something);
    } catch (error) {
        console.error(error);
    }
}

console.log('Inicio 1');
anotherFunction();
console.log('Fin 1');