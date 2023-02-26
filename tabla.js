
function tablas(numero1, numero2){
    for(let i = 1; i <= numero1; i++){
        console.log(`Tabla del ${i} : \n`);
        for(let j= 1; j <= numero2; j++){
            let resultado = i * j; 
            console.log(`Tabla del ${i} x ${j} : ${resultado}`);
        }
    }
}

tablas(10, 10);



