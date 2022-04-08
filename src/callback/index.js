//= Callback : función que recibe una función como parámetro.
    //+ Ejemplo 1
    function sumar(a, b) {
    return a + b;
    }

    //? callback: puede ser cualquier otro nombre
    function calcular(a, b, callback) {    
    return callback(a, b);
    }

    console.log(calcular(2,2,sumar));

    //+ Ejemplo 2
    function date(callback){
        console.log('uno: ',new Date());
        setTimeout(function(){
            let date = new Date();
            callback(date);
        },3000)
    }

    function printDate(date){
        console.log('dos: ',date);
    }

    date(printDate);