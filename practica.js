// practica DOM

const lista = document.querySelector("#lista");

const paises = ["peru", "mexico", "usa"]

//crear un fragmento para evitar el reflow
const fragmento = document.createDocumentFragment()

paises.forEach(pais => {
//crear un elemento para empujarlo a la lista
const li = document.createElement("li")
//agregar o modificar el elemeto
li.textContent = pais;
//para empujarlo al DOM se utiliza appenchild. para empujarle
//al elemento padre un hijo. Lista es el padre 
//no se pueden empujar los appenchild del mismo elemento porque se borran

//le empujamos un hijo  li al fragmento  
fragmento.appendChild(li);
})

// le empujamos el fragmento li  a la lista
lista.appendChild(fragmento)



