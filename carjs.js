const carrito = document.querySelector("#carrito");
const template = document.querySelector("template");
const fragment = document.createDocumentFragment();
const btnesBotones = document.querySelectorAll(".card .btn");

//almacenar productos en un objeto
const carritoObjetos = {};

//funcion para agregar al carrito y usar (e) para el target
//dataset para mostrar el valor del dataset. 
//el edentificador es despues del guion  data-fruta
const agregarAlCarrito = (e) => {
    console.log(e.target.dataset)

    //crear el objeto
    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1
    }

    if(carritoObjetos.hasOwnProperty(producto.titulo)){
        producto.cantidad = carritoObjetos[producto.titulo].cantidad + 1
    }

    carritoObjetos[producto.titulo] = producto;

    pintarCarrito(producto);

}
 
const pintarCarrito = (producto) => {

    //empezar de 0 el contenido

    carrito.textContent = ""
    //transformar el objeto en un array para reco con un foreach 
    Object.values(carritoObjetos).forEach(item => {
        const clone = template.content.firstElementChild.cloneNode(true);
        //clonamos seleccionamos el spam del template
        clone.querySelector(".lead").textContent = item.titulo
        //clonamos selecionamos el badge del template
        clone.querySelector(".badge").textContent = item.cantidad

        //para evitar el reflow fragment
        fragment.appendChild(clone)

    });

    //para pintar los fragentos en el Dom
    carrito.appendChild(fragment);
}

// funcion para recorrer los botones. retornara agregando el evento a cada botton
btnesBotones.forEach(btn => btn.addEventListener("click", agregarAlCarrito)) 