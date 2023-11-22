
// DEFINISCO LA LISTA IN UNA COSTANTE
const lista = document.querySelector("ul");

// CREO L'ALGORITMO 

for(let i=1; i<=100; i++){
   
    // ESEGUO IL CALCOLO DEL RESTO PER I MULTIPLI SIA DI 3 CHE DI 5
    if(i%15 == 0){
        // DICHIARO LA VARIABILE "LI" E AGGIUNGO IL CONTENUTO CHE DOVRà AVERE
        let li;
        li = `<li id=num${i}>FizzBuzz</li>`;

        // AGGIUNGO QUINDI "LI" DENTRO LA LISTA PRECEDENTEMENTE INDICATA NELLA COSTANTE
        lista.innerHTML += li;
        // console.log("FizzBuzz");
    }

    // ESEGUO IL CALCOLO DEL RESTO PER I MULTIPLI DI 3
    else if(i%5 == 0){
        // DICHIARO LA VARIABILE "LI" E AGGIUNGO IL CONTENUTO CHE DOVRà AVERE
        let li;
        li = `<li id=num${i}>Buzz</li>`;

         // AGGIUNGO QUINDI "LI" DENTRO LA LISTA PRECEDENTEMENTE INDICATA NELLA COSTANTE
        lista.innerHTML += li;
        // console.log("Buzz");
    }

    // ESEGUO IL CALCOLO DEL RESTO PER I MULTIPLI DI 5
    else if (i%3 == 0){
        // DICHIARO LA VARIABILE "LI" E AGGIUNGO IL CONTENUTO CHE DOVRà AVERE
        let li;
        li = `<li id=num${i}>Fizz</li>`;

         // AGGIUNGO QUINDI "LI" DENTRO LA LISTA PRECEDENTEMENTE INDICATA NELLA COSTANTE
        lista.innerHTML += li;
        // console.log("Fizz");
    }

    else{
        // DICHIARO LA VARIABILE "LI" E AGGIUNGO IL CONTENUTO CHE DOVRà AVERE
        let li;
        li = `<li id=num${i}>${i}</li>`;

         // AGGIUNGO QUINDI "LI" DENTRO LA LISTA PRECEDENTEMENTE INDICATA NELLA COSTANTE
        lista.innerHTML += li;
        // console.log(i)
    }
    
}