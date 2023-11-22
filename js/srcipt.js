

// CREO L'ALGORITMO 

for(let i=1; i<=100; i++){
   
    // ESEGUO IL CALCOLO DEL RESTO PER I MULTIPLI SIA DI 3 CHE DI 5 OVVERO 15
    if(i%15 == 0){
        console.log("FizzBuzz")
    }

    // ESEGUO IL CALCOLO DEL RESTO PER I MULTIPLI DI 3
    else if(i%5 == 0){
        console.log("Buzz");
    }

    // ESEGUO IL CALCOLO DEL RESTO PER I MULTIPLI DI 5
    else if (i%3 == 0){
        console.log("Fizz");
    }

    else{
        console.log(i)
    }
    
}