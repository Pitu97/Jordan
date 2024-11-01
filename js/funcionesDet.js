function obtenerParametro(nombre) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(nombre);
}

const predeterminado = 0;

let i = obtenerParametro("id");
if (i === null) {
    i = predeterminado;
}

i = Number(i);

for (const producto of productos) {
    if (i == producto.id) {
        let detalle = document.getElementById('det');
        detalle.innerHTML= `<img src="${producto.img}" class="card-img-top" alt="...">
        <div>
        <h2>${producto.nombre}</h2>
        <h2>$${producto.precio}</h2>
        <a href="#" id="btn${producto.id}" class="btn btn-danger">Agregar al Carrito</a>
        </div>`
    } 
}



