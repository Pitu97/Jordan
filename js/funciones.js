function verDetalle(indice) {
	window.location.href = `detalle.html?id=${indice}`;
}

let j = 0;
let tarjetas = document.getElementsByClassName('col');
for (const producto of productos) {
	tarjetas[j].innerHTML = `<div class="card h-100">
	<img src="${producto.img}" class="card-img-top" alt="...">
	<div class="card-body">
	<h5 class="card-title">${producto.nombre}</h5>
	<h5 class="card-title">$${producto.precio}</h5>
	<a href="#" id="btn${producto.id}" class="btn btn-danger">Ver Mas</a>`;
	$(`#btn${producto.id}`).click(() => {verDetalle(producto.id)})
	.mouseover(()=>{$(`#btn${producto.id}`).animate({width:'117px',
													height:'39px'},
													"fast");
					}
			   )
	.mouseout(()=>{$(`#btn${producto.id}`).animate({width:'115px',
													height:'37px'},
													"fast");
					}
			   );
	j++;
}




/*function agregarProductos() {
	let nombre = prompt("Ingrese el nombre del producto: ");
	let precio = prompt("Ingrese el precio del articulo: ");
	productos.push(new Producto(nombre, precio));
	for(const producto of productos) {
		console.log(producto.nombre);
		console.log(producto.precio);
		console.log(producto.disponible);
	}
}*/



function venderProducto(producto) {
	producto.sIva();
	let cuotas = parseFloat(prompt("Ingrese el numero de cuotas (3,6,9,12)"));
	let resultado = calculoCuotas(producto.precio,cuotas);
	let res = confirm("El precio total es: $"+ producto.precio +"\n\nEn "+ cuotas +" cuotas de $"+ resultado +"\n\nDesea confirmar la compra?");
	if (res) {
		producto.vender();
	}
	console.log(producto.id);
	console.log(producto.nombre);
	console.log(producto.precio);
	console.log(producto.disponible);
}



						  

//agregarCarrito(productos[0].nombre,productos[0].precio);
//venderProducto(productos[1]);
//agregarProductos();



