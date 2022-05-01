const btnJugar = document.querySelector("btn_jugar");

const inicio_conte = document.querySelector(".inicio_conte");

const selectPokemon = document.querySelector(".seleccion");

const template = document.querySelector(".template");

const barraValor = document.querySelector(".barraSelect")

const fragment = document.createDocumentFragment();

const secc_batalla = document.querySelector(".seccion_batalla");

const imgPokemonUNo = document.querySelector(".pokemonuno img");




let valorSeleccionado = "";

function iniarBatalla(){
    inicio_conte.classList.replace("d-flex","d-none");

    selectPokemon.style.display = "block"
    if (selectPokemon.style.display = "block" == "block"){
        console.log("se armo")
        
    };

    
};

const contendoBata = document.querySelector(".Contenido_batalla");
function obtenerValorSelecc(){
   valorSeleccionado = barraValor.value;
   selectPokemon.style.display = "none"
   contendoBata.classList.replace("d-none","d-flex");
   if(valorSeleccionado == "Ivy"){
       imgPokemonUNo.src = "/img/8f8f7f4e.gif";
   }else if(valorSeleccionado == "Ivy"){
    imgPokemonUNo.src = "/img/d83e9951f28fc811c1166b16dcaec930_w200.gif"
   }
};

class pokemon{
    constructor(name, vida, ataque){
        this.vida = vida
        this.ataque = ataque
        this.name = name
    }
};

let vidaUno = document.querySelector(".vidauno");
vidaUno.textContent = 100;
let vidaDos = document.querySelector(".vidados");
vidaDos.textContent = 100;

const esquartel = new pokemon("squartle", 100, 15);

const ivy = new pokemon("pikachu", 100, 15);



function ataqueuno(){
   ivy.vida = ivy.vida - esquartel.ataque;
   vidaDos.textContent = ivy.vida
    
};

function ataqueDos(callback){
    esquartel.vida = esquartel.vida - ivy.ataque;
    vidaUno.textContent = esquartel.vida;
    cambiarFndo()
};


function cambiarFndo(callback){
    imgPokemonUNo.src = "/img/Pokemon-squirtle.gif"
    let timepo = setInterval(regrar, 2000)
    function regrar(){
        imgPokemonUNo.src = "/img/d83e9951f28fc811c1166b16dcaec930_w200.gif";
        clearInterval(timepo)
    };
    
};






// let vidados = document.querySelector(".vidados");
    // let vidauno = document.querySelector(".vidauno");
    // let botuno = document.querySelector(".botonuno");
    // let botdos = document.querySelector(".botondos");
    // let user_uno = document.querySelector(".user_uno")

    // let iniciar = document.querySelector(".iniciar")

    // let container = document.querySelector(".container")


    // class pokemon{
    //     constructor(name, vida, ataque){
    //         this.vida = vida
    //         this.ataque = ataque
    //         this.name = name
    //     }
    // };

    // const pikachu = new pokemon("squartle", 100, 15);
    // const ivy = new pokemon("pikachu", 100, 15);

    // user_uno.textContent = pikachu.name






    // function ataque(){
    //     ivy.vida = pikachu.ataque - ivy.vida  
    //     return ivy.vida
    // };

    // botuno.addEventListener("click", function(){
    //     ivy.vida = ivy.vida - pikachu.ataque
    //     vidados.textContent = ivy.vida
    //     return ivy.vida
    // });


    // vidados.textContent = ivy.vida







    // let resutado = 10

    // while (resutado >= 1) {
        // let inicia = prompt("el turno del pokemon")
    // if(inicia == 1){
        // ivy.vida =  ataque(ivy.vida, pikachu.ataque)
        // vidados.textContent = ivy.vida
        // resutado-- 
    // }else if  (inicia == 2){
        // pikachu.vida = ataque(pikachu.vida, ivy.ataque)
        // vidauno.textContent = pikachu.vida
        // resutado--
    // };
    // };

