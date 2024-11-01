$(document).ready(function() {
	const APIURL = 'https://jsonplaceholder.typicode.com/users'
	$("#saludo").append(`<h4>Ingresar Usuario</h4>
						<input type="number" class="persona" placeholder="Ingrese su id" style="width:120px; font-size:10px; display:none">
						<button id="ingreso">Ingresar</button>`);
	$("#ingreso").click(() => {
		$("#saludo input").toggle(300);
		$(".persona").change(function (e) {
			if (e.target.value <= 10 && e.target.value > 0) {
				$.get(APIURL, function(respuesta, estado) {
				if(estado === "success") {
					let usuarios = respuesta;
					for (const datos of usuarios) {
						if(e.target.value == datos.id) {
							$("#saludo h6, #saludo p, #saludo h4").remove();
							$("#saludo").prepend(`<h6>Bienvenido ${datos.username}!</h6>
											<p style="color:red; font-size:11px">Ingresar otro usuario</p>`);
						}
					}
				}
			});
		}
		else {
			$("#saludo h6, #saludo p, #saludo h4").remove();
			$("#saludo").prepend(`<h4>Usuario Inexistente</h4>`)
		}});
	});
});



function verDetalle(indice) {
	window.location.href = `detalle.html?id=${indice}`;
}

let i = 0;
let tarjetas = document.getElementsByClassName('col');
for (const producto of productos) {
	tarjetas[i].innerHTML = `<div class="card h-100">
	<img src="${producto.img}" class="card-img-top" alt="...">
	<div class="card-body">
	<h5 class="card-title">${producto.nombre}</h5>
	<h5 class="card-title">$${producto.precio}</h5>
	<a href="#" id="btn${producto.id}" class="btn btn-danger">Ver Mas</a>
	<a href="#" id= "carr${producto.id}" class="carrito-add"><img src="imagenes/svg/carrito-add.png"</a></div></div>`;
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
	$(`#carr${producto.id}`).click(() => {agregarCarrito(producto.nombre,producto.precio)});
	i++;
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



