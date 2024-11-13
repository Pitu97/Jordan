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
        <input type="number" id="cantidad" min="1" max="10" placeholder="Cantidad" style="width:150px; font-size:15px; margin-left:15px;">
        <a href="#" id="btn${producto.id}" class="btn btn-danger" style="display: flex; width: 200px">
        <h5>Agregar al Carrito</h5>
        <img style="height: 35px; margin-top: 9px; margin-left: 2px;" src="imagenes/svg/carrito-add.png">
        </a>
        <h5 id="exito" style="margin-top:50px; margin-left:15px; display:none;">Agregado con exito!</h5>
        <h5 id="fail" style="margin-top:15px; margin-left:15px; display:none;">Ingrese una cantidad valida</h5>
        <a href="#" id="home" class="btn btn-danger" style="display: none; width: 200px">
        <h5>Seguir comprando</h5>
        </div>`
        $(`#btn${producto.id}`).click(() => {
            let inputEl = document.getElementById('cantidad');
            let cantidad = Number(inputEl.value);
            if(cantidad >= 1) {
                agregarCarrito(producto.nombre,producto.precio,cantidad);
                $("#exito").css("display","block");
                $("#fail").css("display","none");
                $(`#btn${producto.id}`).css("display","none");
                $("#home").css("display","flex");
            }
            else {
                $("#fail").css("display","block");
            }
        });
        $("#home").click(() => {window.location.href = "index.html"});
    } 
}



