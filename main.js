function SAS (V1){
    if (V1%2 == 0){
        console.log('el numero ingresado es par');
    } else{
        console.log('el numero es impar');
    }
}
//SAS(7);

function SES (V1, V2){
    if (V1>V2){
        console.log(`El numero mayor es ${V1}`);
    } else if(V1<V2){
        console.log(`el numero mayor es ${V2}`);
    } else{
        console.log(`ambos numeros son iguales`);
    }
        
    }
// SES(4, 1)

function SOS (V1){
    if (V1%5 == 0){
        console.log(`el numero ${V1} es multiplo de 5`);
    } else{
        console.log(`el numero ${V1} no es multiplo de 5`);
    }
}
//SOS(4)

function SIS(V1=0){
    let i=0;
    while (V1 >=i){
        console.log(`${i}`);
        i++;
    }
}
//SIS(7)

function palabra(V1, V2){
    let i=0;
    while(V2>i){
        console.log(`${V1}`)
        i++
    }
}
//palabra('papa', 6)

function arrayV(V1){
    for(let valores of V1) {
        console.log(valores)
    }
   
}
//let array= arrayV['ta','te','ti']

function arrayValores10(arreglo) {
    for(let i = 0; i < arreglo.length; i++) {
        if(arreglo[4] == arreglo[i]) {
            i++
        }
        console.log(arreglo[i]);
    }
}
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arrayValores10(numeros);

function arrayMul(arreglo, v1) {
    for(let i = 0; i < arreglo.length; i++) {
        console.log(arreglo[i] * v1);
    }
}

// arrayMul(numeros, 2);
